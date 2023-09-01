import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useFilteredRecipes () {
  const {status, error, recipes} = useSelector(state => state.recipes)
  const [filteredRecipes, setFilteredResipes] = useState([])

  useEffect(() => {
    setFilteredResipes(recipes);
  }, [recipes]);

  return {status, error, filteredRecipes, setFilteredResipes, recipes}
}