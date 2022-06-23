import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";
import {GetQueryLessonsResponse} from '../types/types_lessons';
import {GET_LESSONS_QUERY} from '../gql/lessons_requisitions'




export function Sidebar(){

    const {data} = useQuery<GetQueryLessonsResponse>(GET_LESSONS_QUERY);


    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold pb-6 text-2x1 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
              {data?.lessons.map(lesson => {
                return (
                    <Lesson 
                    key={lesson.id}
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                    />
                )
                })}
               
            </div>
        </aside>
    )
}