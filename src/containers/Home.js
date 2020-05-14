/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Grid } from '@material-ui/core'
import FirstColumn from './FirstColumn'
import SecondColumn from './SecondColumn'
import Header from '../components/Header'

const Home = () => {
  return (
    <Grid container direction="row">
      <Header />
      <Grid container item className="home-main" direction="row">
        <Grid container item lg={5} xs={12} className="home-main__firstColumn">
          <FirstColumn />
        </Grid>
        <Grid container item lg={7} xs={12} className="home-main__secondColumn">
          <SecondColumn />
        </Grid>
      </Grid>
      <Grid container item lg={12} xs={12} className="home-footer"></Grid>
    </Grid>
  )
}

export default Home
