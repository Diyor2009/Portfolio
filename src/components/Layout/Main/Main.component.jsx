import IntroSection from "../../Sections/Intro/Intro.component";
import SkillsSection from "../../Sections/Skills/Skills.component";
import ContactSection from "../../Sections/Contact/Contact.component";
import { MainWrapper, MainContainer } from "./Main.styles";

export default function Main() {
  return (
    <MainWrapper>
      <MainContainer>
        <IntroSection />
        <SkillsSection />
        <SkillsSection />
        <ContactSection />
      </MainContainer>
    </MainWrapper>
  );
}
