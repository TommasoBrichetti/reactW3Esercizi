import { useEffect, useState } from 'react'
import FirstLoadSuggestions from './FirstLoadSuggestions'
import { useSelector } from 'react-redux'
import AlbumCard from './AlbumCard'

const Home = () => {

    let rockArtists = [
        'queen',
        'u2',
        'thepolice',
        'eagles',
        'thedoors',
        'oasis',
        'thewho',
        'bonjovi',
    ]

    let popArtists = [
        'maroon5',
        'coldplay',
        'onerepublic',
        'jamesblunt',
        'katyperry',
        'arianagrande',
    ]

    let hipHopArtists = [
        'eminem',
        'snoopdogg',
        'lilwayne',
        'drake',
        'kanyewest',
    ]

    const artContenent = useSelector((state) => state.art.artists)


    //todo passare questi al child per poi passare il singolo artista alla card 2 sub child
    const [rockRandomArtists, setRockRandomArtists] = useState([])
    const [popRandomArtists, setPopRandomArtists] = useState([])
    const [hipHopRandomArtists, setHipHopRandomArtists] = useState([])

    const randomLoad = () => {

        for (let i = 0; i < 4; i++) {
            let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]
            if (!rockRandomArtists.includes(artist)) {
                let copy = [...rockRandomArtists]
                copy.push(artist)
                setRockRandomArtists(copy)
            }
        }

        for (let i = 0; i < 4; i++) {
            let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
            if (!popRandomArtists.includes(artist)) {
                let copy = [...popRandomArtists]
                copy.push(artist)
                setPopRandomArtists(copy)
            }
        }

        for (let i = 0; i < 4; i++) {
            let artist =
                hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
            if (!hipHopRandomArtists.includes(artist)) {
                let copy = [...hipHopRandomArtists]
                copy.push(artist)
                setHipHopRandomArtists(copy)
            }
        }
    }


    useEffect(() => {
        randomLoad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="home">
            <div className="nav">
                <p>TRENDING</p>
                <p>PODCAST</p>
                <p>MODS AND GENERES</p>
                <p>NEW RELEASES</p>
                <p>DISCOVER</p>
            </div>

            {artContenent.length !== 0 && <div className='searchLoad'>

                <h2>Search Results</h2>

                <div className='searchResults'>

                {
                    artContenent.map((data, i) => (
                        <div className="singleCard searcCard">
                        <img src={data.album.cover} alt="album cover" />
                        <p>Album: {data.album.title}</p>
                        <p>Artist: {data.artist.name}</p>
                    </div>
                    ))
                }
                </div>

            </div>}



            <div className="firstLoad">
                <h2>Rock Classics</h2>
                <FirstLoadSuggestions arr={rockRandomArtists} />
                <h2>Pop Culture</h2>
                <FirstLoadSuggestions arr={popRandomArtists} />
                <h2>#HipHop</h2>
                <FirstLoadSuggestions arr={hipHopRandomArtists} />
            </div>
        </div>
    )
}

export default Home 