"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function EventsPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("All")

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Science Fair 2025",
      description:
        "Join us for our annual science fair showcasing innovative projects from students across all departments. Experience cutting-edge research and creative solutions to real-world problems.",
      date: "January 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      category: "Academic",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=400&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 2,
      title: "Career Development Workshop",
      description:
        "Professional development workshop focusing on resume building, interview skills, and career planning for final year students.",
      date: "January 25, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Conference Hall A",
      category: "Career",
      attendees: "150",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "International Research Conference",
      description:
        "Annual international conference bringing together researchers, academics, and industry experts to share latest findings and innovations.",
      date: "February 5-7, 2025",
      time: "Full Day Event",
      location: "GCT Convention Center",
      category: "Research",
      attendees: "300+",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Student Orientation Week",
      description:
        "Welcome week for new students including campus tours, academic guidance, and social activities to help them integrate into college life.",
      date: "February 15-21, 2025",
      time: "Various Times",
      location: "Multiple Venues",
      category: "Student Life",
      attendees: "800+",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop&crop=center",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Graduation Ceremony 2024",
      description:
        "Celebrating the achievements of our graduating class of 2024 with families, faculty, and distinguished guests.",
      date: "December 10, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Main Campus Grounds",
      category: "Ceremony",
      attendees: "1000+",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Tech Innovation Summit",
      description: "Summit featuring latest technological innovations and their applications in various industries.",
      date: "November 28, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Technology Center",
      category: "Technology",
      attendees: "250",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop&crop=center",
    },
  ]

  const categories = ["All", "Academic", "Career", "Research", "Student Life", "Ceremony", "Technology"]

    const filterEvents = (events: typeof upcomingEvents) =>
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory)


  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("events")}</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {t("Discover upcoming events, workshops, conferences, and activities at Gezira College of Technology")}
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            >
            {t(category)}
          </Button>
        ))}
      </div>

      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t("upcomingEvents")}</h2>

        {/* Featured Event */}
        {filterEvents(upcomingEvents)
          .filter((event) => event.featured)
          .map((event) => (
            <Card key={event.id} className="mb-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">                  <div className="relative h-64 md:h-auto">
                  <Image src={event.image || "/placeholder.svg"} alt={t(event.title)} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4">{t("Featured")}</Badge>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {t(event.category)}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t(event.title)}</h3>
                  <p className="text-muted-foreground mb-6">{t(event.description)}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      {t(event.date)}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      {t(event.time)}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      {t(event.location)}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      {t(event.attendees)} {t("Expected Attendees")}
                    </div>
                  </div>
                  <Button className="w-fit">
                    {t("Register Now")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}

        {/* Other Upcoming Events */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filterEvents(upcomingEvents)
            .filter((event) => !event.featured)
            .map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {t(event.category)}
                  </Badge>
                  <CardTitle className="text-lg line-clamp-2">{t(event.title)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">{t(event.description)}</CardDescription>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {t(event.date)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {t(event.time)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {t(event.location)}
                    </div>
                  </div>
                  <Button className="w-full">
                    {t("Register")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Past Events */}
      <section>
        <h2 className="text-3xl font-bold mb-8">{t("Past Events")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filterEvents(pastEvents).map((event) => (
            <Card key={event.id} className="overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
              <div className="relative h-48">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={t(event.title)}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  {t(event.category)}
                </Badge>
                <CardTitle className="text-lg line-clamp-2">{t(event.title)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{t(event.description)}</CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {t(event.date)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {t(event.attendees)} {t("attendees")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
