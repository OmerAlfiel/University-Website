"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  Briefcase,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Clock,
  MapPin,
  BarChart,
  DollarSign,
  Globe,
} from "lucide-react"

export default function BusinessAdministrationPage() {
  const { t, language } = useLanguage()

  const programHighlights = [
    {
      icon: TrendingUp,
      title: language === "ar" ? "إدارة الأعمال الاستراتيجية" : "Strategic Business Management",
      description:
        language === "ar"
          ? "تعلم كيفية وضع الاستراتيجيات وإدارة المؤسسات بفعالية"
          : "Learn how to develop strategies and manage organizations effectively",
    },
    {
      icon: DollarSign,
      title: language === "ar" ? "الإدارة المالية" : "Financial Management",
      description:
        language === "ar"
          ? "فهم المبادئ المالية وإدارة الموارد المالية للشركات"
          : "Understand financial principles and manage corporate financial resources",
    },
    {
      icon: Users,
      title: language === "ar" ? "إدارة الموارد البشرية" : "Human Resource Management",
      description:
        language === "ar" ? "تطوير مهارات إدارة الفرق والموظفين" : "Develop skills in team and employee management",
    },
    {
      icon: BarChart,
      title: language === "ar" ? "التسويق والمبيعات" : "Marketing & Sales",
      description:
        language === "ar"
          ? "استراتيجيات التسويق الحديثة وتقنيات المبيعات"
          : "Modern marketing strategies and sales techniques",
    },
    {
      icon: Globe,
      title: language === "ar" ? "الأعمال الدولية" : "International Business",
      description:
        language === "ar"
          ? "فهم الأسواق العالمية والتجارة الدولية"
          : "Understanding global markets and international trade",
    },
    {
      icon: Award,
      title: language === "ar" ? "ريادة الأعمال" : "Entrepreneurship",
      description:
        language === "ar"
          ? "تطوير مهارات إنشاء وإدارة المشاريع الجديدة"
          : "Develop skills in creating and managing new ventures",
    },
  ]

  const curriculum = [
    {
      year: language === "ar" ? "السنة الأولى" : "First Year",
      courses: [
        language === "ar" ? "مبادئ الإدارة" : "Principles of Management",
        language === "ar" ? "مبادئ المحاسبة" : "Principles of Accounting",
        language === "ar" ? "الاقتصاد الجزئي" : "Microeconomics",
        language === "ar" ? "الرياضيات للأعمال" : "Business Mathematics",
      ],
    },
    {
      year: language === "ar" ? "السنة الثانية" : "Second Year",
      courses: [
        language === "ar" ? "الإدارة المالية" : "Financial Management",
        language === "ar" ? "إدارة التسويق" : "Marketing Management",
        language === "ar" ? "الاقتصاد الكلي" : "Macroeconomics",
        language === "ar" ? "إدارة العمليات" : "Operations Management",
      ],
    },
    {
      year: language === "ar" ? "السنة الثالثة" : "Third Year",
      courses: [
        language === "ar" ? "إدارة الموارد البشرية" : "Human Resource Management",
        language === "ar" ? "الإدارة الاستراتيجية" : "Strategic Management",
        language === "ar" ? "نظم المعلومات الإدارية" : "Management Information Systems",
        language === "ar" ? "القانون التجاري" : "Business Law",
      ],
    },
    {
      year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
      courses: [
        language === "ar" ? "مشروع التخرج" : "Capstone Project",
        language === "ar" ? "ريادة الأعمال" : "Entrepreneurship",
        language === "ar" ? "الأعمال الدولية" : "International Business",
        language === "ar" ? "أخلاقيات الأعمال" : "Business Ethics",
      ],
    },
  ]

  const faculty = [
    {
      name: "Dr. Ahmed Hassan",
      nameAr: "د. أحمد حسن",
      title: "Professor of Business Administration",
      titleAr: "أستاذ إدارة الأعمال",
      specialization: "Strategic Management & Leadership",
      specializationAr: "الإدارة الاستراتيجية والقيادة",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&auto=format&fit=crop&crop=face",
    },
    {
      name: "Dr. Fatima Mohamed",
      nameAr: "د. فاطمة محمد",
      title: "Associate Professor",
      titleAr: "أستاذة مشاركة",
      specialization: "Marketing & Consumer Behavior",
      specializationAr: "التسويق وسلوك المستهلك",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&crop=face",
    },
    {
      name: "Dr. Omar Ali",
      nameAr: "د. عمر علي",
      title: "Assistant Professor",
      titleAr: "أستاذ مساعد",
      specialization: "Finance & Investment",
      specializationAr: "المالية والاستثمار",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=200&h=200&auto=format&fit=crop&crop=face",
    },
  ]

  const careerPaths = [
    {
      title: language === "ar" ? "مدير عام" : "General Manager",
      description: language === "ar" ? "إدارة الشركات والمؤسسات" : "Managing companies and organizations",
      icon: Briefcase,
    },
    {
      title: language === "ar" ? "مدير تسويق" : "Marketing Manager",
      description: language === "ar" ? "تطوير استراتيجيات التسويق" : "Developing marketing strategies",
      icon: TrendingUp,
    },
    {
      title: language === "ar" ? "مدير مالي" : "Financial Manager",
      description: language === "ar" ? "إدارة الموارد المالية" : "Managing financial resources",
      icon: DollarSign,
    },
    {
      title: language === "ar" ? "رائد أعمال" : "Entrepreneur",
      description: language === "ar" ? "إنشاء وإدارة المشاريع الخاصة" : "Creating and managing own ventures",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950/20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_500px] items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200">
                  {language === "ar" ? "كلية إدارة الأعمال" : "Faculty of Business"}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "إدارة الأعمال" : "Business Administration"}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "برنامج شامل لإعداد قادة الأعمال المستقبليين مع التركيز على الإدارة الاستراتيجية والابتكار"
                    : "Comprehensive program to prepare future business leaders with focus on strategic management and innovation"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-6 md:px-8 py-3 md:py-4 rounded-xl">
                  <link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  </link>
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-6 md:px-8 py-3 md:py-4 rounded-xl bg-transparent">
                  {language === "ar" ? "تحميل المنهج" : "Download Curriculum"}
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {language === "ar" ? "4 سنوات" : "4 Years"}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {language === "ar" ? "120 ساعة معتمدة" : "120 Credit Hours"}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {language === "ar" ? "في الحرم الجامعي" : "On Campus"}
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
                alt="Business Administration - Modern Office Building"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      {language === "ar" ? "قادة المستقبل" : "Future Leaders"}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "تعليم متميز" : "Excellence in Education"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "مجالات التخصص" : "Specialization Areas"}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "استكشف المجالات المتنوعة في إدارة الأعمال واختر مسارك المهني"
                : "Explore diverse areas in business administration and choose your career path"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 md:h-7 md:w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المنهج الدراسي" : "Curriculum"}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "منهج شامل مصمم لإعدادك لعالم الأعمال المتطور"
                : "Comprehensive curriculum designed to prepare you for the evolving business world"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="h-8 w-8 md:h-10 md:w-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-sm md:text-base">
                      {index + 1}
                    </div>
                    {year.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <div className="h-2 w-2 bg-purple-600 rounded-full flex-shrink-0" />
                        <span className="text-sm md:text-base">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المسارات المهنية" : "Career Paths"}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "فرص وظيفية متنوعة في مجال الأعمال والإدارة"
                : "Diverse career opportunities in business and management"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((career, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <career.icon className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg text-gray-900 dark:text-white">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {career.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "تعلم من خبراء متميزين في مجال إدارة الأعمال"
                : "Learn from distinguished experts in business administration"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={language === "ar" ? member.nameAr : member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">
                    {language === "ar" ? member.nameAr : member.name}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {language === "ar" ? member.titleAr : member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {language === "ar" ? member.specializationAr : member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {language === "ar" ? "ابدأ مستقبلك في إدارة الأعمال" : "Start Your Future in Business Administration"}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
            {language === "ar"
              ? "انضم إلى برنامج إدارة الأعمال وكن جزءاً من قادة المستقبل"
              : "Join our Business Administration program and be part of future leaders"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
              {language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
