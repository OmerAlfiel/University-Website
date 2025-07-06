"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/components/language-provider"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: t("address"),
      details: ["Gezira Island, Khartoum", "Sudan", "P.O. Box 12345"],
    },
    {
      icon: Phone,
      title: t("phone"),
      details: ["+249 123 456 789", "+249 987 654 321", "Fax: +249 111 222 333"],
    },
    {
      icon: Mail,
      title: t("email"),
      details: ["info@gct.edu.sd", "admissions@gct.edu.sd", "research@gct.edu.sd"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 8:00 AM - 4:00 PM", "Friday: 8:00 AM - 12:00 PM", "Saturday: Closed"],
    },
  ]

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@gct.edu.sd",
      phone: "+249 123 456 789",
      description: "For inquiries about applications, enrollment, and academic requirements.",
    },
    {
      name: "Student Affairs",
      email: "students@gct.edu.sd",
      phone: "+249 123 456 790",
      description: "For current students regarding academic support, activities, and services.",
    },
    {
      name: "Research Office",
      email: "research@gct.edu.sd",
      phone: "+249 123 456 791",
      description: "For research collaborations, publications, and academic partnerships.",
    },
    {
      name: "International Relations",
      email: "international@gct.edu.sd",
      phone: "+249 123 456 792",
      description: "For international students, exchange programs, and global partnerships.",
    },
  ]

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("contact")}</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
          {t("getInTouch")} - We're here to help with any questions or inquiries you may have
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("sendMessage")}</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("name")} *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("email")} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">{t("message")} *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please provide details about your inquiry..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  {t("submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Departments */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Department Contacts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {departments.map((dept, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{dept.name}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${dept.phone}`} className="text-primary hover:underline">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
        <Card>
          <CardContent className="p-0">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                <p className="text-sm text-muted-foreground mt-2">Gezira Island, Khartoum, Sudan</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
