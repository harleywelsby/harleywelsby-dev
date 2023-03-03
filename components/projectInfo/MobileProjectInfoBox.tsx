import {
  ContentWrapper,
  DescriptionText,
  FlexColumn,
  InfoBoxContent,
  NameText,
} from "@/styles/styledComponents";
import React, { useContext } from "react";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import LinkLogo from "../LinkLogo";
import { MobileUserContext } from "../context/MobileUserContext";
import { ProjectInfoBoxProps } from "./ProjectInfoBoxProps";

function MobileProjectInfoBox({
  title,
  description,
  imagePath,
  link,
}: ProjectInfoBoxProps) {
  const { isUserOnMobile } = useContext(MobileUserContext);

  return (
    <ContentWrapper className="basePadding">
      <InfoBoxContent>
        {!isUserOnMobile && (
          <Image
            className="profilePhoto selfCenter whiteOutline"
            src={imagePath}
            alt="ProjectDemo"
            width={300}
            height={300}
            priority={true}
            loading="eager"
          />
        )}
        <FlexColumn>
          <NameText>{title}</NameText>
          <LinkLogo
            iconName={faGithub}
            link={link}
            size={"2x"}
            newTab
            padding
          />
          <DescriptionText
            className={
              isUserOnMobile ? "mobileDescriptionText" : "webDescriptionText"
            }
          >
            {description}
          </DescriptionText>
          {isUserOnMobile && (
            <Image
              className="profilePhoto selfCenter whiteOutline"
              src={imagePath}
              alt="ProjectDemo"
              width={250}
              height={250}
              priority={true}
              loading="eager"
            />
          )}
        </FlexColumn>
      </InfoBoxContent>
    </ContentWrapper>
  );
}

export default MobileProjectInfoBox;
