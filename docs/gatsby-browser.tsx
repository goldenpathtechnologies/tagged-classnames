import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/400.css";
import Prism from "prismjs";
import "prism-themes/themes/prism-darcula.css";
import "./src/styles/global.css";
import Layout from "./src/components/layout";

Prism.manual = true;

function highlightCodeBlocks() {
  const codeBlocks = document.querySelectorAll<HTMLElement>(`pre code`);

  codeBlocks.forEach((codeBlock: HTMLElement) => {
    const lineData = codeBlock.getAttribute(`data-line`);
    if (lineData) {
      codeBlock.parentElement?.setAttribute(`data-line`, lineData);
    }
    if (!codeBlock.classList.contains(`language-text`)) {
      codeBlock.classList.add(`line-numbers`);
    }
    codeBlock.parentElement?.classList.add(`match-braces`);
    Prism.highlightElement(codeBlock);
  });
}

export const onRouteUpdate = (): void => {
  highlightCodeBlocks();
};

export const wrapPageElement = Layout;
