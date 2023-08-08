// import {useState,useEffect} from 'react'
import './App.css';
import MovieSlider from './components/MovieSlider';
import Navbar from './components/Navbar';
// import Apidata from './components/Apidata'
export default function App() {

//   const [slidesData, setSlideData] = useState([]);

//   useEffect(() => {
//    let mounted = true;
//    Apidata()
//      .then(items => {
//        if(mounted) {
//          setSlideData(items)
//        }
//      })
//    return () => mounted = false;
//  }, [])

  return (
    <>
      <Navbar/>
      <MovieSlider/>
    </>
  )
}

