import Component1 from './Component1'

import { ThemeProvider } from './theme'

const Main = () => {
  return (
    <ThemeProvider>
      <div>
        <Component1 />
      </div>
    </ThemeProvider>
  )
}
export default Main
