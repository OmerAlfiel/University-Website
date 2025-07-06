"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  Computer,
  Code,
  Database,
  Brain,
  Smartphone,
  Globe,
  Users,
  Award,
  ArrowRight,
  Clock,
  MapPin,
} from "lucide-react"

export default function ComputerSciencePage() {
  const { t, language } = useLanguage()

  const programHighlights = [
    {
      icon: Code,
      title: language === "ar" ? "تطوير البرمجيات" : "Software Development",
      description:
        language === "ar"
          ? "تعلم لغات البرمجة الحديثة وتقنيات التطوير المتقدمة"
          : "Learn modern programming languages and advanced development techniques",
    },
    {
      icon: Brain,
      title: language === "ar" ? "الذكاء الاصطناعي" : "Artificial Intelligence",
      description:
        language === "ar"
          ? "استكشف التعلم الآلي والشبكات العصبية والذكاء الاصطناعي"
          : "Explore machine learning, neural networks, and AI technologies",
    },
    {
      icon: Database,
      title: language === "ar" ? "علوم البيانات" : "Data Science",
      description:
        language === "ar"
          ? "تحليل البيانات الضخمة واستخراج الرؤى القيمة"
          : "Analyze big data and extract valuable insights",
    },
    {
      icon: Globe,
      title: language === "ar" ? "تطوير الويب" : "Web Development",
      description:
        language === "ar" ? "إنشاء تطبيقات ويب حديثة وتفاعلية" : "Create modern and interactive web applications",
    },
    {
      icon: Smartphone,
      title: language === "ar" ? "تطوير التطبيقات" : "Mobile Development",
      description:
        language === "ar"
          ? "تطوير تطبيقات الهواتف الذكية متعددة المنصات"
          : "Develop cross-platform mobile applications",
    },
    {
      icon: Award,
      title: language === "ar" ? "الأمن السيبراني" : "Cybersecurity",
      description:
        language === "ar"
          ? "حماية الأنظمة والشبكات من التهديدات الرقمية"
          : "Protect systems and networks from digital threats",
    },
  ]

  const curriculum = [
    {
      year: language === "ar" ? "السنة الأولى" : "First Year",
      courses: [
        language === "ar" ? "أساسيات البرمجة" : "Programming Fundamentals",
        language === "ar" ? "الرياضيات المتقطعة" : "Discrete Mathematics",
        language === "ar" ? "مقدمة في علوم الحاسوب" : "Introduction to Computer Science",
        language === "ar" ? "هياكل البيانات" : "Data Structures",
      ],
    },
    {
      year: language === "ar" ? "السنة الثانية" : "Second Year",
      courses: [
        language === "ar" ? "الخوارزميات" : "Algorithms",
        language === "ar" ? "قواعد البيانات" : "Database Systems",
        language === "ar" ? "هندسة البرمجيات" : "Software Engineering",
        language === "ar" ? "أنظمة التشغيل" : "Operating Systems",
      ],
    },
    {
      year: language === "ar" ? "السنة الثالثة" : "Third Year",
      courses: [
        language === "ar" ? "الذكاء الاصطناعي" : "Artificial Intelligence",
        language === "ar" ? "شبكات الحاسوب" : "Computer Networks",
        language === "ar" ? "تطوير الويب" : "Web Development",
        language === "ar" ? "الأمن السيبراني" : "Cybersecurity",
      ],
    },
    {
      year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
      courses: [
        language === "ar" ? "مشروع التخرج" : "Capstone Project",
        language === "ar" ? "التعلم الآلي" : "Machine Learning",
        language === "ar" ? "الحوسبة السحابية" : "Cloud Computing",
        language === "ar" ? "ريادة الأعمال التقنية" : "Tech Entrepreneurship",
      ],
    },
  ]

  const faculty = [
    {
      name: "Dr. Ahmed Hassan",
      nameAr: "د. أحمد حسن",
      title: "Professor of Computer Science",
      titleAr: "أستاذ علوم الحاسوب",
      specialization: "Artificial Intelligence & Machine Learning",
      specializationAr: "الذكاء الاصطناعي والتعلم الآلي",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Sarah Mohamed",
      nameAr: "د. سارة محمد",
      title: "Associate Professor",
      titleAr: "أستاذ مشارك",
      specialization: "Software Engineering & Data Science",
      specializationAr: "هندسة البرمجيات وعلوم البيانات",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Omar Ali",
      nameAr: "د. عمر علي",
      title: "Assistant Professor",
      titleAr: "أستاذ مساعد",
      specialization: "Cybersecurity & Network Systems",
      specializationAr: "الأمن السيبراني وأنظمة الشبكات",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const facilities = [
    {
      name: language === "ar" ? "مختبر البرمجة المتقدم" : "Advanced Programming Lab",
      description:
        language === "ar"
          ? "مجهز بأحدث أجهزة الكمبيوتر وبيئات التطوير المتكاملة"
          : "Equipped with latest computers and integrated development environments",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: language === "ar" ? "مختبر الذكاء الاصطناعي" : "AI Research Lab",
      description:
        language === "ar"
          ? "مختبر متخصص للبحث في الذكاء الاصطناعي والتعلم الآلي"
          : "Specialized lab for AI and machine learning research",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: language === "ar" ? "مركز الابتكار التقني" : "Tech Innovation Center",
      description:
        language === "ar"
          ? "مساحة للطلاب لتطوير مشاريعهم التقنية والشركات الناشئة"
          : "Space for students to develop tech projects and startups",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_500px] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
                  {language === "ar" ? "كلية الهندسة" : "Faculty of Engineering"}
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "علوم الحاسوب" : "Computer Science"}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "برنامج شامل يجمع بين النظرية والتطبيق في علوم الحاسوب، مع التركيز على التقنيات الحديثة والابتكار"
                    : "Comprehensive program combining theory and practice in computer science, focusing on modern technologies and innovation"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl bg-transparent">
                  {language === "ar" ? "تحميل المنهج" : "Download Curriculum"}
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
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
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Computer Science Lab"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Computer className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {language === "ar" ? "أحدث التقنيات" : "Latest Technology"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "مختبرات متطورة" : "Advanced Labs"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "مجالات التخصص" : "Specialization Areas"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "استكشف المجالات المتنوعة في علوم الحاسوب واختر مسارك المهني"
                : "Explore diverse areas in computer science and choose your career path"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader>
                  <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{highlight.title}</CardTitle>
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المنهج الدراسي" : "Curriculum"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "منهج شامل مصمم لإعدادك لسوق العمل التقني المتطور"
                : "Comprehensive curriculum designed to prepare you for the evolving tech industry"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {year.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <div className="h-2 w-2 bg-blue-600 rounded-full" />
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "تعلم من خبراء متميزين في مجال علوم الحاسوب"
                : "Learn from distinguished experts in computer science"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {faculty.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <CardHeader>
                  <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={language === "ar" ? member.nameAr : member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {language === "ar" ? member.nameAr : member.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {language === "ar" ? member.titleAr : member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "ar" ? member.specializationAr : member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المرافق والمختبرات" : "Facilities & Labs"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "مرافق حديثة مجهزة بأحدث التقنيات لتعزيز تجربة التعلم"
                : "Modern facilities equipped with cutting-edge technology to enhance learning experience"}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
              >
                <div className="relative">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.name}
                    width={300}
                    height={200}
                    className="aspect-[3/2] object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{facility.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container px-6 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === "ar" ? "ابدأ مستقبلك في علوم الحاسوب" : "Start Your Future in Computer Science"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {language === "ar"
              ? "انضم إلى برنامج علوم الحاسوب وكن جزءاً من ثورة التكنولوجيا"
              : "Join our Computer Science program and be part of the technology revolution"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg rounded-xl">
              {language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
