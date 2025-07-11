import React from "react";
import { ArrowRight } from "lucide-react";
import "@/styles/globals.css";

interface OrangeButtonProps {
  text: string;
  className?: string;
}

export function OrangeButton({ text, className = "" }: OrangeButtonProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-black font-medium">{text}</span>
      <div className="orange-button flex items-center justify-center">
        <ArrowRight className="text-white w-5 h-5" />
      </div>
    </div>
  );
}
