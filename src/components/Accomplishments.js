import React from 'react'
import { Grid } from '@material-ui/core'

const Accomplishments = () => {
  return (
    <Grid container className="accomplishment-container" alignContent="flex-start" justify="flex-start">
      <h1>ACCOMPLISHMENTS</h1>
      <Grid item container lg={12} xs={12} className="accomplishment" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          INVITED SPEAKER AT FACEBOOK DEVELOPER CIRCLE, CÓRDOBA
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          I GAVE A PRESENTATION ON REACT HOOKS AND HOW TO IMPLEMENT THEM.
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Accomplishments
