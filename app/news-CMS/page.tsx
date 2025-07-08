// // app/news/page.tsx

// import NewsClient, { NewsArticle } from "./NewsClient";






// async function fetchNews(): Promise<NewsArticle[]> {
//   const res = await fetch(
//     "Your_API_URL/wp-json/wp/v2/news?per_page=100&_embed",
//     { cache: "force-cache" }
//   );
//   const posts = await res.json();

//   return posts.map((post: any) => ({
//     id: post.id,
//     title: post.title.rendered,
//     excerpt: post.acf.excerpt || "",
//     date: new Date(post.date).toLocaleDateString(),
//     author: post.acf.author_name || "Unknown",
//     category: post.acf.category || "Uncategorized",
//     image:
//       post.acf.image?.url ||
//       post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes.medium
//         .source_url ||
//       "/placeholder.svg",
//     featured: !!post.acf.featured,
//   }));
// }

// export default async function NewsPage() {
//   const newsArticles = await fetchNews();

//   return <NewsClient newsArticles={newsArticles} />;
// }
