"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Clock, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function PublicHealthPage() {
  const { language } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
              {language === "ar" ? "الصحة العامة" : "Public Health"}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "حماية وتعزيز صحة المجتمعات والسكان"
                : "Protecting and promoting the health of communities and populations"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "200+ طالب" : "200+ Students"}
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
              {language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
