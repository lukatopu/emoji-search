import React from 'react'
import Emoji from './Emoji'
import './EmojiList.css'

function EmojiList({emojies}) {
  return (
    <div className='emojiContainer'>
    {
        emojies.map((item, index) => {
            return <Emoji key={index} emoji={item} />
        })
    }
    </div>
  )
}

export default EmojiList