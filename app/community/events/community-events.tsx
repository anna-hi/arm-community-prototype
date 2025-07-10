"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  ChevronDown,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const events = [
  {
    id: 1,
    title: "AI in Manufacturing: The Basics",
    image: "/placeholder.svg?height=200&width=350",
    type: "AI | ARM Event | Webinar",
    date: "Jun 23, 2025",
    time: "02:00 PM - 03:00 PM",
    location: "Zoom/Gov",
    category: "ARM Event",
  },
  {
    id: 2,
    title: "Skills USA National Leadership & Skills Conference",
    image: "/placeholder.svg?height=200&width=350",
    type: "ARM Event",
    date: "Jun 23 - Jun 27, 2025",
    time: "",
    location: "Atlanta, GA",
    category: "ARM Event",
  },
  {
    id: 3,
    title: "HI-TEC: High Impact Technology Exchange Conference 2025",
    image: "/placeholder.svg?height=200&width=350",
    type: "Public Event",
    date: "Jul 21 - Jul 24, 2025",
    time: "",
    location: "Minneapolis, Minnesota",
    category: "Public Event",
  },
  {
    id: 4,
    title: "Robotic Grinding & Finishing Conference",
    image: "/placeholder.svg?height=200&width=350",
    type: "Public Event",
    date: "Jul 22 - Jul 24, 2025",
    time: "",
    location: "Minneapolis, Minnesota",
    category: "Public Event",
  },
  {
    id: 5,
    title: "Manufacturing Momentum Goes to the Motor City: A National Workforce Summit",
    image: "/placeholder.svg?height=200&width=350",
    type: "ARM Event",
    date: "Aug 04 - Aug 07, 2025",
    time: "",
    location: "Detroit",
    category: "ARM Event",
  },
  {
    id: 6,
    title: "2025 Annual ARM Institute Member Meeting",
    image: "/placeholder.svg?height=200&width=350",
    type: "ARM Event",
    date: "Sep 03 - Sep 05, 2025",
    time: "09:00 AM - 12:00 PM",
    location: "Wyndham Grand Pittsburgh Downtown",
    category: "ARM Event",
  },
]

// Calendar helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

const getMonthName = (month: number) => {
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ]
  return months[month]
}

