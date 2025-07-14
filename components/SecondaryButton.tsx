import React from "react";
import "@/styles/globals.css";

interface SecondaryButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function SecondaryButton({
  text,
  icon,
  className = "",
}: SecondaryButtonProps) {
  return (
    <button
      className={`secondary-button font-semibold text-black ${className}`}
    >
      {icon && <span className="">{icon}</span>}
      {text}
    </button>
  );
}
