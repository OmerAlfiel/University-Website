"use client"

import React from "react"

import type { ReactElement } from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  Search,
  FileText,
  Calendar,
  GraduationCap,
  Building,
  ArrowRight,
  Filter,
  MapPin,
  Award,
  Globe,
} from "lucide-react"

// Search data structure
const searchData = {
  pages: [
    {
      id: "home",
      title: "Home",
      titleAr: "الرئيسية",
      url: "/",
      description: "Welcome to Gezira College of Technology",
      descriptionAr: "مرحباً بكم في كلية الجزيرة للتكنولوجيا",
      keywords: [
        "home",
        "welcome",
        "college",
        "technology",
        "gezira",
        "main",
        "الرئيسية",
        "كلية",
        "تكنولوجيا",
        "الجزيرة",
      ],
      type: "page",
    },
    {
      id: "about",
      title: "About Us",
      titleAr: "حولنا",
      url: "/about",
      description: "Learn about our history, mission, and values",
      descriptionAr: "تعرف على تاريخنا ورسالتنا وقيمنا",
      keywords: ["about", "history", "mission", "values", "leadership", "حولنا", "تاريخ", "رسالة", "قيم", "قيادة"],
      type: "page",
    },
    {
      id: "academics",
      title: "Academic Programs",
      titleAr: "البرامج الأكاديمية",
      url: "/academics",
      description: "Explore our comprehensive academic programs",
      descriptionAr: "استكشف برامجنا الأكاديمية الشاملة",
      keywords: ["academics", "programs", "education", "degrees", "أكاديمي", "برامج", "تعليم", "درجات"],
      type: "page",
    },
    {
      id: "computer-science",
      title: "Computer Science",
      titleAr: "علوم الحاسوب",
      url: "/academics/computer-science",
      description: "Bachelor's degree in Computer Science with focus on AI and software development",
      descriptionAr: "درجة البكالوريوس في علوم الحاسوب مع التركيز على الذكاء الاصطناعي وتطوير البرمجيات",
      keywords: [
        "computer",
        "science",
        "programming",
        "AI",
        "software",
        "development",
        "حاسوب",
        "برمجة",
        "ذكاء اصطناعي",
        "تطوير",
      ],
      type: "program",
    },
    {
      id: "nursing",
      title: "Nursing Science",
      titleAr: "علوم التمريض",
      url: "/academics/nursing",
      description: "Bachelor's degree in Nursing Science for healthcare professionals",
      descriptionAr: "درجة البكالوريوس في علوم التمريض للمهنيين الصحيين",
      keywords: ["nursing", "healthcare", "medical", "patient care", "تمريض", "رعاية صحية", "طبي", "رعاية المرضى"],
      type: "program",
    },
    {
      id: "electrical-engineering",
      title: "Electrical Engineering",
      titleAr: "الهندسة الكهربائية",
      url: "/academics/electrical-engineering",
      description: "Bachelor's degree in Electrical and Electronic Engineering",
      descriptionAr: "درجة البكالوريوس في الهندسة الكهربائية والإلكترونية",
      keywords: [
        "electrical",
        "engineering",
        "electronics",
        "power",
        "systems",
        "هندسة كهربائية",
        "إلكترونيات",
        "طاقة",
        "أنظمة",
      ],
      type: "program",
    },
    {
      id: "architecture",
      title: "Architecture Engineering",
      titleAr: "هندسة العمارة",
      url: "/academics/architecture",
      description: "Bachelor's degree in Architecture Engineering and sustainable design",
      descriptionAr: "درجة البكالوريوس في هندسة العمارة والتصميم المستدام",
      keywords: [
        "architecture",
        "design",
        "building",
        "sustainable",
        "planning",
        "عمارة",
        "تصميم",
        "بناء",
        "مستدام",
        "تخطيط",
      ],
      type: "program",
    },
    {
      id: "business-administration",
      title: "Business Administration",
      titleAr: "إدارة الأعمال",
      url: "/academics/business-administration",
      description: "Bachelor's degree in Business Administration and management",
      descriptionAr: "درجة البكالوريوس في إدارة الأعمال والإدارة",
      keywords: [
        "business",
        "administration",
        "management",
        "finance",
        "marketing",
        "أعمال",
        "إدارة",
        "مالية",
        "تسويق",
      ],
      type: "program",
    },
    {
      id: "news",
      title: "News",
      titleAr: "الأخبار",
      url: "/news",
      description: "Latest news and announcements from the college",
      descriptionAr: "آخر الأخبار والإعلانات من الكلية",
      keywords: ["news", "announcements", "updates", "latest", "أخبار", "إعلانات", "تحديثات", "آخر"],
      type: "page",
    },
    {
      id: "events",
      title: "Events",
      titleAr: "الفعاليات",
      url: "/events",
      description: "Upcoming events, workshops, and conferences",
      descriptionAr: "الفعاليات القادمة وورش العمل والمؤتمرات",
      keywords: ["events", "workshops", "conferences", "activities", "فعاليات", "ورش عمل", "مؤتمرات", "أنشطة"],
      type: "page",
    },
    {
      id: "gallery",
      title: "Photo Gallery",
      titleAr: "معرض الصور",
      url: "/gallery",
      description: "Campus photos and university life",
      descriptionAr: "صور الحرم الجامعي والحياة الجامعية",
      keywords: ["gallery", "photos", "campus", "images", "معرض", "صور", "حرم جامعي", "صور"],
      type: "page",
    },
    {
      id: "contact",
      title: "Contact Us",
      titleAr: "اتصل بنا",
      url: "/contact",
      description: "Get in touch with us for inquiries and information",
      descriptionAr: "تواصل معنا للاستفسارات والمعلومات",
      keywords: ["contact", "phone", "email", "address", "location", "اتصال", "هاتف", "بريد", "عنوان", "موقع"],
      type: "page",
    },
    {
      id: "mba",
      title: "MBA - Master of Business Administration",
      titleAr: "ماجستير إدارة الأعمال",
      url: "/academics/mba",
      description: "Advanced business leadership and management program",
      descriptionAr: "برنامج متقدم في قيادة الأعمال والإدارة",
      keywords: [
        "MBA",
        "master",
        "business",
        "administration",
        "leadership",
        "management",
        "ماجستير",
        "إدارة",
        "أعمال",
        "قيادة",
      ],
      type: "program",
    },
    {
      id: "economic-sciences",
      title: "Economic Sciences",
      titleAr: "العلوم الاقتصادية",
      url: "/academics/economic-sciences",
      description: "Bachelor's degree in Economic Sciences and financial analysis",
      descriptionAr: "درجة البكالوريوس في العلوم الاقتصادية والتحليل المالي",
      keywords: [
        "economics",
        "economic",
        "sciences",
        "finance",
        "analysis",
        "اقتصاد",
        "علوم اقتصادية",
        "مالية",
        "تحليل",
      ],
      type: "program",
    },
    {
      id: "medical-laboratory",
      title: "Medical Laboratory Sciences",
      titleAr: "علوم المختبرات الطبية",
      url: "/academics/medical-laboratory",
      description: "Bachelor's degree in Medical Laboratory Sciences and diagnostics",
      descriptionAr: "درجة البكالوريوس في علوم المختبرات الطبية والتشخيص",
      keywords: [
        "medical",
        "laboratory",
        "sciences",
        "diagnostics",
        "clinical",
        "طبي",
        "مختبر",
        "علوم",
        "تشخيص",
        "سريري",
      ],
      type: "program",
    },
    {
      id: "medical-radiologic",
      title: "Medical Radiologic Technology",
      titleAr: "تقنية الأشعة الطبية",
      url: "/academics/medical-radiologic",
      description: "Bachelor's degree in Medical Radiologic Technology and imaging",
      descriptionAr: "درجة البكالوريوس في تقنية الأشعة الطبية والتصوير",
      keywords: [
        "medical",
        "radiologic",
        "technology",
        "imaging",
        "radiology",
        "طبي",
        "أشعة",
        "تقنية",
        "تصوير",
        "أشعة",
      ],
      type: "program",
    },
    {
      id: "public-health",
      title: "Public Health and Environmental Health",
      titleAr: "الصحة العامة والصحة البيئية",
      url: "/academics/public-health",
      description: "Bachelor's degree in Public Health and Environmental Health",
      descriptionAr: "درجة البكالوريوس في الصحة العامة والصحة البيئية",
      keywords: ["public", "health", "environmental", "community", "صحة عامة", "صحة بيئية", "مجتمع", "بيئة"],
      type: "program",
    },
    {
      id: "biomedical-engineering",
      title: "Biomedical Engineering",
      titleAr: "الهندسة الطبية الحيوية",
      url: "/academics/biomedical-engineering",
      description: "Bachelor's degree in Biomedical Engineering and medical devices",
      descriptionAr: "درجة البكالوريوس في الهندسة الطبية الحيوية والأجهزة الطبية",
      keywords: [
        "biomedical",
        "engineering",
        "medical",
        "devices",
        "biology",
        "هندسة طبية",
        "حيوية",
        "أجهزة طبية",
        "أحياء",
      ],
      type: "program",
    },
    {
      id: "information-technology",
      title: "Information Technology",
      titleAr: "تكنولوجيا المعلومات",
      url: "/academics/information-technology",
      description: "Bachelor's degree in Information Technology and systems",
      descriptionAr: "درجة البكالوريوس في تكنولوجيا المعلومات والأنظمة",
      keywords: ["information", "technology", "IT", "systems", "networks", "معلومات", "تكنولوجيا", "أنظمة", "شبكات"],
      type: "program",
    },
    {
      id: "english-literature",
      title: "English Language and Literature",
      titleAr: "اللغة الإنجليزية وآدابها",
      url: "/academics/english-literature",
      description: "Bachelor's degree in English Language and Literature",
      descriptionAr: "درجة البكالوريوس في اللغة الإنجليزية وآدابها",
      keywords: ["english", "language", "literature", "linguistics", "إنجليزية", "لغة", "أدب", "لسانيات"],
      type: "program",
    },
    {
      id: "physiotherapy",
      title: "Physiotherapy",
      titleAr: "العلاج الطبيعي",
      url: "/academics/physiotherapy",
      description: "Bachelor's degree in Physiotherapy and rehabilitation",
      descriptionAr: "درجة البكالوريوس في العلاج الطبيعي والتأهيل",
      keywords: ["physiotherapy", "physical", "therapy", "rehabilitation", "علاج طبيعي", "تأهيل", "علاج", "طبيعي"],
      type: "program",
    },
  ],
  news: [
    {
      id: "ai-lab",
      title: "New AI and Machine Learning Program Launched",
      titleAr: "إطلاق برنامج جديد للذكاء الاصطناعي والتعلم الآلي",
      url: "/news",
      description: "Cutting-edge program in AI and ML to meet growing demand",
      descriptionAr: "برنامج متطور في الذكاء الاصطناعي والتعلم الآلي لتلبية الطلب المتزايد",
      date: "2024-12-15",
      category: "Academic Programs",
      categoryAr: "البرامج الأكاديمية",
      keywords: ["AI", "machine learning", "program", "technology", "ذكاء اصطناعي", "تعلم آلي", "برنامج", "تكنولوجيا"],
      type: "news",
    },
    {
      id: "student-competition",
      title: "Student Research Team Wins National Competition",
      titleAr: "فريق بحث الطلاب يفوز بالمسابقة الوطنية",
      url: "/news",
      description: "Computer Science students win first place with healthcare app",
      descriptionAr: "طلاب علوم الحاسوب يفوزون بالمركز الأول بتطبيق الرعاية الصحية",
      date: "2024-12-10",
      category: "Student Achievement",
      categoryAr: "إنجاز الطلاب",
      keywords: [
        "students",
        "competition",
        "research",
        "healthcare",
        "app",
        "طلاب",
        "مسابقة",
        "بحث",
        "رعاية صحية",
        "تطبيق",
      ],
      type: "news",
    },
    {
      id: "international-partnership",
      title: "New Partnership with International Universities",
      titleAr: "شراكة جديدة مع الجامعات الدولية",
      url: "/news",
      description: "MOUs signed with leading universities for student exchange",
      descriptionAr: "توقيع مذكرات تفاهم مع جامعات رائدة لتبادل الطلاب",
      date: "2024-12-05",
      category: "Partnerships",
      categoryAr: "الشراكات",
      keywords: ["partnership", "international", "universities", "exchange", "شراكة", "دولي", "جامعات", "تبادل"],
      type: "news",
    },
  ],
  events: [
    {
      id: "science-fair",
      title: "Annual Science Fair 2025",
      titleAr: "معرض العلوم السنوي 2025",
      url: "/events",
      description: "Showcase of innovative student projects",
      descriptionAr: "عرض لمشاريع الطلاب المبتكرة",
      date: "2025-01-20",
      location: "Main Campus Auditorium",
      locationAr: "قاعة الحرم الجامعي الرئيسي",
      keywords: ["science", "fair", "projects", "innovation", "students", "علوم", "معرض", "مشاريع", "ابتكار", "طلاب"],
      type: "event",
    },
    {
      id: "career-workshop",
      title: "Career Development Workshop",
      titleAr: "ورشة تطوير المهن",
      url: "/events",
      description: "Professional development for final year students",
      descriptionAr: "التطوير المهني لطلاب السنة الأخيرة",
      date: "2025-01-25",
      location: "Conference Hall A",
      locationAr: "قاعة المؤتمرات أ",
      keywords: [
        "career",
        "workshop",
        "development",
        "professional",
        "students",
        "مهنة",
        "ورشة",
        "تطوير",
        "مهني",
        "طلاب",
      ],
      type: "event",
    },
  ],
}

