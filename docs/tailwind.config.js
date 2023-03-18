/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx,mdx}`,
    `./src/components/**/*.{js,jsx,ts,tsx,mdx}`,
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      body: [`"Open Sans"`, `Helvetica`, `Arial`, `sans-serif`],
      emoji: [
        `"Twemoji Mozilla"`,
        `"Apple Color Emoji"`,
        `"Segoe UI Emoji"`,
        `"Segoe UI Symbol"`,
        `"Noto Color Emoji"`,
        `"EmojiOne Color"`,
        `"Android Emoji"`,
        `sans-serif`,
      ],
    },
  },
  plugins: [],
};
