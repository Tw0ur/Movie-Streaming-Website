import axios from "axios";
import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Rating from "@mui/material/Rating";
import {useGetGenresQuery} from "../../../redux/genresApi";
import {useDispatch} from "react-redux";
import {addFavorite} from "../../../redux/users.ts";

type Genres = {
    id: number;
    name: string;
};

interface State {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
    vote_average: number;
    poster_path: string;
    genres: number[];
    budget: number;
    runtime: number;
    release_date: string;
}

const defaultState: State = {
    id: 0,
    backdrop_path: "",
    title: "",
    overview: "",
    vote_average: 0,
    poster_path: "",
    genres: [],
    budget: 0,
    runtime: 0,
    release_date: '',
};
const convertMinutesToHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {hours, minutes};
};
const Movie: FC = () => {
    const {id} = useParams();
    const [state, setState] = useState<State>(defaultState);
    const [rec, setRec] = useState<State>(defaultState);
    const [genres, setGenres] = useState<Genres[]>();
    const {data, isLoading} = useGetGenresQuery("");
    const img = `https://image.tmdb.org/t/p/original${state.backdrop_path}`;
    const rating = state.vote_average / 2;
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
        const movieUrl = `http://api.themoviedb.org/3/movie/${id}?api_key=648eb568806f36444ae3b8d8401da7f1`;
        const recommedationMovie = `http://api.themoviedb.org/3/movie/${id}/recommendations?api_key=648eb568806f36444ae3b8d8401da7f1`;

        axios.get(movieUrl).then((response) => {
            setState(response.data);
        });

        axios.get(recommedationMovie).then((response) => {
            setRec(response.data);
        });

        if (!isLoading && data) {
            const genr = state.genres
                .filter((stateItem) => {
                        console.log(stateItem);

                        return data.genres.some((dataItem: Genres) => stateItem.id === dataItem.id)
                    }
                )
            setGenres(genr);

        }
    }, [id, data, isLoading]);
    const {hours, minutes} = convertMinutesToHoursAndMinutes(state.runtime);
    const addFavor = () => {
        dispatch(addFavorite({id: state.id}))
    }
    console.log(rec);
    console.log(state);
    console.log(data);
    console.log(genres);


    return (
        <>
            <div className="h-screen w-full relative">
                <div
                    className={`bg-cover absolute h-full w-full`}
                    style={{backgroundImage: `url(${img})`}}
                >
                    <div className="h-full w-96 ml-10 flex flex-col justify-center">
                        <h1 className="text-6xl">{state.title}</h1>
                        <div className="py-5">{state.overview}</div>
                        {state.vote_average && (
                            <div className="flex gap-2 items-center">
                                <Rating
                                    name="half-rating-read"
                                    defaultValue={rating}
                                    precision={0.5}
                                    readOnly
                                />
                                <span>{rating.toFixed(1)}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className=' w-full flex py-2 px-10 justify-between'>
                <div className='flex gap-10'>


                    <div className="flex flex-col mx-10 mt-10 w-56">
                        <div className="h-96 w-full">
                            <img
                                src={`https://image.tmdb.org/t/p/w500` + state.poster_path}
                                alt=""
                                className="w-full h-full object-cover duration-300 group-hover:translate-y-9 group-hover:scale-125"
                            />
                        </div>
                        <div className='flex flex-col gap-4 py-4'>


                            <div className="w-full flex gap-2">
                                <div>
                                    Жанры:
                                </div>
                                {genres?.map((e) => (
                                    <div key={e.id}>
                                        {e.name}
                                    </div>
                                ))}
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    Бюджет:
                                </div>
                                <div>
                                    {state.budget}$
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    Время:
                                </div>
                                <div>
                                    {hours} часа {minutes} минуты
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div>
                                    Дата выхода:
                                </div>
                                <div>
                                    {state.release_date}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' mx-10 mt-20 w-[400px]'>
                        <h1 className="text-3xl">{state.title}</h1>
                        <div className="py-5">{state.overview}</div>
                    </div>
                </div>
                <div className='ml-[100px] mr-10 mt-10'>
                    <div onClick={addFavor}>
                        Добавить в избранное
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;
