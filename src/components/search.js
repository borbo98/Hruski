import { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


export default function Search({ SetSearchTerm }) {

    const [input, setInput] = useState("")

    const handleEndEditing = () => {
        if (!input) return
        SetSearchTerm(input);
    }

    return (
        <View style={[styles.container, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            <TextInput
                style={styles.input}
                placeholder="Recept, sestavina"
                value={input}
                onChangeText={(text) => {
                    setInput(text);
                }}
                onEndEditing={handleEndEditing}
            />

            <TouchableOpacity
                onPress={() => { SetSearchTerm(""); setInput(""); }}
                style={input === "" ? { display: "none" } : { display: "flex" }}
            >
                <FontAwesome name="times-circle" size={26} color="black" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
        justifyContent: 'space-between',
    },
    elevation :{
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        flex: 1,
        flexWrap: 'wrap'
    }
})
