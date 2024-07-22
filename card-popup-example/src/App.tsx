import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h1 className="text-2xl font-bold mb-4">Card Popup Example</h1>
        <Card
          title="Click Me"
          content="This is the detailed content that shows up when you click the card."
        />
        <Card
          title="Another Card"
          content="Here is some more content that appears when you click this card."
        />
      </header>
    </div>
    </>
  )
}

export default App
