"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  Building,
  Ruler,
  Palette,
  TreePine,
  Home,
  Lightbulb,
  ArrowRight,
  Clock,
  MapPin,
  Users,
  Award,
} from "lucide-react"

export default function ArchitecturePage() {
  const { t, language } = useLanguage()

  const programHighlights = [
    {
      icon: Building,
      title: language === "ar" ? "التصميم المعماري" : "Architectural Design",
      description:
        language === "ar"
          ? "تطوير مهارات التصميم المعماري والإبداعي"
          : "Develop architectural and creative design skills",
    },
    {
      icon: TreePine,
      title: language === "ar" ? "العمارة المستدامة" : "Sustainable Architecture",
      description:
        language === "ar"
          ? "تصميم مباني صديقة للبيئة وموفرة للطاقة"
          : "Design environmentally friendly and energy-efficient buildings",
    },
    {
      icon: Ruler,
      title: language === "ar" ? "التخطيط العمراني" : "Urban Planning",
      description: language === "ar" ? "تخطيط المدن والمجتمعات العمرانية" : "Planning cities and urban communities",
    },
    {
      icon: Palette,
      title: language === "ar" ? "التصميم الداخلي" : "Interior Design",
      description: language === "ar" ? "تصميم المساحات الداخلية والديكور" : "Design interior spaces and decoration",
    },
    {
      icon: Home,
      title: language === "ar" ? "العمارة السكنية" : "Residential Architecture",
      description: language === "ar" ? "تصميم المباني السكنية والمجمعات" : "Design residential buildings and complexes",
    },
    {
      icon: Lightbulb,
      title: language === "ar" ? "التقنيات الذكية" : "Smart Technologies",
      description:
        language === "ar"
          ? "دمج التقنيات الذكية في التصميم المعماري"
          : "Integrate smart technologies in architectural design",
    },
  ]

  const curriculum = [
    {
      year: language === "ar" ? "السنة الأولى" : "First Year",
      courses: [
        language === "ar" ? "أساسيات التصميم المعماري" : "Architectural Design Fundamentals",
        language === "ar" ? "الرسم المعماري" : "Architectural Drawing",
        language === "ar" ? "تاريخ العمارة" : "History of Architecture",
        language === "ar" ? "الرياضيات للمعماريين" : "Mathematics for Architects",
      ],
    },
    {
      year: language === "ar" ? "السنة الثانية" : "Second Year",
      courses: [
        language === "ar" ? "التصميم المعماري المتقدم" : "Advanced Architectural Design",
        language === "ar" ? "مواد البناء" : "Building Materials",
        language === "ar" ? "الإنشاءات المعمارية" : "Architectural Structures",
        language === "ar" ? "التصميم بالحاسوب" : "Computer-Aided Design",
      ],
    },
    {
      year: language === "ar" ? "السنة الثالثة" : "Third Year",
      courses: [
        language === "ar" ? "التخطيط العمراني" : "Urban Planning",
        language === "ar" ? "العمارة المستدامة" : "Sustainable Architecture",
        language === "ar" ? "التصميم الداخلي" : "Interior Design",
        language === "ar" ? "إدارة المشاريع المعمارية" : "Architectural Project Management",
      ],
    },
    {
      year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
      courses: [
        language === "ar" ? "مشروع التخرج" : "Capstone Project",
        language === "ar" ? "العمارة الذكية" : "Smart Architecture",
        language === "ar" ? "ترميم المباني التراثية" : "Heritage Building Restoration",
        language === "ar" ? "أخلاقيات المهنة" : "Professional Ethics",
      ],
    },
  ]

  const faculty = [
    {
      name: "Dr. Khalid Osman",
      nameAr: "د. خالد عثمان",
      title: "Professor of Architecture",
      titleAr: "أستاذ العمارة",
      specialization: "Sustainable Design & Urban Planning",
      specializationAr: "التصميم المستدام والتخطيط العمراني",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Dr. Maryam Ibrahim",
      nameAr: "د. مريم إبراهيم",
      title: "Associate Professor",
      titleAr: "أستاذة مشاركة",
      specialization: "Interior Design & Heritage Architecture",
      specializationAr: "التصميم الداخلي والعمارة التراثية",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Dr. Hassan Ali",
      nameAr: "د. حسن علي",
      title: "Assistant Professor",
      titleAr: "أستاذ مساعد",
      specialization: "Digital Architecture & Smart Buildings",
      specializationAr: "العمارة الرقمية والمباني الذكية",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
  ]

  const careerPaths = [
    {
      title: language === "ar" ? "مهندس معماري" : "Architect",
      description: language === "ar" ? "تصميم المباني والمجمعات" : "Design buildings and complexes",
      icon: Building,
    },
    {
      title: language === "ar" ? "مخطط عمراني" : "Urban Planner",
      description: language === "ar" ? "تخطيط المدن والمناطق" : "Plan cities and regions",
      icon: Ruler,
    },
    {
      title: language === "ar" ? "مصمم داخلي" : "Interior Designer",
      description: language === "ar" ? "تصميم المساحات الداخلية" : "Design interior spaces",
      icon: Palette,
    },
    {
      title: language === "ar" ? "استشاري معماري" : "Architectural Consultant",
      description: language === "ar" ? "تقديم الاستشارات المعمارية" : "Provide architectural consultancy",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950/20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_500px] items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200">
                  {language === "ar" ? "كلية الهندسة" : "Faculty of Engineering"}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "هندسة العمارة" : "Architecture Engineering"}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "برنامج شامل لتطوير مهارات التصميم المعماري والتخطيط العمراني مع التركيز على الاستدامة والابتكار"
                    : "Comprehensive program to develop architectural design and urban planning skills with focus on sustainability and innovation"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-600 hover:bg-gray-700 px-6 md:px-8 py-3 md:py-4 rounded-xl">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  </Link>
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
                  {language === "ar" ? "140 ساعة معتمدة" : "140 Credit Hours"}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {language === "ar" ? "في الحرم الجامعي" : "On Campus"}
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
                alt="Architecture Studio"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      {language === "ar" ? "تصميم إبداعي" : "Creative Design"}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "استوديوهات متطورة" : "Advanced Studios"}
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
                ? "استكشف المجالات المتنوعة في هندسة العمارة واختر مسارك المهني"
                : "Explore diverse areas in architecture engineering and choose your career path"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 bg-gray-100 dark:bg-gray-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 md:h-7 md:w-7 text-gray-600" />
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
                ? "منهج شامل مصمم لإعدادك لمهنة العمارة المتطورة"
                : "Comprehensive curriculum designed to prepare you for the evolving architecture profession"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="h-8 w-8 md:h-10 md:w-10 bg-gray-600 text-white rounded-xl flex items-center justify-center font-bold text-sm md:text-base">
                      {index + 1}
                    </div>
                    {year.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <div className="h-2 w-2 bg-gray-600 rounded-full flex-shrink-0" />
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
                ? "فرص وظيفية متنوعة في مجال العمارة والتصميم"
                : "Diverse career opportunities in architecture and design"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((career, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto h-12 w-12 md:h-16 md:w-16 bg-gray-100 dark:bg-gray-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <career.icon className="h-6 w-6 md:h-8 md:w-8 text-gray-600" />
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
                ? "تعلم من خبراء متميزين في مجال هندسة العمارة"
                : "Learn from distinguished experts in architecture engineering"}
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
                      src={member.image || "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"}
                      alt={language === "ar" ? member.nameAr : member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-gray-900 dark:text-white">
                    {language === "ar" ? member.nameAr : member.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 font-medium">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-gray-600 to-gray-800 text-white">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {language === "ar" ? "ابدأ مستقبلك في هندسة العمارة" : "Start Your Future in Architecture Engineering"}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
            {language === "ar"
              ? "انضم إلى برنامج هندسة العمارة وكن جزءاً من تشكيل المستقبل العمراني"
              : "Join our Architecture Engineering program and be part of shaping the urban future"}
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
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl border-white text-white hover:bg-white hover:text-gray-600 bg-transparent"
            >
              <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
