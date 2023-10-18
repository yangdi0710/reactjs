import Content from "./Content";
import { Context, useContext } from "react";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import './App.css'

// Context
// Comp A => Comp B => Comp C

// Theme: dark/ light

// 1. Create context
// 2. Provider
// 3. Consumer



function App() {

  const context = useContext(ThemeContext)

  return (
      <div style={{padding: 20}}>
        <button onClick={context.toggleTheme} >Toggle Theme</button>
        <Content/>
      </div>
  )
}

export default App;
