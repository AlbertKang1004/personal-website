interface ChipProps {
  icon?: string;
  text: string;
}

export default function Chip({ text, icon }: ChipProps) {
  return (
    <span className="flex justify-center items-center px-3 py-1 text-sm font-medium tracking-widest
     text-zinc-400 hover:text-zinc-300 bg-zinc-700/50 hover:bg-zinc-600/50 
     rounded-full whitespace-nowrap transition-colors duration-300 cursor-default">
      {icon ? (
        <span className="mr-2 h-4 w-4">
          <i
            className={`devicon-${icon}-plain colored text-s`}
            aria-hidden="true"
          ></i>
        </span>
      ) : null}
      {text}
    </span>
  );
}
