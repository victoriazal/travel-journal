import React from "react"
import NavBar from "./components/navbar"
import Memory from "./components/memory"
import data from "./data"


export default function App() {

  const memories = data.map(item => {
    return (
      <Memory
        key={item.id}
        {...item} />
    )
  })

  return (
    <div>
      <NavBar />
      <section>
        {memories}
      </section>
    </div>
  )
}