// "use client";

// import React from "react";
// import Image from "next/image";
// import { useLanguage } from "@/components/language-provider";
// import {
//   Card, CardHeader, CardTitle, CardContent, CardDescription
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, User, ArrowRight } from "lucide-react";

// export type NewsArticle = {
//   id: number;
//   title: string;
//   excerpt: string;
//   date: string;
//   author: string;
//   category: string;
//   image: string;
//   featured: boolean;
// };

// export default function NewsClient({ newsArticles }: { newsArticles: NewsArticle[] }) {
//   const { t } = useLanguage();

//   const categories = [
//     "All",
//     ...Array.from(new Set(newsArticles.map((a) => a.category))),
//   ];

//   return (
//     <div className="container py-8 md:py-12">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//           {t("news")}
//         </h1>
//         <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
//           {t("Stay updated with the latest news and announcements from Gezira College of Technology")}
//         </p>
//       </div>

//       {/* Categories */}
//       <div className="flex flex-wrap gap-2 mb-8 justify-center">
//         {categories.map((category) => (
//           <Button key={category} variant="outline" size="sm">
//             {t(category)}
//           </Button>
//         ))}
//       </div>

//       {/* Featured Article */}
//       {newsArticles
//         .filter((article) => article.featured)
//         .map((article) => (
//           <Card key={article.id} className="mb-12 overflow-hidden">
//             <div className="grid md:grid-cols-2 gap-0">
//               <div className="relative h-64 md:h-auto">
//                 <Image
//                   src={article.image}
//                   alt={t(article.title)}
//                   fill
//                   className="object-cover"
//                 />
//                 <Badge className="absolute top-4 left-4">{t("Featured")}</Badge>
//               </div>
//               <div className="p-6 md:p-8 flex flex-col justify-center">
//                 <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
//                   <div className="flex items-center gap-1">
//                     <Calendar className="h-4 w-4" />
//                     {t(article.date)}
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <User className="h-4 w-4" />
//                     {t(article.author)}
//                   </div>
//                   <Badge variant="secondary">{t(article.category)}</Badge>
//                 </div>
//                 <h2 className="text-2xl md:text-3xl font-bold mb-4">{t(article.title)}</h2>
//                 <p className="text-muted-foreground mb-6">{t(article.excerpt)}</p>
//                 <Button className="w-fit">
//                   {t("readMore")}
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}

//       {/* News Grid */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {newsArticles
//           .filter((article) => !article.featured)
//           .map((article) => (
//             <Card
//               key={article.id}
//               className="overflow-hidden hover:shadow-lg transition-shadow"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={article.image}
//                   alt={t(article.title)}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <CardHeader>
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
//                   <Calendar className="h-4 w-4" />
//                   {t(article.date)}
//                 </div>
//                 <Badge variant="secondary" className="w-fit mb-2">
//                   {t(article.category)}
//                 </Badge>
//                 <CardTitle className="text-lg line-clamp-2">{t(article.title)}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="line-clamp-3 mb-4">{t(article.excerpt)}</CardDescription>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                     <User className="h-4 w-4" />
//                     {t(article.author)}
//                   </div>
//                   <Button variant="ghost" size="sm">
//                     {t("readMore")}
//                     <ArrowRight className="ml-1 h-3 w-3" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//       </div>

//       {/* Load More */}
//       <div className="text-center mt-12">
//         <Button variant="outline" size="lg">{t("loadMoreArticles")}</Button>
//       </div>
//     </div>
//   );
// }
