import {FC} from "react";
import {CardSlider, ComPreview} from ".";


const Home: FC = () => {
    const urlType = [
        {
            title: 'Trending Movies',
            url: 'trending/movie/week?',
            mediaType: 'movie'

        },
        {
            title: 'Action',
            url: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&include_genres=Action&',
            mediaType: 'movie',
        },
        {
            title: 'Tv Shows',
            url: 'discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&',
            mediaType: 'tv',
        }
    ]
    return (
        <>
            <ComPreview urlType="trending/movie/day?"/>
            {urlType.map((e) => <CardSlider key={e.url} title={e.title} url={e.url} mediaType={e.mediaType}/>)}
        </>
    );
};

export default Home;




