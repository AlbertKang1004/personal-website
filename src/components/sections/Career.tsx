import React from "react";
import Timeline from "../ui/Timeline.js";

type Timeline = {
  title: string;
  date: string;
  description: string;
};

const TimelineData: Timeline[] = [
  {
    title: "University of Toronto",
    date: "Sep 2025 - Present",
    description: "Enrolled in Computer Science Specialist Program.",
  },
];

export default function Career() {
  return (
    <div id="about-me" className="grid grid-cols-[70px_1fr] h-fit pt-20 px-5">
      {TimelineData.map((timeline) => (
        <Timeline
          key={timeline.date}
          title={timeline.title}
          date={timeline.date}
          description={timeline.description}
        />
      ))}
    </div>
  );
}
