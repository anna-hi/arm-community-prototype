import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { IoMdMail } from "react-icons/io";

export default function ContactCard({ member }: { member: any }) {
  return (
    <Card className="!h-72 !bg-white rounded border border-gray-200 cursor-pointer relative group">
      <CardContent className="flex items-end justify-between h-full">
        <div className="flex flex-col items-start gap-2">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" fill="#C9C9C9" />
                    <rect x="6" y="14" width="12" height="6" rx="3" fill="#C9C9C9" />
                </svg>
            </div>
            <div className="flex flex-col items-start">
                <div className="text-xl font-montserrat font-semibold">{member.name}</div>
                <div className="text-xs text-gray-500 font-normal">{member.company}</div>
                <div className="pt-1 text-sm max-w-[240px] font-medium truncate text-gray-800">{member.title}</div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-2">
          <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
            <a href={`mailto:${member.email}`} className="text-[#008EC1]">
                <IoMdMail className="w-6 h-6" />
            </a>
          </div>
        
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <Star
                className={"w-6 h-6 text-armYellow"}
            />
          </div>        
        </div>
      </CardContent>
    </Card>
  );
}