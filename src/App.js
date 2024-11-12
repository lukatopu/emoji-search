import './App.css';
import {Header, Main, Footer} from './layouts'
import EmojiList from './components/EmojiList'
import {useState} from 'react'
import emojies from './data/emojies.json'

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [filteredEmojies, setFilteredEmojies] = useState(emojies)

  const handleSearch = (value) => {
    setSearchValue(value)
    setFilteredEmojies(emojies.filter(el => el.keywords.includes(value)))
  }

  return (
    <>
      <Header />
      <Main>
        <h1 className='title'>😼 Emoji Search 😽</h1>
        <input 
          className='searchInput' 
          type='text' 
          placeholder='Search Emoji...'
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)} 
        />
        <EmojiList emojies={filteredEmojies} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
