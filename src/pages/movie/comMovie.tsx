import React from 'react'
import {CardSlider, ComPreview} from '..';
import {useGetGenresQuery} from "../../../redux/genresApi";

interface Genres {
    id: number,
    name: string
}

const CommonMovie: React.FC = () => {
    const {data, isLoading} = useGetGenresQuery('');

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className='w-full flex flex-col'>
                <ComPreview urlType='trending/movie/day?'/>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    data.genres.map((genre: Genres) => (
                        <CardSlider
                            key={genre.id}
                            title={genre.name}
                            url={`discover/movie?sort_by=popularity.desc&without_genres=${genre.id}&`}
                            mediaType='movie'
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default CommonMovie;