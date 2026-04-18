"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcons from "@/assets/icons/css3.svg";
import ReactIocn from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

//Add tech used by web developer
const toolboxItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CssIcons },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "React", iconType: ReactIocn },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "GitHub", iconType: GithubIcon },
] as const;

const hobbies = [
  { title: "Photography", emoji: "📸" },
  { title: "Traveling", emoji: "🌍" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Music", emoji: "🎵" },
  { title: "Hiking", emoji: "🥾" },
  { title: "Fitness", emoji: "🏋️‍♂️" },
  { title: "Reading", emoji: "📚" },
] as const;

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about I am, what I do, and what inspires me."
        />
        <div className="mt-20 ">
          <Card className="h-[320px] ">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional digital experiences."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems items={toolboxItems} className="mt-6" />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div className="">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="">
                  <span className="">{hobby.title}</span>
                  <span className="">{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={smileMemoji} alt="Smile Memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
