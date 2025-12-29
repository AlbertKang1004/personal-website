import { LucideIcon } from "lucide-react";

interface TimelineProps {
  title: string;
  date: string;
  icon?: LucideIcon;
  description: string;
  startColor?: string;
  endColor?: string;
  isLast?: boolean;
}

export default function Timeline({
  title,
  date,
  description,
  icon: Icon,
  startColor = "#ffffff",
  endColor = "#ffffff",
  isLast = false,
}: TimelineProps) {
  return (
    <div className="min-h-50 grid grid-cols-[70px_1fr]">
      <div className="grid grid-rows-[70px_1fr] items-start justify-items-center">
        <div className="relative z-10 flex items-center justify-center">
          <svg viewBox="0 0 110 110" className="w-full h-full block">
            <circle
              cx="55"
              cy="55"
              r="50"
              fill="None"
              stroke={startColor}
              strokeWidth="10"
            />
          </svg>
          <div className="absolute">
            {Icon ? (
              <Icon
                className="w-8 h-8" // Use className for size
                style={{ color: startColor }} // Use style for the dynamic color
              />
            ) : null}
          </div>
        </div>
        <div
          className="w-1 h-full"
          style={{
            background: isLast
              ? `linear-gradient(to bottom, ${startColor}, transparent)`
              : `linear-gradient(to bottom, ${startColor}, ${endColor})`,
          }}
        ></div>
      </div>
      <div className="grid grid-rows-[70px_1fr] pl-3">
        <div className="flex flex-col justify-center gap-3">
          <div className="text-xl font-desc font-bold leading-none" style={{ color: startColor }}>
            {title}
          </div>
          <div className="text-l font-desc font-normal leading-none text-gray-600">
            {date}
          </div>
        </div>
        <div>
          <p className="mt-2 text-gray-400 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
