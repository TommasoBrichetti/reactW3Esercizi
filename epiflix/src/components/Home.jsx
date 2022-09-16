import { useEffect } from 'react'
import FirstLoadSuggestions from './FirstLoadSuggestions'

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


    //todo passare questi al child per poi passare il singolo artista alla card 2 sub child
    let rockRandomArtists = []
    let popRandomArtists = []
    let hipHopRandomArtists = []

    const randomLoad = () => {

        while (rockRandomArtists.length < 4) {
            let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)]
            if (!rockRandomArtists.includes(artist)) {
                rockRandomArtists.push(artist)
            }
        }


        while (popRandomArtists.length < 4) {
            let artist = popArtists[Math.floor(Math.random() * popArtists.length)]
            if (!popRandomArtists.includes(artist)) {
                popRandomArtists.push(artist)
            }
        }

        while (hipHopRandomArtists.length < 4) {
            let artist =
                hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]
            if (!hipHopRandomArtists.includes(artist)) {
                hipHopRandomArtists.push(artist)
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
            <div className="firstLoad">
                <FirstLoadSuggestions arr={rockRandomArtists}/>
                <FirstLoadSuggestions arr={popRandomArtists}/>
                <FirstLoadSuggestions arr={hipHopRandomArtists}/>
            </div>
        </div>
    )
}

export default Home 