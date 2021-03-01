import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className="py-12 px-12 md:py-24 md:px-24 max-w-7xl mx-auto">
      <Head>
        <title>Timo's Magical Funhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-12 md:pb-20 relative">
        <h1 className="font-special uppercase fx">
          <span className="block">Timo's</span>
          <span className="block">Magical</span>
          <span className="block large">Funhouse</span>
        </h1>
      </header>

      <main>
        <div className="">
          {posts.map((post: Post, index: number) => (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <a className="block pb-12 xl:pb-24 card">
                <h2 className="mb-5 fx">{post.title}</h2>
                <p>{post.excerpt}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
}

export async function getStaticProps() {
  return {
    props: {
      posts: [
        {
          id: 0,
          title: "The Hole – least annoying scroll hijack you've seen",
          slug: "the-hole-least-annoying-scroll-hijack",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
        {
          id: 1,
          title: "Letter reveal animation",
          slug: "letter-reveal-animation",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
        {
          id: 2,
          title: "The Hole – least annoying scroll hijack",
          slug: "the-hole-least-annoying-scroll-hijack",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
        {
          id: 3,
          title: "Letter reveal animation",
          slug: "letter-reveal-animation",
          excerpt:
            "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
        },
      ],
    },
  };
}
