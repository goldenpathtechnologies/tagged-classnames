import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  element: ReactNode;
  props: {
    [key: string]: unknown;
  }
};

export default function Layout({ element, props }: LayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      {/*
          Note: It's regrettable that Gatsby is not a TypeScript-first framework. Examining the
          source for the wrapPageElement does not reveal any discernible type information for the
          `apiCallbackContext` object denoted by `LayoutProps`.
      */}

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...props} className="[&>*]:mb-4 [&>a]:inline-block [&>img]:inline-block [&>img]:align-baseline container mx-auto p-5 max-w-5xl bg-amber-50">
        {element}
      </div>
    </>
  );
}
