import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  return (
    <SectionContainer id={"portfolio"} secName={"portfolio-sec"}>
      <SectionHead
        head={"portfolio"}
        text={
          `
            our passion for creativity, a keen eye for aesthetics,
            and a deep understanding of the ever-evolving fashion industry. 
            Over the past several years, We have honed our skills and developed a 
            diverse range of designs that cater to various market segments, from 
            high-end couture to contemporary ready-to-wear.
          `
        }
        text1={
          `
            ለፈጠራ ችሎታ ያለን ፍቅር፣ የውበታ ማዕድናትን በትኩረት የምንመለከት፣
            እንዲሁም በየጊዜው እየተሻሻለ ስለመጣ የፋሽን ኢንዱስትሪ ጥልቅ ግንዛቤ። 
            ባለፉት በርካታ ዓመታት፣ ችሎታችንን አከብረናል እናም አዳብረናል 
            የተለያዩ የገበያ ክፍሎችን የሚመጥኑ የተለያዩ ንድፎች፣ 
            ከፍተኛ-መጨረሻ couture ወደ ዘመኑ ዝግጁ-ወደ-ልብስ.
          `
        }
      />
      <PortfolioBlock />
    </SectionContainer>
  );
};

export default Portfolio;
