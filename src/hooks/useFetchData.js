import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipes } from "../redux/slices/recipesSlice";
import { getFromLocalStorage } from "../redux/slices/favoritesSlice";

export default function useFetchData () {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      await dispatch(getRecipes());
      await dispatch(getFromLocalStorage());
    } catch (error) {
      setError(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return error ;
}