import React from 'react'
import { Grid } from '@material-ui/core'
import { Phone, Mail, LocationOn, GitHub } from '@material-ui/icons'
import profileImg from '../assets/profile-img.jpg'
import { RiReactjsLine, RiFlutterLine } from 'react-icons/ri'
import { IoLogoJavascript, IoLogoNodejs, IoLogoAngular } from 'react-icons/io'
import { GiDart } from 'react-icons/gi'
import { DiJava, DiMongodb } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'

const FirstColumn = () => {
  const contactInfo = [
    { icon: <Phone />, value: <span>3512693767</span>, key: 'phone' },
    {
      icon: <Mail />,
      value: <span>cfcarmona363@gmail.com</span>,
      key: 'mail'
    },
    {
      icon: <LocationOn />,
      value: <span>Córdoba Capital - Argentina</span>,
      key: 'location'
    },
    {
      icon: <GitHub />,
      value: (
        <a href="https://github.com/cfcarmona363?tab=repositories" target="blank">
          GitHub: cfcarmona363
        </a>
      ),
      key: 'git'
    }
  ]

  const skils = [
    { name: 'React', icon: <RiReactjsLine /> },
    { name: 'Javascript', icon: <IoLogoJavascript /> },
    { name: 'Node', icon: <IoLogoNodejs /> },
    { name: 'Flutter', icon: <RiFlutterLine /> },
    { name: 'Dart', icon: <GiDart /> },
    { name: 'Java', icon: <DiJava /> },
    { name: 'PL-SQL', icon: <AiOutlineConsoleSql /> },
    { name: 'Mongo DB', icon: <DiMongodb /> },
    { name: 'Angular', icon: <IoLogoAngular /> }
  ]

  return (
    <Grid container item className="first-column" alignContent="flex-start">
      <Grid item lg={12} xs={12}>
        <div className="profile-pic">
          <img src={profileImg} alt="profile-pic" />
        </div>
      </Grid>
      <Grid item lg={12} xs={12} className="name">
        <h1>Francisco Carmona</h1>
      </Grid>

      <Grid item lg={12} xs={12} className="title">
        <h2>{'FRONT-END DEVELOPER'}</h2>
      </Grid>
      <Grid item lg={12} xs={12}>
        <h1>CONTACT</h1>
        <ul className="contact-info">
          {contactInfo.map(item => (
            <li key={item.key}>
              <Grid container alignContent="center" justify="space-between">
                <Grid item container lg={1} xs={1}>
                  {item.icon}
                </Grid>
                <Grid item container lg={11} xs={10} alignContent="center">
                  {item.value}
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item lg={12} xs={12}>
        <h1>SKILS</h1>
        <ul className="skills-list">
          {skils.map(item => (
            <li key={item.name}>
              <Grid container alignContent="center" justify="center" className="skill-item">
                <Grid item lg={1} xs={3}>
                  {item.icon}
                </Grid>
                <Grid item lg={10} xs={8}>
                  {item.name}
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  )
}

export default FirstColumn
