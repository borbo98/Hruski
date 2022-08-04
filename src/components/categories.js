import { FlatList } from "react-native"
import CategoryItem from "./categoryItem";

export default function Categories({ categories, SetCategoryTerm, categoryTerm }) {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            index={index}
            active={item.name === categoryTerm}
            handlePress={() => SetCategoryTerm(item.name)}
          />
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(category) => category.name}
    />
  )
}
