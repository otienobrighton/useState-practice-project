import React, { useState } from 'react'
import './styles/content.css'

const Content = () => {
    const [name, setUserName] = useState('brighton')
    const handleNameChange = (userName) =>{
        const names = ['john', 'lemaa', 'onyii', 'robe', 'james', 'ochieng'];
        const randomInt = Math.floor(Math.random() * names.length);
        setUserName(names[randomInt]);
    }

  return (
    <div className='content'>
      <p>hellow {name}</p>
      <button onClick={handleNameChange}>change name</button>
    </div>
  )
}

export default Content
