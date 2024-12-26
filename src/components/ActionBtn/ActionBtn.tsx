import { SelectedPage } from "@/shared/Types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function ActionBtn({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="bg-secondary-500 px-10 py-2 rounded-md hover:bg-primary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
}
