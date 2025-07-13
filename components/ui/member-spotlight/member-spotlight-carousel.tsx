"use client";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type SpotlightItem = {
  id: number;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  profileLink: string;
};

interface SpotlightCarouselProps {
  items: SpotlightItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export function SpotlightCarousel({
  items,
  activeIndex,
  setActiveIndex,
}: SpotlightCarouselProps) {
  const activeItemWidth = 100 - (items.length - 1) * 15; // 100% minus the width of the other items (15% each)

  return (
    <div>
      <div className="flex space-x-2">
        {items.map((item, index) =>
          index === activeIndex ? (
            <motion.div
              layoutId={`carouselItem${item.id}`}
              key={item.id}
              className={`relative w-[${activeItemWidth}%] aspect-video`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 flex items-center justify-center bg-orange-500 hover:bg-orange-600"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={item.id}
              layoutId={`carouselItem${item.id}`}
              className="w-[15%] min-w-8 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={400}
                height={800}
                className="w-full h-full object-cover grayscale-0"
              />
            </motion.div>
          )
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              index === activeIndex
                ? "bg-orange-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SpotlightCarousel;
