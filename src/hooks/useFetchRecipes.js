import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../redux/slices/recipesSlice";

export default function useFetchRecipes () {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      await dispatch(getRecipes());
    } 
    catch (error) {
      setError(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return error ;
}