import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import CountGame from "./src/screens/CountGame";
import ColorChange from "./src/screens/ColorChange";
import rgbChanger from "./src/screens/rgbChanger";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Count: CounterScreen,
    Game: CountGame,
    Colour: ColorChange,
    change: rgbChanger,
    textChange: TextScreen
  },
  {
    initialRouteName: `Home`,
    defaultNavigationOptions: {
      title: "ChristianSheldon",
    },
  }
);

export default createAppContainer(navigator);
