import Paragraph from "../../typographies/Paragraphs";
import Heading from "../../typographies/Headings";
import SubHeading from "../../typographies/SubHeadings";

const Component = () => {
  return (
    <div>
      <Paragraph kind="p" content="je suis un paragraphe de type p" />
      <Paragraph kind="span" content="je suis un paragraphe de type span" />
      <Heading kind="h1" content="je suis un titre de type h1" />
      <Heading kind="h2" content="je suis un titre de type h2" />
      <Heading kind="h3" content="je suis un titre de type h3" />
      <Heading kind="h4" content="je suis un titre de type h4" />
      <Heading kind="h5" content="je suis un titre de type h5" />
      <SubHeading
        kind="subHeading1"
        content="je suis un subHeading de type 1"
      />
      <SubHeading
        kind="subHeading2"
        content="je suis un subHeading de type 2"
      />
    </div>
  );
};

export default Component;
