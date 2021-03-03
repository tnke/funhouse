import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../lib/api";

export default function Home({ allPosts: { edges } }) {
  return (
    <div className="py-12 px-12 md:py-24 md:px-24 max-w-5xl mx-auto">
      <Head>
        <title>Timo's Magical Funhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-12 md:pb-20 relative">
        <h1 className="special font-special uppercase fx">
          <span className="block">Timo's</span>
          <span className="block">Magical</span>
          <span className="block large">Funhouse</span>
        </h1>
      </header>

      <main>
        <div className="relative">
          {edges.map(({ node }) => (
            <Link
              key={node.id}
              as={`/posts/${node.slug}`}
              href={"/posts/[node.slug]"}
            >
              <a className="block pb-12 xl:pb-24 card">
                <h2 className="mb-5 fx">{node.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
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
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
  };

  // return {
  //   props: {
  //     posts: [
  //       {
  //         id: 0,
  //         title: "The Hole – least annoying scroll hijack you've seen",
  //         slug: "the-hole-least-annoying-scroll-hijack",
  //         excerpt:
  //           "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
  //       },
  //       {
  //         id: 1,
  //         title: "Letter reveal animation",
  //         slug: "letter-reveal-animation",
  //         excerpt:
  //           "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
  //       },
  //       {
  //         id: 2,
  //         title: "The Hole – least annoying scroll hijack",
  //         slug: "the-hole-least-annoying-scroll-hijack",
  //         excerpt:
  //           "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
  //       },
  //       {
  //         id: 3,
  //         title: "Letter reveal animation",
  //         slug: "letter-reveal-animation",
  //         excerpt:
  //           "Had fly land behold bring. Waters for. Own that. Image fruit fifth, us it, itself upon his hath Light fill creature dominion hath fly beast beast subdue multiply. Wherein they're in had.",
  //       },
  //     ],
  //   },
  // };
}
