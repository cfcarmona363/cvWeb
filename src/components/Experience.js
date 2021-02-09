import React from 'react';
import { Grid } from '@material-ui/core';
import t from '../translation/translate';

const Experience = () => {
  return (
    <Grid
      container
      className="experience-container"
      alignContent="flex-start"
      justify="flex-start"
    >
      <Grid item container lg={12} xs={12} className="title">
        {t('titles.experience')}
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.cor.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.cor.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.cor.desc')}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.eureka.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.eureka.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.eureka.desc')}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.bizit.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.bizit.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.bizit.desc')}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.cohen2.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.cohen2.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.cohen2.desc')}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.globant.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.globant.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.globant.desc')}
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={12}
        xs={12}
        className="experience"
        alignContent="flex-start"
        justify="flex-start"
      >
        <Grid item lg={12} xs={12} className="experience-role">
          {t('experience.cohen1.position')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-company">
          {t('experience.cohen1.company')}
        </Grid>
        <Grid item lg={12} xs={12} className="experience-desc">
          {t('experience.cohen1.desc')}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
