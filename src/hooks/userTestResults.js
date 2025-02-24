import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTestResults,
  updateTestResultVisibility,
  deleteTestResult,
} from "../api/testResults";

const useTestResults = () => {
  const queryClient = useQueryClient();

  const {
    data: testResults,
    isLoading: isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });

  const { mutate: mutateVisibility } = useMutation({
    mutationFn: ({ id, visibility }) =>
      updateTestResultVisibility(id, visibility),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id) => deleteTestResult(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });

  return { testResults, isError, isPending, mutateVisibility, mutateDelete };
};

export default useTestResults;
