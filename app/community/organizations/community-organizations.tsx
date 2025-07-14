import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CommunityOrganizations() {
  const organizations = [
    {
      id: 1,
      name: "Siemens Corporation",
      location: "Princeton, New Jersey",
      logo: "/images/organizations/siemens.png",
      membershipLevel: "Platinum",
      projectsCount: "23 Projects Completed/Performing",
    },
    {
      id: 2,
      name: "ABB Inc.",
      location: "Auburn Hills, North Carolina",
      logo: "/images/organizations/abb.png",
      membershipLevel: "Platinum",
      projectsCount: "6 Projects Completed/Performing",
    },
    {
      id: 3,
      name: "3Laws Dynamic Safety",
      location: "Princeton, New Jersey",
      logo: "/images/organizations/3-laws-robotics.png",
      membershipLevel: "Platinum",
      projectsCount: null,
    },
    {
      id: 4,
      name: "AeroShield Materials",
      location: "Boston, MA",
      logo: "/images/organizations/aeroshield.png",
      membershipLevel: "Platinum",
      projectsCount: null,
    },
    {
      id: 5,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      logo: "/images/organizations/carnegie-mellon.png",
      membershipLevel: "Platinum",
      projectsCount: "4 Projects Completed/Performing",
    },
    {
      id: 6,
      name: "Edgecase Research",
      location: "Pittsburgh, PA",
      logo: "/images/organizations/edge-case-research.png",
      membershipLevel: "Platinum",
      projectsCount: null,
    },
  ];

  return (
    <>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Organization Member Directory
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search for Organizations..."
            className="pl-10 w-full max-w-md"
          />
        </div>

        {/* Filters */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="aerospace">Aerospace</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Membership Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="platinum">Platinum</SelectItem>
                <SelectItem value="gold">Gold</SelectItem>
                <SelectItem value="silver">Silver</SelectItem>
                <SelectItem value="bronze">Bronze</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Projects Completed/Performing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-5">0-5 Projects</SelectItem>
                <SelectItem value="6-10">6-10 Projects</SelectItem>
                <SelectItem value="11-20">11-20 Projects</SelectItem>
                <SelectItem value="20+">20+ Projects</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pa">Pennsylvania</SelectItem>
                <SelectItem value="nj">New Jersey</SelectItem>
                <SelectItem value="nc">North Carolina</SelectItem>
                <SelectItem value="ma">Massachusetts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {organizations.map((org) => (
            <Link
              href="#"
              key={org.id}
              className="border border-[#D1D1D1] bg-[#FDFDFD] p-4 flex flex-col justify-between space-y-6 rounded-sm"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={org.logo || "/placeholder.svg"}
                  alt={`${org.name} logo`}
                  width={80}
                  height={80}
                  className="w-[100px] aspect-square object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-0.5">{org.name}</h3>
                  <p className="text-gray-500 text-sm font-normal">
                    {org.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {[org.membershipLevel, org.projectsCount].map((item, index) => {
                  return (
                    item && (
                      <div
                        key={index}
                        className="border border-[#A9C4E0] bg-[#F1F8FF] rounded-sm px-2 py-1 text-sm font-medium"
                      >
                        {item}
                      </div>
                    )
                  );
                })}
              </div>
            </Link>

            // <Card key={org.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            //   <CardContent className="p-6">
            //     <div className="flex items-start space-x-4">
            //       <div className="w-20 h-20 flex-shrink-0">
            //         <Image
            //           src={org.logo || "/placeholder.svg"}
            //           alt={`${org.name} logo`}
            //           width={80}
            //           height={80}
            //           className="w-full h-full object-contain"
            //         />
            //       </div>
            //       <div className="flex-1">
            //         <h3 className="text-xl font-semibold text-gray-900 mb-1">{org.name}</h3>
            //         <p className="text-gray-600 mb-3">{org.location}</p>
            //         <div className="flex flex-wrap gap-2">
            //           {org.membershipLevel && (
            //             <Badge variant="secondary" className="bg-gray-100 text-gray-800">
            //               {org.membershipLevel}
            //             </Badge>
            //           )}
            //           {org.projectsCount && (
            //             <Badge variant="outline" className="border-gray-300 text-gray-700">
            //               {org.projectsCount}
            //             </Badge>
            //           )}
            //         </div>
            //       </div>
            //     </div>
            //   </CardContent>
            // </Card>
          ))}
        </div>
      </div>
    </>
  );
}
