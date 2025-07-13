"use client";
import { ArrowRight, Play } from "lucide-react";
import { MainButton } from "@/components/MainButton";
import { useState } from "react";
import SpotlightCarousel from "./member-spotlight-carousel";

type SpotlightItem = {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  profileLink: string;
};
const items: SpotlightItem[] = [
  {
    id: 1,
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "HEBI Robotics manufacturing",
    title: "Meet HEBI Robotics Inc.",
    description:
      "Watch HEBI Robotics Inc. & impact work on driving smart manufacturing through AI automation.",
    profileLink: "/member-profile/hebi-robotics-inc",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "HEBI Robotics manufacturing",
    title: "Meet HEBI 2 Robotics Inc.",
    description:
      "Watch HEBI Robotics Inc. & impact work on driving smart manufacturing through AI automation.",
    profileLink: "/member-profile/hebi-robotics-inc",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=300&width=400",
    imageAlt: "HEBI Robotics manufacturing",
    title: "Meet HEBI 3 Robotics Inc.",
    description:
      "Watch HEBI Robotics Inc. & impact work on driving smart manufacturing through AI automation.",
    profileLink: "/member-profile/hebi-robotics-inc",
  },
];
function MemberSpotlightSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const title = items[activeIndex].title;
  const description = items[activeIndex].description;
  const profileLink = items[activeIndex].profileLink;

  return (
    <section>
      <h1 className="mb-6">Member Spotlight</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <SpotlightCarousel
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <MainButton
            text="View Profile"
            icon={<ArrowRight className="w-4 h-4" />}
            className="small-main-button"
          ></MainButton>
        </div>
      </div>
    </section>
  );
}

export default MemberSpotlightSection;
