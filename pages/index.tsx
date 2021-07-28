import Head from "next/head";
import Link from "next/link";
import Date from "../components/Date";
import Paragraph from "../components/styled/Paragraph";
import Layout, { siteTitle } from "../components/Layout";
import { getSortedPostsData } from "../lib/post";
import { HeadingLg } from "../components/styled/Headings";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="text-xl">
        <Paragraph>
          I am a web and mobile app developer. Skilled in React, React Native,
          and Flutter.
        </Paragraph>
        <Paragraph>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a className="text-blue-500" href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>
          .)
        </Paragraph>
      </section>

      <section className="text-xl pt-[1px]">
        <HeadingLg>Blog</HeadingLg>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500">{title}</a>
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
