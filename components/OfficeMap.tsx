"use client";

import { useEffect, useRef } from "react";

const MAP_HEIGHT = "h-[280px] w-full sm:h-[360px] lg:h-[400px]";
const SEARCH_QUERY = "서울특별시 성동구 성수이로 66 서울숲드림타워";
const MARKER_LABEL = "주식회사 맥스킬";

interface OfficeMapProps {
  kakaoAppKey?: string;
}

export default function OfficeMap({ kakaoAppKey }: OfficeMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!kakaoAppKey || !mapRef.current) return;

    const container = mapRef.current;
    const scriptId = "kakao-map-sdk";

    const drawMap = () => {
      const kakao = window.kakao;
      if (!kakao?.maps) return;

      kakao.maps.load(() => {
        if (!container.isConnected) return;

        const map = new kakao.maps.Map(container, {
          center: new kakao.maps.LatLng(37.5445, 127.0555),
          level: 3,
        });

        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(SEARCH_QUERY, (result, status) => {
          if (status !== kakao.maps.services.Status.OK || !result[0]) return;

          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
          map.setCenter(coords);

          const marker = new kakao.maps.Marker({
            map,
            position: coords,
          });

          const infowindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:7px 12px;font-size:13px;color:#111;white-space:nowrap;">${MARKER_LABEL}</div>`,
          });
          infowindow.open(map, marker);
        });
      });
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (window.kakao?.maps) {
      drawMap();
      return;
    }

    if (existing) {
      existing.addEventListener("load", drawMap);
      return () => existing.removeEventListener("load", drawMap);
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoAppKey}&autoload=false&libraries=services`;
    script.onload = drawMap;
    document.head.appendChild(script);
  }, [kakaoAppKey]);

  if (!kakaoAppKey) {
    const googleSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SEARCH_QUERY)}&hl=ko&z=16&output=embed`;

    return (
      <iframe
        title="맥스킬 오시는 길"
        src={googleSrc}
        className={MAP_HEIGHT}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return <div ref={mapRef} className={MAP_HEIGHT} />;
}

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        Map: new (
          container: HTMLElement,
          options: { center: unknown; level: number },
        ) => { setCenter: (coords: unknown) => void };
        LatLng: new (lat: number | string, lng: number | string) => unknown;
        Marker: new (options: { map: unknown; position: unknown }) => unknown;
        InfoWindow: new (options: { content: string }) => {
          open: (map: unknown, marker: unknown) => void;
        };
        services: {
          Geocoder: new () => {
            addressSearch: (
              address: string,
              callback: (
                result: Array<{ x: string; y: string }>,
                status: string,
              ) => void,
            ) => void;
          };
          Status: { OK: string };
        };
      };
    };
  }
}
