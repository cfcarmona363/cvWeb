import React from 'react'
import { Grid } from '@material-ui/core'
import t from '../translation/translate'

const Education = () => {
  return (
    <Grid container className="experience-container" alignContent="flex-start" justify="flex-start">
      <Grid item lg={12} xs={12} className="title">
        {t('titles.education')}
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('education.tecnicatura.title')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('education.tecnicatura.institution')}
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          {t('education.tecnicatura.year')}
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('education.dba.title')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('education.dba.institution')}
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          {t('education.dba.year')}
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('education.java.title')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('education.java.institution')}
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          {t('education.java.year')}
        </Grid>
      </Grid>
      <Grid item container lg={12} xs={12} className="education" alignContent="flex-start" justify="flex-start">
        <Grid item lg={12} xs={12} className="experience-role">
          {t('education.engineering.title')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('education.engineering.institution')}
        </Grid>
        <Grid item lg={12} xs={12} className="completion-date">
          {t('education.engineering.year')}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Education
