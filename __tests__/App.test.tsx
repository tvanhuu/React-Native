// Add 'export' to fake this being a module to silence TSLint.
export const add = (a: number, b: number) => a + b
describe("add", () => {
   it("should add two numbers", () => {
      expect(add(1, 1)).toEqual(2)
   })
})

import { shallow } from "enzyme"
import React from "react"
import App from "/App"

import { render } from "react-native-testing-library"

const createTestProps = (props?: object) => ({
   ...props,
})

describe("App", () => {
   const props = createTestProps()
   const { getByText } = render(<App {...props} />)

   it("should render a welcome", () => {
      expect(getByText(/welcome/i)).toBeDefined()
   })
})
