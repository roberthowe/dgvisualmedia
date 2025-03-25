import Breadcumb from '@/components/contact/Breadcumb';
import Contact from '@/components/contact/Contact';
import ContactInfo from '@/components/contact/ContactInfo';

import Footer from '@/components/footers/Footer';
import Header from '@/components/headers/Header';
import React from 'react';

export const metadata = {
  title: 'Contact || Frisk - Creative Agency & Portfolio Nextjs Template',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <Footer />
    </>
  );
}
