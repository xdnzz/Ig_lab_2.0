export interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export interface GetQueryLessonsResponse {
    lessons: {
        id: string,
        title: string,
        slug: string,
        availableAt: string,
        lessonType: 'live' | 'class'
    }[];

}