import React from "react";

const MovieTrailer = ({ trailer_key }) => {

    return (
        <div className="movie-trailer">
            <iframe
                width="80%"
                height="415"
                src={`https://www.youtube.com/embed/${trailer_key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    )
};

export default MovieTrailer;