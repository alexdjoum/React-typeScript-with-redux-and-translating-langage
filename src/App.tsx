import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';
import LanguageContext, {languages, Language} from "./juns/juns";
import {IntlProvider} from "react-intl";
const App = () => {

    /*const locale: LangageContextType = "fr"

    if (!locale) {
        console.error("La variable locale n'est pas définie.");
        return null; // Ou affichez un message d'erreur approprié
    }

    if (locale !== "fr" && locale !== "en") {
        console.error("La valeur de la variable locale n'est pas valide.");
        return null; // Ou affichez un message d'erreur approprié
    }*/
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages.fr);

    const handleLanguageChange = (locale: string) => {
        setSelectedLanguage(languages[locale]);
    };

    /*const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocale(e.target.value);
    };*/
    return (
        <LanguageContext.Provider value={{selectedLanguage, handleLanguageChange}}>
            <IntlProvider locale={selectedLanguage.locale} messages={selectedLanguage.messages}>
                <BrowserRouter>
                    <Routes>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                Component={route.component}
                            />


                        ))}
                    </Routes>
                </BrowserRouter>
            </IntlProvider>

      </LanguageContext.Provider>

  );
}

export default App;
