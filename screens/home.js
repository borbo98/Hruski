import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { View } from 'react-native';

import Search from '../src/components/search';
import Categories from '../src/components/categories';
import Recipies from '../src/components/recipies';


const HomeScreen = () => {

  const [searchTerm, SetSearchTerm] = useState("")
  const [categoryTerm, SetCategoryTerm] = useState("Vse")

  const commonCategories = [
    {
      name: "Vse",
    },
    {
      name: "Top",
    },
    {
      name: "Rdeče meso",
    },
    {
      name: "Piščanec",
    },
    {
      name: "Morska hrana",
    },
    {
      name: "Vegeterijansko",
    },

  ]

  return (
    //<View style={{height:350}}> je zato ker drugače flatlist ne scrolla
    <View >

      <StatusBar />
      <Search
        SetSearchTerm={SetSearchTerm}
      />
      <Categories
        categories={commonCategories}
        SetCategoryTerm={SetCategoryTerm}
        categoryTerm={categoryTerm}
      />
      <View style={{ height: 550 }}>
        <Recipies
          searchTerm={searchTerm}
          categoryTerm={categoryTerm}
        />
      </View>
    </View>
  );
}

export default HomeScreen;