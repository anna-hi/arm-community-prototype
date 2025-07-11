import React from "react";
import { Info } from "lucide-react";
import "@/styles/globals.css";
import { Button } from "@/components/ui/button";

interface MainButtonProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export function MainButton({ text, icon, className = "" }: MainButtonProps) {
  return <Button className="main-button text-black">Start Here</Button>;
}
