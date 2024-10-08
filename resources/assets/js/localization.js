import { createI18n } from 'vue-i18n';

// Default language from global settings or fallback to 'en'
export const language = window.settings.language || 'en';

// Object to load language files dynamically
const langFiles = {
    en: () => import('../../lang/en.json'),
    ar: () => import('../../lang/ar.json'),
    de: () => import('../../lang/de.json'),
    es: () => import('../../lang/es.json'),
    fr: () => import('../../lang/fr.json'),
    it: () => import('../../lang/it.json'),
    ms: () => import('../../lang/ms.json'),
    no: () => import('../../lang/no.json'),
    sv: () => import('../../lang/sv.json'),
    th: () => import('../../lang/th.json'),
    zh: () => import('../../lang/zh.json'),
    nl: () => import('../../lang/nl.json'),
    pt: () => import('../../lang/pt.json'),
};

// Function to load language messages dynamically
const loadLanguages = async () => {
    const messages = {}; // Initialize empty messages object
    try {
        const langPromises = Object.entries(langFiles).map(async ([key, loader]) => {
            const module = await loader();
            messages[key] = module.default; // Assuming the JSON exports default
        });
        
        await Promise.all(langPromises); // Wait for all languages to load
        
        // Create and return the VueI18n instance with the loaded messages
        return createI18n({
            locale: language,
            fallbackLocale: 'en', // Fallback if the current locale is not available
            messages,
            silentTranslationWarn: true,
        });
    } catch (error) {
        console.error("Error loading language files:", error);
        return null; // Return null in case of an error
    }
};

// Export the initializeI18n function to be used in app.js
export const initializeI18n = async () => {
    const i18n = await loadLanguages();
    return i18n;
};
