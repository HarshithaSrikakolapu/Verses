export interface Verse {
    text: string;
    reference: string;
    translation: string;
    imageName: string;
}

export interface MoodData {
    mood: string;
    verses: Verse[];
}
