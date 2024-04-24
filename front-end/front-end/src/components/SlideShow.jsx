import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SlideShow = () => {
  const slide = [
    {
      image:
        "https://assets-global.website-files.com/5d2fb52b76aabef62647ed9a/6195c8e178a99295d45307cb_allgreen1000-550.jpg",
      name: "Vegetables",
    },
    {
      image:
        "https://www.perfection.com.au/hs-fs/hubfs/Produce_LR_Category_Proprietary%20Fruit%20and%20Vegetables%20Group_Styled_2022_03%20(1).jpg?width=1500&name=Produce_LR_Category_Proprietary%20Fruit%20and%20Vegetables%20Group_Styled_2022_03%20(1).jpg",
      name: "Fruites",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ygb9y57c3ia57Y0x8-zeQ3N1xmOXVMyGOiAP2Yr_65gKz_8D9hPKJUNOuK3PNxtmp70&usqp=CAU",
      name: "Meat",
    },
  ];

  return (
    <div className="sm:hidden lg:block lg:mt-20">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slide.map((slide) => (
          <SwiperSlide key={slide.image} className="relative">
            <img
              src={slide.image}
              alt=""
              className="lg:w-[100%] lg:h-[100%] rounded-sm"
              
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideShow;
