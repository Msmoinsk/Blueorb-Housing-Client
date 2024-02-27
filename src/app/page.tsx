"use client"
import { useState } from "react";



export default function Home() {


  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }


  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>

      <div className="bg-slate-500 dark:bg-red-500">Hello world</div>
      <button onClick={toggleDarkMode}>Click</button>

    </div>
  );
}
