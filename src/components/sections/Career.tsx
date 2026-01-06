import React from "react";
import { GraduationCap, LucideIcon, Shield } from "lucide-react";
import Timeline from "../ui/Timeline.js";

type Timeline = {
  title: string;
  date: string;
  icon?: LucideIcon;
  description: string;
  isLast?: boolean;
  startColor?:string;
  endColor?:string;
};

const TimelineData: Timeline[] = [
  {
    title: "University of Toronto",
    date: "Sep 2025 - Present",
    description: "Enrolled in Computer Science Specialist Program.",
    icon: GraduationCap,
  },
  {
    title: "Republic of Korea Army",
    date: "Nov 2023 - May 2025",
    description: "Developed VBA-based Aviation Mechanic Advancement System.\nServed as U.S. military interpreter and liaison during joint training.",
    icon: Shield,
  },
  {
    title: "University of Toronto",
    date: "Sep 2022 - Apr 2023",
    description: "Honours Bachelor of Science in Computer Science (General Program).\nDean's List for Academic Excellence. (GPA: 3.74/4.0)",
    icon: GraduationCap,
    isLast: true
  }
];

const getTimelineColors = (index: number, total: number) => {
  const startRGB = [52, 211, 153];
  const endRGB = [4, 120, 87];

  // Calculate the ratio (0 to 1)
  // We use total - 1 so the last item reaches the exact endRGB
  const ratio = total > 1 ? index / (total - 1) : 0;

  const interpolate = (start: number, end: number) => 
    Math.round(start + (end - start) * ratio);

  const r = interpolate(startRGB[0], endRGB[0]);
  const g = interpolate(startRGB[1], endRGB[1]);
  const b = interpolate(startRGB[2], endRGB[2]);

  return `rgb(${r}, ${g}, ${b})`;
};

export default function Career() {
  return (
    <div id="career" className="min-h-screen py-20 px-5 lg:px-20 bg-neutral-900">
      {TimelineData.map((timeline, index) => {
        const total = TimelineData.length;
        const isLast = index === total - 1;
        const startColor = getTimelineColors(index, total);
        const endColor = isLast ? "transparent" : getTimelineColors(index + 1, total);

        return (
          <Timeline
            key={index}
            title={timeline.title}
            date={timeline.date}
            icon={timeline.icon}
            description={timeline.description}
            isLast={isLast} 
            startColor={startColor} // Pass the calculated color
            endColor={endColor}     // Pass the calculated color
          />
        );
      })}
    </div>
  );
}
