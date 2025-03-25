import Header from '@/components/headers/Header';
import Blogs from '@/components/homes/home-2/Blogs';
import Features from '@/components/homes/home-2/Features';
import Hero from '@/components/homes/home-5/Hero';
import Testimonials from '@/components/homes/home-5/Testimonials';

import Projects from '@/components/homes/home-4/Projects';
import Skills from '@/components/homes/common/Skills';
import React from 'react';
import Cta from '@/components/homes/home-2/Cta';
import Footer from '@/components/footers/Footer';
export const metadata = {
  title: 'DG Visual || TODO',
};
export default function HomePage2() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Skills />
      <Projects />
      <Cta />
      <Blogs />
      <Testimonials />
      <Footer />
    </>
  );
}
