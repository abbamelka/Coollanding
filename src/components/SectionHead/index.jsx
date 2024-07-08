import React from "react";
import {SectionHeadStyled} from "./sectionHead.styled";

const SectionHead = ({head, text,text1}) => {
  return (
    <SectionHeadStyled className="text-center py-4">
      <span className="back-head">{head}</span>
      <h2 className="sec-head">{head}</h2>
      <h6>{text}</h6>
      <h6>{text1}</h6>
    </SectionHeadStyled>
  );
};

export default SectionHead;
