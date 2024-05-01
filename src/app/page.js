import  Results from "@/components/Results";

// import React from 'react'
const API_KEY=process.env.API_KEY;

const page = async ({searchParams}) => {
  const genre =searchParams.genre || 'fetchTrending'
  const res =await fetch(`https://api.themoviedb.org/3${
    genre === `fetchTrending` ? `/movie/top_rated` : `/trending/all/week`
  }?api_key=${API_KEY}&languageen-US&page=1`,{next:{revalidate:10000}})


  const data = await res.json()
  if(!res.ok){
    throw new Error('failed to fetch')
  }
  const result1 = data.results;
  // console.log(result)
  return (
    <div>Home 


      <Results results={result1}/>
    </div>
  )
}

export default page

