import data from "./data"
import AlbumCard from "./components/card/AlbumCard"
import Navbar from "./components/navbar/Navbar"
import { Container, Row } from "reactstrap"
import { useState } from "react"
import NavBarTest from "./components/navbarTest/Navbartest"
import Home from "./pages/Home"

const App = () => {
  const [playList, setPlayList] = useState([])

  const addToPlaylist = (myTrack) => {
    if(!playList.includes(myTrack)){
      setPlayList([...playList, myTrack])
    }else{
      setPlayList((current) => current.filter((trackTitle) => {
        return trackTitle !== myTrack
      }))
    }
  }

  const removeAllTrack = () => {
    setPlayList([])
  }

  const removeTrack = (track) => {
    setPlayList((current) => current.filter((trackTitle) => {
      return trackTitle !== track
    }))
  }

  return(
    <div className="app">
      <Home />
      <Navbar playlist={playList} removeTrackFromNavBar={removeTrack} removeAllTrackFromNavBar={removeAllTrack}/>
      <Container style={{marginTop: '100px'}}>
        <Row>
            {
              data.map((album) => (
                <AlbumCard key={album.id} isClicked={playList.includes(album.album.title)} title={album.album.title} cover={album.album.cover_medium} mp3={album.preview} handleParentClick={addToPlaylist} />
              ))
            }
        </Row>
           
            
      </Container>
    </div>
   
  )
}

export default App