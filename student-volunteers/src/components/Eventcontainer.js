import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  StyledPaper,
  StyledLogoImage,
  StyledFlexRowOne,
  StyledFlexRowTwo,
  StyledFlexRowThree,
  StyledFlexRowWrapper,
  StyledPopover
} from "../styles";
import Typography from "@material-ui/core/Typography";
import { Button, Popover } from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Eventcontainer extends Component {
  state = {
    anchorEl: null
  };

  popoverOn = event => {
    this.setState({ popoverOpen: event.currentTarget });
  };

  popoverOff = event => {
    this.setState({ popoverOpen: null });
  };

  render() {
    const open = Boolean(this.state.popoverOpen);
    return (
      <div>
        <StyledPaper elevation={1}>
          <Typography variant="h5" component="h3" />
          <Typography component="p">
            <StyledFlexRowWrapper>
              <StyledFlexRowOne>
                <StyledLogoImage src={this.props.data.image} />
              </StyledFlexRowOne>
              <StyledFlexRowTwo>
                <h1>{this.props.data.title} </h1>
                <h2>{this.props.data.description} </h2>
                <p>{this.props.data.moreDescription} </p>
                <Button
                  onClick={this.popoverOn}
                  color="primary"
                  style={{ width: "200px" }}
                >
                  Read more
                </Button>
              </StyledFlexRowTwo>
              <StyledFlexRowThree>
                <div style={{ backgroundColor: "#7ea85f" }}>
                  <p>Skills needed</p>
                </div>
                <p>{this.props.data.skills[0]}</p>
                <p>{this.props.data.skills[1]}</p>
                <p>{this.props.data.skills[2]}</p>
              </StyledFlexRowThree>
            </StyledFlexRowWrapper>
          </Typography>
        </StyledPaper>
        <StyledPopover open={open} anchorEl={this.state.popoverOpen}>
          <StyledFlexRowWrapper>
            <StyledFlexRowOne>
              <StyledLogoImage src={this.props.data.image} />
            </StyledFlexRowOne>
            <StyledFlexRowTwo>
              <h1>{this.props.data.title} </h1>
              <h2>{this.props.data.description} </h2>
              <p>{this.props.data.thirdDescription} </p>
              <Button
                onClick={this.popoverOff}
                color="primary"
                style={{ width: "200px" }}
              >
                Close Popover
              </Button>
            </StyledFlexRowTwo>
          </StyledFlexRowWrapper>
        </StyledPopover>
      </div>
    );
  }
}

Eventcontainer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default withStyles(styles)(Eventcontainer);
