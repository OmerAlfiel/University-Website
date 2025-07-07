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
      description: t("professionallyCompetentDesc"),
    },
    {
      icon: Users,
      title: t("criticalThinkers"),
      description: t("criticalThinkersDesc"),
    },
    {
      icon: BookOpen,
      title: t("problemSolvers"),
      description: t("problemSolversDesc"),
    },
    {
      icon: Award,
      title: t("effectiveCommunicators"),
      description: t("effectiveCommunicatorsDesc"),
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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80", // Engineering/Computer Science focus
    link: "/academics/computer-science",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Health Sciences",
    titleAr: "العلوم الصحية",
    description: "Medical Laboratory, Nursing, Physiotherapy, and Public Health programs",
    descriptionAr: "برامج المختبرات الطبية والتمريض والعلاج الطبيعي والصحة العامة",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80", // Medical/Health Sciences focus
    link: "/academics/nursing",
    color: "from-green-500 to-green-700",
  },
  {
    title: "Business Leadership",
    titleAr: "القيادة التجارية",
    description: "MBA, Business Administration, and Economic Sciences programs",
    descriptionAr: "برامج ماجستير إدارة الأعمال وإدارة الأعمال والعلوم الاقتصادية",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=750&q=80", // Business/Meeting room focus
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
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
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
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      category: "Achievement",
      categoryAr: "إنجاز",
    },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section - Enhanced to Start Below Header */}
      <AnimatedSection animation="fade-up">
        <section className="relative w-full pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 flex items-center bg-gradient-to-br from-slate-50/70 via-white/70 to-blue-50/70 dark:from-gray-950/70 dark:via-gray-900/70 dark:to-blue-950/20">
          <FloatingElements />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_auto] lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-800 dark:text-blue-200">
                    <Globe className="mr-2 h-4 w-4" />
                    {language === "ar" ? "معتمدة دولياً منذ 2009" : "Internationally Accredited Since 2009"}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
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
                  <video
                    className="aspect-[4/3] object-cover w-full"
                    width={800}
                    height={600}
                    poster="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
                    controls
                    preload="metadata"
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
        <section className="w-screen py-16 sm:py-20 bg-white dark:bg-gray-900 border-y">
          <div className="w-full px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto">
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
          </div>
        </section>
      </AnimatedSection>

      <div className="flex flex-col items-center w-full">
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
                      src={highlight.image}
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
                      src={item.image}
                      alt={language === "ar" ? item.titleAr : item.title}
                      width={500}
                      height={300}
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
          {/* Professional background with clearer image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 via-blue-700/65 to-blue-800/70 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')] bg-cover bg-center opacity-40 mix-blend-soft-light z-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill%3D%22%23ffffff%22 fill-opacity%3D%220.1%22 fill-rule%3D%22evenodd%22/%3E%3C/svg%3E')] opacity-20 z-0"></div>
          {/* Refined decorative elements for clearer background */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-15 -translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-15 translate-x-1/3 translate-y-1/3"></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-300 rounded-full filter blur-3xl opacity-10"></div>
          
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
                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 hover:scale-105 transform">
                    <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-white/90">{language === "ar" ? "معدل التوظيف" : "Employment Rate"}</div>
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 hover:scale-105 transform">
                    <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                    <div className="text-sm text-white/90">{language === "ar" ? "برامج أكاديمية" : "Academic Programs"}</div>
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 hover:scale-105 transform">
                    <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                    <div className="text-sm text-white/90">{language === "ar" ? "شركاء دوليون" : "Global Partners"}</div>
                  </div>
                  <div className="bg-white/15 rounded-2xl p-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors duration-300 hover:scale-105 transform">
                    <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/90">{language === "ar" ? "دعم الطلاب" : "Student Support"}</div>
                  </div>
                </div>
              </div>
              
              {/* Form Column */}
              <div className="lg:col-span-2">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-gray-700/30">
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
    </div>
  )
}
