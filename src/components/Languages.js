import React from 'react'
import { Grid } from '@material-ui/core'
import t from '../translation/translate'

const Accomplishments = () => {
  return (
    <Grid container className="language-container" alignContent="flex-start" justify="flex-start">
      <Grid item lg={12} xs={12} className="title">
        {t('titles.languages')}
      </Grid>
      <Grid item container lg={12} xs={12} className="languaje" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('languages.spanish')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-role">
          {t('languages.english')}
        </Grid>
      </Grid>
      <br />
    </Grid>
  )
}

export default Accomplishments
