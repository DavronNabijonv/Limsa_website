import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Bcakend from 'i18next-http-backend';
import laungageDetector from 'i18next-browser-languagedetector'

// import language files
import uzWords from './languages/uz.json';
import enWords from './languages/en.json';
import ruWords from './languages/ru.json';

i18n
.use(Bcakend)
.ude(laungageDetector)
.use(initReactI18next)
.init({
    fallbackLang:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzWords},
        en:{translation:enWords},
        ru:{translation:ruWords},
    }
})