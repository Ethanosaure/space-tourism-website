import { SubHeadingsProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: SubHeadingsProps) => {
  const classNameSub1 = css ? `text-[28px] ${css}` : `text-[28px]`;
  const classNameSub2 = css
    ? `text-[14px] tracking-[2.7px] ${css}`
    : `text-[14px] tracking-[2.7px]`;
  switch (kind) {
    case "subHeading1":
      return <h1 className={classNameSub1}>{content}</h1>;
    case "subHeading2":
      return <h5 className={classNameSub2}>{content}</h5>;
  }
};

export default Typographies;
