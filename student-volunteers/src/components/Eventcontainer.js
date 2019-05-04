import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  StyledPaper,
  StyledLogoImage,
  StyledFlexRowOne,
  StyledFlexRowTwo,
  StyledFlexRowWrapper
} from "../styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Eventcontainer(props) {
  var data = {
    title: "",
    description: "",
    logo: "",
    duration: "",
    tags: ""
  };

  return (
    <div>
      <StyledPaper elevation={1}>
        <Typography variant="h5" component="h3" />
        <Typography component="p">
          <StyledFlexRowWrapper>
            <StyledFlexRowOne>
              <h1>{props.data.title} </h1>
              <h2>{props.data.description} </h2>
              <h4>{props.data.description} </h4>
              <Button style={{ width: "200px" }}>Read more</Button>
            </StyledFlexRowOne>
            <StyledFlexRowTwo>
              <div style={{ backgroundColor: "#7ea85f" }}>
                <p>Skills needed</p>
              </div>
              <p>{props.data.skills}</p>
              <p>{props.data.skills}</p>
              <p>{props.data.skills}</p>
            </StyledFlexRowTwo>
          </StyledFlexRowWrapper>
        </Typography>
      </StyledPaper>
    </div>
  );
}

Eventcontainer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(Eventcontainer);
