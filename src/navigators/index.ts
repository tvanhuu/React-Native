import { createSwitchNavigator, createAppContainer } from "react-navigation"
import { Routes } from "./router"
import { SplashScreen, Temp } from "/screens"

const RootNavigator = createSwitchNavigator(
   {
      [Routes.SPLASH_SCREEN]: SplashScreen,
      [Routes.TEMP]: Temp,
   },
   {
      initialRouteName: Routes.SPLASH_SCREEN,
   },
)

export default createAppContainer(RootNavigator)
