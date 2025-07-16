"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  Grid3X3,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import NewsEventCard from "@/components/ui/news-event-card";
import { OrangeButton } from "@/components/OrangeButton";

const events = [
  {
    id: 1,
    imagePath: "/images/events/ai-in-manufacturing-webinar.png",
    imageAlt: "AI in Manufacturing: The Basics",
    caption: "AI | ARM Event | Webinar",
    title: "AI in Manufacturing: The Basics",
    eventInfo: {
      date: "Jun 23, 2025",
      time: "02:00 PM - 03:00 PM",
      location: "Zoom/Gov",
    },
  },
  {
    id: 2,
    imagePath: "/images/events/skills-usa-conference.png",
    imageAlt: "Skills USA National Leadership & Skills Conference",
    caption: "ARM Event",
    title: "Skills USA National Leadership & Skills Conference",
    eventInfo: {
      date: "Jun 23 - Jun 27, 2025",
      location: "Atlanta, GA",
    },
  },
  {
    id: 3,
    imagePath: "/images/events/hitec2025-banner.webp",
    imageAlt: "HI-TEC: High Impact Technology Exchange Conference 2025",
    caption: "Public Event",
    title: "HI-TEC: High Impact Technology Exchange Conference 2025",
    eventInfo: {
      date: "Jul 21 - Jul 24, 2025",
      location: "Minneapolis, Minnesota",
    },
  },
  {
    id: 4,
    imagePath: "/images/events/robotic-grinding-finishing-conference.png",
    imageAlt: "Robotic Grinding & Finishing Conference",
    caption: "Public Event",
    title: "Robotic Grinding & Finishing Conference",
    eventInfo: {
      date: "Jul 22 - Jul 24, 2025",
      location: "Minneapolis, Minnesota",
    },
  },
  {
    id: 5,
    imagePath: "/images/events/manufacturing-momentum.png",
    imageAlt:
      "Manufacturing Momentum Goes to the Motor City: A National Workforce Summit",
    caption: "ARM Event",
    title:
      "Manufacturing Momentum Goes to the Motor City: A National Workforce Summit",
    eventInfo: {
      date: "Aug 04 - Aug 07, 2025",
      location: "Detroit",
    },
  },
  {
    id: 6,
    imagePath: "/images/events/arm-member-meeting.png",
    imageAlt: "2025 Annual ARM Institute Member Meeting",
    caption: "ARM Event",
    title: "2025 Annual ARM Institute Member Meeting",
    eventInfo: {
      date: "Sep 03 - Sep 05, 2025",
      time: "09:00 AM - 12:00 PM",
      location: "Wyndham Grand Pittsburgh Downtown",
    },
  },
];

// Calendar helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

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
  ];
  return months[month];
};

export default function CommunityEvents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6)); // July 2025
  const [calendarView, setCalendarView] = useState("Month");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const goToToday = () => {
    setCurrentDate(new Date(2025, 6)); // July 2025 for demo
  };

  // Generate calendar days
  const calendarDays = [];

  // Previous month's trailing days
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      year === 2025 && month === 6 && day === new Date().getDate();
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isToday,
    });
  }

  // Next month's leading days
  const remainingDays = 42 - calendarDays.length; // 6 weeks * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isToday: false,
    });
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
  ];

  return (
    <div className="min-h-screen bg-white gap-12">
      {/* Main Content */}
      <main className="flex flex-col max-w-7xl mx-[127px] px-6 py-12 gap-12">
        {/* Upcoming Events Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Upcoming Events
        </h1>
        <section className="mb-12">

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                2025 Annual ARM Institute Member Meeting
              </h2>
              <Badge className="bg-orange-100 text-orange-800 mb-4">
                ARM Event
              </Badge>

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

              <OrangeButton text="Check Event Details" />
            </div>

            <div className="relative">
              <Image
                src="/images/events/arm-member-meeting.png"
                alt="Annual ARM Institute Member Meeting"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
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
                className={
                  viewMode === "calendar" ? "bg-gray-900 text-white" : ""
                }
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
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth("prev")}
                    className="p-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={goToToday}
                    className="bg-[#fdb619] hover:bg-[#e6a516] text-black font-medium px-4 py-2"
                  >
                    Today
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateMonth("next")}
                    className="p-2"
                  >
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
                    className={
                      calendarView === "Month"
                        ? "bg-[#fdb619] hover:bg-[#e6a516] text-black"
                        : ""
                    }
                  >
                    Month
                  </Button>
                  <Button
                    variant={calendarView === "Week" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCalendarView("Week")}
                    className={
                      calendarView === "Week"
                        ? "bg-[#fdb619] hover:bg-[#e6a516] text-black"
                        : ""
                    }
                  >
                    Week
                  </Button>
                  <Button
                    variant={calendarView === "Day" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCalendarView("Day")}
                    className={
                      calendarView === "Day"
                        ? "bg-[#fdb619] hover:bg-[#e6a516] text-black"
                        : ""
                    }
                  >
                    Day
                  </Button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Day Headers */}
                <div className="grid grid-cols-7 bg-gray-50">
                  {[
                    "SUNDAY",
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                    "SATURDAY",
                  ].map((day) => (
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
                        !calendarDay.isCurrentMonth
                          ? "bg-gray-50 text-gray-400"
                          : "bg-white"
                      }`}
                    >
                      <div
                        className={`text-sm font-medium ${
                          calendarDay.isToday ? "text-[#fdb619]" : ""
                        }`}
                      >
                        {calendarDay.day}
                      </div>

                      {/* Events for this day */}
                      {calendarDay.isCurrentMonth &&
                        calendarEvents.map((event, eventIndex) => {
                          if (
                            calendarDay.day >= event.startDay &&
                            calendarDay.day <= event.endDay
                          ) {
                            const isStart = calendarDay.day === event.startDay;
                            const isEnd = calendarDay.day === event.endDay;
                            const isSingle = event.startDay === event.endDay;

                            return (
                              <div
                                key={eventIndex}
                                className={`absolute left-1 right-1 top-8 ${
                                  event.color
                                } text-black text-xs p-1 rounded-sm font-medium truncate ${
                                  isSingle
                                    ? "rounded"
                                    : isStart
                                    ? "rounded-l"
                                    : isEnd
                                    ? "rounded-r"
                                    : "rounded-none"
                                }`}
                                style={{
                                  marginTop: `${eventIndex * 20}px`,
                                }}
                              >
                                {isStart ? event.title : ""}
                              </div>
                            );
                          }
                          return null;
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
                  <NewsEventCard
                    imagePath={event.imagePath}
                    imageAlt={event.imageAlt}
                    caption={event.caption}
                    title={event.title}
                    eventInfo={{
                      date: event.eventInfo.date,
                      time: event.eventInfo.time || "08:00 AM - 17:00 PM",
                      location: event.eventInfo.location || "Pittsburgh Manufacturing Department",
                    }}
                    key={event.id}
                  />
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

                <Button
                  size="sm"
                  className="flex items-center bg-[#fdb619] hover:bg-[#e6a516]"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </>
          )}
        </section>
      </main>

    </div>
  );
}
