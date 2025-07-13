"use client";
import { Button } from "@/components/ui/button";
import { AlignVerticalSpaceAround, FileText, MoreVertical } from "lucide-react";
import { useState } from "react";

function FileTable({
  title,
  files,
  shownFiles = 3,
}: {
  title: string;
  files: { name: string }[];
  shownFiles?: number;
}) {
  const [isShowAll, setShowAll] = useState(false);

  const filesToShow = isShowAll ? files : files.slice(0, shownFiles);
  return (
    <div className="rounded-lg border w-10/12">
      <div className="rounded-t-lg bg-[#DEDEDE] px-6 flex items-center justify-between">
        <h5 className="font-medium py-4 text-gray-900">
          {title} ({files.length})
        </h5>
        {files.length > shownFiles && (
          <Button
            variant="outline"
            className="text-sm font-bold text-gray-600 flex items-center space-x-2 hover:bg-gray-200"
            onClick={() => setShowAll(!isShowAll)}
          >
            <span>{isShowAll ? "Show less" : "Show all"}</span>
            <AlignVerticalSpaceAround />
          </Button>
        )}
      </div>
      {filesToShow.map((file, index) => (
        <div
          key={index}
          className={`flex items-center space-x-4 px-6 py-4 border ${
            index === files.length - 1 ? "rounded-b-lg" : ""
          } hover:bg-gray-100`}
        >
          <FileText className="w-4 h-4 text-blue-600" />
          <span className="cursor-pointer line-clamp-1 overflow-ellipsis hover:underline">
            {file.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default FileTable;
