import React, { useState,useEffect} from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import "./MovieSlider.css"
import MovieDetail from './MovieDetail';
import Summary from './Summary'
export default function MovieSlider()
{
    const [slidesData, setSlideData] = useState([]);
    const [isSummaryData, setSummaryData] = useState(false)
    useEffect(()=>{
            let isCancelled=false;
            fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((res)=>res.json())
            .then((data)=>{
                if(!isCancelled)
                {
                    setSlideData(data);
                    console.log(data)
                }
            });
            return ()=>{isCancelled=true}
    },[])

    console.log("slidesData",slidesData)
    const [current, setCurrent] = useState(0);
    const length = slidesData.length;
    const nextSlide = () => {
        setSummaryData(false)
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setSummaryData(false)
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slidesData) || slidesData.length <= 0) {
        return null;
    }

    function getSummary(){
        if(isSummaryData){
            setSummaryData(false)
        }
        else{
            setSummaryData(true)
        }
    }

    return (
        <section className='slider'>
            <BsCaretLeftFill className='left-arrow ' onClick={prevSlide} />
            {slidesData[current].show.image &&
            <img src={slidesData[current].show.image.original} alt='movie image' className='image' />
            }
            {!isSummaryData?
                <MovieDetail
                slidesData={slidesData}
                current={current}
                getSummary={getSummary}
                />:
                <Summary
                slidesData={slidesData}
                current={current}
                getSummary={getSummary}
                />
            }
            <BsCaretRightFill className='right-arrow ' onClick={nextSlide} />
        </section>
    );
}

