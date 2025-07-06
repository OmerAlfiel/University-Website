"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const { t } = useLanguage()

  const newsArticles = [
    {
      id: 1,
      title: "New AI and Machine Learning Program Launched",
      excerpt:
        "Gezira College of Technology announces the launch of a cutting-edge program in Artificial Intelligence and Machine Learning, designed to meet the growing demand for AI professionals.",
      date: "December 15, 2024",
      author: "Dr. Ahmed Hassan",
      category: "Academic Programs",
      image: "/placeholder.svg?height=200&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Student Research Team Wins National Competition",
      excerpt:
        "A team of Computer Science students from GCT has won first place in the National Innovation Challenge with their groundbreaking healthcare application.",
      date: "December 10, 2024",
      author: "Prof. Sarah Mohamed",
      category: "Student Achievement",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "New Partnership with International Universities",
      excerpt:
        "GCT signs memorandums of understanding with leading universities in Europe and Asia to enhance student exchange programs and research collaboration.",
      date: "December 5, 2024",
      author: "Dr. Omar Ali",
      category: "Partnerships",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "State-of-the-Art Laboratory Inauguration",
      excerpt:
        "The college inaugurates a new biomedical engineering laboratory equipped with the latest technology to enhance practical learning experiences.",
      date: "November 28, 2024",
      author: "Dr. Fatima Ibrahim",
      category: "Infrastructure",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "Faculty Member Receives International Award",
      excerpt:
        "Professor of Architecture Engineering receives prestigious international award for sustainable building design research.",
      date: "November 20, 2024",
      author: "Dr. Khalid Osman",
      category: "Faculty Achievement",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "Annual Career Fair Attracts Major Employers",
      excerpt:
        "Over 50 companies participated in this year's career fair, offering internships and job opportunities to GCT students and graduates.",
      date: "November 15, 2024",
      author: "Ms. Amal Yousif",
      category: "Career Services",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = [
    "All",
    "Academic Programs",
    "Student Achievement",
    "Partnerships",
    "Infrastructure",
    "Faculty Achievement",
    "Career Services",
  ]

  return (
    <div className="container py-8 md:py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{t("news")}</h1>
        <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
          Stay updated with the latest news and announcements from Gezira College of Technology
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <Button key={category} variant="outline" size="sm">
            {category}
          </Button>
        ))}
      </div>

      {/* Featured Article */}
      {newsArticles
        .filter((article) => article.featured)
        .map((article) => (
          <Card key={article.id} className="mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4">Featured</Badge>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <Badge variant="secondary">{article.category}</Badge>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-muted-foreground mb-6">{article.excerpt}</p>
                <Button className="w-fit">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

      {/* News Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles
          .filter((article) => !article.featured)
          .map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </div>
                <Badge variant="secondary" className="w-fit mb-2">
                  {article.category}
                </Badge>
                <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{article.excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    {article.author}
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
