import { Dimensions } from "react-native"

/**
 * The design's screen height (by point)
 * This app using the iPhoneX resolution according to the design
 *
 * @see https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
 */
const DESIGN_SCREEN_HEIGHT = 812

/**
 * Get current window dimensions
 *
 * @returns The dimensions
 */
export const getDimensions = () => Dimensions.get("window")

/**
 * Converts provided width percentage to independent pixel (dp).
 *
 * @param percent The percentage of screen's width (from 0.0 to 1.0)
 *
 * @returns The calculated dp depending on current device's screen width.
 */
export const getScreenWidth = (fraction = 1) => Math.ceil(Math.min(getDimensions().width, getDimensions().height) * fraction)

/**
 * Converts provided height percentage to independent pixel (dp).
 *
 * @param percent The percentage of screen's width (from 0.0 to 1.0)
 *
 * @returns The calculated dp depending on current device's screen height.
 */
export const getScreenHeight = (fraction = 1) => Math.ceil(Math.max(getDimensions().width, getDimensions().height) * fraction)

// Calculate the screen ratio with the [DESIGN_SCREEN_HEIGHT]
const SCREEN_RATIO = getScreenHeight() / DESIGN_SCREEN_HEIGHT

/**
 * Calculate the responsive size base on the design
 *
 * @param size The size to convert
 *
 * @returns The responsive size base on the design
 */
export const responsive = (size: number) => Math.ceil(size * SCREEN_RATIO)
