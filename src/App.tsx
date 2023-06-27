import React, { useState } from 'react';
import './App.css';
//import LanguageContext, {languages} from './juns/juns';
import Landing from './Landing'
import Members from "./Member";



// const firstname ="boris"
const App = () => {
  //const [lang, setLang] = useState(languages.en)

  /*const toggleLanguage = () => {
    lang === languages.en
    ? setLang(LanguageContext.fr)
      : setTheme(themes.dark)
}*/
  return (
    <div>
      {/*<Landing message />*/}
        <Members />
    </div>
  );
}

export default App;
