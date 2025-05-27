import BlogDetails from '@/components/blog/BlogDetails';
import Breadcumb2 from '@/components/blog/Breadcumb2';
import MarqueeComponent from '@/components/common/Marquee';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import { allBlogs } from '@/data/blogs';

//For Static Side Genaration(SSG)

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: `${post.slug}`,
  }));
}

export async function generateMetadata({ params }) {
  const blogPost = allBlogs.filter((elm) => elm.slug === params.slug)[0];

  if (!blogPost) {
    return {
      title: 'Blog Post Not Found | DG Visual Media',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blogPost.title} | DG Visual Media`,
    description: blogPost.metaDescription,
  };
}

export default function BlogPageDetails({ params }) {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <BlogDetails blogSlug={params.slug} />
      {/* <MarqueeComponent /> */}
      <Footer />
    </>
  );
}
