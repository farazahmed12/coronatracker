import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if ((!confirmed, !recovered, !deaths, !lastUpdate)) {
    return "Loading..";
  }

  return (
    <div className="container mt-5 text-center items-align-center">
      <h3 className="display-4 text-center">Corona Status</h3>
      <hr style={{ margin: "0 40%" }} />

      <Grid container spacing={3} justifyContent="center" className="row mt-3">
        <Grid
          item
          component={Card}
          className={`mx-2 my-2 col-md-3 ${styles.infected}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Infected Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={`mx-2 my-2 col-md-3  ${styles.recovered}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={`mx-2 my-2 col-md-3  ${styles.deaths}`}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
              ></CountUp>
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Deaths Cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
