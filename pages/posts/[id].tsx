import Head from "next/head";
import Layout from "../../components/Layout";
import Date from "../../components/Date";
import { HeadingXl } from "../../components/styled/Headings";
import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <HeadingXl>{postData.title}</HeadingXl>
        <div className="text-gray-500">
          <Date dateString={postData.date} />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          className="mt-8 prose"
        />
      </article>
    </Layout>
  );
}
