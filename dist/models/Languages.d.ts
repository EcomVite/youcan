declare class YouCanLanguages {
    getLanguages(): Promise<ILanguageResponse[]>;
    setLanguageDefault(languageId: string): Promise<ILanguageResponse>;
}
export default YouCanLanguages;
