import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeActivity from "../screens/HomeActivity";
import MainActivity from "../screens/MainActivity";

export enum ROUTES {
  RootMain = "RootMain",
  RootModal = "RootModal",
  RootDetails = "RootDetails",
  ModalMain = "ModalMain",
  MainHome = "HomeActivity",
  MainActivity = "MainActivity"
}

// The stack for the modal
const ModalStack = createStackNavigator({
  [ROUTES.ModalMain]: {
    screen: HomeActivity
  }
});

// The stack for the main navigation
const MainStack = createStackNavigator({
  [ROUTES.MainHome]: {
    screen: HomeActivity
  },
  [ROUTES.MainActivity]: {
    screen: MainActivity
  }
});

// The app root stack, all navigation start from here
const RootStack = createStackNavigator(
  {
    [ROUTES.RootMain]: {
      screen: MainStack
    },
    [ROUTES.RootModal]: {
      screen: ModalStack
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

