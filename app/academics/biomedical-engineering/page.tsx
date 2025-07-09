"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import { Heart, Clock, Users, Briefcase, GraduationCap, BookOpen, FlaskConical, Stethoscope } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BiomedicalEngineeringPage() {
  const { language } = useLanguage()

  const coursework = [
    {
      title: "Biomedical Instrumentation",
      titleAr: "الأجهزة الطبية الحيوية",
      description: "Design and analysis of medical devices",
      descriptionAr: "تصميم وتحليل الأجهزة الطبية",
      credits: 4,
    },
    {
      title: "Biomaterials",
      titleAr: "المواد الحيوية",
      description: "Materials for medical applications",
      descriptionAr: "المواد للتطبيقات الطبية",
      credits: 3,
    },
    {
      title: "Medical Imaging",
      titleAr: "التصوير الطبي",
      description: "X-ray, MRI, and ultrasound systems",
      descriptionAr: "أنظمة الأشعة السينية والرنين المغناطيسي والموجات فوق الصوتية",
      credits: 4,
    },
    {
      title: "Biomedical Signal Processing",
      titleAr: "معالجة الإشارات الطبية الحيوية",
      description: "Analysis of biological signals",
      descriptionAr: "تحليل الإشارات البيولوجية",
      credits: 3,
    },
    {
      title: "Tissue Engineering",
      titleAr: "هندسة الأنسجة",
      description: "Developing artificial tissues and organs",
      descriptionAr: "تطوير الأنسجة والأعضاء الاصطناعية",
      credits: 3,
    },
    {
      title: "Rehabilitation Engineering",
      titleAr: "هندسة إعادة التأهيل",
      description: "Design of assistive technologies",
      descriptionAr: "تصميم التقنيات المساعدة",
      credits: 3,
    },
  ]

  const careerPaths = [
    {
      title: "Biomedical Engineer",
      titleAr: "مهندس طبي حيوي",
      salary: "$70,000 - $95,000",
      description: "Design medical devices and equipment",
      descriptionAr: "تصميم الأجهزة والمعدات الطبية",
    },
    {
      title: "Clinical Engineer",
      titleAr: "مهندس سريري",
      salary: "$65,000 - $85,000",
      description: "Maintain hospital equipment",
      descriptionAr: "صيانة معدات المستشفى",
    },
    {
      title: "Research Scientist",
      titleAr: "باحث علمي",
      salary: "$75,000 - $110,000",
      description: "Develop new medical technologies",
      descriptionAr: "تطوير تقنيات طبية جديدة",
    },
    {
      title: "Medical Device Quality Engineer",
      titleAr: "مهندس جودة الأجهزة الطبية",
      salary: "$68,000 - $92,000",
      description: "Ensure medical devices meet regulations",
      descriptionAr: "ضمان امتثال الأجهزة الطبية للوائح",
    },
  ]

  const programFeatures = [
    {
      title: "State-of-the-Art Labs",
      titleAr: "مختبرات متطورة",
      description: "Access to advanced biomedical research facilities",
      descriptionAr: "الوصول إلى مرافق بحثية طبية حيوية متقدمة",
      icon: <FlaskConical className="h-12 w-12" />,
    },
    {
      title: "Hospital Partnerships",
      titleAr: "شراكات مع المستشفيات",
      description: "Clinical rotations in leading medical centers",
      descriptionAr: "تدريب سريري في مراكز طبية رائدة",
      icon: <Stethoscope className="h-12 w-12" />,
    },
    {
      title: "Industry Connections",
      titleAr: "روابط صناعية",
      description: "Internship opportunities with medical device companies",
      descriptionAr: "فرص تدريب مع شركات الأجهزة الطبية",
      icon: <Briefcase className="h-12 w-12" />,
    },
    {
      title: "Research Opportunities",
      titleAr: "فرص بحثية",
      description: "Participate in groundbreaking biomedical research",
      descriptionAr: "المشاركة في أبحاث طبية حيوية رائدة",
      icon: <GraduationCap className="h-12 w-12" />,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <AnimatedSection className="relative overflow-hidden bg-gradient-to-br from-pink-600 via-pink-700 to-red-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <Heart className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              {language === "ar" ? "الهندسة الطبية الحيوية" : "Biomedical Engineering"}
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8 leading-relaxed">
              {language === "ar"
                ? "دمج الهندسة والطب لتطوير تقنيات الرعاية الصحية"
                : "Combining engineering and medicine to advance healthcare technology"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Clock className="h-4 w-4 mr-2" />
                {language === "ar" ? "4 سنوات" : "4 Years"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2 text-base">
                <Users className="h-4 w-4 mr-2" />
                {language === "ar" ? "220+ طالب" : "220+ Students"}
              </Badge>
            </div>
            <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50 px-8 py-4 text-lg font-semibold">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">{language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Program Overview Section */}
      <AnimatedSection className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
            {language === "ar" ? "نظرة عامة على البرنامج" : "Program Overview"}
          </h2>
          
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
            <p>
              {language === "ar" 
                ? "يعد برنامج الهندسة الطبية الحيوية تخصصًا متعدد المجالات يجمع بين مبادئ الهندسة والعلوم الطبية لتطوير التكنولوجيا التي تحسن الرعاية الصحية وجودة حياة المرضى."
                : "The Biomedical Engineering program is an interdisciplinary major that combines engineering principles with medical sciences to develop technology that improves healthcare and patient quality of life."}
            </p>
            <p>
              {language === "ar"
                ? "يوفر برنامجنا أساسًا قويًا في الهندسة والبيولوجيا والفيزياء والكيمياء، مما يمكن الطلاب من تصميم وتطوير الأجهزة الطبية والأنظمة الحيوية والعلاجات المبتكرة."
                : "Our program provides a strong foundation in engineering, biology, physics, and chemistry, enabling students to design and develop medical devices, biological systems, and innovative therapies."}
            </p>
            <p>
              {language === "ar"
                ? "من خلال المزج بين الفصول الدراسية النظرية والخبرة العملية في المختبر والتدريب السريري، سيكتسب الطلاب المهارات اللازمة للنجاح في هذا المجال سريع التطور."
                : "Through a blend of theoretical coursework, hands-on laboratory experience, and clinical training, students will gain the skills necessary to succeed in this rapidly evolving field."}
            </p>
          </div>

          {/* Program Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="border-pink-100 dark:border-pink-900 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 p-3 rounded-xl">
                      {feature.icon}
                    </div>
                    <CardTitle>{language === "ar" ? feature.titleAr : feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "ar" ? feature.descriptionAr : feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Curriculum Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-white via-pink-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
            {language === "ar" ? "المنهج الدراسي" : "Curriculum"}
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === "ar"
              ? "استكشف المقررات الرئيسية في برنامج الهندسة الطبية الحيوية"
              : "Explore the core courses in our Biomedical Engineering program"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coursework.map((course, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-pink-100 dark:border-pink-900/40">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold">{language === "ar" ? course.titleAr : course.title}</CardTitle>
                    <Badge variant="outline" className="border-pink-200 dark:border-pink-800 text-pink-700 dark:text-pink-400">
                      {course.credits} {language === "ar" ? "ساعات" : "Credits"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{language === "ar" ? course.descriptionAr : course.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-pink-500 text-pink-700 dark:border-pink-700 dark:text-pink-400">
              {language === "ar" ? "عرض المزيد من المقررات" : "View More Courses"}
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Career Opportunities Section */}
      <AnimatedSection className="py-20 container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
          {language === "ar" ? "الفرص المهنية" : "Career Opportunities"}
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {language === "ar"
            ? "استكشف المسارات المهنية المختلفة بعد إكمال درجة الهندسة الطبية الحيوية"
            : "Explore diverse career paths after completing a Biomedical Engineering degree"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careerPaths.map((career, index) => (
            <Card key={index} className="border-pink-100 dark:border-pink-900/40 bg-white/70 dark:bg-gray-800/70">
              <CardHeader>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <CardTitle>{language === "ar" ? career.titleAr : career.title}</CardTitle>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
                    {career.salary}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base dark:text-gray-300">
                  {language === "ar" ? career.descriptionAr : career.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials & Faculty Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-white via-pink-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container">
          <Tabs defaultValue="testimonials" className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="testimonials">{language === "ar" ? "آراء الطلاب" : "Student Testimonials"}</TabsTrigger>
                <TabsTrigger value="faculty">{language === "ar" ? "أعضاء هيئة التدريس" : "Faculty"}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="testimonials">
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-white dark:bg-gray-800 border-pink-100 dark:border-pink-900/40">
                  <CardContent className="pt-6">
                    <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                      {language === "ar"
                        ? "\"برنامج الهندسة الطبية الحيوية زودني بالمعرفة والمهارات لتطوير تقنيات يمكن أن تحدث فرقًا حقيقيًا في حياة المرضى. المختبرات المتطورة والخبرة السريرية كانت لا تقدر بثمن.\""
                        : "\"The Biomedical Engineering program equipped me with the knowledge and skills to develop technologies that can make a real difference in patients' lives. The advanced labs and clinical experience were invaluable.\""}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="bg-pink-100 dark:bg-pink-900/30 h-10 w-10 rounded-full" />
                      <div>
                        <p className="font-medium">{language === "ar" ? "سارة الأحمد" : "Sarah Ahmed"}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {language === "ar" ? "خريجة عام 2024، مهندسة أجهزة طبية" : "Class of 2024, Medical Device Engineer"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-pink-100 dark:border-pink-900/40">
                  <CardContent className="pt-6">
                    <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                      {language === "ar"
                        ? "\"الجمع بين الدورات الهندسية الصلبة والتطبيقات الطبية يجعل هذا البرنامج فريدًا حقًا. التدريب الداخلي الذي حصلت عليه من خلال شراكات الجامعة قادني مباشرة إلى وظيفتي الحالية.\""
                        : "\"The combination of rigorous engineering courses and medical applications makes this program truly unique. The internship I got through university partnerships led directly to my current job.\""}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="bg-pink-100 dark:bg-pink-900/30 h-10 w-10 rounded-full" />
                      <div>
                        <p className="font-medium">{language === "ar" ? "خالد المنصور" : "Khalid Al-Mansour"}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {language === "ar" ? "خريج عام 2023، مهندس بحث وتطوير" : "Class of 2023, R&D Engineer"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faculty">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white dark:bg-gray-800 border-pink-100 dark:border-pink-900/40">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-pink-100 dark:bg-pink-900/30 h-24 w-24 rounded-full mb-4" />
                      <h3 className="font-semibold text-lg">
                        {language === "ar" ? "د. نادية الراشد" : "Dr. Nadia Al-Rashid"}
                      </h3>
                      <p className="text-pink-600 dark:text-pink-400 mb-3">
                        {language === "ar" ? "رئيسة القسم، هندسة الأجهزة الطبية" : "Department Chair, Medical Device Engineering"}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {language === "ar"
                          ? "خبيرة في هندسة الأجهزة الطبية مع 15 عامًا من الخبرة في البحث والتطوير الصناعي."
                          : "Expert in medical device engineering with 15 years of experience in industrial research and development."}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border-pink-100 dark:border-pink-900/40">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-pink-100 dark:bg-pink-900/30 h-24 w-24 rounded-full mb-4" />
                      <h3 className="font-semibold text-lg">
                        {language === "ar" ? "د. أحمد الخالدي" : "Dr. Ahmad Al-Khalidi"}
                      </h3>
                      <p className="text-pink-600 dark:text-pink-400 mb-3">
                        {language === "ar" ? "أستاذ مشارك، هندسة الأنسجة" : "Associate Professor, Tissue Engineering"}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {language === "ar"
                          ? "باحث حائز على جوائز في مجال هندسة الأنسجة والمواد الحيوية المتقدمة."
                          : "Award-winning researcher in tissue engineering and advanced biomaterials."}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 container">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-600 to-red-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "ar" ? "ابدأ رحلتك في الهندسة الطبية الحيوية اليوم" : "Begin Your Biomedical Engineering Journey Today"}
            </h2>
            <p className="text-xl mb-8 text-pink-100">
              {language === "ar"
                ? "انضم إلى مجتمع من المبتكرين الذين يعملون على تحسين الرعاية الصحية من خلال التكنولوجيا المتطورة."
                : "Join a community of innovators working to improve healthcare through advanced technology."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-pink-700 hover:bg-pink-50">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">{language === "ar" ? "تقدم الآن" : "Apply Now"}</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-pink-700">
                <Link href="/contact">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
