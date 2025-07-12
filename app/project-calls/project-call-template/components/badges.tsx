import { Badge } from "@/components/ui/badge";

function ActiveBadge() {
  return (
    <Badge className="bg-green-100 text-green-800">
      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
      Active
    </Badge>
  );
}

export { ActiveBadge };