import {FC, useState} from 'react'
import {useGetMovieQuery} from '../../../redux/moviesApi';

interface propsCard {
    media_type: string;
    id: number;
    title: string;
    poster_path: string;
    backdrop_path?: string;
}

interface Url {
    urlType: string
}

const ComPreview: FC<Url> = ({urlType}) => {
    const {data, isLoading} = useGetMovieQuery(urlType);

    const [width] = useState(window.innerWidth);
    // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc
    const slides = data?.results || [];
    const visibleSlides = slides.slice(0, 1);
    return (
        <>
            <div className="w-full h-screen relative">
                <div
                    className={`h-full w-full flex`}
                >
                    {!isLoading &&
                        visibleSlides.map((e: propsCard, index: number) => {
                            return (
                                <div
                                    className="absolute h-full bg-cover w-full flex flex-row"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original${e.backdrop_path})`,
                                        left: index * width,
                                    }}
                                    key={e.id}
                                >
                                    <div className="flex flex-col justify-center max-w-[300px] ml-10 ">
                                        <div></div>
                                        <div className="text-3xl">{e.title}</div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    )
}

export default ComPreview;