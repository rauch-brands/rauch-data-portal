import React from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import { withStyles, Typography, Button } from "@material-ui/core";
import FileDownload from "js-file-download";

import styles from "./styles";

const Pepperjam = props => {
  const { classes } = props;
  const handleDownload = () => {
    Axios.get("/pepperjam/download").then(res => {
      FileDownload(res.data, "pepperjam.csv");
    });
  };
  const handkeScrape = () => {
    Axios.get("/pepperjam/runScraperTXt");
  };
  return (
    <div className={classes.marginTop}>
      <Typography>Pepperjam</Typography>
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleDownload}
      >
        Download file in CSV format
      </Button>
      <Button
        color="secondary"
        variant="outlined"
        className={classes.button}
        onClick={handkeScrape}
      >
        Scrape Product Data
      </Button>
    </div>
  );
};

Pepperjam.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Pepperjam);
