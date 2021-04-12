import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../../globalStyles";
import {
  Section,
  PageRow,
  PageColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./PageSection.elements";

function PageSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
}) {
  // all parameters for the PageStructure
  return (
    <>
      {/* This is all styled using styled components */}
      <Section lightBg={(lightBg, imgStart)}>
        <Container>
          <PageRow imgStart={imgStart}>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to="/register">
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>

            <PageColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </PageColumn>
          </PageRow>
        </Container>
      </Section>
    </>
  );
}

export default PageSection;
