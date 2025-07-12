import React from "react";
import { ArrowLeft } from "lucide-react";
import "@/styles/globals.css";

interface OrangeButtonLeftProps {
  text: string;
  className?: string;
}

export function OrangeButtonLeft({ text, className = "" }: OrangeButtonLeftProps) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="orange-button flex items-center justify-center">
        <ArrowLeft className="text-white w-5 h-5" />
      </div>
      <span className="font-semibold" style={{ color: "#222" }}>{text}</span>
    </div>
  );
}
