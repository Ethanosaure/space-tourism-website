import { HeadingsProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: HeadingsProps) => {
  const classNameH1 = css
    ? `text-[150px] text-white ${css}`
    : `text-[150px] text-white`;
  const classNameH2 = css
    ? `text-[100px] text-white ${css}`
    : `text-[100px] text-white`;
  const classNameH3 = css
    ? `text-[56px] text-white  ${css}`
    : `text-[56px] text-white`;
  const classNameH4 = css
    ? `text-[32px] text-white ${css}`
    : `text-[32px] text-white`;
  const classNameH5 = css
    ? `text-[28px] tracking-[4.72px] text-white ${css}`
    : `text-[28px] tracking-[4.72px] text-white`;

  switch (kind) {
    case "h1":
      return <h1 className={classNameH1}>{content}</h1>;
    case "h2":
      return <h2 className={classNameH2}>{content}</h2>;
    case "h3":
      return <h3 className={classNameH3}>{content}</h3>;
    case "h4":
      return <h4 className={classNameH4}>{content}</h4>;
    case "h5":
      return <h5 className={classNameH5}>{content}</h5>;
  }
};

export default Typographies;
