const ShowOneMovie = ({movie}) => {
    return (
        <ul>
            {Object.entries(movie).map(([key, value]) => {
                return <li className="one-movie-info" key={key}><span>{key}</span>: <span>{value}</span></li>
            })}
        </ul>
    )
}


export default ShowOneMovie