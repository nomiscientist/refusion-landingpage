import React from "react";
import Head from "next/head";

export default function SEO({
  description = "Chatbot UI visual tool to build your customized chatbots using state-of-the-art AI tools",
  author = "RefusionAI, Inc",
  meta,
  title = "Build AI Chatbots Easily",
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:image`,
      content: `/meta/social-preview.jpg`
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:image`,
      content: `/meta/social-preview.jpg`
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, property, content }, i) => (
        <meta
          key={i}
          name={name}
          property={property}
          content={content}
        />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
