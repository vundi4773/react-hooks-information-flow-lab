import React from 'react'

function Header({onDarkModeClick}) {
  return (
    <div>
        <header>
         <h1>Shopster</h1>
        <button onClick={onDarkModeClick}>
          {onDarkModeClick ? "Dark" : "Light"} Mode
        </button>
        </header>
    </div>
  )
}

export default Header