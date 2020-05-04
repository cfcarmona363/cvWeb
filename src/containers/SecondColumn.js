import React from 'react'
import { Grid } from '@material-ui/core'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Accomplishments from '../components/Accomplishments'
import Languages from '../components/Languages'

const SecondColumn = () => {
  return (
    <Grid>
      <Experience />
      <Education />
      <Languages />
      <Accomplishments />
    </Grid>
  )
}

export default SecondColumn
