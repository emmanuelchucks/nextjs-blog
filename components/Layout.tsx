import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Heading2Xl, HeadingLg } from "./styled/Headings";

const name = "Emmanuel";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home = false }) {
  return (
    <div className="max-w-[36rem] px-[1rem] py-0 mx-auto mt-[3rem] mb-[6rem]">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/husky.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <Heading2Xl>{name}</Heading2Xl>
          </>
        ) : (
          <>
            <Link href="/">
              <a className="text-blue-500">
                <Image
                  priority
                  src="/images/husky.jpg"
                  className="rounded-full"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <HeadingLg>
              <Link href="/">
                <a className="text-blue-500">{name}</a>
              </Link>
            </HeadingLg>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-[3rem] mx-0 mb-0">
          <Link href="/">
            <a className="text-blue-500">← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
