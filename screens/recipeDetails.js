import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Share } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";


const RecipeDetailsScreen = () => {

  const route = useRoute();
  const [obroki, setObroki] = useState(1);
  const incObroki = () => { setObroki(obroki + 1); };
  const decObroki = () => { obroki <= 1 ? obroki : setObroki(obroki - 1); };


const sestavineList = route.params.ingredients.map((item, index) => <View key={index}>
  <View style={{flexDirection:"row", marginVertical:3}}>
  <Text style={{minWidth:30, textAlign:"center", fontWeight:"bold" }}>{item[0] * obroki}</Text>
  <Text>{item[1]}</Text>
  </View>
<View style={styles.horizontalLine}></View>
</View> )

  //koda za preoblikovanje share message
  const ingredientMessage = route.params.ingredients.join("\n")
  const ingredientMessageText = ingredientMessage.replace(/,/g, '')
  const name = route.params.name
  const Message = "Recept " + name + " potrebuje za 1 obrok: " + "\n" + ingredientMessageText

  const shareMessage = () => {
    Share.share({
      message: Message
    })
  }
  return (
    <ScrollView >
      <Image style={styles.container} source={route.params.imageUrl} />

      <View style={styles.recipeContainer}>
        <Text style={styles.macros}>Hranilna vrednost na obrok:</Text>

        <View style={styles.recipeStats}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{route.params.kalorije}</Text>
            <Text>Kalorije</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{route.params.proteini}g</Text>
            <Text>Proteini</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{route.params.ogljiki}g</Text>
            <Text>Ogl. hidrati</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{route.params.mascobe}g</Text>
            <Text>Maščobe</Text>
          </View>
        </View>
      </View>


      <View style={styles.sestavine}>

        <View style={styles.recipeStats}>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{obroki}</Text>
            <Text>Obroki</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{(route.params.price * obroki).toFixed(2)}<FontAwesome name="euro" size={20} color="black" /></Text>
            <Text>Cena</Text>
          </View>

          <View style={styles.verticleLine}></View>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.macrosText}>{route.params.time} min</Text>
            <Text>Čas kuhanja</Text>
          </View>

        </View>

        <View style={styles.obrokiContainer}>
          <TouchableOpacity
            style={styles.obrokiButtonContainer}
            onPress={decObroki}>
            <Text style={styles.obrokiButtonText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.obrokiButtonContainer}
            onPress={incObroki}>
            <Text style={styles.obrokiButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.sestavineList,
        ]}>{sestavineList}</View>

        <View style={{ alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={shareMessage}>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>

      </View>


      <View style={styles.recipeContainer}>
        <Text style={styles.header}>Postopek:</Text>
        <Text style={styles.recipeText}>{route.params.opis}</Text>
      </View>
    </ScrollView >
  );
}

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 8
  },
  header: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 23,
  },
  macros: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  macrosText: {
    fontWeight: 'bold',
    paddingHorizontal: 30,
    fontSize: 23
  },
  recipeStats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: "center",
  },
  recipeText: {
    paddingHorizontal: 30,
    fontSize: 15
  },
  recipeContainer: {
    borderRadius: 20,
    paddingVertical: 15,
    marginVertical: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.1,
  },
  sestavine: {
    borderRadius: 20,
    marginVertical: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    elevation: 3,
    shadowOpacity: 0.1,
    padding: 30,
  },
  obrokiButtonContainer: {
    padding: 5,
    width: 60,
    backgroundColor: "#f58c5f",
    alignItems: "center",
    margin: 10,
    borderRadius: 10
  },
  obrokiButtonText: {
    fontSize: 20
  },
  obrokiContainer: {
    flexDirection: "row",
  },
  sestavineList: {
    flex: 1, 
    flexDirection: "column", 
    marginVertical: 20,
  },
  shareButton: {
    padding: 15,
    width: 200,
    backgroundColor: "#f58c5f",
    alignItems: "center",
    margin: 10,
    borderRadius: 10
  },
  verticleLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#909090',
  },
  horizontalLine: {
    width: '100%',
    height: 1.3,
    backgroundColor: 'lightgrey',
},
}
)