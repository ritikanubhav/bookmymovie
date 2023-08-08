export default function MovieDetail(props){
    const {slidesData,current,getSummary}=props
    return(
    <div className='moviedetails'>
        <h1>{slidesData[current].show.name}</h1>
        <div className='box'>{slidesData[current].show.language}</div>
        <p>Genres</p>
        <div className="genre">{slidesData[current].show.genres.map((x)=>{return <div className='box'>{x}</div>})}</div>
        <p>Premiered on: {slidesData[current].show.premiered}</p>
        <button onClick={getSummary} className='summary-btn'>Summary</button>
    </div>
    )
}