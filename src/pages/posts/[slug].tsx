import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import ErrorPage from "../components/ErrorPage";

export default function Post({ post }) {
  if (!post) {
    return <ErrorPage />;
  }

  const { title, content } = post;

  return (
    <div className="py-12 px-12 md:py-24 md:px-24 max-w-5xl mx-auto">
      <Head>
        <title>Timo's Magical Funhouse – {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/"}>
        <a className="block pb-4 font-heading back-button absolute top-4 left-4 opacity-50 hover:opacity-100">
          Back
        </a>
      </Link>

      <header className="pb-12 md:pb-18 relative">
        <h1 className="font-heading fx">{title}</h1>
      </header>

      <main>
        <div
          className="relative post-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: { post },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPosts();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
