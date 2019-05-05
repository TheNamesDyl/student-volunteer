import styled from "styled-components";
import { Paper, Popover } from "@material-ui/core";

const StyledPaper = styled(Paper)`
  width: 80%;
  margin: auto;
`;

const StyledLogoImage = styled.img`
  height: 100%;
  width: 100%;
`;
const StyledFlexRowOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 12%;
`;
const StyledFlexRowTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
`;

const StyledFlexRowThree = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #92c16f;
  text-align: center;
  width: 20%;
`;

const StyledFlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledPopover = styled(Popover)``;

export {
  StyledPaper,
  StyledLogoImage,
  StyledFlexRowOne,
  StyledFlexRowTwo,
  StyledFlexRowThree,
  StyledFlexRowWrapper,
  StyledPopover
};
