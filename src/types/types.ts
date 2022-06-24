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

export interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
        
    }
}