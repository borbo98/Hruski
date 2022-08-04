import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const InfoScreen = () => {
  return (
    <ScrollView>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Recepti ne vključujejo določene sestavine, ker so ti tako univerzalni in jih moramo imeti vedno na zalogi. Ti so sol, poper, olje in kis.</Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Cene sestavin so bile zbrane julija 2022 na podlagi lokalno dostopnih trgovin in služijo za okvirno ceno. Receptom lahko dodatno zmanjšamo ceno obrokov v primeru da kupujemo večje količine sestavin naenkrat, imamo bolj stroškovno ugodne trgovine na voljo oziroma trgovine ponujajo popuste na željene sestavine.</Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Časi kuhanja služijo za približen okvir, ki bo odvisen od resursov ki jih lahko namenimo kuhanju in številu obrokov. Dober sokuhar vedno pride prav.</Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Kuhanje je fleksibilno in zabavno, zato prosto eksperimentirajte z dodajanjem ali odvzemanjem sestavin pri posamičnih receptih. Važno je da izenačimo okus, ki ga sestavina doprinese jedi oziroma jo komplementira.</Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Kalorije obrokov služijo za približen okvir, ki se lahko zelo spremenijo ob uporabi raznih sestavin.</Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Če uporabljamo posušene začimbe te običajno dodamo na začetku kuhanja, medtem ko sveže začimbe dodamo na koncu.</Text>
      </View>
    </ScrollView>
  );
}

export default InfoScreen;

const styles = StyleSheet.create({
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
  recipeText: {
    paddingHorizontal: 30,
    fontSize: 17
  },
})