import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Image from "next/image"
import NavBar from "@/components/NavBar"


export default function CommunityOrganizations() {
  const organizations = [
    {
      id: 1,
      name: "Siemens Corporation",
      location: "Princeton, New Jersey",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: "Platinum",
      projectsCount: "23 Projects Completed/Performing",
    },
    {
      id: 2,
      name: "ABB Inc.",
      location: "Auburn Hills, North Carolina",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: "Platinum",
      projectsCount: "6 Projects Completed/Performing",
    },
    {
      id: 3,
      name: "3Laws Dynamic Safety",
      location: "Princeton, New Jersey",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: "Platinum",
      projectsCount: null,
    },
    {
      id: 4,
      name: "AeroShield Materials",
      location: "Boston, MA",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: "Platinum",
      projectsCount: null,
    },
    {
      id: 5,
      name: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: null,
      projectsCount: null,
    },
    {
      id: 6,
      name: "Edgecase Research",
      location: "Pittsburgh, PA",
      logo: "/placeholder.svg?height=80&width=80",
      membershipLevel: null,
      projectsCount: null,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Organization Member Directory</h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input type="text" placeholder="Search for Organizations..." className="pl-10 w-full max-w-md" />
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
            <Card key={org.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 flex-shrink-0">
                    <Image
                      src={org.logo || "/placeholder.svg"}
                      alt={`${org.name} logo`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{org.name}</h3>
                    <p className="text-gray-600 mb-3">{org.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {org.membershipLevel && (
                        <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                          {org.membershipLevel}
                        </Badge>
                      )}
                      {org.projectsCount && (
                        <Badge variant="outline" className="border-gray-300 text-gray-700">
                          {org.projectsCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ARM</span>
                </div>
                <span className="font-semibold">ARM INSTITUTE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advancing American Robotics Manufacturing through Innovation, Education and Collaboration
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p className="text-gray-400 text-sm">
                Mill 19 at Hazelwood Green
                <br />
                4720 Technology Dr, Suite 300
                <br />
                Pittsburgh, PA 15219
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Phone</h4>
              <p className="text-gray-400 text-sm">412.322.7800</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Need Help?</h4>
              <Button className="bg-orange-500 hover:bg-orange-600">Contact ARM</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
