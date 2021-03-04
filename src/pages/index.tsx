import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from "../lib/api";
import {
  fadeInUp,
  fadeInLeft,
  staggerChildren,
  easeOutExpo,
} from "../lib/animations";
import styles from "../styles/Home.module.css";

export default function Home({ allPosts: { edges } }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timo's Magical Funhouse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          animate="show"
        >
          <h1 className={styles.title}>
            <motion.span
              className="block"
              transition={{ ease: easeOutExpo, duration: 1 }}
              variants={fadeInLeft}
            >
              Timo's
            </motion.span>
            <motion.span
              className="block"
              transition={{ ease: easeOutExpo, duration: 1 }}
              variants={fadeInLeft}
            >
              Magical
            </motion.span>
            <motion.span
              className={styles.outline}
              transition={{ ease: easeOutExpo, duration: 1 }}
              variants={fadeInLeft}
            >
              Funhouse
            </motion.span>
          </h1>
        </motion.div>
      </header>

      <motion.main
        variants={staggerChildren(0.25)}
        initial="hidden"
        animate="show"
        className={styles.list}
      >
        {edges.map(({ node }, index: number) => {
          const { id, slug, title, excerpt, date } = node;
          const displayDate = new Date(date).toLocaleDateString("en-US");
          const num = edges.length - index;

          return (
            <motion.div
              key={id}
              className={styles.card}
              variants={fadeInUp}
              transition={{
                duration: 1,
                ease: easeOutExpo,
              }}
            >
              <Link as={`/posts/${slug}`} href={"/posts/[slug]"}>
                <a className="block relative pb-20 xl:pb-24">
                  <span className="absolute font-special text-md md:text-2xl italic top-1 -left-9 md:-left-16">
                    {num < 10 ? `0${num}` : num}
                  </span>
                  <h2 className="mb-8">{title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                </a>
              </Link>
              <span className="absolute bottom-4">
                {displayDate.toString()}
              </span>
            </motion.div>
          );
        })}
      </motion.main>
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
