import French from "../languages/fr-FR.json";
import English from "../languages/en-US.json";
import { createContext } from "react";
import {MessageFormatElement} from "react-intl";

//export type LanguageContextType = "fr" | "en";

export type Language = {
    locale: string;
    messages: Record<string, string>;
};

type LanguageContextType = {
    selectedLanguage: Language;
    handleLanguageChange: (locale: string) => void;
};

export const languages: Record<string, Language>  ={
    fr: {
        locale: "fr",
        messages: French
    },
    en: {
        locale: "en",
        messages: English
    }
};
//language
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


export default LanguageContext;