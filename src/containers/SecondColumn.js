import React from 'react'
import { Grid, Hidden } from '@material-ui/core'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Accomplishments from '../components/Accomplishments'
import Languages from '../components/Languages'
import DownloadCv from '../components/DownloadCv'

const SecondColumn = () => {
  return (
    <Grid>
      <Experience />
      <Education />
      <Languages />
      <Accomplishments />
      <Hidden lgUp>
        <DownloadCv />
      </Hidden>
    </Grid>
  )
}

export default SecondColumn
