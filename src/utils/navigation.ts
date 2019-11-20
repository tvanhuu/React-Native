import { NavigationState } from "react-navigation"

import { log } from "./log"

export const isNavigationState = (state: unknown): state is { nav: NavigationState } => true

export const hasRouteName = (route: unknown): route is NavigationState & { routeName: string } => true

export const getActiveRouteState = (route: NavigationState): string => {
  try {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
      return hasRouteName(route) ? route.routeName : ""
    }

    const childActiveRoute = route.routes[route.index] as NavigationState

    return getActiveRouteState(childActiveRoute)
  } catch (error) {
    log(error)

    return ""
  }
}
