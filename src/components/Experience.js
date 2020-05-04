import React from 'react'
import { Grid } from '@material-ui/core'

const Experience = () => {
  return (
    <Grid container className="experience-container" alignContent="flex-start" justify="flex-start">
      <h1>EXPERIENCE</h1>
      <Grid item container lg={12} xs={12} className="experience" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          FRONT-END REACT DEVELOPER
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          EUREKA LABS - 06/2018
        </Grid>
        <Grid item lg={12} xs={12}>
          <p>
            I joined the company as a junior developer, and after a year I started taking more responsibilities, such as
            training new developers and managing all the most important front-end matters.
          </p>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="experience" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          BACK-END JAVA DEVELOPER
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          BIZIT GLOBAL 10/2017 - 06/2018
        </Grid>
        <Grid item lg={12} xs={12}>
          <p>I worked as a back-end developer with Java and PL-SQL.</p>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="experience" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          PL-SQL DEVELOPER
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          COHEN SISTEMAS 09/2016 - 10/2017
        </Grid>
        <Grid item lg={12} xs={12}>
          <p>I worked with PL-SQL and Oracle Forms for a big telecommunications company.</p>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="experience" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          AUTOMATION DEVELOPER
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          GLOBANT 05/2016 - 09/2016
        </Grid>
        <Grid item lg={12} xs={12}>
          <p>I worked as an automation developer using Selenium and Python.</p>
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="experience" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          QA ANALYST AND AUTOMATION DEVELOPER
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          COHEN SISTEMAS 11/2014 - 05/2016
        </Grid>
        <Grid item lg={12} xs={12}>
          <p>I worked as a QA analyst for a big telecommunications company, and also developing automation tests.</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Experience
