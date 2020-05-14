import React from 'react'
import { Grid } from '@material-ui/core'
import { Phone, Mail, LocationOn, GitHub } from '@material-ui/icons'
import profileImg from '../assets/profile-img.jpg'
import spainFlag from '../assets/spainFlag.png'
import ukFlag from '../assets/ukFlag.png'
import cvSpanish from '../assets/cvSpanish.pdf'
import cvEnglish from '../assets/cvEnglish.pdf'
import { RiReactjsLine, RiFlutterLine } from 'react-icons/ri'
import { IoLogoJavascript, IoLogoNodejs, IoLogoAngular } from 'react-icons/io'
import { GiDart } from 'react-icons/gi'
import { DiJava, DiMongodb } from 'react-icons/di'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import SpinningIcon from '../components/styled-components/spinningIcon'
import t from '../translation/translate'

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
        FRANCISCO CARMONA
      </Grid>

      <Grid item lg={12} xs={12} className="title">
        FRONT-END DEVELOPER
      </Grid>
      <Grid item container lg={12} md={6} xs={12}>
        <Grid item lg={12} xs={12} className="name">
          {t('titles.contact')}
        </Grid>
        <Grid item lg={12} xs={12} className="contact-info">
          <ul>
            {contactInfo.map(item => (
              <li key={item.key}>
                <Grid item container alignContent="center" justify="space-around">
                  <Grid item container lg={1} xs={1}>
                    {item.icon}
                  </Grid>
                  <Grid item container lg={11} xs={10}>
                    {item.value}
                  </Grid>
                </Grid>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Grid item lg={12} md={6} xs={12}>
        <Grid className="name">{t('titles.skills')}</Grid>
        <ul className="skills-list">
          {skils.map((item, index) => (
            <li key={item.name}>
              <Grid container alignContent="center" justify="center" className="skill-item">
                <Grid item lg={1} xs={2}>
                  <SpinningIcon time={index / 30 + 3}>{item.icon}</SpinningIcon>
                </Grid>
                <Grid item lg={10} xs={9}>
                  {item.name}
                </Grid>
              </Grid>
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item lg={12} md={6} xs={12} className="download">
        <Grid>{t('titles.download')}</Grid>
        <Grid>
          <ul>
            <li>
              <img src={spainFlag} alt="spanish"></img>
              <a href={cvSpanish} target="_blank" rel="noopener noreferrer">
                {t('langSelect.spanish')}
              </a>
            </li>
            <li>
              <img src={ukFlag} alt="english"></img>
              <a href={cvEnglish} target="_blank" rel="noopener noreferrer">
                {t('langSelect.english')}
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FirstColumn
