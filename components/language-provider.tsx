"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    home: "Home",
    academics: "Academics",
    news: "News",
    events: "Events",
    about: "About",
    contact: "Contact",

    // Home page
    welcome: "Welcome to Gezira College of Technology",
    subtitle: "Developing well-rounded graduates with essential academic, intellectual, and ethical qualities",
    learnMore: "Learn More",
    ourMission: "Our Mission",
    missionText:
      "Gezira College of Technology is dedicated to developing well-rounded graduates equipped with essential academic, intellectual, and ethical qualities.",
    academicPrograms: "Academic Programs",
    postgraduate: "Postgraduate Programs",
    undergraduate: "Undergraduate Programs",
    latestNews: "Latest News",
    upcomingEvents: "Upcoming Events",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",

    // Graduate qualities
    professionallyCompetent: "Professionally Competent",
    criticalThinkers: "Critical Thinkers & Innovators",
    problemSolvers: "Problem Solvers & Decision Makers",
    effectiveCommunicators: "Effective Communicators",
    ethicallyResponsible: "Ethically Responsible & Globally Aware",

    // Feature descriptions
    professionallyCompetentDesc: "Deep knowledge and practical expertise in specialized fields with global awareness and industry connections.",
    criticalThinkersDesc: "Independent learners who initiate creative ideas, embrace advanced technologies, and drive innovation.",
    problemSolversDesc: "Skilled in solving complex problems, making effective decisions with flexibility and continuous improvement.",
    effectiveCommunicatorsDesc: "Clear, objective communication using multimedia tools with deep cultural understanding and collaboration skills.",

    // Academics dropdown
    graduateQualities: "Graduate Qualities",
    engineeringPrograms: "Engineering Programs",
    healthSciences: "Health Sciences",
    businessPrograms: "Business Programs",
    viewAllPrograms: "View All Programs",

    // Form fields
    name: "Name",
    email: "Email",
    message: "Message",
    subject: "Subject",
    submit: "Submit",
    sendMessage: "Send Message",

    // Contact info
    address: "Address",
    phone: "Phone",
    officeHours: "Office Hours",

    // About page
    ourVision: "Our Vision",
    ourValues: "Our Values",
    leadership: "Leadership Team",
    history: "Our History",
    facilities: "Our Facilities",

    // News & Events
    readMore: "Read More",
    register: "Register",
    registerNow: "Register Now",
    viewAllNews: "View All News",
    viewAllEvents: "View All Events",

    // Stats
    students: "Students",
    faculty: "Faculty Members",
    programs: "Academic Programs",
    yearsOfExcellence: "Years of Excellence",

    // Departments
    admissionsOffice: "Admissions Office",
    studentAffairs: "Student Affairs",
    researchOffice: "Research Office",
    internationalRelations: "International Relations",

    // Time
    fullDayEvent: "Full Day Event",
    variousTimes: "Various Times",
    multipleVenues: "Multiple Venues",
    expectedAttendees: "Expected Attendees",
    attendees: "Attendees",

    // Categories
    all: "All",
    academic: "Academic",
    career: "Career",
    research: "Research",
    studentLife: "Student Life",
    ceremony: "Ceremony",
    technology: "Technology",

    // Content
    campusLife: "Campus Life",
    admissions: "Admissions",
    quickLinks: "Quick Links",
    information: "Information",
    findUs: "Find Us",
    byTheNumbers: "By the Numbers",
    pastEvents: "Past Events",
    loadMoreArticles: "Load More Articles",

    // Values
    excellence: "Excellence",
    innovation: "Innovation",
    integrity: "Integrity",
    globalPerspective: "Global Perspective",

    // Descriptions
    excellenceDesc: "We strive for excellence in all aspects of education, research, and service to our community.",
    innovationDesc: "We foster creativity and innovation in teaching, learning, and research methodologies.",
    integrityDesc: "We uphold the highest standards of academic and professional integrity in all our endeavors.",
    globalPerspectiveDesc: "We prepare our students to be global citizens who can contribute to society worldwide.",
    academicsDescription:
      "Gezira College of Technology is dedicated to developing well-rounded graduates equipped with essential academic, intellectual, and ethical qualities.",
    collegeAimsToPrepare: "The college aims to prepare its students to be:",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    academics: "الأكاديميات",
    news: "الأخبار",
    events: "الفعاليات",
    about: "حولنا",
    contact: "اتصل بنا",
    
    // Feature descriptions
    professionallyCompetentDesc: "معرفة عميقة وخبرة عملية في مجالات متخصصة مع وعي عالمي وروابط صناعية.",
    criticalThinkersDesc: "متعلمون مستقلون يطرحون أفكارًا إبداعية، ويتبنون التقنيات المتقدمة، ويدفعون الابتكار.",
    problemSolversDesc: "ماهرون في حل المشكلات المعقدة، واتخاذ قرارات فعالة مع المرونة والتحسين المستمر.",
    effectiveCommunicatorsDesc: "تواصل واضح وموضوعي باستخدام أدوات الوسائط المتعددة مع فهم ثقافي عميق ومهارات التعاون.",

    // Home page
    welcome: "مرحباً بكم في كلية الجزيرة للتكنولوجيا",
    subtitle: "تطوير خريجين متكاملين مزودين بالصفات الأكاديمية والفكرية والأخلاقية الأساسية",
    learnMore: "اعرف المزيد",
    ourMission: "مهمتنا",
    missionText:
      "تلتزم كلية الجزيرة للتكنولوجيا بتطوير خريجين متكاملين مزودين بالصفات الأكاديمية والفكرية والأخلاقية الأساسية.",
    academicPrograms: "البرامج الأكاديمية",
    postgraduate: "برامج الدراسات العليا",
    undergraduate: "برامج البكالوريوس",
    latestNews: "آخر الأخبار",
    upcomingEvents: "الفعاليات القادمة",
    contactUs: "اتصل بنا",
    getInTouch: "تواصل معنا",

    // Graduate qualities
    professionallyCompetent: "مؤهلون مهنياً",
    criticalThinkers: "مفكرون نقديون ومبدعون",
    problemSolvers: "حلالون للمشاكل وصانعون للقرارات",
    effectiveCommunicators: "متواصلون فعالون",
    ethicallyResponsible: "مسؤولون أخلاقياً وواعون عالمياً",

    // Academics dropdown
    graduateQualities: "صفات الخريجين",
    engineeringPrograms: "برامج الهندسة",
    healthSciences: "العلوم الصحية",
    businessPrograms: "برامج الأعمال",
    viewAllPrograms: "عرض جميع البرامج",

    // Form fields
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    subject: "الموضوع",
    submit: "إرسال",
    sendMessage: "إرسال رسالة",

    // Contact info
    address: "العنوان",
    phone: "الهاتف",
    officeHours: "ساعات العمل",

    // About page
    ourVision: "رؤيتنا",
    ourValues: "قيمنا",
    leadership: "فريق القيادة",
    history: "تاريخنا",
    facilities: "مرافقنا",

    // News & Events
    readMore: "اقرأ المزيد",
    register: "سجل",
    registerNow: "سجل الآن",
    viewAllNews: "عرض جميع الأخبار",
    viewAllEvents: "عرض جميع الفعاليات",

    // Stats
    students: "طالب",
    faculty: "عضو هيئة تدريس",
    programs: "برنامج أكاديمي",
    yearsOfExcellence: "سنة من التميز",

    // Departments
    admissionsOffice: "مكتب القبول",
    studentAffairs: "شؤون الطلاب",
    researchOffice: "مكتب البحوث",
    internationalRelations: "العلاقات الدولية",

    // Time
    fullDayEvent: "فعالية يوم كامل",
    variousTimes: "أوقات متنوعة",
    multipleVenues: "أماكن متعددة",
    expectedAttendees: "الحضور المتوقع",
    attendees: "الحضور",

    // Categories
    all: "الكل",
    academic: "أكاديمي",
    career: "مهني",
    research: "بحثي",
    studentLife: "حياة الطلاب",
    ceremony: "احتفالي",
    technology: "تكنولوجيا",

    // Content
    campusLife: "الحياة الجامعية",
    admissions: "القبول",
    quickLinks: "روابط سريعة",
    information: "معلومات",
    findUs: "اعثر علينا",
    byTheNumbers: "بالأرقام",
    pastEvents: "الفعاليات السابقة",
    loadMoreArticles: "تحميل المزيد من المقالات",

    // Values
    excellence: "التميز",
    innovation: "الابتكار",
    integrity: "النزاهة",
    globalPerspective: "المنظور العالمي",

    // Descriptions
    excellenceDesc: "نسعى للتميز في جميع جوانب التعليم والبحث وخدمة المجتمع.",
    innovationDesc: "نعزز الإبداع والابتكار في منهجيات التدريس والتعلم والبحث.",
    integrityDesc: "نحافظ على أعلى معايير النزاهة الأكاديمية والمهنية في جميع مساعينا.",
    globalPerspectiveDesc: "نعد طلابنا ليكونوا مواطنين عالميين قادرين على المساهمة في المجتمع عالمياً.",
    academicsDescription:
      "تلتزم كلية الجزيرة للتكنولوجيا بتطوير خريجين متكاملين مزودين بالصفات الأكاديمية والفكرية والأخلاقية الأساسية.",
    collegeAimsToPrepare: "تهدف الكلية إلى إعداد طلابها ليكونوا:",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    // @ts-ignore - We know that the key might not exist in both language objects
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
