import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TextTranslater({txt,txt_styles}) {
    const {t} = useTranslation();
  return (
    <div className={`${txt_styles}`} >{t(txt)}</div>
  )
}
