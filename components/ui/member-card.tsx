import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface MemberCardProps {
  tags: string[];
  committeeTag?: string;
  imageSrc: string;
  imageAlt?: string;
  name: string;
  organization: string;
  role: string;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

const MemberCard: React.FC<MemberCardProps> = ({
  tags,
  committeeTag,
  imageSrc,
  imageAlt = "Profile image",
  name,
  organization,
  role,
  isFavorite = false,
  onFavoriteClick,
}) => {
  return (
    <div className="h-[296px] bg-white rounded-sm border border-gray-200 overflow-hidden p-6 flex flex-col items-start justify-between relative min-w-[323px]">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 w-full mb-2">
        {tags.map((tag, idx) => (
          <span
            key={tag + idx}
            className="font-medium body-small-bold card-tag"
          >
            {tag}
          </span>
        ))}
        {/* Committee Tag */}
        {committeeTag && (
          <span className="card-tag-special font-medium body-small-bold">
            {committeeTag}
          </span>
        )}
      </div>

      <div className="flex flex-col justify-start items-start gap-2">
        {/* Profile Image */}
        <div className="mb-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>
        {/* Name, Organization, Role */}
        <div className="flex flex-col items-start">
          <h3 className="">{name}</h3>
          <div className="text-sm text-gray-500 font-normal">{organization}</div>
          <div className="pt-1 text-sm max-w-[240px] font-medium truncate text-gray-800">{role}</div>
        </div>
      </div>
      {/* Favorite Button */}
      <button
        className="absolute bottom-6 right-6 bg-yellow-100 rounded-full p-2"
        onClick={onFavoriteClick}
        aria-label={isFavorite ? "Unfavorite" : "Favorite"}
      >
        <Star
          className={isFavorite ? "text-armYellow fill-armYellow" : "text-armYellow"}
          strokeWidth={2}
          size={28}
        />
      </button>
    </div>
  );
};

export default MemberCard;
