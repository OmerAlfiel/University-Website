import EventPage, {Event} from "./events";


 async function getStaticProps(): Promise<Event[]> {
  const res = await fetch(
    "http://gct.local/wp-json/wp/v2/events?_embed",
    { cache: "force-cache" }
  );
  const events = await res.json();

  return  events.map((post: any) => ({
    id: post.id,
    title: post.title.rendered,
    description: post.acf.description || "",
    date: post.acf.date || "",
    time: post.acf.time || "",
    location: post.acf.location || "",
    category: post.acf.category || "Uncategorized",
    attendees: post.acf.attendees || "",
    featured: post.acf.featured || false,
    image:
      post.acf.image?.url ||
      post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes.medium.source_url ||
      "/placeholder.svg",
  }));
}

export default async function EventsPage() {
  const eventArtical = await getStaticProps();
  return <EventPage eventArtical={eventArtical} />;
}


