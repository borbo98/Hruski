import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CategoryItem({ name, active, handlePress, }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container, styles.elevation,
            active ? { backgroundColor: "#f58c5f" } : { backgroundColor: "white" }
            ]}>
                <Text style={styles.header}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 17,
        minWidth: 90,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 5,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    elevation :{
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
    },
    header: {
        fontWeight: "bold"
    }
})
