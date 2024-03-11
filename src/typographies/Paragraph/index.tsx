import { ParagraphsProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: ParagraphsProps) => {
  const classNameP = css
    ? `text-[18px] text-white ${css}`
    : `text-[18px] text-white`;
  const classNameSpan = css
    ? `text-[16px] tracking-[2.7px] text-white ${css}`
    : `text-[16px] tracking-[2.7px] text-white`;
  switch (kind) {
    case "p":
      return <p className={classNameP}>{content}</p>;
    case "span":
      return <span className={classNameSpan}>{content}</span>;
  }
};

export default Typographies;
