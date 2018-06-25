import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  
  //Dictionaries
  resources: {
    en: {
      translations: {
        "s_100": "Football",        
        "s_400": "Golf",        
        "s_600": "Tennis",        
        "s_1200": "Volleyball",        
        "s_1250": "Beach Volleyball",        
        "s_17500": "Cricket",        
        "s_601600": "Basketball",        
        "m_welcome": "Welcome",
        "m_home": "Home",
        "m_back_home": "Back Home",
        "m_back": "Back",
        "e_no_event": "Event not found",        
        "e_no_events": "Non-available Events"
      }
    },
    es: {
      translations: {
        "s_100": "Fútbol",
        "s_400": "Golf",        
        "s_600": "Tenis",        
        "s_1200": "Voleibol",        
        "s_1250": "Voley Playa",        
        "s_17500": "Cricket",        
        "s_601600": "Baloncesto", 
        "m_welcome": "Bienvenido",
        "m_home": "Inicio",
        "m_back_home": "Ir a inicio",
        "m_back": "Atrás",
        "e_no_event": "Evento no encontrado",
        "e_no_events": "No hay Eventos disponibles en este momento"        
      }
    }
  },
  
  fallbackLng: "en",
  debug: true,  
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {escapeValue: false,formatSeparator: ","},
  react: {wait: true}
});

export default i18n;
