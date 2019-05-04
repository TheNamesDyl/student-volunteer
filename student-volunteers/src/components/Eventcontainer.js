import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { StyledPaper } from "../styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Eventcontainer(props) {
  const { classes } = props;

  return (
    <div>
      <StyledPaper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </StyledPaper>
    </div>
  );
}

Eventcontainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Eventcontainer);
