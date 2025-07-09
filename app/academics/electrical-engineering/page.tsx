"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { Zap, Cpu, Radio, Battery, Lightbulb, Settings, ArrowRight, Clock, MapPin, Users } from "lucide-react"

export default function ElectricalEngineeringPage() {
  const { t, language } = useLanguage()

  const programHighlights = [
    {
      icon: Zap,
      title: language === "ar" ? "أنظمة الطاقة" : "Power Systems",
      description:
        language === "ar"
          ? "تصميم وتشغيل شبكات الطاقة الكهربائية والمحطات"
          : "Design and operation of electrical power networks and stations",
    },
    {
      icon: Cpu,
      title: language === "ar" ? "الإلكترونيات الرقمية" : "Digital Electronics",
      description:
        language === "ar"
          ? "تطوير الدوائر الرقمية والمعالجات الدقيقة"
          : "Development of digital circuits and microprocessors",
    },
    {
      icon: Radio,
      title: language === "ar" ? "الاتصالات" : "Communications",
      description:
        language === "ar"
          ? "أنظمة الاتصالات اللاسلكية والألياف البصرية"
          : "Wireless communication systems and fiber optics",
    },
    {
      icon: Settings,
      title: language === "ar" ? "أنظمة التحكم" : "Control Systems",
      description:
        language === "ar" ? "تصميم أنظمة التحكم الآلي والروبوتات" : "Design of automation control systems and robotics",
    },
    {
      icon: Battery,
      title: language === "ar" ? "الطاقة المتجددة" : "Renewable Energy",
      description:
        language === "ar" ? "تقنيات الطاقة الشمسية وطاقة الرياح" : "Solar energy and wind power technologies",
    },
    {
      icon: Lightbulb,
      title: language === "ar" ? "الإضاءة الذكية" : "Smart Lighting",
      description:
        language === "ar" ? "أنظمة الإضاءة الذكية وكفاءة الطاقة" : "Smart lighting systems and energy efficiency",
    },
  ]

  const curriculum = [
    {
      year: language === "ar" ? "السنة الأولى" : "First Year",
      courses: [
        language === "ar" ? "أساسيات الهندسة الكهربائية" : "Electrical Engineering Fundamentals",
        language === "ar" ? "الرياضيات الهندسية" : "Engineering Mathematics",
        language === "ar" ? "الفيزياء للمهندسين" : "Physics for Engineers",
        language === "ar" ? "الدوائر الكهربائية" : "Electric Circuits",
      ],
    },
    {
      year: language === "ar" ? "السنة الثانية" : "Second Year",
      courses: [
        language === "ar" ? "الإلكترونيات التناظرية" : "Analog Electronics",
        language === "ar" ? "المجالات الكهرومغناطيسية" : "Electromagnetic Fields",
        language === "ar" ? "الآلات الكهربائية" : "Electrical Machines",
        language === "ar" ? "معالجة الإشارات" : "Signal Processing",
      ],
    },
    {
      year: language === "ar" ? "السنة الثالثة" : "Third Year",
      courses: [
        language === "ar" ? "أنظمة الطاقة" : "Power Systems",
        language === "ar" ? "أنظمة التحكم" : "Control Systems",
        language === "ar" ? "الاتصالات الرقمية" : "Digital Communications",
        language === "ar" ? "الإلكترونيات الرقمية" : "Digital Electronics",
      ],
    },
    {
      year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
      courses: [
        language === "ar" ? "مشروع التخرج" : "Capstone Project",
        language === "ar" ? "الطاقة المتجددة" : "Renewable Energy",
        language === "ar" ? "الشبكات الذكية" : "Smart Grids",
        language === "ar" ? "أخلاقيات الهندسة" : "Engineering Ethics",
      ],
    },
  ]

  const faculty = [
    {
      name: "Dr. Omar Ali",
      nameAr: "د. عمر علي",
      title: "Professor of Electrical Engineering",
      titleAr: "أستاذ الهندسة الكهربائية",
      specialization: "Power Systems & Smart Grids",
      specializationAr: "أنظمة الطاقة والشبكات الذكية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&auto=format&fit=crop&crop=faces",
    },
    {
      name: "Dr. Amina Hassan",
      nameAr: "د. أمينة حسن",
      title: "Associate Professor",
      titleAr: "أستاذة مشاركة",
      specialization: "Electronics & Communications",
      specializationAr: "الإلكترونيات والاتصالات",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&auto=format&fit=crop&crop=faces",
    },
    {
      name: "Dr. Khalid Mohamed",
      nameAr: "د. خالد محمد",
      title: "Assistant Professor",
      titleAr: "أستاذ مساعد",
      specialization: "Control Systems & Automation",
      specializationAr: "أنظمة التحكم والأتمتة",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&auto=format&fit=crop&crop=faces",
    },
  ]

  const careerPaths = [
    {
      title: language === "ar" ? "مهندس طاقة" : "Power Engineer",
      description: language === "ar" ? "تصميم وصيانة أنظمة الطاقة" : "Design and maintain power systems",
      icon: Zap,
    },
    {
      title: language === "ar" ? "مهندس إلكترونيات" : "Electronics Engineer",
      description: language === "ar" ? "تطوير الأجهزة الإلكترونية" : "Develop electronic devices",
      icon: Cpu,
    },
    {
      title: language === "ar" ? "مهندس اتصالات" : "Communications Engineer",
      description: language === "ar" ? "تصميم أنظمة الاتصالات" : "Design communication systems",
      icon: Radio,
    },
    {
      title: language === "ar" ? "مهندس تحكم" : "Control Engineer",
      description: language === "ar" ? "تطوير أنظمة التحكم الآلي" : "Develop automation control systems",
      icon: Settings,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-950/20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr_500px] items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
                  {language === "ar" ? "كلية الهندسة" : "Faculty of Engineering"}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "الهندسة الكهربائية والإلكترونية" : "Electrical & Electronic Engineering"}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "برنامج شامل يجمع بين النظرية والتطبيق في الهندسة الكهربائية مع التركيز على التقنيات الحديثة"
                    : "Comprehensive program combining theory and practice in electrical engineering with focus on modern technologies"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 px-6 md:px-8 py-3 md:py-4 rounded-xl">
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
                  {language === "ar" ? "130 ساعة معتمدة" : "130 Credit Hours"}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {language === "ar" ? "في الحرم الجامعي" : "On Campus"}
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=800&auto=format&fit=crop"
                alt="Electrical Engineering Lab"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-yellow-600" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      {language === "ar" ? "تقنيات متطورة" : "Advanced Technology"}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "مختبرات حديثة" : "Modern Labs"}
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
                ? "استكشف المجالات المتنوعة في الهندسة الكهربائية واختر مسارك المهني"
                : "Explore diverse areas in electrical engineering and choose your career path"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 md:h-14 md:w-14 bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-6 w-6 md:h-7 md:w-7 text-yellow-600" />
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
                ? "منهج شامل مصمم لإعدادك لصناعة الهندسة الكهربائية المتطورة"
                : "Comprehensive curriculum designed to prepare you for the evolving electrical engineering industry"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="h-8 w-8 md:h-10 md:w-10 bg-yellow-600 text-white rounded-xl flex items-center justify-center font-bold text-sm md:text-base">
                      {index + 1}
                    </div>
                    {year.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <div className="h-2 w-2 bg-yellow-600 rounded-full flex-shrink-0" />
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
                ? "فرص وظيفية متنوعة في مجال الهندسة الكهربائية"
                : "Diverse career opportunities in electrical engineering"}
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((career, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group overflow-hidden"
              >
                <div className="h-40 relative">
                  <Image
                    src={
                      index === 0
                        ? "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?w=400&h=200&auto=format&fit=crop"
                        : index === 1
                        ? "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&auto=format&fit=crop"
                        : index === 2
                        ? "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&auto=format&fit=crop"
                        : "https://images.unsplash.com/photo-1549605659-32d82da3a059?w=400&h=200&auto=format&fit=crop"
                    }
                    alt={career.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="h-14 w-14 bg-yellow-100/90 rounded-full flex items-center justify-center">
                      <career.icon className="h-7 w-7 text-yellow-600" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
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
                ? "تعلم من خبراء متميزين في مجال الهندسة الكهربائية"
                : "Learn from distinguished experts in electrical engineering"}
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
                  <CardDescription className="text-yellow-600 font-medium">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="container px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            {language === "ar" ? "ابدأ مستقبلك في الهندسة الكهربائية" : "Start Your Future in Electrical Engineering"}
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">
            {language === "ar"
              ? "انضم إلى برنامج الهندسة الكهربائية وكن جزءاً من ثورة التكنولوجيا"
              : "Join our Electrical Engineering program and be part of the technology revolution"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl">
              <link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
              {language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}
              </link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-xl border-white text-white hover:bg-white hover:text-yellow-600 bg-transparent"
            >
              <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
