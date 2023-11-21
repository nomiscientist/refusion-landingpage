import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import KeyFeature from "sections/key-feature";
import CoreFeature0 from "sections/core-feature-0";
import CoreFeature1 from "sections/core-feature-1";
import CoreFeature2 from "sections/core-feature-2";
import CoreFeature3 from "sections/core-feature-3";
import Feature from "sections/feature";
import PartnerSection from "sections/partner";
import WorkFlow from "sections/workflow";
import TestimonialCard from "sections/testimonial";
import SecurePayment from "sections/secure-payment";
import Package from "sections/package";
import Faq from "sections/faq";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="RefusionAI - Build Chatbots Easily" />
          <Banner />
          <KeyFeature />
          <CoreFeature0 />
          <CoreFeature1 />
          <CoreFeature2 />
          <CoreFeature3 />
          <WorkFlow />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
