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
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...props} className="container mx-auto max-w-5xl bg-amber-50 p-5 [&>*]:mb-4 [&>a]:inline-block [&>img]:inline-block [&>img]:align-baseline">
        {element}
      </div>
    </>
  );
}
