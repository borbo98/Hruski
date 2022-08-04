import { FlatList } from "react-native"
import { recepti } from "../data/Recepti";
import RecipeItem from "./recipeItem";
import { useSelector } from "react-redux";
import Fuse from 'fuse.js'

export default function Recipies({ searchTerm, categoryTerm }) {
  let top = useSelector((state) => state.favourites.favourites)

  const fuse = new Fuse(recepti,
    {
      keys: ['name', 'ingredients', 'categoryId', 'tags'],
      includeScore: true,
      threshold: 0.3
    })
  const searchResult = fuse.search(searchTerm)
  const Result = searchResult.map(a => a.item.name)


  return (
    <FlatList
      data={recepti}
      renderItem={({ item }) => {
        return (
          <RecipeItem
            name={item.name}
            imageUrl={item.imageUrl}
            time={item.time}
            price={item.price}
            opis={item.opis}
            ingredients={item.ingredients}
            kalorije={item.kalorije}
            proteini={item.proteini}
            ogljiki={item.ogljiki}
            mascobe={item.mascobe}

            active={
              searchTerm === "" && categoryTerm === "Top" ? top.includes(item.name) :
              searchTerm != "" && categoryTerm === "Top" ? Result.includes(item.name) && top.includes(item.name) :
              searchTerm === "" && categoryTerm != "Vse" ? item.categoryId === categoryTerm :
              searchTerm === "" && categoryTerm === "Vse" ? categoryTerm === "Vse" :
              searchTerm != "" && categoryTerm != "Vse" ? Result.includes(item.name) && item.categoryId === categoryTerm :
              Result.includes(item.name)
            }
          />
        );
      }}
      keyExtractor={(recepti) => recepti.recipeId}
    />
  );
}