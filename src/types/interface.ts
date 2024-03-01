interface TypographiesProps {
  content: string | number | React.ReactNode;
  css?: string;
}

export interface HeadingsProps extends TypographiesProps {
  kind: "h1" | "h2" | "h3" | "h4" | "h5";
}

export interface ParagraphsProps extends TypographiesProps {
  kind: "p" | "span";
}

export interface SubHeadingsProps extends TypographiesProps {
  kind: "subHeading1" | "subHeading2";
}
