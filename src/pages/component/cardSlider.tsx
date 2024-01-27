import React, {useState, useEffect, useRef} from "react";
import {Card} from "..";
import {useGetMovieQuery} from "../../../redux/moviesApi";

interface Slide {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    vote_count?: number;
}

interface Title {
    title: string;
    url: string;
    mediaType: string;
}

const CardSlider: React.FC<Title> = ({title, url, mediaType}) => {
    const [isAtStart, setIsAtStart] = useState<boolean>(false);
    const [isAtEnd, setIsAtEnd] = useState<boolean>(true);
    const {data, isLoading} = useGetMovieQuery(url);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = elementRef.current;
        const handleScroll = () => {
            if (container) {
                const scrollLeft = container.scrollLeft;
                const clientWidth = container.clientWidth;
                const scrollWidth = container.scrollWidth;

                // Проверяем, находится ли контейнер в начале слайдера
                setIsAtStart(scrollLeft === 0);

                // Проверяем, находится ли контейнер в конце слайдера
                setIsAtEnd(scrollLeft + clientWidth !== scrollWidth);
            }
        };

        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollToRight = () => {
        if (elementRef.current) {
            const container = elementRef.current;
            container.scrollLeft = container.scrollWidth;
            setIsAtEnd(true)
        }
    };

    const scrollToLeft = () => {
        if (elementRef.current) {
            const container = elementRef.current;
            container.scrollLeft = 0;
            setIsAtStart(true)
        }
    };

    return (
        <>
            <div className="w-full px-4 pt-1">
                <div>
                    <div className="my-4 text-3xl font-bold">{title}</div>
                    <div></div>
                </div>
            </div>
            <div className="px-[1.05rem] w-full h-full relative">
                <div
                    className={`absolute h-full  left-0 z-[8] ${
                        isAtStart ? "invisible" : "visible"
                    }`}
                    onClick={scrollToLeft}
                >
                    <div
                        className={`hover:bg-[rgb(255,255,255,0.3)] w-14 h-72 mt-2 cursor-pointer flex items-center justify-center rounded-md transition-colors duration-300 ${isAtStart ? "opacity-50 pointer-events-none" : ""}`}>
                        <svg viewBox="0 0 5 9" className="fill-current w-7 h-7 text-black rotate-180">
                            <path
                                d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"/>
                        </svg>
                    </div>
                </div>
                <div
                    className={`absolute h-full w-14 right-0.5 z-[8] ${
                        !isAtEnd ? "invisible" : "visible"
                    }`}
                    onClick={scrollToRight}
                >
                    <div
                        className={`hover:bg-[rgb(255,255,255,0.3)] h-72 mt-2 z-[8] cursor-pointer w-full flex items-center justify-center rounded-md transition-colors duration-300 ${!isAtEnd ? "opacity-50 pointer-events-none" : ""}`}>
                        <svg viewBox="0 0 5 9" className="fill-current w-7 h-7 text-black">
                            <path
                                d="M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z"/>
                        </svg>
                    </div>
                </div>
                <div
                    className={`flex flex-row gap-3 mt-2 transition-all duration-700 overflow-x-auto overflow-y-hidden snap-mandatory hover:snap-x scroll-smooth`}
                    ref={elementRef}>
                    {isLoading ? "Loading" : data?.results.map((e: Slide) => {
                        return (
                            <div key={e.id}>
                                <Card
                                    media={mediaType}
                                    id={e.id}
                                    title={e.title}
                                    img={e.poster_path}
                                    voteAverage={e.vote_average}
                                    voteCount={e.vote_count}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CardSlider;