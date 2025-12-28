interface ChipProps {
  icon?: string;
  text: string;
}

export default function Chip({ text, icon }: ChipProps) {
  return (
    <span
      className="px-3 py-1 text-sm font-medium tracking-widest text-zinc-400 bg-zinc-700/50 rounded-full whitespace-nowrap"
    >
      {icon ? (
        <span className="inline-block mr-2 h-4 w-4 align-middle">
          <i className={`devicon-${icon}-plain colored text-s`} aria-hidden="true"></i>
        </span>
      ) : null}
      {text}
    </span>
  );
}
