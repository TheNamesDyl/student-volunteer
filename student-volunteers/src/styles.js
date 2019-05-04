import styled from "styled-components";
import { Paper } from "@material-ui/core";

const StyledPaper = styled(Paper)`
  width: 80%;
  margin: auto;
`;

const StyledLogoImage = styled.img`
  height: 100px;
  width: 100px;
`;

const StyledFlexRowOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const StyledFlexRowTwo = styled.div`
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

export {
  StyledPaper,
  StyledLogoImage,
  StyledFlexRowOne,
  StyledFlexRowTwo,
  StyledFlexRowWrapper
};
