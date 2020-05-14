import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import spainFlag from '../assets/spainFlag.png'
import ukFlag from '../assets/ukFlag.png'
import t from '../translation/translate'
import { LanguageContext } from '../context/languageContext'

const Header = () => {
  const { selectedLang, changeLang } = useContext(LanguageContext)

  return (
    <Grid container item lg={12} xs={12} className="home-header" justify="flex-end" alignItems="center">
      {t('langSelect.title')}

      <img
        src={spainFlag}
        alt="spanish"
        className={selectedLang === 'ESP' ? 'selected' : ''}
        onClick={() => changeLang('ESP')}></img>
      <img
        src={ukFlag}
        alt="english"
        className={selectedLang === 'ENG' ? 'selected' : ''}
        onClick={() => changeLang('ENG')}></img>
    </Grid>
  )
}

export default Header
