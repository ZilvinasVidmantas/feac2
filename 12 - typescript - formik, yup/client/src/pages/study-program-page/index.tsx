import React from 'react';  
import { useApi } from 'src/hooks/use-api';
import { StudyProgram } from 'src/types/study-program';

export const StudyProgramPage = () => {
  const  [data] = useApi<StudyProgram[]>('/study-programs');
  return (
    <div>
      <h1>Study program page</h1>
      <article>
        <h2>Study programs</h2>
        <ul>
          {data?.map(studyProgram => (
            <li key={studyProgram.id}>{studyProgram.name} ({studyProgram.durationInHours}val.) - {studyProgram.price}$</li>
          ))}
        </ul> 
        </article>
    </div>
  )
}
