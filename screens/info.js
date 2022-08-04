import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const InfoScreen = () => {
  return (
    <View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Cene sestavin so bile zbrane julija 2022 na podlagi lokalno dostopnih trgovin in se zato lahko razlikujejo v primeru nakupovanja v vam dostopnih trgovinah oziroma izbiranju drugače kvalitetnih sestavin. Predstavljajo okvirno ceno obroka. </Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Časi kuhanja služijo za približen okvir, ki bo odvisen od resursov ki jih lahko namenite kuhanju in številu obrokov. </Text>
      </View>
      <View style={styles.recipeContainer}>
        <Text style={styles.recipeText}>Kuhanje je fleksibilno in zabavno, zato prosto eksperimentirajte z dodajanjem ali odvzemanjem sestavin pri posamičnih receptih.</Text>
      </View>
    </View>
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
    fontSize: 15
  },
})