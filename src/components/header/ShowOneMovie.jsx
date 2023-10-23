const ShowOneMovie = ({movie}) => {
    return (
        <ul>
            {Object.entries(movie).map(([key, value]) => {
                return <li key={key}>{key}: {value}</li>
            })}
        </ul>
    )
}


export default ShowOneMovie