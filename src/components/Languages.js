import React from 'react'
import { Grid } from '@material-ui/core'

const Accomplishments = () => {
  return (
    <Grid container className="language-container" alignContent="flex-start" justify="flex-start">
      <Grid item lg={12} xs={12} className="title">
        LANGUAGES
      </Grid>
      <Grid item container lg={12} xs={12} className="languaje" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          SPANISH - NATIVE
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          ENGLISH - ADVANCED LEVEL
        </Grid>
      </Grid>
      <br />
    </Grid>
  )
}

export default Accomplishments
