import { MouseEventHandler } from "react";

interface TypographiesProps {
  content: string | number | React.ReactNode;
  key?: string;
  css?: string;
  onClickFunction?: Function;
}

export interface HeadingsProps extends TypographiesProps {
  kind: "h1" | "h2" | "h3" | "h4" | "h5";
}

export interface ParagraphsProps extends TypographiesProps {
  kind: "p" | "span";
}

export interface SubHeadingsProps extends TypographiesProps {
  kind: "subHeading1" | "subHeading2";
  onClickFunction?: MouseEventHandler<HTMLHeadingElement>;
}

interface ImageData {
  png: string;
  webp: string;
}
interface Destination {
  name: string;
  images: ImageData;
  description: string;
  distance: string;
  travel: string;
}

export interface ComponentProps {
  arrayNames: string[];
  data: Destination[];
}
