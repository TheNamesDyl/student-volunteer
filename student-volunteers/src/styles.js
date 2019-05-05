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
  padding-left: 30px;
  width: 68%;
`;

const StyledFlexRowThree = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #92c16f;
  text-align: center;
  width: 20%;
`;

const StyledImageFlexRowThree = styled.div`
  display: flex;
  flex-direction: row;
  width: 68%;
`;

const StyledFlexRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledImageOne = styled.img`
  height: 200px !important;
  width: 430px !important;
`;

const StyledPopover = styled(Popover)``;

export {
  StyledPaper,
  StyledLogoImage,
  StyledFlexRowOne,
  StyledFlexRowTwo,
  StyledFlexRowThree,
  StyledFlexRowWrapper,
  StyledPopover,
  StyledImageFlexRowThree,
  StyledImageOne
};
