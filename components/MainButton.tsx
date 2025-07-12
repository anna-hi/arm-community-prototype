import React from "react";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";

interface MainButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MainButton({ text, icon, className = "" }: MainButtonProps) {
  return (
    <Button className={`main-button text-black ${className}`}>
      {text}
      {icon && <span className="">{icon}</span>}
    </Button>
  );
}
