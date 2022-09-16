
const SingleAlbum = (props) =>{
    return(
        <div className="singleCard">
            <img src={props.album.cover} alt="album cover" />
            <p>Album: {props.album.title}</p>
            <p>Artist: {props.artist.name}</p>
        </div>
    )
    }
    
export default SingleAlbum 