function SearchResults(): ReactElement {
  const { language } = useLanguage()
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<any[]>([])
  const [filteredResults, setFilteredResults] = useState<any[]>([])
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)

  const filters = [
    { id: "all", name: language === "ar" ? "الكل" : "All", icon: Globe },
    { id: "page", name: language === "ar" ? "الصفحات" : "Pages", icon: FileText },
    { id: "program", name: language === "ar" ? "البرامج" : "Programs", icon: GraduationCap },
    { id: "news", name: language === "ar" ? "الأخبار" : "News", icon: FileText },
    { id: "event", name: language === "ar" ? "الفعاليات" : "Events", icon: Calendar },
  ]

  const performSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      setFilteredResults([])
      return
    }

    setIsLoading(true)
    const searchTermLower = searchTerm.toLowerCase()
    const allData = [...searchData.pages, ...searchData.news, ...searchData.events]

    const searchResults = allData.filter((item) => {
      const title = language === "ar" ? item.titleAr || item.title : item.title
      const description = language === "ar" ? item.descriptionAr || item.description : item.description
      const keywords = item.keywords || []

      return (
        title.toLowerCase().includes(searchTermLower) ||
        description.toLowerCase().includes(searchTermLower) ||
        keywords.some((keyword) => keyword.toLowerCase().includes(searchTermLower)) ||
        (item.category && item.category.toLowerCase().includes(searchTermLower)) ||
        (item.categoryAr && item.categoryAr.includes(searchTerm))
      )
    })

    // Sort by relevance
    const sortedResults = searchResults.sort((a, b) => {
      const aTitle = language === "ar" ? a.titleAr || a.title : a.title
      const bTitle = language === "ar" ? b.titleAr || b.title : b.title
      const aTitleMatch = aTitle.toLowerCase().includes(searchTermLower)
      const bTitleMatch = bTitle.toLowerCase().includes(searchTermLower)

      if (aTitleMatch && !bTitleMatch) return -1
      if (!aTitleMatch && bTitleMatch) return 1
      return 0
    })

    setResults(sortedResults)
    setFilteredResults(sortedResults)
    setIsLoading(false)
  }

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
      performSearch(query)
    }
  }, [query, language])

  useEffect(() => {
    if (selectedFilter === "all") {
      setFilteredResults(results)
    } else {
      setFilteredResults(results.filter((item) => item.type === selectedFilter))
    }
  }, [selectedFilter, results])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const newUrl = `/search?q=${encodeURIComponent(searchQuery)}`
      window.history.pushState({}, "", newUrl)
      performSearch(searchQuery)
    }
  }

  const getSuggestions = (searchTerm: string) => {
    if (!searchTerm.trim() || searchTerm.length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    const searchTermLower = searchTerm.toLowerCase()
    const allData = [...searchData.pages, ...searchData.news, ...searchData.events]

    const suggestionResults = allData
      .filter((item) => {
        const title = language === "ar" ? item.titleAr || item.title : item.title
        const keywords = item.keywords || []

        return (
          title.toLowerCase().startsWith(searchTermLower) ||
          keywords.some((keyword) => keyword.toLowerCase().startsWith(searchTermLower))
        )
      })
      .slice(0, 5) // Limit to 5 suggestions

    setSuggestions(suggestionResults)
    setShowSuggestions(suggestionResults.length > 0)
  }

  const getResultIcon = (type: string) => {
    switch (type) {
      case "program":
        return GraduationCap
      case "news":
        return FileText
      case "event":
        return Calendar
      case "page":
        return Building
      default:
        return FileText
    }
  }

  const getResultBadgeColor = (type: string) => {
    switch (type) {
      case "program":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200"
      case "news":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-200"
      case "event":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-200"
      case "page":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                <Search className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                {language === "ar" ? "نتائج البحث" : "Search Results"}
              </h1>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder={
                    language === "ar" ? "ابحث عن البرامج، الأخبار، الفعاليات..." : "Search programs, news, events..."
                  }
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    getSuggestions(e.target.value)
                  }}
                  className="pl-12 pr-4 py-4 text-lg rounded-2xl border-2 focus:border-blue-500 bg-white dark:bg-gray-800"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl"
                >
                  {language === "ar" ? "بحث" : "Search"}
                </Button>
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 z-10">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setSearchQuery(language === "ar" ? suggestion.titleAr || suggestion.title : suggestion.title)
                          performSearch(language === "ar" ? suggestion.titleAr || suggestion.title : suggestion.title)
                          setShowSuggestions(false)
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-2xl last:rounded-b-2xl flex items-center gap-3"
                      >
                        <div
                          className={`h-8 w-8 rounded-lg flex items-center justify-center ${getResultBadgeColor(suggestion.type)}`}
                        >
                          {React.createElement(getResultIcon(suggestion.type), { className: "h-4 w-4" })}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {language === "ar" ? suggestion.titleAr || suggestion.title : suggestion.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {filters.find((f) => f.id === suggestion.type)?.name || suggestion.type}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </form>

            {query && (
              <p className="text-gray-600 dark:text-gray-300">
                {language === "ar" ? "البحث عن:" : "Searching for:"}{" "}
                <span className="font-semibold text-blue-600">"{query}"</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Filters */}
      {results.length > 0 && (
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {language === "ar" ? "تصفية النتائج" : "Filter Results"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedFilter(filter.id)}
                  className="flex items-center gap-2"
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.name}
                  <Badge variant="secondary" className="ml-1">
                    {filter.id === "all" ? results.length : results.filter((item) => item.type === filter.id).length}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">{language === "ar" ? "جاري البحث..." : "Searching..."}</p>
            </div>
          ) : filteredResults.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "ar" ? "تم العثور على" : "Found"} {filteredResults.length}{" "}
                  {language === "ar" ? "نتيجة" : filteredResults.length === 1 ? "result" : "results"}
                  {query && (
                    <>
                      {" "}
                      {language === "ar" ? "لـ" : "for"} "{query}"
                    </>
                  )}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResults.map((result, index) => {
                  const Icon = getResultIcon(result.type)
                  const title = language === "ar" ? result.titleAr || result.title : result.title
                  const description =
                    language === "ar" ? result.descriptionAr || result.description : result.description

                  return (
                    <Card
                      key={`${result.type}-${result.id}-${index}`}
                      className="hover:shadow-lg transition-shadow border-0 shadow-md bg-white dark:bg-gray-800"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                              <Icon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
                            </div>
                          </div>
                          <Badge className={getResultBadgeColor(result.type)}>
                            {language === "ar"
                              ? filters.find((f) => f.id === result.type)?.name || result.type
                              : filters.find((f) => f.id === result.type)?.name || result.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-3 mb-4">{description}</CardDescription>

                        {/* Additional Info */}
                        <div className="space-y-2 mb-4">
                          {result.date && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(result.date).toLocaleDateString()}</span>
                            </div>
                          )}
                          {result.location && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <MapPin className="h-4 w-4" />
                              <span>{language === "ar" ? result.locationAr || result.location : result.location}</span>
                            </div>
                          )}
                          {result.category && (
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <Award className="h-4 w-4" />
                              <span>{language === "ar" ? result.categoryAr || result.category : result.category}</span>
                            </div>
                          )}
                        </div>

                        <Button asChild variant="outline" className="w-full bg-transparent">
                          <Link href={result.url}>
                            {language === "ar" ? "عرض التفاصيل" : "View Details"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </>
          ) : query ? (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "ar" ? "لم يتم العثور على نتائج" : "No Results Found"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {language === "ar"
                  ? `لم يتم العثور على نتائج لـ "${query}". جرب كلمات مختلفة.`
                  : `No results found for "${query}". Try different keywords.`}
              </p>
              <div className="max-w-md mx-auto">
                <h4 className="font-semibold mb-3">{language === "ar" ? "اقتراحات للبحث:" : "Search suggestions:"}</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {["Computer Science", "Nursing", "Engineering", "Business", "News", "Events"].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSearchQuery(suggestion)
                        performSearch(suggestion)
                      }}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {language === "ar" ? "ابدأ البحث" : "Start Your Search"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "ar"
                  ? "ابحث عن البرامج الأكاديمية، الأخبار، الفعاليات، وأكثر"
                  : "Search for academic programs, news, events, and more"}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  )
}
