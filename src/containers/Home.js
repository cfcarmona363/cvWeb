/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid } from '@material-ui/core'
import FirstColumn from './FirstColumn'

const Home = () => {
  return (
    <Grid container direction="row">
      <Grid container item lg={12} xs={12} className="home-header"></Grid>
      <Grid container item className="home-main" direction="row">
        <Grid container item lg={4} xs={12} className="home-main__firstColumn">
          <FirstColumn></FirstColumn>
        </Grid>
        <Grid container item lg={8} xs={12} className="home-main__secondColumn"></Grid>
      </Grid>
      <Grid container item lg={12} xs={12} className="home-footer"></Grid>
    </Grid>
  )
}

export default Home
