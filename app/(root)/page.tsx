import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({  searchParams }: { searchParams: Promise<{ query?: string }>}) {
  const query = (await searchParams).query;
  type StartupCardType = {
  _id: number;
  _createdAt: string;
  views: number;
  author: { _id: number };
  description: string;
  image: string;
  category: string;
  title: string;
};

const posts = [
  {
    "_createdAt": "2025-08-23T15:00:00Z",
    "views": 102,
    "author": { "_id": 2 },
    "_id": 2,
    "description": "A look into the future of robotics and AI.",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    "category": "Technology",
    "title": "The Rise of AI"
  },
  {
    "_createdAt": "2025-08-22T10:30:00Z",
    "views": 240,
    "author": { "_id": 3 },
    "_id": 3,
    "description": "Exploring the hidden gems of the Himalayas.",
    "image": "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww",
    "category": "Travel",
    "title": "Adventures in the Himalayas"
  },
  {
    "_createdAt": "2025-08-21T18:45:00Z",
    "views": 88,
    "author": { "_id": 4 },
    "_id": 4,
    "description": "Tips and tricks for delicious vegan cooking.",
    "image": "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww",
    "category": "Travel",
    "title": "hot balloons adventure and travel"
  },
  {
    "_createdAt": "2025-08-20T09:15:00Z",
    "views": 155,
    "author": { "_id": 5 },
    "_id": 5,
    "description": "A deep dive into classic film noir cinema.",
    "image": "http://images.unsplash.com/photo-1608170825938-a8ea0305d46c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjB0aGVhdGVyfGVufDB8fDB8fHww",
    "category": "Movies",
    "title": "Noir: The Dark Side of Film"
  },
  {
    "_createdAt": "2025-08-19T12:00:00Z",
    "views": 76,
    "author": { "_id": 6 },
    "_id": 6,
    "description": "A guide to starting your own garden from scratch.",
    "image": "https://images.unsplash.com/photo-1542240212-32a8a5b29094?ixid=M3wxMjA3fDB8MHxwaG90by1yWdFh8fGVuFDB8fHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "category": "Gardening",
    "title": "Your First Garden"
  },
    {
    "_createdAt": "2025-08-23T15:00:00Z",
    "views": 102,
    "author": { "_id": 2 },
    "_id": 2,
    "description": "A look into the future of robotics and AI.",
    "image": "https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "category": "Technology",
    "title": "The Rise of AI"
  },
    {
    "_createdAt": "2025-08-23T15:00:00Z",
    "views": 102,
    "author": { "_id": 2 },
    "_id": 2,
    "description": "A look into the future of robotics and AI.",
    "image": "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    "category": "Technology",
    "title": "The Rise of AI"
  },
    {
    "_createdAt": "2025-08-23T15:00:00Z",
    "views": 102,
    "author": { "_id": 2 },
    "_id": 2,
    "description": "A look into the future of robotics and AI.",
    "image": "https://images.unsplash.com/photo-1549490184-7a0666324b12?ixid=M3wxMjA3fDB8MHxwaG90by1yWdFh8fGVuFDB8fHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    "category": "Technology",
    "title": "The Rise of AI"
  }
];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section>
        <p className="text-30-semibold">
          {query ? `search result for ${query}` : "bsdk"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p className="no-results"> No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}