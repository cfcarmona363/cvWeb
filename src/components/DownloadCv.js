import React from 'react'
import { Grid } from '@material-ui/core'
import spainFlag from '../assets/spainFlag.png'
import ukFlag from '../assets/ukFlag.png'
import cvSpanish from '../assets/cvSpanish.pdf'
import cvEnglish from '../assets/cvEnglish.pdf'
import t from '../translation/translate'

const DownloadCv = () => {
  return (
    <>
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
    </>
  )
}

export default DownloadCv
