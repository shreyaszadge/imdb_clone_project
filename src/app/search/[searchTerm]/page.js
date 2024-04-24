import React from 'react';
import Results from "@/components/Results";

const Page = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=true`);
  const data = await res.json();
  const result = data.results;

  return (
    <div>
      {result && result.length === 0 ? (
        <h1 className="text-center pt-6">No Results Found</h1>
      ) : (
        <Results results={result} />
      )}
    </div>
  );
};

export default Page;
