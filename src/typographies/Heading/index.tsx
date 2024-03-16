import { HeadingsProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: HeadingsProps) => {
  const classNameH1 = css ? `text-[150px] ${css}` : `text-[150px]`;
  const classNameH2 = css ? `text-[100px] ${css}` : `text-[100px]`;
  const classNameH3 = css ? `text-[56px]  ${css}` : `text-[56px]`;
  const classNameH4 = css ? `text-[32px]  ${css}` : `text-[32px] `;
  const classNameH5 = css
    ? `text-[28px] tracking-[4.72px] ${css}`
    : `text-[28px] tracking-[4.72px]`;

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
