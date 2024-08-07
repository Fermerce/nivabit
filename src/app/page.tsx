"use client";

import BannerSection from "@/components/home/BannerSection";
import Client from "@/components/home/ServicesCarouselSpacing";
import MeetUs from "@/components/home/MeetUs";
import Services from "@/components/home/Services";
import ClientCarouselSpacing from "@/components/home/ClientCarouselSpacing";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
export default function Home() {
  return (
    <main>
      <BannerSection />
      <ClientCarouselSpacing />
      <MeetUs />
      <Client />
      <Services />

      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
