"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { GraduationCap, Users, BookOpen, Award, ArrowRight, Play, Star, Globe, Target } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  const { t, language } = useLanguage()

  const features = [
    {
      icon: Target,
      title: t("professionallyCompetent"),
      description:
        "Deep knowledge and practical expertise in specialized fields with global awareness and industry connections.",
    },
    {
      icon: Users,
      title: t("criticalThinkers"),
      description:
        "Independent learners who initiate creative ideas, embrace advanced technologies, and drive innovation.",
    },
    {
      icon: BookOpen,
      title: t("problemSolvers"),
      description:
        "Skilled in solving complex problems, making effective decisions with flexibility and continuous improvement.",
    },
    {
      icon: Award,
      title: t("effectiveCommunicators"),
      description:
        "Clear, objective communication using multimedia tools with deep cultural understanding and collaboration skills.",
    },
  ]

  const stats = [
    { number: "15+", label: t("programs"), icon: BookOpen },
    { number: "5,000+", label: t("students"), icon: Users },
    { number: "200+", label: t("faculty"), icon: GraduationCap },
    { number: "15", label: t("yearsOfExcellence"), icon: Star },
  ]

  const academicHighlights = [
    {
      title: "Engineering Excellence",
      titleAr: "التميز الهندسي",
      description: "Computer Science, Electrical, Architecture, and Biomedical Engineering programs",
      descriptionAr: "برامج علوم الحاسوب والهندسة الكهربائية والعمارة والهندسة الطبية الحيوية",
      image: "/placeholder.svg?height=300&width=400",
      link: "/academics/computer-science",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Health Sciences",
      titleAr: "العلوم الصحية",
      description: "Medical Laboratory, Nursing, Physiotherapy, and Public Health programs",
      descriptionAr: "برامج المختبرات الطبية والتمريض والعلاج الطبيعي والصحة العامة",
      image: "/placeholder.svg?height=300&width=400",
      link: "/academics/nursing",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Business Leadership",
      titleAr: "القيادة التجارية",
      description: "MBA, Business Administration, and Economic Sciences programs",
      descriptionAr: "برامج ماجستير إدارة الأعمال وإدارة الأعمال والعلوم الاقتصادية",
      image: "/placeholder.svg?height=300&width=400",
      link: "/academics/business",
      color: "from-purple-500 to-purple-700",
    },
  ]

  const newsItems = [
    {
      title: "Revolutionary AI Research Lab Opens",
      titleAr: "افتتاح مختبر بحوث الذكاء الاصطناعي الثوري",
      date: "December 15, 2024",
      excerpt:
        "State-of-the-art artificial intelligence research facility equipped with latest GPU clusters and quantum computing access.",
      excerptAr:
        "مرفق بحوث الذكاء الاصطناعي المتطور مجهز بأحدث مجموعات وحدات معالجة الرسومات والوصول إلى الحوسبة الكمية.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Research",
      categoryAr: "بحوث",
    },
    {
      title: "International Partnership with Oxford University",
      titleAr: "شراكة دولية مع جامعة أكسفورد",
      date: "December 10, 2024",
      excerpt:
        "New collaboration agreement enables student exchange programs and joint research initiatives in biomedical engineering.",
      excerptAr: "اتفاقية تعاون جديدة تمكن برامج تبادل الطلاب ومبادرات البحث المشتركة في الهندسة الطبية الحيوية.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Partnership",
      categoryAr: "شراكة",
    },
    {
      title: "Students Win Global Innovation Challenge",
      titleAr: "الطلاب يفوزون بتحدي الابتكار العالمي",
      date: "December 5, 2024",
      excerpt:
        "Computer Science team develops breakthrough healthcare app, securing first place in international competition.",
      excerptAr: "فريق علوم الحاسوب يطور تطبيق رعاية صحية رائد، ويحصل على المركز الأول في المسابقة الدولية.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Achievement",
      categoryAr: "إنجاز",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <section className="relative w-full py-16 md:py-24 lg:py-32 flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20">
          <FloatingElements />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-200">
                    <Globe className="mr-2 h-4 w-4" />
                    {language === "ar" ? "معتمدة دولياً منذ 2009" : "Internationally Accredited Since 2009"}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
                    {t("welcome")}
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("subtitle")}
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/academics">
                      {t("learnMore")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="/contact">{t("contactUs")}</Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Gezira College of Technology Campus"
                    width={800}
                    height={600}
                    className="aspect-[4/3] object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/90 hover:bg-white text-blue-600 shadow-2xl hover:scale-110 transition-all"
                  >
                    <Play className="h-6 w-6 md:h-8 md:w-8 ml-0.5 md:ml-1" />
                  </Button>
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-green-100 dark:bg-green-900/20 rounded-lg sm:rounded-xl flex items-center justify-center">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 dark:text-white">98%</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {language === "ar" ? "معدل التوظيف" : "Employment Rate"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="w-full py-16 sm:py-20 bg-white dark:bg-gray-900 border-y">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Academic Highlights */}
      <AnimatedSection animation="slide-left" delay={400}>
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("academicPrograms")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {language === "ar"
                  ? "نقدم برامج أكاديمية متميزة في الهندسة والعلوم الصحية وإدارة الأعمال مع التركيز على التميز والابتكار"
                  : "We offer distinguished academic programs in Engineering, Health Sciences, and Business Administration with focus on excellence and innovation"}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {academicHighlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 group hover:scale-105 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={highlight.image || "/placeholder.svg"}
                      alt={language === "ar" ? highlight.titleAr : highlight.title}
                      width={400}
                      height={300}
                      className="aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${highlight.color} opacity-80`} />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {language === "ar" ? highlight.titleAr : highlight.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {language === "ar" ? highlight.descriptionAr : highlight.description}
                    </p>
                    <Button variant="outline" asChild className="w-full rounded-xl bg-transparent">
                      <Link href={highlight.link}>
                        {language === "ar" ? "استكشف البرامج" : "Explore Programs"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection animation="scale-up" delay={600}>
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container px-6 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("ourMission")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {t("missionText")}
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-800 group hover:scale-105 hover:-translate-y-2"
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto h-20 w-20 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-10 w-10 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* News Section */}
      <AnimatedSection animation="slide-right" delay={800}>
        <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-6 md:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("latestNews")}</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {language === "ar"
                    ? "آخر الأخبار والتطورات من كلية الجزيرة للتكنولوجيا"
                    : "Latest news and developments from Gezira College of Technology"}
                </p>
              </div>
              <Button variant="outline" asChild className="rounded-xl bg-transparent">
                <Link href="/news">{t("viewAllNews")}</Link>
              </Button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-800 group hover:scale-105 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={language === "ar" ? item.titleAr : item.title}
                      width={300}
                      height={200}
                      className="aspect-[3/2] object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {language === "ar" ? item.categoryAr : item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.date}</div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {language === "ar" ? item.titleAr : item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {language === "ar" ? item.excerptAr : item.excerpt}
                    </p>
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-blue-600 hover:text-blue-700">
                      {t("readMore")}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>


      {/* CTA Section */}
      <AnimatedSection animation="fade-up" delay={900}>
        <section className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background with overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-10 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
          
          <div className="container relative z-10 px-6 md:px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Content Column */}
              <div className="lg:col-span-3 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                  {language === "ar" ? "ابدأ رحلتك الأكاديمية معنا" : "Start Your Academic Journey With Us"}
                </h2>
                <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl leading-relaxed">
                  {language === "ar"
                    ? "انضم إلى مجتمع من المتعلمين والمبدعين والقادة في كلية الجزيرة للتكنولوجيا، حيث نقدم تجربة تعليمية فريدة ومتميزة تجمع بين المعرفة النظرية والتطبيق العملي"
                    : "Join a community of learners, innovators, and leaders at Gezira College of Technology, where we provide a unique educational experience that combines theoretical knowledge with practical application"}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-white/80">{language === "ar" ? "معدل التوظيف" : "Employment Rate"}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/80">{language === "ar" ? "برامج أكاديمية" : "Academic Programs"}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-white/80">{language === "ar" ? "شركاء دوليون" : "Global Partners"}</div>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/80">{language === "ar" ? "دعم الطلاب" : "Student Support"}</div>
                  </div>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    {language === "ar" ? "استعلم الآن" : "Inquire Now"}
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-1">
                          {language === "ar" ? "الاسم الأول" : "First Name"}
                        </label>
                        <input 
                          type="text" 
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white bg-transparent" 
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-1">
                          {language === "ar" ? "الاسم الأخير" : "Last Name"}
                        </label>
                        <input 
                          type="text" 
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white bg-transparent" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-1">
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </label>
                      <input 
                        type="email" 
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white bg-transparent" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2.5"
                    >
                      {language === "ar" ? "إرسال الاستفسار" : "Submit Inquiry"}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      asChild 
                      size="lg" 
                      className="w-full rounded-xl border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2.5"
                    >
                      <Link href="/academics">
                        {language === "ar" ? "استكشف البرامج" : "Explore Programs"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
