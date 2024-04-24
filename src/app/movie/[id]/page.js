// import React from 'react'
import Image from "next/image";
const Page = async  ({params}) => {
    const movieid=params.id
    const res =await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${process.env.API_KEY}`)
    const movie = await res.json();
    // console.log(movie);


  return (
    <div className="p-4 md:pt-8  flex flex-col md:flex-row content-centre max-w-6xl mx-auto md:space-x-6">
        <Image 
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
    width={500}
    height={300} className="rounded-lg" style={{maxWidth:'100%' ,height:'100%'}}>
        </Image>
        <div className=" p-2 ">
            <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
            <p className="text-lg md-3 mb-3">{movie.overview}</p>
            <p className="mb-3">
                <span className="font-semibold mr-1">Date released</span>
                {movie.release_date || movie.first_air_date}</p>

            <p className="mb-3">
            <span className="font-semibold mr-1">Ratings:</span>
                
                {movie.vote_count}</p>
        </div>
    </div>
  )
}

export default Page