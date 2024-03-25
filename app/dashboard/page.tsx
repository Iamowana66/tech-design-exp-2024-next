"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Dashboard() {
    return ( <main className="p-4">
        <div className="flex justify-between">
            <div id="left-nav" className="">
                <h1>Explore</h1>
                <h2 className="text-4xl">Aspen</h2>
            </div>
            <div id="right-nav" className="flex">
            <img className="w-[30px] h-[20px]"
            src="/pin_1.svg"></img>
                <h1 className="text-xs">Aspen, USA</h1>
                <img className="w-[20px] h-[10px] ml-2 mt-1"
                src="/drop_bt.svg"></img>
            </div>
        </div>
        <div className="relative mt-10">
        <input 
        type="text"
        placeholder="        Find things to do"
        className="w-full p-4 border-solid border-2 
        border-gray-200 rounded-3xl"
        />
        <img className="absolute top-5 left-6" src="/search.svg"/>
        </div>
        <section id="card-section" className="">
        <Swiper className="my-8" spaceBetween={20} slidesPerView={4.52}>
      <SwiperSlide className="tag-menu active">Location</SwiperSlide>
      <SwiperSlide className="tag-menu">Hotels</SwiperSlide>
      <SwiperSlide className="tag-menu">Food</SwiperSlide>
      <SwiperSlide className="tag-menu">Adventure</SwiperSlide>
      <SwiperSlide className="tag-menu">Action</SwiperSlide>
    </Swiper>
        </section>
        <div className="flex justify-between">
            <h1 className="text-3xl">Popular</h1>
            <h1 className="text-xxs text-blue-500 ">See all</h1>
        </div>
        <div className="flex p-3">
            <img className="m-2 w-[240px] h-[300px]" src="/travel_1.png"/>
            <img className="m-2 w-[240px]" src="/travel_2.png"/>
            <img className="m-2 w-[240px]" src="/travel_2.png"/>
        </div>
        <div className="flex text-3xl">
            <h1>Recommended</h1>
        </div>
        <div className="flex justify-between mt-4 w-[400px] h-[150px] mx-4">
            <img className="ml-8" src="/travel_3.png"/>
            <img className="ml-8" src="/travel_4.png"/>
        </div>
        <div className="flex justify-between text-2xl">
            <h1 className="ml-10">Explore Aspen</h1>
            <h1 className="mr-10">Explore Aspen</h1>
        </div>
      </main>);
  }