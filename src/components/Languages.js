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
        <Grid item container lg={12} xs={12} className="experience-role" direction="row">
          <Grid item container lg={2} md={2} xs={6}>
            {t('languages.spanish')}
          </Grid>
          <Grid item container lg={3} xs={3} className="language-level" alignContent="flex-end">
            {t('languages.spanishLevel')}
          </Grid>
        </Grid>
        <Grid item container lg={12} xs={12} className="experience-role" direction="row">
          <Grid item container lg={2} md={2} xs={6}>
            {t('languages.english')}
          </Grid>
          <Grid item container lg={3} xs={3} className="language-level" alignContent="flex-end">
            {t('languages.englishLevel')}
          </Grid>
        </Grid>
      </Grid>
      <br />
    </Grid>
  )
}

export default Accomplishments
