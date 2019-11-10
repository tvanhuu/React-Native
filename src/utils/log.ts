export const log = (...params: Array<unknown>) => {
  if (process.env.NODE_ENV === `development`) {
    // tslint:disable-next-line: no-console
    console.log(...params)
  }
}
