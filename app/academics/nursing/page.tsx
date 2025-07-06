"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { Heart, Stethoscope, Users, Award, ArrowRight, Clock, MapPin, Activity, Shield, Brain } from "lucide-react"

export default function NursingPage() {
  const { t, language } = useLanguage()

  const programHighlights = [
    {
      icon: Heart,
      title: language === "ar" ? "رعاية المرضى" : "Patient Care",
      description:
        language === "ar"
          ? "تعلم أساسيات الرعاية الصحية الشاملة والمتخصصة"
          : "Learn comprehensive and specialized healthcare fundamentals",
    },
    {
      icon: Stethoscope,
      title: language === "ar" ? "التمريض السريري" : "Clinical Nursing",
      description:
        language === "ar"
          ? "اكتساب خبرة عملية في بيئات الرعاية الصحية المختلفة"
          : "Gain practical experience in various healthcare environments",
    },
    {
      icon: Brain,
      title: language === "ar" ? "التمريض النفسي" : "Psychiatric Nursing",
      description:
        language === "ar" ? "فهم وعلاج اضطرابات الصحة النفسية" : "Understanding and treating mental health disorders",
    },
    {
      icon: Activity,
      title: language === "ar" ? "العناية المركزة" : "Critical Care",
      description:
        language === "ar"
          ? "رعاية المرضى في الحالات الحرجة والطوارئ"
          : "Care for patients in critical and emergency situations",
    },
    {
      icon: Users,
      title: language === "ar" ? "تمريض المجتمع" : "Community Nursing",
      description:
        language === "ar"
          ? "تقديم الرعاية الصحية في المجتمع والمنزل"
          : "Providing healthcare in community and home settings",
    },
    {
      icon: Shield,
      title: language === "ar" ? "مكافحة العدوى" : "Infection Control",
      description:
        language === "ar"
          ? "منع انتشار العدوى في البيئات الصحية"
          : "Preventing infection spread in healthcare environments",
    },
  ]

  const curriculum = [
    {
      year: language === "ar" ? "السنة الأولى" : "First Year",
      courses: [
        language === "ar" ? "أساسيات التمريض" : "Nursing Fundamentals",
        language === "ar" ? "علم التشريح وعلم وظائف الأعضاء" : "Anatomy & Physiology",
        language === "ar" ? "علم الأحياء الدقيقة" : "Microbiology",
        language === "ar" ? "التغذية العلاجية" : "Therapeutic Nutrition",
      ],
    },
    {
      year: language === "ar" ? "السنة الثانية" : "Second Year",
      courses: [
        language === "ar" ? "علم الأدوية" : "Pharmacology",
        language === "ar" ? "التمريض الطبي الجراحي" : "Medical-Surgical Nursing",
        language === "ar" ? "علم الأمراض" : "Pathology",
        language === "ar" ? "التمريض النفسي" : "Psychiatric Nursing",
      ],
    },
    {
      year: language === "ar" ? "السنة الثالثة" : "Third Year",
      courses: [
        language === "ar" ? "تمريض الأطفال" : "Pediatric Nursing",
        language === "ar" ? "تمريض الأمومة" : "Maternity Nursing",
        language === "ar" ? "العناية المركزة" : "Critical Care Nursing",
        language === "ar" ? "إدارة التمريض" : "Nursing Management",
      ],
    },
    {
      year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
      courses: [
        language === "ar" ? "التدريب السريري" : "Clinical Practicum",
        language === "ar" ? "بحوث التمريض" : "Nursing Research",
        language === "ar" ? "تمريض المجتمع" : "Community Health Nursing",
        language === "ar" ? "أخلاقيات التمريض" : "Nursing Ethics",
      ],
    },
  ]

  const faculty = [
    {
      name: "Dr. Fatima Ibrahim",
      nameAr: "د. فاطمة إبراهيم",
      title: "Professor of Nursing",
      titleAr: "أستاذة التمريض",
      specialization: "Critical Care & Emergency Nursing",
      specializationAr: "العناية المركزة وتمريض الطوارئ",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Aisha Mohamed",
      nameAr: "د. عائشة محمد",
      title: "Associate Professor",
      titleAr: "أستاذة مشاركة",
      specialization: "Pediatric & Maternity Nursing",
      specializationAr: "تمريض الأطفال والأمومة",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Maryam Ali",
      nameAr: "د. مريم علي",
      title: "Assistant Professor",
      titleAr: "أستاذة مساعدة",
      specialization: "Community Health & Psychiatric Nursing",
      specializationAr: "صحة المجتمع والتمريض النفسي",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const facilities = [
    {
      name: language === "ar" ? "مختبر المهارات السريرية" : "Clinical Skills Laboratory",
      description:
        language === "ar"
          ? "مختبر مجهز بأحدث المعدات الطبية لتدريب الطلاب"
          : "Laboratory equipped with latest medical equipment for student training",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: language === "ar" ? "وحدة المحاكاة الطبية" : "Medical Simulation Unit",
      description:
        language === "ar"
          ? "بيئة محاكاة واقعية لتدريب الطلاب على الحالات الطارئة"
          : "Realistic simulation environment for emergency case training",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: language === "ar" ? "مستشفى التدريب" : "Training Hospital",
      description:
        language === "ar"
          ? "شراكة مع المستشفيات المحلية للتدريب العملي"
          : "Partnership with local hospitals for practical training",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const careerPaths = [
    {
      title: language === "ar" ? "ممرض/ة سريري/ة" : "Clinical Nurse",
      description: language === "ar" ? "العمل في المستشفيات والعيادات" : "Work in hospitals and clinics",
      icon: Stethoscope,
    },
    {
      title: language === "ar" ? "ممرض/ة العناية المركزة" : "ICU Nurse",
      description: language === "ar" ? "رعاية المرضى في الحالات الحرجة" : "Care for critically ill patients",
      icon: Activity,
    },
    {
      title: language === "ar" ? "ممرض/ة المجتمع" : "Community Nurse",
      description: language === "ar" ? "تقديم الرعاية في المجتمع" : "Provide community-based care",
      icon: Users,
    },
    {
      title: language === "ar" ? "مدير/ة تمريض" : "Nursing Manager",
      description: language === "ar" ? "إدارة أقسام التمريض" : "Manage nursing departments",
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-950/20">
        <div className="container px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_500px] items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200">
                  {language === "ar" ? "كلية العلوم الصحية" : "Faculty of Health Sciences"}
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                  {language === "ar" ? "علوم التمريض" : "Nursing Science"}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {language === "ar"
                    ? "برنامج شامل لإعداد ممرضين مؤهلين قادرين على تقديم رعاية صحية متميزة ومتخصصة"
                    : "Comprehensive program to prepare qualified nurses capable of providing excellent and specialized healthcare"}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl">
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
                  {language === "ar" ? "130 ساعة معتمدة" : "130 Credit Hours"}
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
                alt="Nursing Lab"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">
                      {language === "ar" ? "رعاية متميزة" : "Excellence in Care"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {language === "ar" ? "تدريب عملي" : "Hands-on Training"}
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
                ? "استكشف المجالات المتنوعة في علوم التمريض واختر مسارك المهني"
                : "Explore diverse areas in nursing science and choose your career path"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader>
                  <div className="h-14 w-14 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <highlight.icon className="h-7 w-7 text-green-600" />
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
                ? "منهج شامل مصمم لإعدادك لمهنة التمريض المتطورة"
                : "Comprehensive curriculum designed to prepare you for the evolving nursing profession"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="h-10 w-10 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {year.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                        <div className="h-2 w-2 bg-green-600 rounded-full" />
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

      {/* Career Paths */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المسارات المهنية" : "Career Paths"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "فرص وظيفية متنوعة في مجال الرعاية الصحية"
                : "Diverse career opportunities in healthcare"}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {careerPaths.map((career, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
              >
                <CardHeader>
                  <div className="mx-auto h-16 w-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <career.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{career.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "تعلم من خبراء متميزين في مجال التمريض"
                : "Learn from distinguished experts in nursing"}
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
                  <CardDescription className="text-green-600 font-medium">
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
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {language === "ar" ? "المرافق والمختبرات" : "Facilities & Labs"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === "ar"
                ? "مرافق حديثة مجهزة بأحدث المعدات الطبية لتعزيز تجربة التعلم"
                : "Modern facilities equipped with cutting-edge medical equipment to enhance learning experience"}
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container px-6 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === "ar" ? "ابدأ مستقبلك في التمريض" : "Start Your Future in Nursing"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {language === "ar"
              ? "انضم إلى برنامج علوم التمريض وكن جزءاً من فريق الرعاية الصحية"
              : "Join our Nursing Science program and be part of the healthcare team"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg rounded-xl">
              {language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg rounded-xl border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
