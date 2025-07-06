"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Computer, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function InformationTechnologyPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <Computer className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {language === "ar" ? "تقنية المعلومات" : "Information Technology"}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "أنظمة الشبكات والأمن السيبراني للعصر الرقمي"
                : "Network systems and cybersecurity for the digital age"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "340+ طالب" : "340+ Students"}
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              <Link href="/contact">{language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
