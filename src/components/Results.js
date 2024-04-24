// import React from 'react'

import Card from "./Card"

const  Results = ({results}) => {
    // console.log(results)
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-w-6xl mx-auto py-4">

        {
            results.map((result)=>(
               <Card key={result.id} result={result}/>
            ))
        }
    </div>
  )
}

export default Results