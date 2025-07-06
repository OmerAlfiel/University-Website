"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { GraduationCap, Users, BookOpen, Award, Target, Lightbulb, ArrowRight } from "lucide-react"

export default function AcademicsPage() {
  const { t, language } = useLanguage()

  const graduateQualities = [
    {
      icon: Target,
      title: t("professionallyCompetent"),
      points:
        language === "ar"
          ? [
              "امتلاك معرفة عميقة وراسخة في مجال تخصصهم",
              "تطبيق خبراتهم عملياً ومواكبة التطورات المحلية والإقليمية والعالمية",
              "فهم بيئتهم والروابط متعددة التخصصات بين مجالهم والمجالات الأخرى",
            ]
          : [
              "Possess deep and solid knowledge in their field of specialization",
              "Apply their expertise practically and stay updated with local, regional, and global developments",
              "Understand their environment and the interdisciplinary connections between their field and others",
            ],
    },
    {
      icon: Lightbulb,
      title: t("criticalThinkers"),
      points:
        language === "ar"
          ? [
              "متعلمون مستقلون يبادرون بأفكار إبداعية",
              "استخدام أساليب التفكير الحديثة والتحليل العلمي",
              "إجراء البحوث الأكاديمية والتفكير الموضوعي والبحث عن مصادر موثوقة للمعرفة",
              "احتضان التقنيات المتقدمة وتقدير أفكار وأعمال وإنجازات الآخرين",
            ]
          : [
              "Independent learners who initiate creative ideas",
              "Use modern thinking methods and scientific analysis",
              "Conduct academic research, think objectively, and seek reliable sources of knowledge",
              "Embrace advanced technologies and appreciate others' ideas, work, and achievements",
            ],
    },
    {
      icon: Users,
      title: t("problemSolvers"),
      points:
        language === "ar"
          ? [
              "قادرون على حل المشاكل ومواجهة التحديات",
              "اغتنام الفرص المتاحة من خلال تطبيق المهارات والقدرات الفكرية",
              "اتخاذ قرارات فعالة وإظهار المرونة والكفاءة والسعي المستمر لتعزيز أدائهم",
            ]
          : [
              "Able to solve problems and take on challenges",
              "Seize available opportunities by applying intellectual skills and capabilities",
              "Make effective decisions, show flexibility and competence, and continuously strive to enhance their performance",
            ],
    },
    {
      icon: BookOpen,
      title: t("effectiveCommunicators"),
      points:
        language === "ar"
          ? [
              "التواصل بوضوح وموضوعية وبتفصيل باستخدام أدوات الوسائط المتعددة",
              "التعاون بشكل جيد مع الآخرين في مختلف السياقات",
              "فهم أهمية الثقافة ودورها في تشكيل التواصل",
            ]
          : [
              "Communicate clearly, objectively, and in detail using multimedia tools",
              "Collaborate well with others in various contexts",
              "Understand the importance of culture and its role in shaping communication",
            ],
    },
    {
      icon: Award,
      title: t("ethicallyResponsible"),
      points:
        language === "ar"
          ? [
              "مسؤولية عالية وتوجيه بالقيم الأخلاقية في اتخاذ القرارات",
              "الوعي بتأثير قراراتهم على الآخرين",
              "احتضان التنوع والعمل بانسجام مع المجتمعات المحلية والوطنية والعالمية، وكذلك مع أقرانهم المهنيين",
            ]
          : [
              "Highly responsible and guided by ethical values in decision-making",
              "Aware of the impact of their decisions on others",
              "Embrace diversity and work harmoniously with local, national, and global communities, as well as their professional peers",
            ],
    },
  ]

  const postgraduatePrograms = [
    {
      name: language === "ar" ? "ماجستير إدارة الأعمال" : "MBA – Master of Business Administration",
      year: "2024",
      href: "/academics/mba",
    },
  ]

  const undergraduatePrograms = [
    {
      name: language === "ar" ? "بكالوريوس العلوم في علوم المختبرات الطبية" : "B.Sc. in Medical Laboratory Sciences",
      year: "2019",
      href: "/academics/medical-laboratory",
    },
    {
      name: language === "ar" ? "بكالوريوس العلوم في تقنية الأشعة الطبية" : "B.Sc. in Medical Radiologic Technology",
      year: "2018",
      href: "/academics/medical-radiologic",
    },
    {
      name:
        language === "ar"
          ? "بكالوريوس العلوم في الصحة العامة والصحة البيئية"
          : "B.Sc. in Public Health and Environmental Health",
      year: "2018",
      href: "/academics/public-health",
    },
    {
      name:
        language === "ar"
          ? "بكالوريوس (مع مرتبة الشرف) في الهندسة الطبية الحيوية"
          : "B.Sc. (Honors) in Biomedical Engineering",
      year: "2017",
      href: "/academics/biomedical-engineering",
    },
    {
      name:
        language === "ar"
          ? "بكالوريوس (مع مرتبة الشرف) في هندسة العمارة"
          : "B.Sc. (Honors) in Architecture Engineering",
      year: "2012",
      href: "/academics/architecture",
    },
    {
      name:
        language === "ar"
          ? "بكالوريوس (مع مرتبة الشرف) في تكنولوجيا المعلومات"
          : "B.Sc. (Honors) in Information Technology",
      year: "2012",
      href: "/academics/information-technology",
    },
    {
      name:
        language === "ar" ? "بكالوريوس (مع مرتبة الشرف) في العلوم الاقتصادية" : "B.Sc. (Honors) in Economic Sciences",
      year: "2012",
      href: "/academics/economic-sciences",
    },
    {
      name:
        language === "ar" ? "بكالوريوس الآداب في اللغة الإنجليزية وآدابها" : "B.A. in English Language and Literature",
      year: "2011",
      href: "/academics/english-literature",
    },
    {
      name:
        language === "ar"
          ? "بكالوريوس (مع مرتبة الشرف) في الهندسة الكهربائية والإلكترونية"
          : "B.Sc. (Honors) in Electrical and Electronic Engineering",
      year: "2010",
      href: "/academics/electrical-engineering",
    },
    {
      name: language === "ar" ? "بكالوريوس (مع مرتبة الشرف) في علوم الحاسوب" : "B.Sc. (Honors) in Computer Science",
      year: "2010",
      href: "/academics/computer-science",
    },
    {
      name:
        language === "ar" ? "بكالوريوس (مع مرتبة الشرف) في إدارة الأعمال" : "B.Sc. (Honors) in Business Administration",
      year: "2009",
      href: "/academics/business-administration",
    },
    {
      name: language === "ar" ? "بكالوريوس العلوم في التمريض" : "B.Sc. in Nursing",
      year: "2022",
      href: "/academics/nursing",
    },
    {
      name: language === "ar" ? "بكالوريوس العلوم في العلاج الطبيعي" : "B.Sc. in Physiotherapy",
      year: "2022",
      href: "/academics/physiotherapy",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20 py-16 md:py-24">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4 md:mb-6">
              {t("academics")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("academicsDescription")}
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Graduate Qualities */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">{t("graduateQualities")}</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-4xl mx-auto text-base md:text-lg">
            {t("collegeAimsToPrepare")}
          </p>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {graduateQualities.map((quality, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 md:h-10 md:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <quality.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                    </div>
                    <CardTitle className="text-base md:text-lg">{quality.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {quality.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Academic Programs */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">{t("academicPrograms")}</h2>

          {/* Postgraduate Programs */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              {t("postgraduate")}
            </h3>
            <div className="grid gap-4">
              {postgraduatePrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <CardTitle className="text-base md:text-lg">{program.name}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{t("postgraduate")}</Badge>
                        {program.year && <Badge variant="outline">{program.year}</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full sm:w-auto bg-transparent">
                      <Link href={program.href}>
                        {language === "ar" ? "عرض التفاصيل" : "View Details"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Undergraduate Programs */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              {t("undergraduate")}
            </h3>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {undergraduatePrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <CardTitle className="text-sm md:text-base leading-tight">{program.name}</CardTitle>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {t("undergraduate")}
                        </Badge>
                        {program.year && (
                          <Badge variant="secondary" className="text-xs">
                            {program.year}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                      <Link href={program.href}>
                        {language === "ar" ? "عرض التفاصيل" : "View Details"}
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
