import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/home';
import RecipeDetailsScreen from '../screens/recipeDetails';
import InfoScreen from '../screens/info';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function HomeStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerStyle: { backgroundColor: '#f58c5f' },
        headerTitleAlign: 'center',
        gestureEnabled: true,
        cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen name="Hruski" component={HomeScreen} options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Informacije")}>
              <FontAwesome style={styles.icon} name="info-circle" size={36} color="black" />
            </TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="Informacije" component={InfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;


const styles = StyleSheet.create({

  icon: {
    paddingRight: 15
  },
})