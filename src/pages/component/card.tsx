import React from "react";
import {Link} from "react-router-dom";
import {Rating} from "@mui/material";


interface Movie {
    id: number;
    title: string;
    name?: string;
    img: string;
    media: string;
    voteAverage: number;
    voteCount?: number;
}

const Card: React.FC<Movie> = (props) => {
    const {id, title, img, media, voteAverage, name} = props;
    return (
        <>
            <div className="relative h-72 w-44">
                <div className={`  w-full h-full  relative group `}>
                    <Link to={`/${media}/${id}`}>
                        <div className="absolute overflow-hidden w-full h-full transition-transform group-hover:z-[2] ">
                            <img
                                src={`https://image.tmdb.org/t/p/w500` + img}
                                alt=""
                                className="absolute w-full h-full object-cover duration-300 group-hover:translate-y-3 group-hover:scale-110"
                            />

                            <div className="absolute h-full w-full overflow-hidden">
                                <div
                                    className="h-full w-full bg-[rgb(0,0,0,0.5)] translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex flex-col p-3">
                                    <div className="h-full text-center">{media === 'tv' ? name : title}</div>
                                    <div className="flex items-center gap-0.5 justify-between">
                                        <div className='flex gap-0.5 items-center'>
                                            <Rating
                                                name="half-rating-read"
                                                size="small"
                                                max={1}
                                                defaultValue={1}
                                                readOnly
                                            />
                                            <div>{(voteAverage / 2).toFixed(1)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Card;
