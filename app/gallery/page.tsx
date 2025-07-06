"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import {
  Camera,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Calendar,
  MapPin,
  Users,
  Building,
  GraduationCap,
  Microscope,
  BookOpen,
  Award,
  Globe,
  Filter,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function GalleryPage() {
  const { t, language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { id: "all", name: language === "ar" ? "الكل" : "All", icon: Globe },
    { id: "campus", name: language === "ar" ? "الحرم الجامعي" : "Campus", icon: Building },
    { id: "academics", name: language === "ar" ? "الأكاديميات" : "Academics", icon: GraduationCap },
    { id: "labs", name: language === "ar" ? "المختبرات" : "Laboratories", icon: Microscope },
    { id: "events", name: language === "ar" ? "الفعاليات" : "Events", icon: Calendar },
    { id: "graduation", name: language === "ar" ? "التخرج" : "Graduation", icon: Award },
    { id: "library", name: language === "ar" ? "المكتبة" : "Library", icon: BookOpen },
    { id: "sports", name: language === "ar" ? "الرياضة" : "Sports", icon: Users },
  ]

  const galleryItems = [
    // Campus Images
    {
      id: 1,
      title: language === "ar" ? "المبنى الرئيسي للكلية" : "Main College Building",
      category: "campus",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-01-15",
      location: language === "ar" ? "الحرم الجامعي الرئيسي" : "Main Campus",
      description:
        language === "ar"
          ? "المبنى الرئيسي لكلية الجزيرة للتكنولوجيا"
          : "Main building of Gezira College of Technology",
    },
    {
      id: 2,
      title: language === "ar" ? "حديقة الكلية" : "College Garden",
      category: "campus",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-01-10",
      location: language === "ar" ? "الحديقة المركزية" : "Central Garden",
      description: language === "ar" ? "المساحات الخضراء الجميلة في الحرم الجامعي" : "Beautiful green spaces on campus",
    },
    {
      id: 3,
      title: language === "ar" ? "مختبر الحاسوب المتقدم" : "Advanced Computer Lab",
      category: "labs",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-01-08",
      location: language === "ar" ? "مبنى الهندسة" : "Engineering Building",
      description:
        language === "ar" ? "مختبر الحاسوب مجهز بأحدث التقنيات" : "Computer lab equipped with latest technology",
    },
    {
      id: 4,
      title: language === "ar" ? "حفل التخرج 2024" : "Graduation Ceremony 2024",
      category: "graduation",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-06-15",
      location: language === "ar" ? "القاعة الكبرى" : "Main Auditorium",
      description: language === "ar" ? "احتفال تخرج دفعة 2024" : "Class of 2024 graduation celebration",
    },
    {
      id: 5,
      title: language === "ar" ? "مكتبة الكلية" : "College Library",
      category: "library",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-01-05",
      location: language === "ar" ? "مبنى المكتبة" : "Library Building",
      description: language === "ar" ? "مكتبة حديثة مع مصادر متنوعة" : "Modern library with diverse resources",
    },
    {
      id: 6,
      title: language === "ar" ? "مختبر الهندسة الطبية" : "Biomedical Engineering Lab",
      category: "labs",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2024-01-03",
      location: language === "ar" ? "مبنى العلوم الصحية" : "Health Sciences Building",
      description:
        language === "ar" ? "مختبر متطور للهندسة الطبية الحيوية" : "Advanced biomedical engineering laboratory",
    },
    {
      id: 7,
      title: language === "ar" ? "قاعة المحاضرات الكبرى" : "Main Lecture Hall",
      category: "academics",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-12-20",
      location: language === "ar" ? "المبنى الأكاديمي" : "Academic Building",
      description:
        language === "ar" ? "قاعة محاضرات مجهزة بأحدث التقنيات" : "Lecture hall equipped with latest technology",
    },
    {
      id: 8,
      title: language === "ar" ? "الملعب الرياضي" : "Sports Field",
      category: "sports",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-12-15",
      location: language === "ar" ? "المجمع الرياضي" : "Sports Complex",
      description:
        language === "ar" ? "ملعب متعدد الاستخدامات للأنشطة الرياضية" : "Multi-purpose field for sports activities",
    },
    {
      id: 9,
      title: language === "ar" ? "معرض العلوم السنوي" : "Annual Science Fair",
      category: "events",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-11-20",
      location: language === "ar" ? "قاعة المعارض" : "Exhibition Hall",
      description:
        language === "ar" ? "معرض سنوي لمشاريع الطلاب العلمية" : "Annual exhibition of student scientific projects",
    },
    {
      id: 10,
      title: language === "ar" ? "مختبر الكيمياء" : "Chemistry Laboratory",
      category: "labs",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-11-10",
      location: language === "ar" ? "مبنى العلوم" : "Science Building",
      description:
        language === "ar" ? "مختبر كيمياء مجهز بأحدث الأجهزة" : "Chemistry lab equipped with latest equipment",
    },
    {
      id: 11,
      title: language === "ar" ? "كافتيريا الطلاب" : "Student Cafeteria",
      category: "campus",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-11-05",
      location: language === "ar" ? "مبنى الخدمات الطلابية" : "Student Services Building",
      description: language === "ar" ? "كافتيريا حديثة ومريحة للطلاب" : "Modern and comfortable student cafeteria",
    },
    {
      id: 12,
      title: language === "ar" ? "ورشة الهندسة المعمارية" : "Architecture Workshop",
      category: "academics",
      type: "image",
      src: "/placeholder.svg?height=600&width=800",
      thumbnail: "/placeholder.svg?height=300&width=400",
      date: "2023-10-25",
      location: language === "ar" ? "استوديو العمارة" : "Architecture Studio",
      description:
        language === "ar" ? "ورشة عمل لطلاب هندسة العمارة" : "Workshop for architecture engineering students",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openLightbox = (item: any, index: number) => {
    setSelectedImage(item)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredItems[prevIndex])
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage, currentImageIndex])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <AnimatedSection animation="fade-up">
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-12 w-12 md:h-16 md:w-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                  <Camera className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white">
                  {language === "ar" ? "معرض الصور" : "Photo Gallery"}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {language === "ar"
                  ? "استكشف الحياة الجامعية في كلية الجزيرة للتكنولوجيا من خلال مجموعة متنوعة من الصور"
                  : "Explore campus life at Gezira College of Technology through our diverse collection of images"}
              </p>
              <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  <span>
                    {galleryItems.length} {language === "ar" ? "صورة" : "Photos"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>
                    {categories.length - 1} {language === "ar" ? "فئة" : "Categories"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Filter Categories */}
      <AnimatedSection animation="slide-up" delay={200}>
        <section className="py-8 md:py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Filter className="h-5 w-5 md:h-6 md:w-6" />
                {language === "ar" ? "تصنيف الصور" : "Filter Photos"}
              </h2>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="hidden md:flex"
                >
                  {language === "ar" ? "شبكة" : "Grid"}
                </Button>
                <Button
                  variant={viewMode === "masonry" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("masonry")}
                  className="hidden md:flex"
                >
                  {language === "ar" ? "بناء" : "Masonry"}
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 text-xs md:text-sm"
                >
                  <category.icon className="h-3 w-3 md:h-4 md:w-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.id === "all"
                      ? galleryItems.length
                      : galleryItems.filter((item) => item.category === category.id).length}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gallery Grid */}
      <AnimatedSection animation="fade-in" delay={400}>
        <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4 md:px-6 lg:px-8">
            {isLoading ? (
              // Loading Skeleton
              <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-gray-300 dark:bg-gray-700 rounded-2xl aspect-[4/3]"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={`grid gap-4 md:gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
                }`}
              >
                {filteredItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className={`group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 hover:scale-105 hover:-translate-y-2 ${
                      viewMode === "masonry" ? "break-inside-avoid mb-4 md:mb-6" : ""
                    }`}
                    onClick={() => openLightbox(item, index)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                          viewMode === "grid" ? "aspect-[4/3]" : "h-auto"
                        }`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white font-bold text-sm md:text-base mb-2 line-clamp-2">{item.title}</h3>
                          <div className="flex items-center justify-between text-white/80 text-xs">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span className="truncate">{item.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{new Date(item.date).getFullYear()}</span>
                            </div>
                          </div>
                        </div>

                        {/* Play button for videos */}
                        {item.type === "video" && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="h-12 w-12 md:h-16 md:w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-blue-600/90 text-white text-xs">
                          {categories.find((cat) => cat.id === item.category)?.name}
                        </Badge>
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 text-xs">
                          {new Date(item.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 text-sm md:text-base">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm line-clamp-2 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(item.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className="truncate">{item.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* No Results */}
            {!isLoading && filteredItems.length === 0 && (
              <div className="text-center py-16">
                <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {language === "ar" ? "لا توجد صور" : "No Photos Found"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "ar" ? "لم يتم العثور على صور في هذا التصنيف" : "No photos found in this category"}
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 h-10 w-10 bg-white/10 hover:bg-white/20 text-white rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 bg-white/10 hover:bg-white/20 text-white rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 bg-white/10 hover:bg-white/20 text-white rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative max-w-full max-h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg md:text-xl mb-2">{selectedImage.title}</h3>
                  <p className="text-white/80 text-sm md:text-base mb-2">{selectedImage.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(selectedImage.date).toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedImage.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Download className="h-4 w-4 mr-2" />
                    {language === "ar" ? "تحميل" : "Download"}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <Share2 className="h-4 w-4 mr-2" />
                    {language === "ar" ? "مشاركة" : "Share"}
                  </Button>
                </div>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-white/60 text-sm">
                {currentImageIndex + 1} / {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