export default function CommunityEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6)) // July 2025
  const [calendarView, setCalendarView] = useState("Month")

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const goToToday = () => {
    setCurrentDate(new Date(2025, 6)) // July 2025 for demo
  }

  // Generate calendar days
  const calendarDays = []

  // Previous month's trailing days
  const prevMonth = month === 0 ? 11 : month - 1
  const prevYear = month === 0 ? year - 1 : year
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth)

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = year === 2025 && month === 6 && day === new Date().getDate()
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isToday,
    })
  }

  // Next month's leading days
  const remainingDays = 42 - calendarDays.length // 6 weeks * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isToday: false,
    })
  }

  // Events for calendar (simplified for demo)
  const calendarEvents = [
    {
      title: "HI-TEC: High Impact Technology Exchange Conference 2025",
      startDay: 21,
      endDay: 24,
      color: "bg-[#fdb619]",
    },
    {
      title: "Robotic Grinding & Finishing Conference",
      startDay: 22,
      endDay: 24,
      color: "bg-[#fdb619]",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo placeholder - left blank for separate upload */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=48&width=120"
                  alt="ARM Institute"
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/project-calls" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                Project Calls
              </Link>
              <Link href="/project-proposal" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                Project Proposal
              </Link>
              <Link href="/all-projects" className="text-gray-900 hover:text-orange-500 font-medium text-base">
                All Projects
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-orange-500 hover:text-orange-500 font-medium text-base">
                  Community
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/community/events" className="w-full">
                      Events
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/community/members" className="w-full">
                      Members
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/community/organizations" className="w-full">
                      Organizations
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-900 hover:text-orange-500 font-medium text-base">
                  Resource Center
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/resource-center/arm-member-guide" className="w-full">
                      ARM Member Guide
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resource-center/webinars" className="w-full">
                      Webinars
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/resource-center/articles" className="w-full">
                      Articles
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer" />
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback className="bg-blue-500 text-white">M</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Upcoming Events Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Events</h1>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2025 Annual ARM Institute Member Meeting</h2>
              <Badge className="bg-orange-100 text-orange-800 mb-4">ARM Event</Badge>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Sep 03 - Sep 05, 2025</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>09:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Wyndham Grand Pittsburgh Downtown</span>
                </div>
              </div>

              <Button className="bg-[#fdb619] hover:bg-[#e6a516] text-black font-medium">
                Check Event Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Annual ARM Institute Member Meeting"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Annual ARM Institute Member Meeting</h3>
                  <p className="text-xl text-[#fdb619]">Sept. 3-5 in Pittsburgh, PA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Events Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">All Events</h2>

          {/* Search and View Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for Events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "calendar" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("calendar")}
                className={viewMode === "calendar" ? "bg-gray-900 text-white" : ""}
              >
                <Calendar className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-gray-900 text-white" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calendar View */}
          {viewMode === "calendar" && (
            <div className="mb-8">
              {/* Calendar Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")} className="p-2">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={goToToday}
                    className="bg-[#fdb619] hover:bg-[#e6a516] text-black font-medium px-4 py-2"
                  >
                    Today
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")} className="p-2">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {getMonthName(month)} {year}
                </h3>

                <div className="flex items-center space-x-1">
                  <Button
                    variant={calendarView === "Month" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCalendarView("Month")}
                    className={calendarView === "Month" ? "bg-[#fdb619] hover:bg-[#e6a516] text-black" : ""}
                  >
                    Month
                  </Button>
                  <Button
                    variant={calendarView === "Week" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCalendarView("Week")}
                    className={calendarView === "Week" ? "bg-[#fdb619] hover:bg-[#e6a516] text-black" : ""}
                  >
                    Week
                  </Button>
                  <Button
                    variant={calendarView === "Day" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCalendarView("Day")}
                    className={calendarView === "Day" ? "bg-[#fdb619] hover:bg-[#e6a516] text-black" : ""}
                  >
                    Day
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-gray-50">
                  {["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"].map((day) => (
                    <div
                      key={day}
                      className="p-4 text-center font-semibold text-gray-700 border-r border-gray-200 last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((calendarDay, index) => (
                    <div
                      key={index}
                      className={`min-h-[120px] p-2 border-r border-b border-gray-200 last:border-r-0 relative ${
                        !calendarDay.isCurrentMonth ? "bg-gray-50 text-gray-400" : "bg-white"
                      }`}
                    >
                      <div className={`text-sm font-medium ${calendarDay.isToday ? "text-[#fdb619]" : ""}`}>
                        {calendarDay.day}
                      </div>

                      {/* Events for this day */}
                      {calendarDay.isCurrentMonth &&
                        calendarEvents.map((event, eventIndex) => {
                          if (calendarDay.day >= event.startDay && calendarDay.day <= event.endDay) {
                            const isStart = calendarDay.day === event.startDay
                            const isEnd = calendarDay.day === event.endDay
                            const isSingle = event.startDay === event.endDay

                            return (
                              <div
                                key={eventIndex}
                                className={`absolute left-1 right-1 top-8 ${event.color} text-black text-xs p-1 rounded-sm font-medium truncate ${
                                  isSingle ? "rounded" : isStart ? "rounded-l" : isEnd ? "rounded-r" : "rounded-none"
                                }`}
                                style={{
                                  marginTop: `${eventIndex * 20}px`,
                                }}
                              >
                                {isStart ? event.title : ""}
                              </div>
                            )
                          }
                          return null
                        })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grid View (Original) */}
          {viewMode === "grid" && (
            <>
              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        width={350}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge
                        variant="secondary"
                        className={`mb-3 ${
                          event.category === "ARM Event"
                            ? "bg-orange-100 text-orange-800"
                            : event.category === "Public Event"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {event.type}
                      </Badge>

                      <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{event.title}</h3>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-2" />
                          <span>{event.date}</span>
                        </div>
                        {event.time && (
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-2" />
                            <span>{event.time}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 mr-2" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-4">
                <Button variant="ghost" size="sm" className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Prev
                </Button>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">1</span>
                  <span className="text-sm text-gray-500">of</span>
                  <span className="text-sm text-gray-700">6</span>
                </div>

                <Button size="sm" className="flex items-center bg-[#fdb619] hover:bg-[#e6a516]">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </>
          )}
        </section>
      </main>

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
