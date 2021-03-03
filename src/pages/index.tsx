import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from "../lib/api";
import {
  fadeInUp,
  fall,
  staggerChildren,
  easeOutExpo,
  smoothBounce,
} from "../lib/animations";

export default function Home({ allPosts: { edges } }) {
  return (
    <div className="py-12 px-12 md:py-24 md:px-24 max-w-5xl mx-auto">
      <Head>
        <title>Timo's Magical Funhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pb-12 md:pb-20 relative">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          animate="show"
        >
          <h1 className="special font-special uppercase fx">
            <motion.span
              variants={fall}
              transition={smoothBounce}
              className="block"
            >
              Timo's
            </motion.span>
            <motion.span
              variants={fall}
              transition={smoothBounce}
              className="block"
            >
              Magical
            </motion.span>
            <motion.span
              variants={fall}
              transition={smoothBounce}
              className="block large"
            >
              Funhouse
            </motion.span>
          </h1>
        </motion.div>
      </header>

      <main>
        <motion.div
          variants={staggerChildren(0.25)}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {edges.map(({ node }) => (
            <motion.div
              className="card"
              variants={fadeInUp}
              transition={{
                duration: 1,
                ease: easeOutExpo,
              }}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: easeOutExpo,
                },
              }}
            >
              <Link
                key={node.id}
                as={`/posts/${node.slug}`}
                href={"/posts/[node.slug]"}
              >
                <a className="block pb-12 xl:pb-24">
                  <h2 className="mb-5 fx">{node.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
    revalidate: 60,
  };
}
