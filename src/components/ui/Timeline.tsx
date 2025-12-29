interface TimelineProps {
  title: string;
  date: string;
  description: string;
}

export default function Timeline({ title, date, description }: TimelineProps) {
  return (
    <div className="h-min-100">
      <div className="grid grid-rows-[70px_1fr] items-start justify-items-center">
        <div className="z-10">
          <svg viewBox="0 0 110 110" className="w-full h-full block">
            <circle
              cx="55"
              cy="55"
              r="50"
              fill="None"
              stroke="white"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className="w-1 h-full bg-gray-200"></div>
      </div>

      <div className="grid grid-rows-[70px_1fr] pl-3">
        <div className="flex flex-col justify-center gap-3">
          <div className="text-xl font-desc font-bold leading-none">
            {title}
          </div>
          <div className="text-l font-desc font-normal leading-none text-gray-600">
            {date}
          </div>
        </div>
        <div>
          <p className="mt-2 text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
