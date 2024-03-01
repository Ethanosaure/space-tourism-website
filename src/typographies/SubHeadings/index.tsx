import { SubHeadingsProps } from "../../types/interface";

const Typographies = ({ kind, content, css }: SubHeadingsProps) => {
  switch (kind) {
    case "subHeading1":
      return <h1 className={css}>{content}</h1>;
    case "subHeading2":
      return <h5 className={css}>{content}</h5>;
  }
};

export default Typographies;
