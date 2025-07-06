"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Heart, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function BiomedicalEngineeringPage() {
  const { language } = useLanguage()

  const coursework = [
    {
      title: "Biomedical Instrumentation",
      titleAr: "الأجهزة الطبية الحيوية",
      description: "Design and analysis of medical devices",
      descriptionAr: "تصميم وتحليل الأجهزة الطبية",
      credits: 4,
    },
    {
      title: "Biomaterials",
      titleAr: "المواد الحيوية",
      description: "Materials for medical applications",
      descriptionAr: "المواد للتطبيقات الطبية",
      credits: 3,
    },
    {
      title: "Medical Imaging",
      titleAr: "التصوير الطبي",
      description: "X-ray, MRI, and ultrasound systems",
      descriptionAr: "أنظمة الأشعة السينية والرنين المغناطيسي والموجات فوق الصوتية",
      credits: 4,
    },
    {
      title: "Biomedical Signal Processing",
      titleAr: "معالجة الإشارات الطبية الحيوية",
      description: "Analysis of biological signals",
      descriptionAr: "تحليل الإشارات البيولوجية",
      credits: 3,
    },
  ]

  const careerPaths = [
    {
      title: "Biomedical Engineer",
      titleAr: "مهندس طبي حيوي",
      salary: "$70,000 - $95,000",
      description: "Design medical devices and equipment",
      descriptionAr: "تصميم الأجهزة والمعدات الطبية",
    },
    {
      title: "Clinical Engineer",
      titleAr: "مهندس سريري",
      salary: "$65,000 - $85,000",
      description: "Maintain hospital equipment",
      descriptionAr: "صيانة معدات المستشفى",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              {language === "ar" ? "الهندسة الطبية الحيوية" : "Biomedical Engineering"}
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "دمج الهندسة والطب لتطوير تقنيات الرعاية الصحية"
                : "Combining engineering and medicine to advance healthcare technology"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "220+ طالب" : "220+ Students"}
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg font-semibold">
              <Link href="/contact">{language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Rest of the page content would continue here... */}
    </div>
  )
}
