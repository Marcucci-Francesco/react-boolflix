import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Card from './Cards';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

const HomePage = () => {

  const discoverMovie = "https://api.themoviedb.org/3/discover/movie?api_key=46e5a19085f4513bade2bbb52a1e3c94"
  const discoverTV = "https://api.themoviedb.org/3/tv/top_rated?api_key=46e5a19085f4513bade2bbb52a1e3c94"
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);

  const [swiperRef, setSwiperRef] = useState(null);

  const fetchDataDiscover = () => {

    axios.get(discoverMovie)
      .then(res => {
        setMovieList(res.data.results)
      })

    axios.get(discoverTV)
      .then(res => {
        setTvList(res.data.results)
      })

  }

  useEffect(() => {
    fetchDataDiscover()
  }, [])

  return (
    <>
      <h1 className='text-danger text-center mt-5 nunito'>BENVENUTI IN BOOLFLIX</h1>
      <div className="container-fm container-fluid carosel nunito">
        <h4 className='text-black'>FILM DEL MOMENTO</h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {movieList.map(movie => (
            <SwiperSlide key={movie.id}>
              <Card film={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container-fm container-fluid carosel nunito">
        <h4 className='text-black'>SERIE TV PIÙ RICERCATE</h4>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {tvList.map(serie => (
            <SwiperSlide key={serie.id}>
              <Card serie={serie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default HomePage