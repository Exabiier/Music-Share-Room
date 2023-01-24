import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { render } from 'react-dom';

type Props = {}

const App = (props: Props) => {
  return (
    <div>This is dope</div>
  )
}
export default App

const appDiv = document.getElementById("app")
render(<App />, appDiv);