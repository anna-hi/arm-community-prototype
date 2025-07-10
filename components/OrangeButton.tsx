import React from "react";
import { Info } from "lucide-react";
import "@/styles/home.css"

interface OrangeButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function OrangeButton({ text, icon, className = "" }: OrangeButtonProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className="text-black font-medium">{text}</span>
            <div className="orange-button flex items-center justify-center">
        {icon ? icon : <Info className="text-white w-5 h-5" />}
      </div>
    </div>
  );
}
