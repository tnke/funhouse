import Head from "next/head";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="py-12 px-12 md:py-24 md:px-24 max-w-5xl mx-auto">
      <Head>
        <title>Timo's Magical Funhouse – Error 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/"}>
        <a className="block pb-4 font-heading back-button absolute top-4 left-4 opacity-50 hover:opacity-100">
          Back
        </a>
      </Link>

      <header className="pb-12 md:pb-20 relative">
        <h1 className="special font-special uppercase fx">Woops</h1>
      </header>

      <main>
        <div className="relative">
          <h2>Page not found 404</h2>
        </div>
      </main>
    </div>
  );
}
