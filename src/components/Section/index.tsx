import { SectionProps } from "./types";
import { StyledSection } from "./styles";

const Section = (props: SectionProps) => {
  return <StyledSection>{props.children}</StyledSection>;
};

export default Section;
