import React from 'react'
import { Grid } from '@material-ui/core'

const Education = () => {
  return (
    <Grid container className="experience-container" alignContent="flex-start" justify="flex-start">
      <Grid className="title">EDUCATION</Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          ADVANCED TECHNICAL DEGREE ON PROGRAMMING
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          NATIONAL TECHNOLOGICAL UNIVERSITY
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          2016 - 2017 COMPLETED
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          DATABASE ADMINISTRATION (MODULES 1 AND 2)
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          CISCO ACADEMY, NATIONAL TECHNOLOGICAL UNIVERSITY
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          2014 - 2015 COMPLETED
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          JAVA PROGRAMMING
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          CISCO ACADEMY, NATIONAL TECHNOLOGICAL UNIVERSITY
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          2014 - 2014 COMPLETED
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          COMPUTER SCIENCE ENGINEERING
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          NATIONAL UNIVERSITY OF CÓRDOBA
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          2008 - 2012 NOT COMPLETED
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education
