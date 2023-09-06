import Image from 'next/image'
import Auth from './auth/auth';

export default function Home() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDhlYjU2ODgwNmYzNjQ0NGFlM2I4ZDg0MDFkYTdmMSIsInN1YiI6IjY0Zjc0YTc4NGNjYzUwMDBjNGU1NGU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKHSiXlRZJUr552z-2kKw6KrEPioEGVt7RrLfROg8kI'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDhlYjU2ODgwNmYzNjQ0NGFlM2I4ZDg0MDFkYTdmMSIsInN1YiI6IjY0Zjc0YTc4NGNjYzUwMDBjNGU1NGU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKHSiXlRZJUr552z-2kKw6KrEPioEGVt7RrLfROg8kI', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Auth/>
      gfdgddg
            {/* <Image
              src=""
              alt=""
              className=""
              width={`100vw`}
              height={24}
              priority
            />
          */}
    </main>
  )
}
export async function SetServiceGetProps() {
  let trendingMovies = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDhlYjU2ODgwNmYzNjQ0NGFlM2I4ZDg0MDFkYTdmMSIsInN1YiI6IjY0Zjc0YTc4NGNjYzUwMDBjNGU1NGU4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PKHSiXlRZJUr552z-2kKw6KrEPioEGVt7RrLfROg8kI');
  trendingMovies = await trendingMovies.json()
  console.log(trendingMovies); 
  //  console.log(trendingMovies.results);
   
   return {
    props:{trendingMovies:trendingMovies}
   }
}