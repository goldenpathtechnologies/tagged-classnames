/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

import { GatsbyConfig } from "gatsby";
import remarkGfm from "remark-gfm";

const config: GatsbyConfig = {
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
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/external`,
      },
    },
  ],
};

export default config;
