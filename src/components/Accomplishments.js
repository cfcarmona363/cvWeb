import React from 'react'
import { Grid } from '@material-ui/core'
import t from '../translation/translate'

const Accomplishments = () => {
  return (
    <Grid container className="accomplishment-container" alignContent="flex-start" justify="flex-start">
      <Grid item lg={12} xs={12} className="title">
        {t('titles.accomplishments')}
      </Grid>
      <Grid item container lg={12} xs={12} className="accomplishment" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('accomplishments.facebook.title')}
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          {t('accomplishments.facebook.desc')}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Accomplishments
