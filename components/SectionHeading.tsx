interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`page-subtitle ${light ? "text-white/70" : "text-brand-blue"}`}
      >
        {label}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-white"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 break-keep leading-7 ${light ? "text-white/70" : "text-gray-400"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
