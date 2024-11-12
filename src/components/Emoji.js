import React from 'react'
import './Emoji.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Emoji({emoji}) {
  return (
    <CopyToClipboard text={emoji.symbol}>
      <div className='emoji'>
        <div>{emoji.symbol}</div>
        <p>{emoji.title}</p>
      </div>
    </CopyToClipboard>
  )
}

export default Emoji