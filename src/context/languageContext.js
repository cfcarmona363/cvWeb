import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [selectedLang, setSelectedLang] = useState('ESP')

  const changeLang = lang => setSelectedLang(lang)

  return <LanguageContext.Provider value={{ selectedLang, changeLang }}>{children}</LanguageContext.Provider>
}

export default LanguageProvider
