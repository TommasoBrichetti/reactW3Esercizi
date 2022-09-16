import AlbumCard from "./AlbumCard"


const FirstLoadSuggestions = (props) =>{
return(
    <div className="albumarea">
        {
            props.arr.map((data, i)=>(
               <AlbumCard artist={data} key={i}/>
            ))
        }
    </div>
)
}

export default FirstLoadSuggestions