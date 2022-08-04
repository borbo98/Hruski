import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../redux/features/favourites/favouritesSlice";
import { removeFromFavourites } from "../redux/features/favourites/favouritesSlice";

const windowWidth = Dimensions.get('window').width;

export default function RecipeItem({ name, imageUrl, time, price, active, opis, ingredients, kalorije, proteini, ogljiki, mascobe }) {
    const navigation = useNavigation();
    const top = useSelector((state) => state.favourites.favourites);
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("RecipeDetailsScreen", { name: name, imageUrl: imageUrl, time: time, price: price, opis: opis, ingredients: ingredients, kalorije: kalorije, proteini: proteini, ogljiki: ogljiki, mascobe: mascobe })} style={[styles.container, styles.elevation,
        active ? { backgroundColor: "white" } : { display: "none" }
        ]}>

            <View>
                <Image source={imageUrl} style={styles.imageContainer} />
            </View>

            <View style={styles.favoritiIcon}>
                <TouchableOpacity
                    onPress={() => {
                        if (top.includes(name)) {
                            dispatch(removeFromFavourites(name))
                        }
                        else {
                            dispatch(addToFavourites(name))
                        }
                    }}
                >
                    {
                        top.includes(name) ?
                            <Entypo name="heart" size={70} color="white" /> :
                            <Entypo name="heart-outlined" size={70} color="white" />
                    }
                </TouchableOpacity>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <View style={{ width: windowWidth / 2.083, padding: 10 }}>
                    <Text style={styles.header}>
                        {name}
                    </Text>
                </View>

                <View style={styles.horizontalLine}></View>

                <View style={styles.components}>
                    <Text style={[styles.statsText, styles.stats]}>
                        <Ionicons name="time-outline" size={18} color="black" />{time}
                    </Text>

                    <View style={styles.verticleLine}></View>

                    <Text style={[styles.statsText, styles.stats]}>
                        {kalorije}cal
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        height: 150,
        borderRadius: 20,
        margin: windowWidth / 100,

    },
    elevation :{
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
    },
    imageContainer: {
        width: windowWidth / 2.083,
        height: 150,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginBottom: 5
    },
    header: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: "black"
    },
    components: {
        flexDirection: "row",
        justifyContent: "space-around",
        maxWidth: windowWidth / 2.083,
    },
    favoritiIcon: {
        position: 'absolute',
        left: 10,
        top: 10,
    },
    stats: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 15
    },
    statsText: {
        textAlign: "center",
        fontSize: 18,
        color: "black",
    },
    horizontalLine: {
        width: '100%',
        height: 1.3,
        backgroundColor: 'lightgrey',
    },
    verticleLine: {
        height: '100%',
        width: 1.3,
        backgroundColor: 'lightgrey',
    }
})