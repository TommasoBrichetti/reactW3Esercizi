import AlbumCard from "./AlbumCard"


const FirstLoadSuggestions = (props) =>{
    console.log(props.arr)
return(
    <div className="albumarea">
        {
            props.arr.length !== 0 && props.arr.map((data, i)=>(
               <AlbumCard artist={data} key={i}/>
            ))
        }
    </div>
)
}

export default FirstLoadSuggestions