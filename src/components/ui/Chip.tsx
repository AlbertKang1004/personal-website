interface ChipProps {
  icon?: string;
  text: string;
}

export default function Chip({ text, icon }: ChipProps) {
  return (
    <span className="flex justify-center items-center px-3 py-1 text-sm font-medium tracking-widest
     text-neutral-400 bg-white/5 border border-neutral-700 backdrop-blur-md
     hover:text-neutral-200 hover:border-neutral-500
     rounded-full whitespace-nowrap transition-colors duration-300 cursor-default">
      {icon ? (
        <span className="mr-2 h-4 w-4">
          <i
            className={`devicon-${icon}-plain colored text-sm`}
            aria-hidden="true"
          ></i>
        </span>
      ) : null}
      {text}
    </span>
  );
}
