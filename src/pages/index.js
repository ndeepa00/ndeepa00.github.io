import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Deepa Neupane - Microbiologist, Nepal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["blog"]}
        />
        <AboutSection sectionId="about" heading="About" />
        <InterestsSection sectionId="details" heading="Details" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
