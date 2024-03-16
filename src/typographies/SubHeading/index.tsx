import { SubHeadingsProps } from "../../types/interface";

const Typographies = ({
  kind,
  content,
  css,
  onClickFunction,
}: SubHeadingsProps) => {
  const classNameSub1 = css ? `text-[28px]  ${css}` : `text-[28px] `;
  const classNameSub2 = css
    ? `text-[14px] tracking-[2.7px]  ${css}`
    : `text-[14px] tracking-[2.7px] `;

  switch (kind) {
    case "subHeading1":
      return (
        <h1 className={classNameSub1} onClick={onClickFunction}>
          {content}
        </h1>
      );
    case "subHeading2":
      return (
        <h5 className={classNameSub2} onClick={onClickFunction}>
          {content}
        </h5>
      );
    default:
      return null;
  }
};

export default Typographies;
