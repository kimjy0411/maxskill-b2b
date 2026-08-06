import { redirect } from "next/navigation";
import { services } from "@/data/services";

interface ServiceRedirectPageProps {
  params: { serviceId: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ serviceId: service.id }));
}

export default function ServiceRedirectPage({
  params,
}: ServiceRedirectPageProps) {
  redirect(`/services#${params.serviceId}`);
}
