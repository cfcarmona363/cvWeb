/* eslint-disable react-hooks/rules-of-hooks */

import { useContext } from 'react'
import english from './english.json'
import spanish from './spanish.json'
import { LanguageContext } from '../context/languageContext'

const translate = value => {
  const { selectedLang } = useContext(LanguageContext)

  let currentValue = selectedLang === 'ENG' ? english : spanish
  const props = value.split('.')

  props.forEach(val => {
    currentValue = currentValue[val]
  })

  return currentValue
}

export default translate
