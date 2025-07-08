"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  GraduationCap,
  Globe,
  ArrowRight,
  Shield,
  Star,
  Building,
} from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { name: language === "ar" ? "الرئيسية" : "Home", href: "/" },
    { name: language === "ar" ? "حولنا" : "About Us", href: "/about" },
    { name: language === "ar" ? "الأخبار" : "News", href: "/news" },
    { name: language === "ar" ? "الفعاليات" : "Events", href: "/events" },
    { name: language === "ar" ? "معرض الصور" : "Gallery", href: "/gallery" },
    { name: language === "ar" ? "اتصل بنا" : "Contact", href: "/contact" },
  ]

  const academicLinks = [
    { name: language === "ar" ? "علوم الحاسوب" : "Computer Science", href: "/academics/computer-science" },
    { name: language === "ar" ? "علوم التمريض" : "Nursing Science", href: "/academics/nursing" },
    {
      name: language === "ar" ? "الهندسة الكهربائية" : "Electrical Engineering",
      href: "/academics/electrical-engineering",
    },
    {
      name: language === "ar" ? "إدارة الأعمال" : "Business Administration",
      href: "/academics/business-administration",
    },
    { name: language === "ar" ? "هندسة العمارة" : "Architecture", href: "/academics/architecture" },
    { name: language === "ar" ? "المختبرات الطبية" : "Medical Laboratory", href: "/academics/medical-laboratory" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" },
  ]

  // const stats = [
  //   { number: "15+", label: language === "ar" ? "برنامج أكاديمي" : "Academic Programs", icon: BookOpen },
  //   { number: "5000+", label: language === "ar" ? "طالب" : "Students", icon: Users },
  //   { number: "200+", label: language === "ar" ? "عضو هيئة تدريس" : "Faculty Members", icon: GraduationCap },
  //   { number: "98%", label: language === "ar" ? "معدل التوظيف" : "Employment Rate", icon: Award },
  // ]

  const accreditations = [
    { name: "ISO 9001:2015", icon: Shield },
    { name: language === "ar" ? "معتمد وزارياً" : "Ministry Accredited", icon: Star },
    { name: language === "ar" ? "عضو الاتحاد الدولي" : "International Member", icon: Globe },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900/90 via-blue-900/85 to-gray-800/90 text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-20">
        {/* Primary dot pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.2%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] scale-[1.25]"></div>
        
        {/* Secondary subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%220.05%22 d=%22M1,1 L19,1 L19,19 L1,19 L1,1 Z M0,0 L20,0 L20,20 L0,20 L0,0 Z%22/%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container px-6 md:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-12 w-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                <Send className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold">
                {language === "ar" ? "ابق على اطلاع بآخر الأخبار" : "Stay Updated with Latest News"}
              </h3>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "ar"
                ? "اشترك في نشرتنا الإخبارية لتلقي آخر الأخبار والفعاليات"
                : "Subscribe to our newsletter for latest news and events"}
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus:bg-white/20 rounded-xl flex-1"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 rounded-xl">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                {language === "ar"
                  ? "نحترم خصوصيتك ولن نشارك بياناتك مع أطراف ثالثة"
                  : "We respect your privacy and won't share your data with third parties"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/*

       <div className="border-b border-white/10 relative z-10">
        <div className="container px-6 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      */}

      {/* Main Footer Content */}
      <div className="container px-6 md:px-8 py-16 relative z-10">
        <div className="grid gap-12 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* University Info */}
          <div className="lg:col-span-1 text-center lg:text-left" dir="ltr">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden group">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.7),transparent_70%)] opacity-80"></div>
                
                {/* Subtle animated pulse */}
                <div className="absolute inset-0 bg-blue-500/20 animate-[pulse_3s_infinite]"></div>
                
                {/* Logo image with enhanced clarity */}
                <img 
                  src="/logo-white.svg" 
                  alt="GCT Logo" 
                  className="w-full h-full p-[5%] object-contain brightness-110 drop-shadow-md relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-bold text-2xl text-white">Gezira College</h3>
                <p className="text-blue-300 font-semibold">of Technology</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              {language === "ar"
                ? "كلية الجزيرة للتكنولوجيا - مؤسسة تعليمية رائدة تلتزم بتطوير خريجين متكاملين."
                : "Gezira College of Technology - A leading educational institution committed to developing well-rounded graduates."}
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-10 w-10 bg-white/10 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left" dir="ltr">
            <h4 className="font-bold text-white mb-6 text-xl flex items-center justify-center lg:justify-start gap-2">
              <Building className="h-5 w-5 text-blue-400" />
              {language === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Academic Programs */}
          <div className="text-center lg:text-left" dir="ltr">
            <h4 className="font-bold text-white mb-6 text-xl flex items-center justify-center lg:justify-start gap-2">
              <GraduationCap className="h-5 w-5 text-blue-400" />
              {language === "ar" ? "البرامج الأكاديمية" : "Academic Programs"}
            </h4>
            <nav className="space-y-3">
              {academicLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left" dir="ltr">
            <h4 className="font-bold text-white mb-6 text-xl flex items-center justify-center lg:justify-start gap-2">
              <Globe className="h-5 w-5 text-blue-400" />
              {language === "ar" ? "معلومات الاتصال" : "Contact Info"}
            </h4>

            <div className="space-y-4">
              <div className="flex items-start justify-center lg:justify-start gap-3">
                <div className="h-8 w-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-gray-300 text-sm flex-1 min-w-0 text-left">
                  <p className="break-words">Gezira Island, Khartoum</p>
                  <p className="break-words">Sudan, P.O. Box 12345</p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-3">
                <div className="h-8 w-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-gray-300 text-sm flex-1 min-w-0 text-left">
                  <p className="break-words">+249 123 456 789</p>
                  <p className="break-words">+249 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-3">
                <div className="h-8 w-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-gray-300 text-sm flex-1 min-w-0 text-left">
                  <p className="break-words">info@gct.edu.sd</p>
                  <p className="break-words">admissions@gct.edu.sd</p>
                </div>
              </div>

              <div className="flex items-start justify-center lg:justify-start gap-3">
                <div className="h-8 w-8 bg-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-4 w-4 text-blue-400" />
                </div>
                <div className="text-gray-300 text-sm flex-1 min-w-0 text-left">
                  <p className="break-words">{language === "ar" ? "الأحد - الخميس" : "Sun - Thu"}</p>
                  <p className="break-words">8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3" dir="ltr">
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold"
              >
                <Link href="/contact">
                  {language === "ar" ? "تقدم الآن" : "Apply Now"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent px-4 py-2 rounded-xl font-semibold"
              >
                <Link href="/academics">{language === "ar" ? "استكشف البرامج" : "Explore Programs"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Accreditations */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container px-6 md:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <h4 className="font-bold text-white mb-4 text-center" dir="ltr">
              {language === "ar" ? "الاعتمادات والشهادات" : "Accreditations & Certifications"}
            </h4>
            <div className="flex flex-wrap justify-center gap-4" dir="ltr">
              {accreditations.map((accreditation, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2 hover:from-blue-600/20 hover:to-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                >
                  <accreditation.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-gray-300 font-semibold">{accreditation.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20 relative z-10">
        <div className="container px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto" dir="ltr">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; 2025 Gezira College of Technology.{" "}
                {language === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}.
              </p>
            </div>
            <div className="flex flex-nowrap items-center gap-6 text-sm text-gray-400 overflow-x-auto">
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                {language === "ar" ? "شروط الاستخدام" : "Terms of Use"}
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">
                {language === "ar" ? "إمكانية الوصول" : "Accessibility"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
