"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"
import { searchData, PageItem, NewsItem, EventItem } from "@/lib/search-data"
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
  Phone,
  Mail,
  Calendar,
  ChevronDown,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function Header() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState<any[]>([])
  const [searchResults, setSearchResults] = useState<{
    pages: PageItem[],
    programs: PageItem[],
    news: NewsItem[],
    events: EventItem[]
  }>({ pages: [], programs: [], news: [], events: [] })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAcademicsSubmenu, setShowAcademicsSubmenu] = useState(false)
  
  // Handle header scroll effect using React state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  // Map icons to content types for display
  const getIconForType = (type: string) => {
    switch(type) {
      case 'program':
        return GraduationCap;
      case 'news':
        return Mail;
      case 'event':
        return Calendar;
      default:
        return Building;
    }
  }

  // Handle search input change with suggestions
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchQuery(value)

    if (value.length >= 2) {
      // Filter pages and programs
      const filteredPages = searchData.pages
        .filter(item => {
          const title = language === "ar" ? item.titleAr : item.title;
          const description = language === "ar" ? item.descriptionAr : item.description;
          const keywordMatch = item.keywords.some(keyword => 
            keyword.toLowerCase().includes(value.toLowerCase())
          );
          
          return title.toLowerCase().includes(value.toLowerCase()) || 
                 description.toLowerCase().includes(value.toLowerCase()) ||
                 keywordMatch;
        })
        .slice(0, 5);
      
      // Get program suggestions
      const filteredPrograms = filteredPages.filter(item => item.type === "program");
      const regularPages = filteredPages.filter(item => item.type === "page");
      
      // Filter news
      const filteredNews = searchData.news
        .filter(item => {
          const title = language === "ar" ? item.titleAr : item.title;
          const description = language === "ar" ? item.descriptionAr : item.description;
          const keywordMatch = item.keywords.some(keyword => 
            keyword.toLowerCase().includes(value.toLowerCase())
          );
          
          return title.toLowerCase().includes(value.toLowerCase()) || 
                 description.toLowerCase().includes(value.toLowerCase()) ||
                 keywordMatch;
        })
        .slice(0, 3);
      
      // Filter events
      const filteredEvents = searchData.events
        .filter(item => {
          const title = language === "ar" ? item.titleAr : item.title;
          const description = language === "ar" ? item.descriptionAr : item.description;
          const keywordMatch = item.keywords.some(keyword => 
            keyword.toLowerCase().includes(value.toLowerCase())
          );
          
          return title.toLowerCase().includes(value.toLowerCase()) || 
                 description.toLowerCase().includes(value.toLowerCase()) ||
                 keywordMatch;
        })
        .slice(0, 3);
      
      // Get top suggestions for the dropdown
      const suggestions = [
        ...filteredPrograms.slice(0, 2),
        ...regularPages.slice(0, 1),
        ...filteredNews.slice(0, 1),
        ...filteredEvents.slice(0, 1)
      ].slice(0, 5);
      
      // Add icon property to suggestions for display
      const suggestionsWithIcons = suggestions.map(item => ({
        ...item,
        icon: getIconForType(item.type)
      }));

      setSearchSuggestions(suggestionsWithIcons);
      setShowSuggestions(true);
      
      // Store full results for search results display
      setSearchResults({
        pages: regularPages,
        programs: filteredPrograms,
        news: filteredNews,
        events: filteredEvents
      });
    } else {
      setShowSuggestions(false);
      setSearchSuggestions([]);
      setShowResults(false);
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: PageItem | NewsItem | EventItem) => {
    setSearchQuery(language === "ar" ? suggestion.titleAr : suggestion.title);
    setShowSuggestions(false);
    setShowResults(false);
    setIsSearchOpen(false);
    window.location.href = suggestion.url;
  }

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Instead of redirecting, show results in the overlay
      setShowSuggestions(false);
      setShowResults(true);
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

  return (
    <>
      {/* Top Contact Bar - Enhanced Professional Style */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2 text-sm">
        <div className="container px-6 flex items-center justify-between" dir="ltr">
          <div className="flex items-center justify-center sm:justify-start gap-6 w-full sm:w-auto">
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="h-3 w-3" />
              <a href="tel:+249123456789" className="transition-colors">+249 123 456 789</a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail className="h-3 w-3" />
              <a href="mailto:info@gct.edu.sd" className="transition-colors">info@gct.edu.sd</a>
            </div>
          </div>
          <div className={`hidden md:flex items-center gap-4 text-xs ${language === "ar" ? "font-arabic text-[105%]" : ""}`}>
            <span className="opacity-90">{language === "ar" ? "الأحد - الخميس: ٨:٠٠ ص - ٤:٠٠ م" : "Sun - Thu: 8:00 AM - 4:00 PM"}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - Enhanced Sticky Header with Glassmorphism */}
      <header className={`sticky top-0 z-[100] w-full ${isScrolled ? 'bg-white/95 dark:bg-gray-950/95' : 'bg-white/70 dark:bg-gray-950/80'} backdrop-blur-lg backdrop-saturate-150 border-b border-white/20 dark:border-gray-800/30 shadow-lg transition-all duration-300`}>
        <div className="container flex h-16 sm:h-20 md:h-24 lg:h-28 items-center justify-between px-2 sm:px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className={`flex items-center ${language === "ar" ? "space-x-reverse" : "space-x-4"} sm:space-x-5 md:space-x-8 lg:space-x-10 group`}>
            <div className="logo-container h-14 w-14 sm:h-18 sm:w-18 md:h-22 md:w-22 lg:h-24 lg:w-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-[12px] sm:rounded-[16px] md:rounded-[20px] flex items-center justify-center shadow-lg relative overflow-hidden border-[2px] sm:border-[3px] border-white/30 dark:border-white/20 transition-all duration-300 group-hover:shadow-blue-500/30">
              {/* Inner glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.7),transparent_70%)] opacity-80"></div>
              
              {/* Subtle animated pulse */}
              <div className="absolute inset-0 bg-blue-500/20 animate-[pulse_3s_infinite]"></div>
              <img 
                src="/logo-white.svg" 
                alt="GCT Logo" 
                className="w-full h-full p-[1%] relative z-10 transition-transform duration-300 group-hover:scale-105 object-contain brightness-110 drop-shadow-md"
              />
            </div>
            
            {/* Text section with improved responsive sizing and clarity - Tailwind only */}
            <div className={`flex flex-col ${language === "ar" ? "items-end" : ""} px-2 ml-1`}>
              <span className={`font-extrabold text-gray-900 dark:text-white text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight leading-tight drop-shadow-sm ${language === "ar" ? "text-right font-arabic text-[120%] md:text-[130%] lg:text-[140%] mt-0.5" : ""}`}>
                {language === "ar" ? "كلية الجزيرة" : "Gezira College"}
              </span>
              <span className={`text-gray-600 dark:text-gray-400 font-medium text-[10px] sm:text-xs md:text-sm lg:text-base tracking-wide ${language === "ar" ? "text-right font-arabic text-[90%] md:text-[120%] lg:text-[125%] mt-1" : ""}`}>
                {language === "ar" ? "للتكنولوجيا" : "of Technology"}
              </span>
            </div>
          </Link>
      
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-3">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="inline-flex h-12 w-max items-center justify-center rounded-lg bg-transparent px-6 py-2 text-base font-semibold transition-all duration-200 hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 focus:bg-blue-50/80 dark:focus:bg-blue-950/50 focus:outline-none border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30">
                    {t("home")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
      
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-12 px-6 text-base font-semibold rounded-lg bg-transparent transition-all duration-200 hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 data-[state=open]:bg-blue-50/80 dark:data-[state=open]:bg-blue-950/50 data-[state=open]:text-blue-600 dark:data-[state=open]:text-blue-400 border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30 data-[state=open]:border-blue-200/50 dark:data-[state=open]:border-blue-800/30">
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
                    <div className="grid gap-3 lg:col-span-4 md:col-span-3 sm:col-span-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:max-h-[60vh] lg:overflow-y-auto lg:pr-2 scrollbar-thin scrollbar-track-slate-100 scrollbar-thumb-blue-500 hover:scrollbar-thumb-blue-600 dark:scrollbar-track-gray-800 dark:scrollbar-thumb-blue-700">
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
                                <div className={`text-xs text-blue-600 font-semibold ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" 
                                    ? `${item.students.replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[Number(d)])} طالب`
                                    : `${item.students} Students`}
                                </div>
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
                    <NavigationMenuLink className="inline-flex h-12 w-max items-center justify-center rounded-lg bg-transparent px-6 py-2 text-base font-semibold transition-all duration-200 hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 focus:bg-blue-50/80 dark:focus:bg-blue-950/50 focus:outline-none border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30">
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
              className="h-11 w-11 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
      
            <ModeToggle />
            <LanguageToggle />
      
            {/* Apply Now Button */}
            <Button
              asChild
              className="hidden md:flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 border border-blue-500/30"
            >
              <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
                {language === "ar" ? "تقدم الآن" : "Apply Now"}
              </Link>
            </Button>
      
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 border border-transparent hover:border-blue-200/50 dark:hover:border-blue-800/30"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === "ar" ? "left" : "right"} className="w-[380px] sm:w-[420px] overflow-y-auto z-[9999]">
                {/* SheetTitle is required for accessibility */}
                <div className="sr-only">
                  <SheetTitle>{language === "ar" ? "قائمة التنقل" : "Navigation Menu"}</SheetTitle>
                </div>
                <nav className={`flex flex-col space-y-6 mt-12 pb-16 ${language === "ar" ? "text-right" : ""}`}>
                  <Link href="/" onClick={() => setIsOpen(false)} className={`text-xl font-bold hover:text-blue-600 ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                    {t("home")}
                  </Link>
                  
                  {/* Academics with Accordion-like behavior */}
                  <div className="space-y-4">
                    <div className={`flex items-center ${language === "ar" ? "flex-row-reverse" : ""} justify-between`}>
                      <button 
                        className={`text-xl font-bold hover:text-blue-600 flex items-center ${language === "ar" ? "flex-row-reverse font-arabic text-[110%]" : ""} gap-2`}
                        onClick={() => setShowAcademicsSubmenu(!showAcademicsSubmenu)}
                      >
                        {t("academics")}
                        <ChevronDown className={`h-5 w-5 transition-transform ${showAcademicsSubmenu ? 'rotate-180' : ''}`} />
                      </button>
                      <Link 
                        href="/academics" 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ${language === "ar" ? "font-arabic text-[110%]" : ""}`}
                      >
                        {language === "ar" ? "عرض الكل" : "View All"}
                      </Link>
                    </div>
                    
                    {showAcademicsSubmenu && (
                      <div className={`space-y-4 max-h-[40vh] overflow-y-auto ${language === "ar" 
                        ? "pr-6 border-r-2 pl-2 border-blue-200 dark:border-blue-800" 
                        : "pl-6 border-l-2 pr-2 border-blue-200 dark:border-blue-800"}`}>
                        {academicsMenuItems.map((item, index) => (
                          <div key={index} className={`flex gap-3 py-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${item.color} flex-shrink-0`}>
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div className={`flex-1 min-w-0 ${language === "ar" ? "text-right" : ""}`}>
                              <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block ${language === "ar" ? "font-arabic text-[110%]" : ""}`}
                              >
                                {language === "ar" ? item.titleAr : item.title}
                              </Link>
                              <p className={`text-xs text-gray-600 dark:text-gray-400 truncate ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                                {language === "ar" ? item.descriptionAr : item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Other navigation links */}
                  {["news", "events", "gallery", "about", "contact"].map((item) => (
                    <Link
                      key={item}
                      href={`/${item}`}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl font-bold hover:text-blue-600 ${language === "ar" ? "font-arabic text-[110%]" : ""}`}
                    >
                      {item === "gallery" ? (language === "ar" ? "معرض الصور" : "Gallery") : t(item)}
                    </Link>
                  ))}
                  
                  {/* Header actions in mobile menu */}
                  <div className={`flex items-center ${language === "ar" ? "justify-end" : ""} gap-4 pt-4 border-t border-gray-200 dark:border-gray-700`}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-11 w-11 rounded-lg hover:bg-blue-50/80 dark:hover:bg-blue-950/50"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSearchOpen(true);
                      }}
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">{language === "ar" ? "بحث" : "Search"}</span>
                    </Button>
                    
                    <ModeToggle />
                    <LanguageToggle />
                  </div>
      
                  <Button
                    asChild
                    className={`bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-2xl mt-4 w-full ${language === "ar" ? "font-arabic text-[110%] font-semibold" : "font-semibold"}`}
                  >
                    <Link
                     href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform" 
                     onClick={() => setIsOpen(false)}>
                      {language === "ar" ? "تقدم الآن" : "Apply Now"}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-lg overflow-y-auto max-h-screen">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10">
                <div className={`flex items-center ${language === "ar" ? "flex-row-reverse" : ""} justify-between mb-8`}>
                  <h3 className={`text-3xl font-bold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                    {language === "ar" ? "البحث في الموقع" : "Search Site"}
                  </h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setShowResults(false);
                      setSearchQuery("");
                    }}
                    className="h-12 w-12 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <form onSubmit={handleSearch} className="relative">
                  <Search className={`absolute ${language === "ar" ? "right-6" : "left-6"} top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400`} />
                  <Input
                    type="text"
                    placeholder={
                      language === "ar" ? "ابحث عن البرامج، الأخبار، الفعاليات..." : "Search programs, news, events..."
                    }
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className={`py-6 text-xl rounded-2xl border-2 focus:border-blue-500 bg-gray-50 dark:bg-gray-800 ${
                      language === "ar" 
                        ? "pr-16 pl-6 text-right font-arabic" 
                        : "pl-16 pr-6"
                    }`}
                    autoFocus
                    dir={language === "ar" ? "rtl" : "ltr"}
                  />
                  <Button
                    type="submit"
                    className={`absolute ${language === "ar" ? "left-2" : "right-2"} top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl ${language === "ar" ? "font-arabic" : ""}`}
                  >
                    {language === "ar" ? "بحث" : "Search"}
                  </Button>

                  {/* Search Suggestions Dropdown */}
                  {showSuggestions && !showResults && searchSuggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 z-50">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`w-full flex items-center ${language === "ar" ? "flex-row-reverse" : ""} gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 first:rounded-t-2xl last:rounded-b-2xl transition-colors`}
                        >
                          <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                            <suggestion.icon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className={`flex-1 ${language === "ar" ? "text-right" : "text-left"}`}>
                            <div className={`font-semibold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                              {language === "ar" ? suggestion.titleAr : suggestion.title}
                            </div>
                            <div className={`text-sm text-gray-500 dark:text-gray-400 capitalize ${language === "ar" ? "font-arabic" : ""}`}>
                              {suggestion.type === "program"
                                ? language === "ar"
                                  ? "برنامج"
                                  : "Program"
                                : suggestion.type === "news"
                                ? language === "ar"
                                  ? "خبر"
                                  : "News"
                                : suggestion.type === "event"
                                ? language === "ar"
                                  ? "فعالية"
                                  : "Event"
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

                {/* Search Results */}
                {showResults && (
                  <div className="mt-10 space-y-8">
                    {/* Result Stats */}
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {language === "ar" 
                        ? `نتائج البحث عن "${searchQuery}": ${
                            searchResults.programs.length + 
                            searchResults.pages.length + 
                            searchResults.news.length + 
                            searchResults.events.length
                          } نتيجة`
                        : `Search results for "${searchQuery}": ${
                            searchResults.programs.length + 
                            searchResults.pages.length + 
                            searchResults.news.length + 
                            searchResults.events.length
                          } results`
                      }
                    </div>

                    {/* Academic Programs Results */}
                    {searchResults.programs.length > 0 && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <h4 className={`text-xl font-bold mb-4 flex items-center ${language === "ar" ? "flex-row-reverse font-arabic text-[110%]" : ""} gap-2`}>
                          <GraduationCap className="h-5 w-5 text-blue-600" />
                          {language === "ar" ? "البرامج الأكاديمية" : "Academic Programs"}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                          {searchResults.programs.map((program, index) => (
                            <Link
                              key={index}
                              href={program.url}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setShowResults(false);
                              }}
                              className={`flex items-start ${language === "ar" ? "flex-row-reverse text-right" : ""} gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors`}
                            >
                              <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <GraduationCap className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <div className={`font-semibold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                                  {language === "ar" ? program.titleAr : program.title}
                                </div>
                                <div className={`text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? program.descriptionAr : program.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pages Results */}
                    {searchResults.pages.length > 0 && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <h4 className={`text-xl font-bold mb-4 flex items-center ${language === "ar" ? "flex-row-reverse font-arabic text-[110%]" : ""} gap-2`}>
                          <Building className="h-5 w-5 text-indigo-600" />
                          {language === "ar" ? "صفحات الموقع" : "Website Pages"}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                          {searchResults.pages.map((page, index) => (
                            <Link
                              key={index}
                              href={page.url}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setShowResults(false);
                              }}
                              className={`flex items-start ${language === "ar" ? "flex-row-reverse text-right" : ""} gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors`}
                            >
                              <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Building className="h-5 w-5 text-indigo-600" />
                              </div>
                              <div>
                                <div className={`font-semibold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                                  {language === "ar" ? page.titleAr : page.title}
                                </div>
                                <div className={`text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? page.descriptionAr : page.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* News Results */}
                    {searchResults.news.length > 0 && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <h4 className={`text-xl font-bold mb-4 flex items-center ${language === "ar" ? "flex-row-reverse font-arabic text-[110%]" : ""} gap-2`}>
                          <Mail className="h-5 w-5 text-green-600" />
                          {language === "ar" ? "الأخبار" : "News"}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                          {searchResults.news.map((news, index) => (
                            <Link
                              key={index}
                              href={news.url}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setShowResults(false);
                              }}
                              className={`flex items-start ${language === "ar" ? "flex-row-reverse text-right" : ""} gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors`}
                            >
                              <div className="h-10 w-10 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Mail className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <div className={`font-semibold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                                  {language === "ar" ? news.titleAr : news.title}
                                </div>
                                <div className={`text-xs text-blue-600 dark:text-blue-400 mt-0.5 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? 
                                    `${news.categoryAr} • ${news.date.replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[Number(d)])}` : 
                                    `${news.date} • ${news.category}`}
                                </div>
                                <div className={`text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? news.descriptionAr : news.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Events Results */}
                    {searchResults.events.length > 0 && (
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl">
                        <h4 className={`text-xl font-bold mb-4 flex items-center ${language === "ar" ? "flex-row-reverse font-arabic text-[110%]" : ""} gap-2`}>
                          <Calendar className="h-5 w-5 text-orange-600" />
                          {language === "ar" ? "الفعاليات" : "Events"}
                        </h4>
                        <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                          {searchResults.events.map((event, index) => (
                            <Link
                              key={index}
                              href={event.url}
                              onClick={() => {
                                setIsSearchOpen(false);
                                setShowResults(false);
                              }}
                              className={`flex items-start ${language === "ar" ? "flex-row-reverse text-right" : ""} gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-colors`}
                            >
                              <div className="h-10 w-10 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                                <Calendar className="h-5 w-5 text-orange-600" />
                              </div>
                              <div>
                                <div className={`font-semibold text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                                  {language === "ar" ? event.titleAr : event.title}
                                </div>
                                <div className={`text-xs text-blue-600 dark:text-blue-400 mt-0.5 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? 
                                    `${event.locationAr} • ${event.date.replace(/[0-9]/g, d => "٠١٢٣٤٥٦٧٨٩"[Number(d)])}` : 
                                    `${event.date} • ${event.location}`}
                                </div>
                                <div className={`text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 ${language === "ar" ? "font-arabic" : ""}`}>
                                  {language === "ar" ? event.descriptionAr : event.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* No Results */}
                    {searchResults.programs.length === 0 && 
                     searchResults.pages.length === 0 && 
                     searchResults.news.length === 0 && 
                     searchResults.events.length === 0 && (
                      <div className="py-20 text-center">
                        <div className="inline-flex items-center justify-center h-20 w-20 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                          <Search className="h-10 w-10 text-gray-400" />
                        </div>
                        <h4 className={`text-xl font-semibold mb-2 text-gray-900 dark:text-white ${language === "ar" ? "font-arabic text-[110%]" : ""}`}>
                          {language === "ar" ? "لم يتم العثور على نتائج" : "No results found"}
                        </h4>
                        <p className={`text-gray-600 dark:text-gray-400 max-w-md mx-auto ${language === "ar" ? "font-arabic" : ""}`}>
                          {language === "ar" 
                            ? `نأسف، لم نتمكن من العثور على نتائج مطابقة لـ "${searchQuery}". يرجى المحاولة بكلمات مختلفة.`
                            : `Sorry, we couldn't find any matches for "${searchQuery}". Please try different keywords.`
                          }
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {!showResults && (
                  <div className="mt-8 text-base text-gray-600 dark:text-gray-400">
                    {language === "ar" ? "اضغط Enter للبحث أو Esc للإغلاق" : "Press Enter to search or Esc to close"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}