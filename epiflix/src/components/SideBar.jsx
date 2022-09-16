import { TiHomeOutline } from 'react-icons/ti'
import { GoBook } from 'react-icons/go'
import { useState } from 'react'

const SideBar = () => {

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        //servirà il dispach
        console.log(query);
    }

    return (
        <div className="aside">
            <div className="asideTop">
                <div className="logo"> <img src="./Spotify_Logo.png" alt="logo" /></div>
                <div className="asideIcons">
                    <div className="homeIcon"><TiHomeOutline /><p> Home</p></div>

                    <div className="libraryIcon"><GoBook /><p> Your Library </p></div>
                </div>
                <div className="searchbar">
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={query}
                            onChange={handleChange} />
                        <button type='submit'> GO </button>
                    </form>
                </div>
            </div>

            <div className="asideBottom">
                <div className="asideButtons">
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
                <div className="asideText">
                    <p>Cookie Policy | Privacy</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar 