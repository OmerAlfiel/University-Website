"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Microscope, Clock, Users, Award, FlaskConical, Shield, DollarSign, Stethoscope, Activity } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MedicalLaboratoryPage() {
  const { language } = useLanguage()

  const coursework = [
    {
      title: "Clinical Microbiology",
      titleAr: "علم الأحياء الدقيقة السريرية",
      description: "Bacterial, viral, and fungal identification",
      descriptionAr: "تحديد البكتيريا والفيروسات والفطريات",
      credits: 4,
    },
    {
      title: "Clinical Chemistry",
      titleAr: "الكيمياء السريرية",
      description: "Biochemical analysis of body fluids",
      descriptionAr: "التحليل الكيميائي الحيوي لسوائل الجسم",
      credits: 4,
    },
    {
      title: "Hematology",
      titleAr: "علم أمراض الدم",
      description: "Blood cell analysis and disorders",
      descriptionAr: "تحليل خلايا الدم والاضطرابات",
      credits: 3,
    },
    {
      title: "Immunology",
      titleAr: "علم المناعة",
      description: "Immune system function and testing",
      descriptionAr: "وظائف جهاز المناعة والفحوصات",
      credits: 3,
    },
    {
      title: "Molecular Diagnostics",
      titleAr: "التشخيص الجزيئي",
      description: "DNA/RNA analysis techniques",
      descriptionAr: "تقنيات تحليل الحمض النووي",
      credits: 3,
    },
    {
      title: "Quality Assurance",
      titleAr: "ضمان الجودة",
      description: "Laboratory standards and safety",
      descriptionAr: "معايير المختبر والسلامة",
      credits: 2,
    },
  ]

  const specializations = [
    {
      title: "Clinical Microbiology",
      titleAr: "علم الأحياء الدقيقة السريرية",
      description: "Infectious disease diagnosis",
      descriptionAr: "تشخيص الأمراض المعدية",
      icon: Microscope,
    },
    {
      title: "Clinical Chemistry",
      titleAr: "الكيمياء السريرية",
      description: "Biochemical testing",
      descriptionAr: "الفحوصات الكيميائية الحيوية",
      icon: FlaskConical,
    },
    {
      title: "Hematology",
      titleAr: "علم أمراض الدم",
      description: "Blood disorders analysis",
      descriptionAr: "تحليل اضطرابات الدم",
      icon: Activity,
    },
    {
      title: "Immunology",
      titleAr: "علم المناعة",
      description: "Immune system testing",
      descriptionAr: "فحوصات جهاز المناعة",
      icon: Shield,
    },
  ]

  const careerPaths = [
    {
      title: "Medical Laboratory Technologist",
      titleAr: "تقني مختبرات طبية",
      salary: "$45,000 - $65,000",
      salaryAr: "٤٥،٠٠٠ - ٦٥،٠٠٠ دولار",
      description: "Perform complex laboratory tests and analysis",
      descriptionAr: "إجراء الفحوصات المختبرية المعقدة والتحليل",
    },
    {
      title: "Hematology Specialist",
      titleAr: "أخصائي أمراض الدم",
      salary: "$55,000 - $75,000",
      salaryAr: "٥٥،٠٠٠ - ٧٥،٠٠٠ دولار",
      description: "Specialize in blood-related disorders",
      descriptionAr: "التخصص في اضطرابات الدم",
    },
    {
      title: "Microbiology Specialist",
      titleAr: "أخصائي علم الأحياء الدقيقة",
      salary: "$50,000 - $70,000",
      salaryAr: "٥٠،٠٠٠ - ٧٠،٠٠٠ دولار",
      description: "Focus on infectious disease diagnosis",
      descriptionAr: "التركيز على تشخيص الأمراض المعدية",
    },
    {
      title: "Laboratory Supervisor",
      titleAr: "مشرف مختبر",
      salary: "$60,000 - $85,000",
      salaryAr: "٦٠،٠٠٠ - ٨٥،٠٠٠ دولار",
      description: "Manage laboratory operations and staff",
      descriptionAr: "إدارة عمليات المختبر والموظفين",
    },
  ]

  const clinicalTraining = [
    {
      title: "Hospital Laboratory",
      titleAr: "مختبر المستشفى",
      duration: "8 weeks",
      durationAr: "٨ أسابيع",
      description: "General laboratory procedures",
      descriptionAr: "إجراءات المختبر العامة",
    },
    {
      title: "Specialized Labs",
      titleAr: "المختبرات المتخصصة",
      duration: "6 weeks",
      durationAr: "٦ أسابيع",
      description: "Advanced diagnostic techniques",
      descriptionAr: "تقنيات التشخيص المتقدمة",
    },
    {
      title: "Blood Bank",
      titleAr: "بنك الدم",
      duration: "4 weeks",
      durationAr: "٤ أسابيع",
      description: "Blood typing and compatibility",
      descriptionAr: "تحديد فصائل الدم والتوافق",
    },
    {
      title: "Research Laboratory",
      titleAr: "مختبر البحوث",
      duration: "4 weeks",
      durationAr: "٤ أسابيع",
      description: "Research methodologies",
      descriptionAr: "منهجيات البحث العلمي",
    },
  ]

  const faculty = [
    {
      name: "Dr. Aisha Mohamed",
      nameAr: "د. عائشة محمد",
      title: "Professor of Medical Laboratory Sciences",
      titleAr: "أستاذة علوم المختبرات الطبية",
      education: "PhD Medical Laboratory Sciences",
      educationAr: "دكتوراه في علوم المختبرات الطبية",
      specialization: "Clinical Microbiology",
      specializationAr: "علم الأحياء الدقيقة السريرية",
    },
    {
      name: "Dr. Ibrahim Ali",
      nameAr: "د. إبراهيم علي",
      title: "Associate Professor",
      titleAr: "أستاذ مشارك",
      education: "PhD Clinical Chemistry",
      educationAr: "دكتوراه في الكيمياء السريرية",
      specialization: "Biochemical Analysis",
      specializationAr: "التحليل الكيميائي الحيوي",
    },
    {
      name: "Dr. Maryam Hassan",
      nameAr: "د. مريم حسن",
      title: "Assistant Professor",
      titleAr: "أستاذة مساعدة",
      education: "PhD Hematology",
      educationAr: "دكتوراه في علم أمراض الدم",
      specialization: "Blood Disorders",
      specializationAr: "اضطرابات الدم",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Medical Laboratory Sciences"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <Microscope className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              {language === "ar" ? "علوم المختبرات الطبية" : "Medical Laboratory Sciences"}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "التشخيص الدقيق والتحليل المختبري لخدمة الرعاية الصحية"
                : "Precise diagnosis and laboratory analysis serving healthcare excellence"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "250+ طالب" : "250+ Students"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Award className="h-4 w-4 mr-2" />
                {language === "ar" ? "معتمد مهنياً" : "Professionally Accredited"}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact" className="flex items-center">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  <Microscope className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg font-semibold bg-transparent"
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
                {language === "ar" ? "التخصصات المختبرية" : "Laboratory Specializations"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {language === "ar"
                  ? "تخصصات متنوعة في علوم المختبرات الطبية لتلبية احتياجات الرعاية الصحية الحديثة"
                  : "Diverse specializations in medical laboratory sciences to meet modern healthcare needs"}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-16">
              {specializations.map((spec, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-green-200 dark:hover:border-green-800 transition-all duration-300 text-center overflow-hidden"
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 1
                          ? "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : index === 2
                          ? "https://images.unsplash.com/photo-1612277795421-9bc7706a4a37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          : "https://images.unsplash.com/photo-1606213650654-706338ae2a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      }
                      alt={spec.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 w-full">
                        <div className="h-10 w-10 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-2">
                          <spec.icon className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
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
                  ? "مناهج شاملة تغطي جميع جوانب علوم المختبرات الطبية"
                  : "Comprehensive curriculum covering all aspects of medical laboratory sciences"}
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

      {/* Clinical Training */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "التدريب السريري" : "Clinical Training"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "تدريب عملي مكثف في المستشفيات والمختبرات المتخصصة"
                  : "Intensive hands-on training in hospitals and specialized laboratories"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {clinicalTraining.map((training, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{language === "ar" ? training.titleAr : training.title}</CardTitle>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {language === "ar" ? training.durationAr : training.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{language === "ar" ? training.descriptionAr : training.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Career Paths */}
      <AnimatedSection className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "المسارات المهنية" : "Career Opportunities"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "فرص وظيفية متنوعة في المستشفيات والمختبرات الطبية"
                  : "Diverse career opportunities in hospitals and medical laboratories"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {careerPaths.map((career, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-800 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-40 md:h-auto">
                      <Image 
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1559757175-7b21671636f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : index === 2
                            ? "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={career.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl mb-2">
                              {language === "ar" ? career.titleAr : career.title}
                            </CardTitle>
                            <div className="flex items-center text-green-600 font-semibold">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {language === "ar" ? career.salaryAr : career.salary}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">
                          {language === "ar" ? career.descriptionAr : career.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Faculty */}
      <AnimatedSection className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {language === "ar" ? "أعضاء هيئة التدريس" : "Expert Faculty"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "خبراء في علوم المختبرات الطبية والتشخيص"
                  : "Experts in medical laboratory sciences and diagnostics"}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardHeader className="pt-0 px-0">
                    <div className="relative h-52 w-full mb-6">
                      <Image 
                        src={
                          index === 0
                            ? "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : index === 1
                            ? "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            : "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        }
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 to-transparent opacity-80" />
                    </div>
                    <div className="px-6">
                      <CardTitle className="text-xl">{language === "ar" ? member.nameAr : member.name}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        {language === "ar" ? member.titleAr : member.title}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>{language === "ar" ? member.educationAr : member.education}</p>
                      <p className="font-medium text-green-600">{language === "ar" ? member.specializationAr : member.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {language === "ar" ? "ابدأ مسيرتك في المختبرات الطبية" : "Start Your Medical Laboratory Career"}
            </h2>
            <p className="text-xl mb-8 text-green-100">
              {language === "ar"
                ? "انضم إلى برنامج علوم المختبرات الطبية وساهم في تطوير الرعاية الصحية"
                : "Join our Medical Laboratory Sciences program and contribute to advancing healthcare"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold">
                <Link href="/contact">{language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold bg-transparent"
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
