import React from 'react';
import { useStudyPrograms } from 'src/api/study-programs';

export const StudyProgramPage = () => {
  const { data: studyPrograms, isLoading } = useStudyPrograms();

  return (
    <div>
      <h1>Study program page</h1>
      <article>
        <h2>Study programs</h2>
        {isLoading ?
          <div>Loading...</div>
          : (
            <ul>
              {studyPrograms?.map(studyProgram => (
                <li key={studyProgram.id}>{studyProgram.name} ({studyProgram.durationInHours}val.) - {studyProgram.price}$</li>
              ))}
            </ul>
          )}
      </article>
    </div>
  )
}
