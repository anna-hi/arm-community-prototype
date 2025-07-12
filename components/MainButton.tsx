import React from "react";
import "@/styles/globals.css";

interface MainButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MainButton({ text, icon, className = "" }: MainButtonProps) {
  return (
    <button className={`main-button text-black ${className}`}>
      {text}
      {icon && <span className="">{icon}</span>}
    </button>
  );
}
