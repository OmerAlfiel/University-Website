"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection } from "@/components/animated-section"
import {
	Computer,
	Clock,
	Users,
	Network,
	Shield,
	Server,
	Cloud,
	Globe,
	Wifi,
	ArrowRight,
	MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function InformationTechnologyPage() {
	const { language } = useLanguage()

	const programHighlights = [
		{
			icon: Network,
			title: language === "ar" ? "إدارة الشبكات" : "Network Management",
			description:
				language === "ar"
					? "تصميم وإدارة وصيانة شبكات المعلومات المعقدة"
					: "Design, manage and maintain complex information networks",
		},
		{
			icon: Shield,
			title: language === "ar" ? "الأمن السيبراني" : "Cybersecurity",
			description:
				language === "ar"
					? "حماية الأنظمة والبيانات من التهديدات الإلكترونية"
					: "Protect systems and data from cyber threats",
		},
		{
			icon: Server,
			title: language === "ar" ? "إدارة الأنظمة" : "System Administration",
			description:
				language === "ar"
					? "تكوين وصيانة وتحسين أنظمة تكنولوجيا المعلومات"
					: "Configure, maintain and optimize IT systems",
		},
		{
			icon: Cloud,
			title: language === "ar" ? "الحوسبة السحابية" : "Cloud Computing",
			description:
				language === "ar"
					? "تصميم وإدارة البنية التحتية السحابية"
					: "Design and manage cloud infrastructure",
		},
		{
			icon: Globe,
			title: language === "ar" ? "تطوير الويب" : "Web Development",
			description:
				language === "ar"
					? "إنشاء مواقع وتطبيقات الويب الحديثة"
					: "Create modern websites and web applications",
		},
		{
			icon: Computer,
			title: language === "ar" ? "دعم الأنظمة" : "Technical Support",
			description:
				language === "ar"
					? "حل المشكلات التقنية وتقديم الدعم للمستخدمين"
					: "Troubleshoot technical issues and provide user support",
		},
	]

	const curriculum = [
		{
			year: language === "ar" ? "السنة الأولى" : "First Year",
			courses: [
				language === "ar" ? "مقدمة في تكنولوجيا المعلومات" : "Introduction to IT",
				language === "ar" ? "أساسيات الشبكات" : "Network Fundamentals",
				language === "ar" ? "مبادئ البرمجة" : "Programming Principles",
				language === "ar" ? "أنظمة التشغيل" : "Operating Systems",
			],
		},
		{
			year: language === "ar" ? "السنة الثانية" : "Second Year",
			courses: [
				language === "ar" ? "إدارة الشبكات" : "Network Administration",
				language === "ar" ? "أمن المعلومات" : "Information Security",
				language === "ar" ? "قواعد البيانات" : "Database Systems",
				language === "ar" ? "تطوير تطبيقات الويب" : "Web Application Development",
			],
		},
		{
			year: language === "ar" ? "السنة الثالثة" : "Third Year",
			courses: [
				language === "ar" ? "الأمن السيبراني" : "Cybersecurity",
				language === "ar" ? "الحوسبة السحابية" : "Cloud Computing",
				language === "ar" ? "إدارة الخوادم" : "Server Management",
				language === "ar" ? "تكنولوجيا الشبكات المتقدمة" : "Advanced Networking Technology",
			],
		},
		{
			year: language === "ar" ? "السنة الرابعة" : "Fourth Year",
			courses: [
				language === "ar" ? "مشروع التخرج" : "Capstone Project",
				language === "ar" ? "التحليل الرقمي الجنائي" : "Digital Forensics",
				language === "ar" ? "إدارة المشاريع التقنية" : "IT Project Management",
				language === "ar" ? "تقنيات الحوسبة المتقدمة" : "Advanced Computing Technologies",
			],
		},
	]

	const faculty = [
		{
			name: "Dr. Sarah Johnson",
			nameAr: "د. سارة جونسون",
			title: "Professor of Information Technology",
			titleAr: "أستاذة تقنية المعلومات",
			specialization: "Cybersecurity & Network Defense",
			specializationAr: "الأمن السيبراني والدفاع عن الشبكات",
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&crop=face",
		},
		{
			name: "Dr. Mohammed Al-Farsi",
			nameAr: "د. محمد الفارسي",
			title: "Associate Professor",
			titleAr: "أستاذ مشارك",
			specialization: "Cloud Computing & Virtualization",
			specializationAr: "الحوسبة السحابية والافتراضية",
			image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&auto=format&fit=crop&crop=face",
		},
		{
			name: "Dr. Amina Khalid",
			nameAr: "د. أمينة خالد",
			title: "Assistant Professor",
			titleAr: "أستاذة مساعدة",
			specialization: "Network Architecture & Security",
			specializationAr: "هندسة الشبكات والأمن",
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&auto=format&fit=crop&crop=face",
		},
	]

	const facilities = [
		{
			name: language === "ar" ? "مختبر الشبكات المتقدم" : "Advanced Networking Lab",
			description:
				language === "ar"
					? "مجهز بأحدث معدات الشبكات وأنظمة المحاكاة"
					: "Equipped with the latest networking equipment and simulation systems",
			image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&auto=format&fit=crop",
		},
		{
			name: language === "ar" ? "مركز الأمن السيبراني" : "Cybersecurity Center",
			description:
				language === "ar"
					? "مختبر متخصص للتدريب على الأمن السيبراني وتحليل التهديدات"
					: "Specialized lab for cybersecurity training and threat analysis",
			image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&auto=format&fit=crop",
		},
		{
			name: language === "ar" ? "مركز الحوسبة السحابية" : "Cloud Computing Hub",
			description:
				language === "ar"
					? "بيئة تعليمية للتدريب على تقنيات الحوسبة السحابية"
					: "Learning environment for cloud computing technologies training",
			image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&auto=format&fit=crop",
		},
		{
			name: language === "ar" ? "مختبر تطوير البرمجيات" : "Software Development Lab",
			description:
				language === "ar"
					? "مساحة إبداعية لتطوير تطبيقات الويب والجوال"
					: "Creative space for web and mobile application development",
			image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&auto=format&fit=crop",
		},
	]

	const careerPaths = [
		{
			title: "Network Administrator",
			titleAr: "مسؤول الشبكات",
			salary: "$60,000 - $85,000",
			description: "Configure and maintain computer networks",
			descriptionAr: "تكوين وصيانة شبكات الحاسوب",
			icon: Wifi,
		},
		{
			title: "Cybersecurity Analyst",
			titleAr: "محلل الأمن السيبراني",
			salary: "$70,000 - $110,000",
			description: "Protect systems from cyber threats",
			descriptionAr: "حماية الأنظمة من التهديدات السيبرانية",
			icon: Shield,
		},
		{
			title: "System Administrator",
			titleAr: "مدير النظام",
			salary: "$65,000 - $95,000",
			description: "Maintain and optimize IT infrastructure",
			descriptionAr: "صيانة وتحسين البنية التحتية لتكنولوجيا المعلومات",
			icon: Server,
		},
		{
			title: "Cloud Solutions Architect",
			titleAr: "مهندس حلول سحابية",
			salary: "$95,000 - $140,000",
			description: "Design and implement cloud-based solutions",
			descriptionAr: "تصميم وتنفيذ حلول قائمة على السحابة",
			icon: Cloud,
		},
	]

	return (
		<div className="min-h-screen bg-white dark:bg-gray-900">
			{/* Hero Section */}
			<section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-950/20">
				<div className="container px-6 md:px-8">
					<div className="grid gap-12 lg:grid-cols-[1fr_500px] items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200">
									{language === "ar" ? "كلية الهندسة" : "Faculty of Engineering"}
								</Badge>
								<h1 className="text-5xl font-bold text-gray-900 dark:text-white">
									{language === "ar" ? "تقنية المعلومات" : "Information Technology"}
								</h1>
								<p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
									{language === "ar"
										? "برنامج شامل يركز على أنظمة الشبكات والأمن السيبراني والبنية التحتية الرقمية للعصر الحديث"
										: "Comprehensive program focusing on network systems, cybersecurity, and digital infrastructure for the modern age"}
								</p>
							</div>
							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl">
									<Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
									{language === "ar" ? "تقدم الآن" : "Apply Now"}
									</Link>
									<ArrowRight className="ml-2 h-5 w-5" />
								</Button>
								<Button variant="outline" size="lg" className="px-8 py-4 rounded-xl bg-transparent">
									{language === "ar" ? "تحميل المنهج" : "Download Curriculum"}
								</Button>
							</div>
							<div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
								<div className="flex items-center gap-2">
									<Clock className="h-4 w-4" />
									{language === "ar" ? "4 سنوات" : "4 Years"}
								</div>
								<div className="flex items-center gap-2">
									<Users className="h-4 w-4" />
									{language === "ar" ? "340+ طالب" : "340+ Students"}
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4" />
									{language === "ar" ? "حرم الجامعة الرئيسي" : "Main Campus"}
								</div>
							</div>
						</div>
						<div className="relative order-first lg:order-last">
							<Image
								src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
								alt="Information Technology Lab"
								width={600}
								height={500}
								className="rounded-2xl shadow-2xl w-full object-cover"
							/>
							<div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white dark:bg-gray-800 rounded-xl p-3 md:p-4 shadow-xl">
								<div className="flex items-center gap-3">
									<Network className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
									<span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
										{language === "ar" ? "تقنية متطورة" : "Cutting Edge Tech"}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Program Highlights */}
			<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "مجالات التخصص" : "Specialization Areas"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "استكشف المجالات المتنوعة في تقنية المعلومات واختر مسارك المهني"
								: "Explore diverse areas in information technology and choose your career path"}
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{programHighlights.map((highlight, index) => (
							<Card
								key={index}
								className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 group"
							>
								<CardHeader className="pb-4">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
											{<highlight.icon className="h-6 w-6" />}
										</div>
										<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
											{highlight.title}
										</h3>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 dark:text-gray-300">
										{highlight.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Curriculum */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "المنهج الدراسي" : "Curriculum"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "منهج شامل مصمم لإعدادك لسوق العمل التقني المتطور"
								: "Comprehensive curriculum designed to prepare you for the evolving tech industry"}
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2">
						{curriculum.map((year, index) => (
							<Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
								<CardHeader>
									<h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
										{year.year}
									</h3>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{year.courses.map((course, courseIndex) => (
											<li key={courseIndex} className="flex items-start gap-3">
												<div className="flex-shrink-0 mt-1 p-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<polyline points="20 6 9 17 4 12"></polyline>
													</svg>
												</div>
												<span className="text-gray-700 dark:text-gray-300">
													{course}
												</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Faculty */}
			<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "أعضاء هيئة التدريس" : "Faculty Members"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "تعلم من خبراء متميزين في مجال تقنية المعلومات"
								: "Learn from distinguished experts in information technology"}
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{faculty.map((member, index) => (
							<Card
								key={index}
								className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
							>
								<CardHeader className="pb-4">
									<div className="flex justify-center mb-4">
										<div className="rounded-full overflow-hidden h-32 w-32 border-4 border-blue-100 dark:border-blue-900/20">
											<Image
												src={member.image}
												alt={language === "ar" ? member.nameAr : member.name}
												width={128}
												height={128}
												className="object-cover"
											/>
										</div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										{language === "ar" ? member.nameAr : member.name}
									</h3>
									<p className="text-blue-600 dark:text-blue-400">
										{language === "ar" ? member.titleAr : member.title}
									</p>
								</CardHeader>
								<CardContent>
									<p className="text-gray-600 dark:text-gray-300">
										{language === "ar" ? member.specializationAr : member.specialization}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Facilities */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "المرافق والمختبرات" : "Facilities & Labs"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "مرافق حديثة مجهزة بأحدث التقنيات لتعزيز تجربة التعلم"
								: "Modern facilities equipped with cutting-edge technology to enhance learning experience"}
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2">
						{facilities.map((facility, index) => (
							<Card
								key={index}
								className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
							>
								<div className="relative">
									<Image
										src={facility.image}
										alt={facility.name}
										width={600}
										height={400}
										className="aspect-[3/2] object-cover"
									/>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
										{facility.name}
									</h3>
									<p className="text-gray-600 dark:text-gray-300">
										{facility.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Career Opportunities */}
			<section className="py-20 bg-gray-50 dark:bg-gray-900/50">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "الفرص المهنية" : "Career Opportunities"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "استكشف المسارات الوظيفية المتنوعة والمطلوبة لخريجي تقنية المعلومات"
								: "Explore diverse and in-demand career paths for information technology graduates"}
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{careerPaths.map((career, index) => (
							<Card
								key={index}
								className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
							>
								<CardHeader className="pb-2">
									<div className="flex items-center justify-center mb-4">
										<div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
											{<career.icon className="h-8 w-8" />}
										</div>
									</div>
									<h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
										{language === "ar" ? career.titleAr : career.title}
									</h3>
								</CardHeader>
								<CardContent className="text-center pt-0">
									<p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
										{career.salary}
									</p>
									<p className="text-gray-600 dark:text-gray-300">
										{language === "ar" ? career.descriptionAr : career.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
					<div className="mt-12 text-center">
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							{language === "ar" 
								? "استفد من شراكاتنا مع شركات التقنية الرائدة للحصول على فرص توظيف متميزة" 
								: "Benefit from our partnerships with leading tech companies for exclusive job opportunities"}
						</p>
						<Image
							src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&auto=format&fit=crop"
							alt={language === "ar" ? "النجاح المهني" : "Career Success"}
							width={1200}
							height={400}
							className="rounded-xl shadow-lg mx-auto mt-6"
						/>
					</div>
				</div>
			</section>

			{/* Student Testimonials */}
			<section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
				<div className="container px-6 md:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							{language === "ar" ? "آراء الطلاب" : "Student Testimonials"}
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							{language === "ar"
								? "استمع إلى تجارب طلابنا وخريجينا المتميزين"
								: "Hear from our outstanding students and alumni"}
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl relative">
							<div className="absolute -top-4 -left-4 text-blue-500 opacity-30 dark:opacity-20">
								<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
									<path d="M11.9999 9.00001C12.9999 9.00001 13.9999 9.00001 14.9999 9.00001C14.9999 6.50001 12.4999 3.00001 9.99994 3.00001L8.99994 5.00001C10.4999 5.50001 10.9999 7.00001 10.9999 8.00001C9.99994 8.00001 8.99994 9.00001 8.99994 10C8.99994 11 9.99994 12 10.9999 12C12.4999 12 13.9999 10.5 13.9999 9.00001C13.4999 9.00001 12.9999 9.00001 11.9999 9.00001ZM18.9999 9.00001C19.9999 9.00001 20.9999 9.00001 21.9999 9.00001C21.9999 6.50001 19.4999 3.00001 16.9999 3.00001L15.9999 5.00001C17.4999 5.50001 17.9999 7.00001 17.9999 8.00001C16.9999 8.00001 15.9999 9.00001 15.9999 10C15.9999 11 16.9999 12 17.9999 12C19.4999 12 20.9999 10.5 20.9999 9.00001C20.4999 9.00001 19.9999 9.00001 18.9999 9.00001Z" />
								</svg>
							</div>
							<div className="flex flex-col md:flex-row gap-6 items-center mb-6">
								<div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
									<Image
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
										width={80}
										height={80}
										alt="Student Portrait"
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										{language === "ar" ? "أحمد الخالدي" : "Ahmed Al-Khalidi"}
									</h3>
									<p className="text-blue-600 dark:text-blue-400">
										{language === "ar" ? "خريج 2024، يعمل في شركة مايكروسوفت" : "Class of 2024, now at Microsoft"}
									</p>
								</div>
							</div>
							<blockquote className="text-gray-700 dark:text-gray-300 italic">
								{language === "ar"
									? "البرنامج أعدني بشكل ممتاز للعمل في مجال تقنية المعلومات. المختبرات المتطورة والمشاريع العملية منحتني خبرة حقيقية جعلتني مطلوبًا للشركات التقنية الكبرى."
									: "The program prepared me exceptionally well for the IT industry. The advanced labs and hands-on projects gave me real-world experience that made me attractive to major tech companies."}
							</blockquote>
						</div>

						<div className="bg-blue-50 dark:bg-blue-900/10 p-8 rounded-2xl relative">
							<div className="absolute -top-4 -left-4 text-blue-500 opacity-30 dark:opacity-20">
								<svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
									<path d="M11.9999 9.00001C12.9999 9.00001 13.9999 9.00001 14.9999 9.00001C14.9999 6.50001 12.4999 3.00001 9.99994 3.00001L8.99994 5.00001C10.4999 5.50001 10.9999 7.00001 10.9999 8.00001C9.99994 8.00001 8.99994 9.00001 8.99994 10C8.99994 11 9.99994 12 10.9999 12C12.4999 12 13.9999 10.5 13.9999 9.00001C13.4999 9.00001 12.9999 9.00001 11.9999 9.00001ZM18.9999 9.00001C19.9999 9.00001 20.9999 9.00001 21.9999 9.00001C21.9999 6.50001 19.4999 3.00001 16.9999 3.00001L15.9999 5.00001C17.4999 5.50001 17.9999 7.00001 17.9999 8.00001C16.9999 8.00001 15.9999 9.00001 15.9999 10C15.9999 11 16.9999 12 17.9999 12C19.4999 12 20.9999 10.5 20.9999 9.00001C20.4999 9.00001 19.9999 9.00001 18.9999 9.00001Z" />
								</svg>
							</div>
							<div className="flex flex-col md:flex-row gap-6 items-center mb-6">
								<div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
									<Image
										src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
										width={80}
										height={80}
										alt="Student Portrait"
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
										{language === "ar" ? "سارة العمري" : "Sara Al-Amri"}
									</h3>
									<p className="text-blue-600 dark:text-blue-400">
										{language === "ar" ? "خريجة 2023، أخصائية أمن سيبراني" : "Class of 2023, Cybersecurity Specialist"}
									</p>
								</div>
							</div>
							<blockquote className="text-gray-700 dark:text-gray-300 italic">
								{language === "ar"
									? "أساتذة القسم يتمتعون بخبرة عملية واسعة، وقد استفدت كثيراً من تجاربهم ومعرفتهم. مركز الأمن السيبراني في الجامعة منحني فرصة لاكتساب مهارات متقدمة في حماية الأنظمة المعلوماتية."
									: "The faculty members have extensive practical experience, and I benefited greatly from their expertise. The university's Cybersecurity Center provided me with the opportunity to gain advanced skills in information systems protection."}
							</blockquote>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
				<div className="container px-6 md:px-8 text-center">
					<h2 className="text-4xl font-bold mb-6">
						{language === "ar" ? "ابدأ مستقبلك في تقنية المعلومات" : "Start Your Future in Information Technology"}
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
						{language === "ar"
							? "انضم إلى برنامج تقنية المعلومات وكن جزءاً من الثورة الرقمية"
							: "Join our Information Technology program and be part of the digital revolution"}
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" variant="secondary" className="px-8 py-4 text-lg rounded-xl">
							<Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">
							{language === "ar" ? "تقدم للبرنامج" : "Apply to Program"}
							</Link>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="px-8 py-4 text-lg rounded-xl border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
						>
							<Link href="https://docs.google.com/forms/d/e/1FAIpQLSfIJmWAmq2XYel9WWkQo4_as_gFFV56Xdar5Tot7hmBZCl6Lw/viewform">{language === "ar" ? "تواصل معنا" : "Contact Us"}</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
