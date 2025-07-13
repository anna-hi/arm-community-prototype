import { User } from "lucide-react";

interface CDIPDataFieldProps {
  title: string;
  content: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function CDIPDataField({
  title,
  content,
  showIcon = false,
  icon = <User className="w-5 h-5 text-gray-400 mr-2" />,
  className = "",
}: CDIPDataFieldProps) {
  return (
    <div className={`flex flex-col w-fit text-base font-normal ${className}`}>
      <span className="text-gray-500">{title}</span>
      <span className="flex items-center text-gray-950">
        {showIcon && icon}
        {content}
      </span>
    </div>
  );
}
