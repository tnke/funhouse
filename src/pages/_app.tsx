import { motion } from "framer-motion";
import { easeOutExpo } from "../lib/animations";
import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/gutenberg.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      className="min-h-screen"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.5,
        ease: easeOutExpo,
      }}
      initial="hidden"
      animate="show"
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
