
const SingleAlbum = (props) =>{
    return(
        <div>
            <img src={props.album.cover_small} alt="album cover" />
            <p>Album: {props.album.title}</p>
            <p>Artist: {props.artist.name}</p>
        </div>
    )
    }
    
export default SingleAlbum 