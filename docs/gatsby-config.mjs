/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const config = {
  plugins: [
    `gatsby-plugin-pnpm`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
          ],
          rehypePlugins: [
            rehypeSlug,
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./external`,
      },
    },
  ],
};

export default config;
