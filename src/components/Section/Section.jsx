import {SectionTitle, Block} from './Section.styled'

export const Section = ({ title, children }) => {
  return (
    <Block>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Block>
  );
};