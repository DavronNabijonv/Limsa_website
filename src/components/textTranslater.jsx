import React from 'react'
import { useTranslation } from 'react-i18next'

export default function TextTranslater({txt}) {
    const {t} = useTranslation();
  return (
    <div >{t(txt)}</div>
  )
}
