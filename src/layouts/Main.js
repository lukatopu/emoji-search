import React from 'react'
import './Main.css'

function Main(props) {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <main>
      {props.children}
      <button 
        className='scrollToTopButton'
        onClick={scrollToTop}
      >
        Top
      </button>
    </main>
  )
}

export default Main