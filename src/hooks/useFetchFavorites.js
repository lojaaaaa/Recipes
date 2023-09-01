import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFromLocalStorage } from "../redux/slices/favoritesSlice";

export default function useFetchFavorites () {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
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