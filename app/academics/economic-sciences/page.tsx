"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { TrendingUp, Clock, Users, Award, BarChart3, Globe, DollarSign, Target, Building } from "lucide-react"
import Link from "next/link"

export default function EconomicSciencesPage() {
  const { language } = useLanguage()

  const coursework = [
    {
      title: "Microeconomics",
      titleAr: "الاقتصاد الجزئي",
      description: "Individual and firm behavior in markets",
      descriptionAr: "سلوك الأفراد والشركات في الأسواق",
      credits: 3,
    },
    {
      title: "Macroeconomics",
      titleAr: "الاقتصاد الكلي",
      description: "National and international economic systems",
      descriptionAr: "الأنظمة الاقتصادية الوطنية والدولية",
      credits: 3,
    },
    {
      title: "Econometrics",
      titleAr: "الاقتصاد القياسي",
      description: "Statistical analysis of economic data",
      descriptionAr: "التحليل الإحصائي للبيانات الاقتصادية",
      credits: 4,
    },
    {
      title: "International Economics",
      titleAr: "الاقتصاد الدولي",
      description: "Global trade and financial systems",
      descriptionAr: "التجارة العالمية والأنظمة المالية",
      credits: 3,
    },
    {
      title: "Development Economics",
      titleAr: "اقتصاد التنمية",
      description: "Economic growth and development strategies",
      descriptionAr: "النمو الاقتصادي واستراتيجيات التنمية",
      credits: 3,
    },
    {
      title: "Financial Economics",
      titleAr: "الاقتصاد المالي",
      description: "Financial markets and investment theory",
      descriptionAr: "الأسواق المالية ونظرية الاستثمار",
      credits: 3,
    },
  ]

  const careerPaths = [
    {
      title: "Economic Analyst",
      titleAr: "محلل اقتصادي",
      salary: "$65,000 - $95,000",
      description: "Analyze economic trends and market conditions",
      descriptionAr: "تحليل الاتجاهات الاقتصادية وظروف السوق",
    },
    {
      title: "Financial Advisor",
      titleAr: "مستشار مالي",
      salary: "$55,000 - $120,000",
      description: "Provide investment and financial planning advice",
      descriptionAr: "تقديم المشورة في الاستثمار والتخطيط المالي",
    },
    {
      title: "Policy Analyst",
      titleAr: "محلل سياسات",
      salary: "$60,000 - $85,000",
      description: "Research and analyze government policies",
      descriptionAr: "بحث وتحليل السياسات الحكومية",
    },
    {
      title: "Research Economist",
      titleAr: "باحث اقتصادي",
      salary: "$70,000 - $110,000",
      description: "Conduct economic research and forecasting",
      descriptionAr: "إجراء البحوث الاقتصادية والتنبؤ",
    },
  ]

  const specializations = [
    {
      title: "Applied Economics",
      titleAr: "الاقتصاد التطبيقي",
      description: "Practical application of economic theory",
      descriptionAr: "التطبيق العملي للنظرية الاقتصادية",
      icon: Target,
    },
    {
      title: "Economic Statistics",
      titleAr: "الإحصاء الاقتصادي",
      description: "Statistical methods in economic analysis",
      descriptionAr: "الطرق الإحصائية في التحليل الاقتصادي",
      icon: BarChart3,
    },
    {
      title: "Public Economics",
      titleAr: "الاقتصاد العام",
      description: "Government role in the economy",
      descriptionAr: "دور الحكومة في الاقتصاد",
      icon: Building,
    },
    {
      title: "International Trade",
      titleAr: "التجارة الدولية",
      description: "Global economic relationships",
      descriptionAr: "العلاقات الاقتصادية العالمية",
      icon: Globe,
    },
  ]

  const faculty = [
    {
      name: "Dr. Fatima Al-Zahra",
      nameAr: "د. فاطمة الزهراء",
      title: "Professor of Economics",
      titleAr: "أستاذة الاقتصاد",
      education: "PhD Economics, Cambridge University",
      specialization: "Development Economics",
    },
    {
      name: "Dr. Mohamed Osman",
      nameAr: "د. محمد عثمان",
      title: "Associate Professor",
      titleAr: "أستاذ مشارك",
      education: "PhD Economics, LSE",
      specialization: "Econometrics",
    },
    {
      name: "Dr. Amira Hassan",
      nameAr: "د. أميرة حسن",
      title: "Assistant Professor",
      titleAr: "أستاذة مساعدة",
      education: "PhD Economics, Oxford University",
      specialization: "International Economics",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              {language === "ar" ? "العلوم الاقتصادية" : "Economic Sciences"}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "فهم الأسواق والسياسات الاقتصادية لبناء مستقبل مستدام"
                : "Understanding markets and economic policies to build a sustainable future"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "280+ طالب" : "280+ Students"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Award className="h-4 w-4 mr-2" />
                {language === "ar" ? "128 ساعة معتمدة" : "128 Credit Hours"}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact" className="flex items-center">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-700 px-8 py-4 text-lg font-semibold bg-transparent"
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
                  ? "برنامج شامل يجمع بين النظرية الاقتصادية والتطبيق العملي لفهم الأسواق والسياسات الاقتصادية"
                  : "A comprehensive program combining economic theory with practical application to understand markets and economic policies"}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {specializations.map((spec, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 text-center"
                >
                  <CardHeader>
                    <div className="h-16 w-16 bg-orange-100 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <spec.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{language === "ar" ? spec.titleAr : spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {language === "ar" ? spec.descriptionAr : spec.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                {language === "ar" ? "المناهج الأساسية" : "Core Curriculum"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "مناهج متقدمة تغطي جميع جوانب العلوم الاقتصادية الحديثة"
                  : "Advanced curriculum covering all aspects of modern economic sciences"}
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
                {language === "ar" ? "المسارات المهنية" : "Career Opportunities"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "فرص وظيفية متنوعة في القطاعين العام والخاص"
                  : "Diverse career opportunities in both public and private sectors"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {careerPaths.map((career, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 dark:hover:border-orange-800"
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
                      <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-orange-600" />
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
                {language === "ar" ? "أعضاء هيئة التدريس" : "Expert Faculty"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "خبراء في الاقتصاد من أفضل الجامعات العالمية"
                  : "Economics experts from world-renowned universities"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {(language === "ar" ? member.nameAr : member.name).charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{language === "ar" ? member.nameAr : member.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {language === "ar" ? member.titleAr : member.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>{member.education}</p>
                      <p className="font-medium text-orange-600">{member.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {language === "ar" ? "ابدأ مسيرتك في الاقتصاد" : "Start Your Economics Journey"}
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              {language === "ar"
                ? "انضم إلى برنامج العلوم الاقتصادية وساهم في بناء اقتصاد مستدام"
                : "Join our Economic Sciences program and contribute to building a sustainable economy"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">{language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold bg-transparent"
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
