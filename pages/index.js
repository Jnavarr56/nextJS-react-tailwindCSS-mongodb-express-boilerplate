import React from "react"
import "../assets/style.css"

export default class Index extends React.Component {
  getInitialProps = async context => {
    console.log(context)
    return {}
  }

  render = () => {
    return (
      <div className="app">
        <header>
          <h1 className="bg-green-200">gallery</h1>
          <h2>Original Stuff</h2>
        </header>
      </div>
    )
  }
}
