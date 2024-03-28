import { MouseEventHandler } from "react";

interface TypographiesProps {
  content: string | number | React.ReactNode;
  key?: string;
  css?: string;
  onClick?: React.MouseEventHandler;
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
interface ImageFormat {
  portrait: string;
  landscape: string;
}
interface Destination {
  name: string;
  images: ImageData;
  description: string;
  distance: string;
  travel: string;
}
interface Crew {
  name: string;
  images: ImageData;
  role: string;
  bio: string;
}
interface Technology {
  name: string;
  images: ImageFormat;
  description: string;
}

export interface SliderTechnologyProps {
  array: string[];
  data: Technology[];
}
export interface SliderDestinationProps {
  array: string[];
  data: Destination[];
}
export interface SliderCrewProps {
  array: string[];
  data: Crew[];
}

export interface DestinationDescriptionProps {
  data: Destination[];
  selectedPlanet: number;
}
export interface CrewDescriptionProps {
  data: Crew[];
  selectedMember: number;
}
export interface TechnologyDescriptionProps {
  data: Technology[];
  selectedTechnology: number;
}
