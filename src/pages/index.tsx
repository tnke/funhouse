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
import { siteTitle } from "../lib/constants";
import styles from "../styles/Home.module.css";

export default function Home({ allPosts: { edges } }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
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
              Some
            </motion.span>
            <motion.span
              className="block"
              transition={{ ease: easeOutExpo, duration: 1 }}
              variants={fadeInLeft}
            >
              Frontend
            </motion.span>
            <motion.span
              className="block"
              transition={{ ease: easeOutExpo, duration: 1 }}
              variants={fadeInLeft}
            >
              Experiments
            </motion.span>
          </h1>
        </motion.div>
        <p className={styles.subtitle}>
          Timo Sundvik &ndash; Front-end developer working at{" "}
          <a href="https://evermade.fi" target="_blank">
            Evermade
          </a>
        </p>
      </header>

      <motion.main
        variants={staggerChildren(0.25)}
        initial="hidden"
        animate="show"
        className={styles.list}
      >
        {edges.map(({ node }, index: number) => {
          const { id, slug, title, excerpt, date } = node;
          const displayDate = new Date(date).toLocaleDateString("fi");
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
                <a className="block relative pb-20 xl:pb-24 min-h-full">
                  <span className="sm:absolute font-special text-md md:text-2xl italic sm:top-1 sm:-left-9 md:-left-16 pb-1 sm:pb-0 block">
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
