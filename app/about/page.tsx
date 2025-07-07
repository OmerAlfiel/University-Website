"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Target, Eye, Award, Users, BookOpen, Globe, Building, Heart } from "lucide-react"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const values = [
    {
      icon: Target,
      title: t("excellence"),
      description: t("excellenceDesc"),
    },
    {
      icon: BookOpen,
      title: t("innovation"),
      description: t("innovationDesc"),
    },
    {
      icon: Users,
      title: t("integrity"),
      description: t("integrityDesc"),
    },
    {
      icon: Globe,
      title: t("globalPerspective"),
      description: t("globalPerspectiveDesc"),
    },
  ]

  const leadership = [
    {
      name: "Prof. Dr. Ahmed Hassan",
      nameAr: "أ.د. أحمد حسن",
      position: "President",
      positionAr: "رئيس الكلية",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bio: "Leading educator with over 20 years of experience in higher education administration and engineering.",
      bioAr: "أكاديمي رائد بخبرة تزيد عن 20 عاماً في إدارة التعليم العالي والهندسة.",
    },
    {
      name: "Dr. Sarah Mohamed",
      nameAr: "د. سارة محمد",
      position: "Vice President for Academic Affairs",
      positionAr: "نائب رئيس الكلية للشؤون الأكاديمية",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      bio: "Renowned researcher in biomedical engineering with extensive experience in curriculum development.",
      bioAr: "باحثة مشهورة في الهندسة الطبية الحيوية مع خبرة واسعة في تطوير المناهج.",
    },
    {
      name: "Dr. Omar Ali",
      nameAr: "د. عمر علي",
      position: "Dean of Engineering",
      positionAr: "عميد كلية الهندسة",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bio: "Expert in electrical engineering with numerous publications and industry partnerships.",
      bioAr: "خبير في الهندسة الكهربائية مع العديد من المنشورات والشراكات الصناعية.",
    },
    {
      name: "Dr. Fatima Ibrahim",
      nameAr: "د. فاطمة إبراهيم",
      position: "Dean of Health Sciences",
      positionAr: "عميدة كلية العلوم الصحية",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      bio: "Healthcare professional and educator specializing in medical laboratory sciences and public health.",
      bioAr: "أخصائية رعاية صحية ومعلمة متخصصة في علوم المختبرات الطبية والصحة العامة.",
    },
  ]

  const achievements = [
    {
      year: "2009",
      title: language === "ar" ? "تأسيس الكلية" : "College Establishment",
      description:
        language === "ar"
          ? "تأسست كلية الجزيرة للتكنولوجيا مع أول برنامج بكالوريوس في إدارة الأعمال."
          : "Gezira College of Technology was established with the first undergraduate program in Business Administration.",
    },
    {
      year: "2012",
      title: language === "ar" ? "إطلاق برامج الهندسة" : "Engineering Programs Launch",
      description:
        language === "ar"
          ? "إطلاق برامج هندسة العمارة وتكنولوجيا المعلومات والعلوم الاقتصادية."
          : "Launched Architecture Engineering, Information Technology, and Economic Sciences programs.",
    },
    {
      year: "2018",
      title: language === "ar" ? "توسع العلوم الصحية" : "Health Sciences Expansion",
      description:
        language === "ar"
          ? "إضافة برامج تكنولوجيا الأشعة الطبية والصحة العامة لخدمة احتياجات المجتمع الصحية."
          : "Added Medical Radiologic Technology and Public Health programs to serve community health needs.",
    },
    {
      year: "2022",
      title: language === "ar" ? "برامج الرعاية الصحية" : "Healthcare Programs",
      description:
        language === "ar"
          ? "تقديم برامج التمريض والعلاج الطبيعي لتلبية متطلبات الرعاية الصحية المتزايدة."
          : "Introduced Nursing and Physiotherapy programs to address growing healthcare demands.",
    },
    {
      year: "2024",
      title: language === "ar" ? "برنامج الماجستير" : "MBA Program",
      description:
        language === "ar"
          ? "إطلاق برنامج ماجستير إدارة الأعمال، مما يمثل دخولنا إلى التعليم العالي للدراسات العليا."
          : "Launched the Master of Business Administration program, marking our entry into postgraduate education.",
    },
  ]

  const facilities = [
    {
      icon: Building,
      title: language === "ar" ? "مختبرات متطورة" : "Advanced Laboratories",
      description:
        language === "ar"
          ? "مختبرات مجهزة بأحدث التقنيات للتعلم العملي والبحث"
          : "State-of-the-art laboratories equipped with latest technology for practical learning and research",
    },
    {
      icon: BookOpen,
      title: language === "ar" ? "مكتبة شاملة" : "Comprehensive Library",
      description:
        language === "ar"
          ? "مكتبة واسعة مع مصادر رقمية ومطبوعة لدعم التعلم والبحث"
          : "Extensive library with digital and print resources to support learning and research",
    },
    {
      icon: Heart,
      title: language === "ar" ? "مركز صحي" : "Health Center",
      description:
        language === "ar"
          ? "مركز صحي مجهز لخدمة الطلاب وأعضاء هيئة التدريس"
          : "Well-equipped health center serving students and faculty members",
    },
    {
      icon: Users,
      title: language === "ar" ? "مرافق رياضية" : "Sports Facilities",
      description:
        language === "ar"
          ? "مرافق رياضية متنوعة لتعزيز الصحة البدنية والأنشطة الطلابية"
          : "Diverse sports facilities to promote physical health and student activities",
    },
  ]

  return (
    <div className="container px-0 flex flex-col">
      {/* Header */}
      <div className="text-center mb-12 px-4 md:px-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">{t("about")}</h1>
        <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto leading-relaxed">
          {language === "ar"
            ? "تعرف على تاريخنا ورسالتنا وقيمنا والأشخاص الذين يجعلون كلية الجزيرة للتكنولوجيا مؤسسة رائدة"
            : "Learn about our history, mission, values, and the people who make Gezira College of Technology a leading institution"}
        </p>
      </div>

      {/* Campus Image */}
      <section className="mb-16 px-4 md:px-8">
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=400&fit=crop&crop=center"
            alt="Gezira College Campus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold mb-2">
              {language === "ar" ? "حرم كلية الجزيرة للتكنولوجيا" : "Gezira College of Technology Campus"}
            </h2>
            <p className="text-lg opacity-90">
              {language === "ar" ? "جزيرة الجزيرة، الخرطوم، السودان" : "Gezira Island, Khartoum, Sudan"}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-16 px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="text-center border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">{t("ourMission")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {language === "ar"
                  ? "تطوير خريجين متكاملين مزودين بالصفات الأكاديمية والفكرية والأخلاقية الأساسية. نعد الطلاب ليكونوا مؤهلين مهنياً، مفكرين نقديين، متواصلين فعالين، ومواطنين عالميين مسؤولين أخلاقياً."
                  : "To develop well-rounded graduates equipped with essential academic, intellectual, and ethical qualities. We prepare students to be professionally competent, critical thinkers, effective communicators, and ethically responsible global citizens."}
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg">
            <CardHeader className="pb-6">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">{t("ourVision")}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {language === "ar"
                  ? "أن نكون مؤسسة رائدة للتعليم العالي في السودان والمنطقة، معترف بها للتميز في التدريس والبحث وخدمة المجتمع، وإنتاج خريجين يساهمون بشكل مفيد في المجتمع والمجتمع العالمي."
                  : "To be a leading institution of higher education in Sudan and the region, recognized for excellence in teaching, research, and community service, producing graduates who contribute meaningfully to society and the global community."}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("ourValues")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center mb-3">
                  <value.icon className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{value.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="mb-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{language === "ar" ? "مرافقنا" : "Our Facilities"}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-3">
                  <facility.icon className="h-7 w-7 text-purple-600" />
                </div>
                <CardTitle className="text-lg">{facility.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{facility.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* History & Achievements */}
      <section className="mb-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("history")}</h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative flex items-center">
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div
                  className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"} md:w-1/2 ${index % 2 === 1 ? "md:ml-auto" : ""}`}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl font-bold text-blue-600">{achievement.year}</span>
                      </div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{achievement.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mb-0 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("leadership")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-blue-100 dark:ring-blue-900/20">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={language === "ar" ? leader.nameAr : leader.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{language === "ar" ? leader.nameAr : leader.name}</CardTitle>
                <CardDescription className="font-medium text-blue-600">
                  {language === "ar" ? leader.positionAr : leader.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {language === "ar" ? leader.bioAr : leader.bio}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 text-white w-full h-auto flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8 text-center">{t("byTheNumbers")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-blue-100 text-sm">{t("programs")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-blue-100 text-sm">{t("students")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">200+</div>
            <div className="text-blue-100 text-sm">{t("faculty")}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15</div>
            <div className="text-blue-100 text-sm">{t("yearsOfExcellence")}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
