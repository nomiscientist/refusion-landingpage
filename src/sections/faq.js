/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "Is it free?",
    contents: (
      <div>
        Yes! Starter package is the core of Refusion, and it will always free for
        starters and personal usage
      </div>
    ),
  },
  {
    title: "How to get started?",
    contents: (
      <div>
        It is as easy as running. Click  on top and start building your chatbot
        <br />
        <code
          style={{
            color: "white",
            background: "#343A40",
            padding: 10,
            borderRadius: 10,
          }}
        >
          Get Started
        </code>
      </div>
    ),
  },
  {
    title: `Does it support social media platform integration?`,
    contents: (
      <div>
        Yes! You can integrate almost any social media platform.
      </div>
    ),
  },
  {
    title: `How to reach out?`,
    contents: (
      <div>
        Feel free to reach us at:
        <br />
        <a target="_blank" href="mailto:hello@refusion.ai">
          hello@refusion.ai
        </a>
        <br />
        <a target="_blank" href="https://twitter.com/refusionai">
          Twitter
        </a>
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }} id="faq">
      <Container>
        <SectionHeader title="Frequently asked question" slogan="" />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
