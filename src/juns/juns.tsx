import French from "../languages/fr-FR.json";
import English from "../languages/en-US.json";
import { createContext } from "react";

type LanguageContextType = "fr" | "en";

export const languages ={
    fr: {
        locale: "FR",
        messages: French
    },
    en: {
        locale: "EN",
        messages: English
    }
};

const LanguageContext = createContext<LanguageContextType | null>("en");

export default LanguageContext;