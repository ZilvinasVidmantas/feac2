import { useQuery } from "@tanstack/react-query";
import { ApiService } from "src/services/api-service";
import { StudyProgram } from "src/types/study-program";
import { STUDY_PROGRAMS_QUERY_KEY } from "./query-keys";

const fetchStudyPrograms = async (): Promise<StudyProgram[]> => {
  const response = await ApiService.get("/study-programs");

  return response.data;
};

export const useStudyPrograms = () => {
  return useQuery({
    queryKey: [STUDY_PROGRAMS_QUERY_KEY],
    queryFn: fetchStudyPrograms,
    staleTime: 1000 * 60 * 5, // nedaryti network request 5 minutes
    gcTime: 1000 * 60 * 10, // kas 10min išvalyti cache
  });
};