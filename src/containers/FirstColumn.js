import React from 'react'
import { Grid } from '@material-ui/core'
import { Phone, Mail, LocationOn, GitHub } from '@material-ui/icons'
import profileImg from '../assets/profile-img.jpg'

const FirstColumn = () => {
  const contactInfo = [
    { icon: <Phone />, value: '3512693767', key: 'phone' },
    {
      icon: <Mail />,
      value: 'cfcarmona363@gmail.com',
      key: 'mail'
    },
    {
      icon: <LocationOn />,
      value: 'Córdoba Capital - Argentina',
      key: 'location'
    },
    {
      icon: <GitHub />,
      value: 'https://github.com/cfcarmona363?tab=repositories',
      key: 'git'
    }
  ]

  const skils = ['React', 'Javascript', 'Node', 'Flutter', 'Dart', 'Java', 'PL-SQL', 'Mongo DB', 'Angular']

  return (
    <Grid container item className="first-column">
      <Grid item lg={12} xs={4}>
        <div className="profile-pic">
          <img src={profileImg} alt="profile-pic" />
        </div>
      </Grid>
      <Grid item lg={12} xs={4} className="name">
        <h1>Francisco Carmona</h1>
      </Grid>

      <Grid item lg={12} xs={4} className="title">
        <h2>{'FRONT-END DEVELOPER'}</h2>
      </Grid>
      <Grid item lg={12} xs={9}>
        <h1>Contact</h1>
        <ul className="contact-info">
          {contactInfo.map(item => (
            <li key={item.key}>
              {item.icon}
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item lg={12} xs={3}>
        <h1>Skils</h1>
        <ul className="skills-list">
          {skils.map(item => (
            <li key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  )
}

export default FirstColumn
