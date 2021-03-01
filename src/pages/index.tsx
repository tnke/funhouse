import Head from "next/head";

export default function Home({ posts }) {
  return (
    <div className="py-12 px-12 md:py-24 md:px-24">
      <Head>
        <title>Magic Timo Funhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-12 md:pb-24">
        <h1 className="inline-block text-justify">
          Magic Timo's
          <span className="block">Experiments</span>
        </h1>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -m-5">
          {posts.map((post: Post) => (
            <div
              key={post.id}
              className="m-5 p-12 bg-white rounded-xl shadow-xl"
            >
              <h2 className="mb-5">{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

interface Post {
  id: number;
  title: string;
  excerpt?: string;
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {
          id: 0,
          title: "The Hole – least annoying scroll hijack",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
        {
          id: 1,
          title: "Letter reveal animation",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
      ],
    },
  };
}
