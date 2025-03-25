import BlogList2 from '@/components/blog/BlogList2';
import Breadcumb from '@/components/blog/Breadcumb';
import MarqueeComponent from '@/components/common/Marquee';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Blog 2 || Frisk - Creative Agency & Portfolio Nextjs Template',
};
export default function BlogPage2() {
  return (
    <>
      <Header />
      <Breadcumb />
      <BlogList2 />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
