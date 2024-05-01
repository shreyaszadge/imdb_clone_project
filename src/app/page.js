import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export async function getServerSideProps({ query }) {
  const { genre } = query;
  const selectedGenre = genre || 'fetchTrending';

  try {
    const res = await fetch(`https://api.themoviedb.org/3${
      selectedGenre === 'fetchTrending' ? '/movie/top_rated' : '/trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    
    const data = await res.json();
    const results = data.results;

    return {
      props: {
        results,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        results: [],
        error: 'Failed to fetch data',
      },
    };
  }
}

const Page = ({ results, error }) => {
  const router = useRouter();

  useEffect(() => {
    // You can use router.query.genre here if you want to access the genre from the query params
  }, [router.query]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <h1>Home</h1>
          <Results results={results} />
        </div>
      )}
    </div>
  );
};

export default Page;

