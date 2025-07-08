"use client"

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";




export type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: string;
  featured: boolean;
  image: string;
};

export default function EventPage({ eventArtical }: { eventArtical: Event[] }) {
  const { t } = useLanguage();

  const categories = ["All", "Academic", "Career", "Research", "Student Life", "Ceremony", "Technology"];

  // Separate upcoming and past events by date:
  const today = new Date();
  const upcomingEvents = eventArtical.filter((e) => new Date(e.date) >= today);
  const pastEvents = eventArtical.filter((e) => new Date(e.date) < today);

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
          <Button key={category} variant="outline" size="sm">
            {t(category)}
          </Button>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t("upcomingEvents")}</h2>

        {/* Featured Events */}
        {upcomingEvents
          .filter((event) => event.featured)
          .map((event) => (
            <Card key={event.id} className="mb-8 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image src={event.image} alt={t(event.title)} fill className="object-cover" />
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
          {upcomingEvents
            .filter((event) => !event.featured)
            .map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image} alt={t(event.title)} fill className="object-cover" />
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

      {/* Past Events Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">{t("Past Events")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pastEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden opacity-75 hover:opacity-100 transition-opacity"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
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
  );
}