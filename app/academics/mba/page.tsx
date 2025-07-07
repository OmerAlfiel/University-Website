"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import {
  GraduationCap,
  Clock,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  Globe,
  Calendar,
  DollarSign,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MBAPage() {
  const { language } = useLanguage()

  const coursework = [
    {
      title: "Strategic Management",
      titleAr: "الإدارة الاستراتيجية",
      description: "Corporate strategy and competitive analysis",
      descriptionAr: "استراتيجية الشركات والتحليل التنافسي",
      credits: 3,
    },
    {
      title: "Financial Management",
      titleAr: "الإدارة المالية",
      description: "Advanced corporate finance and investment",
      descriptionAr: "التمويل المؤسسي المتقدم والاستثمار",
      credits: 3,
    },
    {
      title: "Marketing Management",
      titleAr: "إدارة التسويق",
      description: "Strategic marketing and brand management",
      descriptionAr: "التسويق الاستراتيجي وإدارة العلامة التجارية",
      credits: 3,
    },
    {
      title: "Operations Management",
      titleAr: "إدارة العمليات",
      description: "Supply chain and process optimization",
      descriptionAr: "سلسلة التوريد وتحسين العمليات",
      credits: 3,
    },
    {
      title: "Leadership & Ethics",
      titleAr: "القيادة والأخلاق",
      description: "Executive leadership and business ethics",
      descriptionAr: "القيادة التنفيذية وأخلاقيات الأعمال",
      credits: 3,
    },
    {
      title: "International Business",
      titleAr: "الأعمال الدولية",
      description: "Global markets and cross-cultural management",
      descriptionAr: "الأسواق العالمية والإدارة متعددة الثقافات",
      credits: 3,
    },
  ]

  const careerPaths = [
    {
      title: "Chief Executive Officer",
      titleAr: "الرئيس التنفيذي",
      salary: "$150,000 - $500,000+",
      description: "Lead organizations and drive strategic vision",
      descriptionAr: "قيادة المنظمات ودفع الرؤية الاستراتيجية",
    },
    {
      title: "Strategy Director",
      titleAr: "مدير الاستراتيجية",
      salary: "$120,000 - $200,000",
      description: "Develop and implement business strategies",
      descriptionAr: "تطوير وتنفيذ استراتيجيات الأعمال",
    },
    {
      title: "Management Consultant",
      titleAr: "مستشار إداري",
      salary: "$100,000 - $180,000",
      description: "Advise organizations on business improvements",
      descriptionAr: "تقديم المشورة للمنظمات حول تحسينات الأعمال",
    },
    {
      title: "Investment Manager",
      titleAr: "مدير الاستثمار",
      salary: "$110,000 - $250,000",
      description: "Manage investment portfolios and strategies",
      descriptionAr: "إدارة محافظ الاستثمار والاستراتيجيات",
    },
  ]

  const faculty = [
    {
      name: "Dr. Ahmed Hassan",
      nameAr: "د. أحمد حسن",
      title: "Professor of Strategic Management",
      titleAr: "أستاذ الإدارة الاستراتيجية",
      education: "PhD Harvard Business School",
      experience: "Former McKinsey & Company Partner",
    },
    {
      name: "Dr. Sarah Mitchell",
      nameAr: "د. سارة ميتشل",
      title: "Professor of Finance",
      titleAr: "أستاذة التمويل",
      education: "PhD Wharton School",
      experience: "Former Goldman Sachs VP",
    },
    {
      name: "Dr. Omar Al-Rashid",
      nameAr: "د. عمر الراشد",
      title: "Professor of International Business",
      titleAr: "أستاذ الأعمال الدولية",
      education: "PhD London Business School",
      experience: "Former World Bank Consultant",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
            alt="MBA Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-[2px]" />
        </div>
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {language === "ar" ? "ماجستير إدارة الأعمال" : "Master of Business Administration"}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "برنامج متقدم لتطوير القادة وريادي الأعمال المستقبليين"
                : "Advanced program for developing future business leaders and entrepreneurs"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "سنتان" : "2 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "180+ طالب" : "180+ Students"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Award className="h-4 w-4 mr-2" />
                {language === "ar" ? "معتمد دولياً" : "Internationally Accredited"}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact" className="flex items-center">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                {language === "ar" ? "تحميل البروشور" : "Download Brochure"}
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Program Overview */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "نظرة عامة على البرنامج" : "Program Overview"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "ar"
                  ? "برنامج ماجستير إدارة الأعمال المصمم للمهنيين العاملين الذين يسعون لتطوير مهاراتهم القيادية والإدارية"
                  : "An MBA program designed for working professionals seeking to advance their leadership and management skills"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 overflow-hidden">
                <div className="w-full h-48 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&auto=format&fit=crop"
                    alt="Flexible Schedule"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <CardTitle className="text-xl text-white">{language === "ar" ? "جدولة مرنة" : "Flexible Schedule"}</CardTitle>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "ar"
                      ? "فصول مسائية ونهاية الأسبوع للمهنيين العاملين"
                      : "Evening and weekend classes for working professionals"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 overflow-hidden">
                <div className="w-full h-48 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop"
                    alt="Global Perspective"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <CardTitle className="text-xl text-white">{language === "ar" ? "منظور عالمي" : "Global Perspective"}</CardTitle>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "ar"
                      ? "تركيز على الأعمال الدولية والأسواق العالمية"
                      : "Focus on international business and global markets"}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 overflow-hidden">
                <div className="w-full h-48 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop"
                    alt="Practical Application"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <CardTitle className="text-xl text-white">
                      {language === "ar" ? "تطبيق عملي" : "Practical Application"}
                    </CardTitle>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "ar"
                      ? "مشاريع حقيقية ودراسات حالة من الصناعة"
                      : "Real-world projects and industry case studies"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Coursework */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "المناهج الدراسية" : "Core Coursework"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "مناهج شاملة تغطي جميع جوانب إدارة الأعمال الحديثة"
                  : "Comprehensive curriculum covering all aspects of modern business management"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {coursework.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{language === "ar" ? course.titleAr : course.title}</CardTitle>
                      <Badge variant="secondary">{course.credits} Credits</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "ar" ? course.descriptionAr : course.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Career Paths */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "المسارات المهنية" : "Career Paths"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "فرص وظيفية متنوعة للخريجين في مختلف القطاعات"
                  : "Diverse career opportunities for graduates across various sectors"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {careerPaths.map((career, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {language === "ar" ? career.titleAr : career.title}
                        </CardTitle>
                        <div className="flex items-center text-green-600 font-semibold">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {career.salary}
                        </div>
                      </div>
                      <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      {language === "ar" ? career.descriptionAr : career.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Faculty */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "أعضاء هيئة التدريس" : "Distinguished Faculty"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "خبراء في مجال الأعمال والإدارة من أفضل الجامعات والشركات العالمية"
                  : "Business and management experts from top universities and global corporations"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-4">
                      <Image 
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&auto=format&fit=crop&crop=face"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&crop=face"
                            : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&auto=format&fit=crop&crop=face"
                        }
                        alt={language === "ar" ? member.nameAr : member.name}
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{language === "ar" ? member.nameAr : member.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {language === "ar" ? member.titleAr : member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>{member.education}</p>
                      <p className="font-medium">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {language === "ar" ? "ابدأ رحلتك القيادية اليوم" : "Start Your Leadership Journey Today"}
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              {language === "ar"
                ? "انضم إلى برنامج ماجستير إدارة الأعمال وطور مهاراتك القيادية"
                : "Join our MBA program and develop the leadership skills for tomorrow's challenges"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">{language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                {language === "ar" ? "تحدث مع مستشار" : "Speak with Advisor"}
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
