import BlogDetails from '@/components/blog/BlogDetails';
import Breadcumb2 from '@/components/blog/Breadcumb2';
import MarqueeComponent from '@/components/common/Marquee';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import { allBlogs } from '@/data/blogs';

//For Static Side Genaration(SSG)

// export async function generateStaticParams() {
//   return allBlogs.map((post) => ({
//     id: `${post.id}`,
//   }));
// }

export const metadata = {
  title: 'Blog Details || DG Visual Media - Design - Sign & Display',
};

export default function BlogPageDetails({ params }) {
  return (
    <>
      <Header />
      <Breadcumb2 />
      <BlogDetails blogId={params.id} />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
