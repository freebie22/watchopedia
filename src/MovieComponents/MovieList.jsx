const MovieList = (props) => {
    let counter = 1;
    return (<div className="py-2 row text-center text-white">
        <span className="h2 text-success">MovieList</span>
        {
            props.movies.map((movie, index) => (
                <span className={`h4 ${counter %2 === 0 ? "text-primary" : "text-warning"}`} key={index}>{counter++}. {movie}</span>
            ))
        }
    </div>)
}

export default MovieList;