"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Menu,
  GraduationCap,
  Building,
  Heart,
  Briefcase,
  Computer,
  Zap,
  Stethoscope,
  Search,
  X,
  ChevronDown,
  Phone,
  Mail,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  // Force repaint to fix sticky header issues in some browsers
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setTimeout(() => {
        header.classList.add('header-ready');
      }, 100);
    }
  }, [])

  // Search data for suggestions
  const searchData = [
    // Programs
    {
      title: "Computer Science",
      titleAr: "علوم الحاسوب",
      href: "/academics/computer-science",
      type: "program",
      icon: Computer,
    },
    {
      title: "Business Administration",
      titleAr: "إدارة الأعمال",
      href: "/academics/business-administration",
      type: "program",
      icon: Briefcase,
    },
    {
      title: "MBA Program",
      titleAr: "ماجستير إدارة الأعمال",
      href: "/academics/mba",
      type: "program",
      icon: GraduationCap,
    },
    {
      title: "Electrical Engineering",
      titleAr: "الهندسة الكهربائية",
      href: "/academics/electrical-engineering",
      type: "program",
      icon: Zap,
    },
    {
      title: "Biomedical Engineering",
      titleAr: "الهندسة الطبية الحيوية",
      href: "/academics/biomedical-engineering",
      type: "program",
      icon: Heart,
    },
    {
      title: "Architecture",
      titleAr: "هندسة العمارة",
      href: "/academics/architecture",
      type: "program",
      icon: Building,
    },
    { title: "Nursing Science", titleAr: "علوم التمريض", href: "/academics/nursing", type: "program", icon: Heart },
    {
      title: "Medical Laboratory",
      titleAr: "المختبرات الطبية",
      href: "/academics/medical-laboratory",
      type: "program",
      icon: Heart,
    },
    {
      title: "Medical Radiologic Technology",
      titleAr: "تقنية الأشعة الطبية",
      href: "/academics/medical-radiologic",
      type: "program",
      icon: Zap,
    },
    { title: "Public Health", titleAr: "الصحة العامة", href: "/academics/public-health", type: "program", icon: Heart },
    {
      title: "Information Technology",
      titleAr: "تقنية المعلومات",
      href: "/academics/information-technology",
      type: "program",
      icon: Computer,
    },
    {
      title: "Economic Sciences",
      titleAr: "العلوم الاقتصادية",
      href: "/academics/economic-sciences",
      type: "program",
      icon: Briefcase,
    },
    // Pages
    { title: "About Us", titleAr: "من نحن", href: "/about", type: "page", icon: Building },
    { title: "News", titleAr: "الأخبار", href: "/news", type: "page", icon: Building },
    { title: "Events", titleAr: "الفعاليات", href: "/events", type: "page", icon: Building },
    { title: "Gallery", titleAr: "معرض الصور", href: "/gallery", type: "page", icon: Building },
    { title: "Contact", titleAr: "اتصل بنا", href: "/contact", type: "page", icon: Phone },
  ]

  // Handle search input change with suggestions
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.length >= 2) {
      const filtered = searchData
        .filter((item) => {
          const title = language === "ar" ? item.titleAr : item.title
          return title.toLowerCase().includes(value.toLowerCase())
        })
        .slice(0, 5) // Limit to 5 suggestions

      setSearchSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
      setSearchSuggestions([])
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: any) => {
    setSearchQuery(language === "ar" ? suggestion.titleAr : suggestion.title)
    setShowSuggestions(false)
    setIsSearchOpen(false)
    window.location.href = suggestion.href
  }

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearchOpen(false)
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  // Handle search overlay close on escape
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [isSearchOpen])

  const academicsMenuItems = [
    {
      title: "Computer Science",
      titleAr: "علوم الحاسوب",
      href: "/academics/computer-science",
      description: "Software development, AI, and data science",
      descriptionAr: "تطوير البرمجيات والذكاء الاصطناعي وعلوم البيانات",
      icon: Computer,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
      students: "450+",
    },
    {
      title: "Business Administration",
      titleAr: "إدارة الأعمال",
      href: "/academics/business-administration",
      description: "Management and finance",
      descriptionAr: "الإدارة والمالية",
      icon: Briefcase,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20",
      students: "420+",
    },
    {
      title: "MBA Program",
      titleAr: "ماجستير إدارة الأعمال",
      href: "/academics/mba",
      description: "Advanced business leadership",
      descriptionAr: "القيادة المتقدمة في الأعمال",
      icon: GraduationCap,
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20",
      students: "180+",
    },
    {
      title: "Electrical Engineering",
      titleAr: "الهندسة الكهربائية",
      href: "/academics/electrical-engineering",
      description: "Power systems and electronics",
      descriptionAr: "أنظمة الطاقة والإلكترونيات",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20",
      students: "380+",
    },
    {
      title: "Biomedical Engineering",
      titleAr: "الهندسة الطبية الحيوية",
      href: "/academics/biomedical-engineering",
      description: "Medical devices and biotechnology",
      descriptionAr: "الأجهزة الطبية والتكنولوجيا الحيوية",
      icon: Heart,
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20",
      students: "220+",
    },
    {
      title: "Architecture",
      titleAr: "هندسة العمارة",
      href: "/academics/architecture",
      description: "Sustainable design and planning",
      descriptionAr: "التصميم المستدام والتخطيط",
      icon: Building,
      color: "bg-gray-100 text-gray-600 dark:bg-gray-900/20",
      students: "320+",
    },
    {
      title: "Nursing Science",
      titleAr: "علوم التمريض",
      href: "/academics/nursing",
      description: "Patient care and healthcare management",
      descriptionAr: "رعاية المرضى وإدارة الرعاية الصحية",
      icon: Stethoscope,
      color: "bg-red-100 text-red-600 dark:bg-red-900/20",
      students: "290+",
    },
    {
      title: "Medical Laboratory",
      titleAr: "المختبرات الطبية",
      href: "/academics/medical-laboratory",
      description: "Clinical diagnostics and analysis",
      descriptionAr: "التشخيص السريري والتحليل",
      icon: Stethoscope,
      color: "bg-green-100 text-green-600 dark:bg-green-900/20",
      students: "250+",
    },
    {
      title: "Medical Radiologic Technology",
      titleAr: "تقنية الأشعة الطبية",
      href: "/academics/medical-radiologic",
      description: "Medical imaging and radiology",
      descriptionAr: "التصوير الطبي والأشعة",
      icon: Zap,
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20",
      students: "180+",
    },
    {
      title: "Public Health",
      titleAr: "الصحة العامة",
      href: "/academics/public-health",
      description: "Community health and epidemiology",
      descriptionAr: "صحة المجتمع وعلم الأوبئة",
      icon: Heart,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20",
      students: "200+",
    },
    {
      title: "Information Technology",
      titleAr: "تقنية المعلومات",
      href: "/academics/information-technology",
      description: "Network systems and cybersecurity",
      descriptionAr: "أنظمة الشبكات والأمن السيبراني",
      icon: Computer,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20",
      students: "340+",
    },
    {
      title: "Economic Sciences",
      titleAr: "العلوم الاقتصادية",
      href: "/academics/economic-sciences",
      description: "Economics and financial analysis",
      descriptionAr: "الاقتصاد والتحليل المالي",
      icon: Briefcase,
      color: "bg-orange-100 text-orange-600 dark:bg-orange-900/20",
      students: "280+",
    },
  ]

  const { language } = useLanguage()

  return (
    <>
      {/* Top Contact Bar - Outside of sticky region */}
      <div className="relative bg-blue-900 text-white py-2 text-sm">
        <div className="container px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>+249 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>info@gct.edu.sd</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs">
            <span>{language === "ar" ? "الأحد - الخميس: 8:00 ص - 4:00 م" : "Sun - Thu: 8:00 AM - 4:00 PM"}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky Header */}
      <header className="sticky top-0 z-[100] w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-md" style={{ position: "sticky", top: 0 }}>
        <div className="container flex h-24 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl flex items-center justify-center shadow-xl relative overflow-hidden">
              <span className="text-white font-bold relative z-10 text-2xl">GCT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 dark:text-white text-3xl">
                Gezira College
              </span>
              <span className="text-gray-600 dark:text-gray-400 font-medium text-base">
                of Technology
              </span>
            </div>
          </Link>
      
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-14 w-max items-center justify-center rounded-2xl bg-transparent px-8 py-3 text-base font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 focus:bg-blue-50 dark:focus:bg-blue-950/30 focus:outline-none">
                    {t("home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
      
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-14 px-8 text-base font-semibold rounded-2xl bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 data-[state=open]:bg-blue-50 dark:data-[state=open]:bg-blue-950/30 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400">
                  {t("academics")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 w-[95vw] max-w-[1100px] max-h-[80vh] lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">
                    <div className="lg:row-span-4 lg:col-span-1 md:col-span-3 sm:col-span-1 lg:sticky lg:top-0 lg:self-start">
                      <NavigationMenuLink asChild>
                        <Link
                          className="group flex h-full w-full select-none flex-col justify-end rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800 p-6 lg:p-8 no-underline outline-none focus:shadow-xl hover:shadow-2xl hover:scale-[1.02] min-h-[200px] transition-all duration-300 border-2 border-transparent hover:border-blue-300 dark:hover:border-blue-600"
                          href="/academics"
                        >
                          <div className="flex items-center justify-between mb-4 lg:mb-6">
                            <GraduationCap className="h-12 w-12 lg:h-16 lg:w-16 text-blue-600 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                            <div className="bg-white/80 dark:bg-gray-900/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                          <div className="mb-2 lg:mb-3 mt-2 lg:mt-4 text-xl lg:text-2xl font-bold text-gray-900 dark:text-white relative z-10 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                            {language === "ar" ? "جميع البرامج الأكاديمية" : "All Academic Programs"}
                          </div>
                          <p className="text-sm lg:text-base leading-tight text-gray-600 dark:text-gray-300 relative z-10 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {language === "ar" ? "استكشف جميع برامجنا الأكاديمية والدرجات العلمية المتاحة" : "Explore all our academic programs and degrees"}
                          </p>
                          <div className="mt-4 lg:mt-6 text-xs lg:text-sm text-gray-700 dark:text-gray-300 font-semibold relative z-10">
                            {language === "ar" ? "12 برنامج متاح" : "12 Programs Available"}
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="grid gap-3 lg:col-span-4 md:col-span-3 sm:col-span-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:max-h-[60vh] lg:overflow-y-auto lg:pr-2" 
                         style={{
                           scrollbarWidth: 'thin',
                           scrollbarColor: '#3b82f6 #f1f5f9'
                         }}>
                      <style jsx>{`
                        .grid::-webkit-scrollbar {
                          width: 6px;
                        }
                        .grid::-webkit-scrollbar-track {
                          background: #f1f5f9;
                          border-radius: 3px;
                        }
                        .grid::-webkit-scrollbar-thumb {
                          background: #3b82f6;
                          border-radius: 3px;
                        }
                        .grid::-webkit-scrollbar-thumb:hover {
                          background: #2563eb;
                        }
                      `}</style>
                      {academicsMenuItems.map((item, index) => (
                        <NavigationMenuLink key={index} asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-2 rounded-2xl p-3 lg:p-4 leading-none no-underline outline-none hover:bg-gray-50 dark:hover:bg-gray-800 focus:bg-gray-50 dark:focus:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center gap-3 mb-1 lg:mb-2">
                              <div className={`h-8 w-8 lg:h-10 lg:w-10 rounded-xl flex items-center justify-center ${item.color}`}>
                                <item.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-xs lg:text-sm font-bold text-gray-900 dark:text-white truncate">
                                  {language === "ar" ? item.titleAr : item.title}
                                </div>
                                <div className="text-xs text-blue-600 font-semibold">{item.students} Students</div>
                              </div>
                            </div>
                            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-2">
                              {language === "ar" ? item.descriptionAr : item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
      
              {["news", "events", "gallery", "about", "contact"].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href={`/${item}`} legacyBehavior passHref>
                    <NavigationMenuLink className="inline-flex h-14 w-max items-center justify-center rounded-2xl bg-transparent px-8 py-3 text-base font-semibold hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400 focus:bg-blue-50 dark:focus:bg-blue-950/30 focus:outline-none">
                      {item === "gallery" ? (language === "ar" ? "معرض الصور" : "Gallery") : t(item)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
      
          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
      
            <ModeToggle />
            <LanguageToggle />
      
            {/* Apply Now Button */}
            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl font-semibold"
            >
              <Link href="/contact">{language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
            </Button>
      
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[380px] sm:w-[420px]">
                <nav className="flex flex-col space-y-8 mt-12">
                  <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-bold hover:text-blue-600">
                    {t("home")}
                  </Link>
                  <div className="space-y-6">
                    <Link
                      href="/academics"
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold hover:text-blue-600 block"
                    >
                      {t("academics")}
                    </Link>
                    <div className="pl-6 space-y-4 border-l-2 border-blue-200 dark:border-blue-800">
                      {academicsMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 block"
                        >
                          {language === "ar" ? item.titleAr : item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {["news", "events", "gallery", "about", "contact"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item}`}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold hover:text-blue-600"
                    >
                      {item === "gallery" ? (language === "ar" ? "معرض الصور" : "Gallery") : t(item)}
                    </Link>
                  ))}
      
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl font-semibold mt-8"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {language === "ar" ? "تقدم الآن" : "Apply Now"}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Enhanced Search Overlay - Higher z-index than header */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg">
          <div className="container mx-auto px-6 pt-40">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {language === "ar" ? "البحث في الموقع" : "Search Site"}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="h-12 w-12 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <Input
                    type="text"
                    placeholder={
                      language === "ar" ? "ابحث عن البرامج، الأخبار، الفعاليات..." : "Search programs, news, events..."
                    }
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="pl-16 pr-6 py-6 text-xl rounded-2xl border-2 focus:border-blue-500 bg-gray-50 dark:bg-gray-800"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
                  >
                    {language === "ar" ? "بحث" : "Search"}
                  </Button>

                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 z-50">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full flex items-center gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                        >
                          <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                            <suggestion.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="font-semibold text-gray-900 dark:text-white">
                              {language === "ar" ? suggestion.titleAr : suggestion.title}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                              {suggestion.type === "program"
                                ? language === "ar"
                                  ? "برنامج"
                                  : "Program"
                                : language === "ar"
                                  ? "صفحة"
                                  : "Page"}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </form>
                <div className="mt-8 text-base text-gray-600 dark:text-gray-400">
                  {language === "ar" ? "اضغط Enter للبحث أو Esc للإغلاق" : "Press Enter to search or Esc to close"}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}