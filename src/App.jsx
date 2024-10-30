import { useState } from "react";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import { Route, Routes } from "react-router-dom";

// ? Arr
import televizor from "./assets/1_arr.jpg";
import tikuv_mashina from "./assets/2_arr.jpg";
import changyutgich from "./assets/3_arr.jpg";
import konserva from "./assets/4_arr.jpg";
import nivea from "./assets/5_arr.jpg";
import tish_pastasi from "./assets/6_arr.jpg";
import artel from "./assets/7_arr.jpg";
import sumka from "./assets/8_arr.jpg";
import sumka1 from "./assets/9_arr.jpg";
import tush from "./assets/10_arr.jpg";
import colgate from "./assets/11_arr.jpg";
import dush_geli from "./assets/12_arr.jpg";
import dercos from "./assets/13_arr.jpg";
import vibratsiyaga_qarshi from "./assets/14_arr.jpg";
import moshinka from "./assets/15_arr.jpg";
import shvabra from "./assets/16_arr.jpg";
import kastrulka from "./assets/17_arr.jpg";
import tova from "./assets/18_arr.jpg";
import container from "./assets/19_arr.jpg";
import puzzle from "./assets/20_arr.jpg";
import svetocopy from "./assets/21_arr.jpg";
import svetocopy1 from "./assets/22_arr.jpg";
import qogoz from "./assets/23_arr.jpg";
import soat from "./assets/24_arr.jpg";
import gel from "./assets/25_arr.jpg";
import nivea1 from "./assets/26_arr.jpg";
import nivea2 from "./assets/27_arr.jpg";
import choy from "./assets/28_arr.jpg";
import choynak from "./assets/29_arr.jpg";
import wellstars from "./assets/30_arr.jpg";
import korm from "./assets/31_arr.jpg";
import krasofka from "./assets/33_arr.jpg";
import mikrokristalli from "./assets/35_arr.jpg";
import kalkulyator from "./assets/36_arr.jpg";
import sviter from "./assets/37_arr.jpg";
import shakar from "./assets/38_arr.jpg";
import kislota from "./assets/39_arr.jpg";
import takumi from "./assets/40_arr.jpg";

// ? Slider
import swiper1 from "./assets/1_swiper.jpg";
import swiper2 from "./assets/2_swiper.jpg";
import swiper3 from "./assets/3_swiper.jpg";
import swiper4 from "./assets/4_swiper.jpg";
import swiper5 from "./assets/5_swiper.jpg";
import swiper6 from "./assets/6_swiper.jpg";
import swiper7 from "./assets/7_swiper.jpg";
import swiper8 from "./assets/8_swiper.jpg";
import swiper9 from "./assets/9_swiper.jpg";
import swiper10 from "./assets/10_swiper.jpg";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import Header from "./components/header/Header";

function App() {
  let [arr, setArr] = useState([
    {
      img: televizor,
      name: "Televizor Artel 32KN5500 HD Android TV 11.0, Wi-Fi, Bluetooth",
      month: "199 708 so'm/oyiga",
      price: 1690000,
      id: 1,
    },

    {
      img: tikuv_mashina,
      name: "Tikuv mashina Chayka 595",
      month: "70 762 so'm/oyiga",
      price: 999000,
      id: 2,
    },

    {
      img: changyutgich,
      name: "Changyutgich Bosch BGC21X300",
      month: "155 762 so'm/oyiga",
      price: 2199000,
      id: 3,
    },

    {
      img: konserva,
      name: "Mushuklar uchun korserva",
      month: "920 so'm/oyiga",
      price: 13000,
      id: 4,
    },

    {
      img: nivea,
      name: "NIVEA dush uchun krem gel",
      month: "1 415 so'm/oyiga",
      price: 19990,
      id: 5,
    },

    {
      img: tish_pastasi,
      name: "Tish pastasi Colgate MAX White",
      month: "1 133 so'm/oyiga",
      price: 16000,
      id: 6,
    },

    {
      img: artel,
      name: "Televizor Artel A43KF5500",
      month: "198 262 so'm/oyiga",
      price: 2799000,
      id: 7,
    },

    {
      img: sumka,
      name: "Ayollar sumkasi",
      month: "6 020 so'm/oyiga",
      price: 85000,
      id: 8,
    },

    {
      img: sumka1,
      name: "Ayollar uchun sumka, bananka elka ustida",
      month: "2 762 so'm/oyiga",
      price: 39000,
      id: 9,
    },

    {
      img: tush,
      name: "Qoshlar va kirpiklarni shakllantirish va tuzatish uchun shaffof gel",
      month: "2 125 so'm/oyiga",
      price: 30000,
      id: 10,
    },

    {
      img: colgate,
      name: "Tish pastasi Colgate Triple Action, 15 ml",
      month: "1 255 so'm/oyiga",
      price: 17720,
      id: 11,
    },

    {
      img: dush_geli,
      name: "Dush gelli Palmolive Men 3 si 1 da, tiklovchi sport, 250 ml",
      month: "2 840 so'm/oyiga",
      price: 40100,
      id: 12,
    },

    {
      img: dercos,
      name: "VICHY DERCOS AMINEXIL Soch to'kilishiga qarshi pardozlovchi",
      month: "24 373 so'm/oyiga",
      price: 344100,
      id: 13,
    },

    {
      img: vibratsiyaga_qarshi,
      name: "Vibratsiyaga qarshi",
      month: "2 266 so'm/oyiga",
      price: 32000,
      id: 14,
    },

    {
      img: moshinka,
      name: "Simsiz soch olish mashinasi VGR V-030 trimmer soqol olish uchun",
      month: "7 720 so'm/oyiga",
      price: 109000,
      id: 15,
    },

    {
      img: shvabra,
      name: "Aqilli shvabra chelak va siqish, pol va deraza tozalash uchun",
      month: "9 562 so'm/oyiga",
      price: 135000,
      id: 16,
    },

    {
      img: kastrulka,
      name: "Kastryulya Kukmara Granit Ultra, shisha qopqoqli",
      month: "16 787 so'm/oyiga",
      price: 237000,
      id: 17,
    },

    {
      img: tova,
      name: "Tova Kukmara Trendy Style, yopishmaydigan qoplama",
      month: "12 183 so'm/oyiga",
      price: 172000,
      id: 18,
    },

    {
      img: container,
      name: "Issiqlikka chidamli shisha idish",
      month: "8 075 so'm/oyiga",
      price: 144000,
      id: 19,
    },

    {
      img: puzzle,
      name: "Pazl o'yini Hatber ramkada",
      month: "886 so'm/oyiga",
      price: 12520,
      id: 20,
    },

    {
      img: svetocopy,
      name: "Ofis texnikalari uchun qog'oz varaqlari",
      month: "2 727 so'm/oyiga",
      price: 38500,
      id: 21,
    },

    {
      img: svetocopy1,
      name: "Ofis qog'oz Svetopopy ECO, A4f, 80g/m2, 500 varaq",
      month: "2 478 so'm/oyiga",
      price: 34990,
      id: 22,
    },

    {
      img: qogoz,
      name: "Qog'oz Snegurochka, ofis uchun, A4 500 varaq",
      month: "2 656 so'm/oyiga",
      price: 37500,
      id: 23,
    },

    {
      img: soat,
      name: "Aqilli qo'l soat",
      month: "21 179 so'm/oyiga",
      price: 299000,
      id: 24,
    },

    {
      img: gel,
      name: "Yuz uchun tozalovchi gel",
      month: "3 359 so'm/oyiga",
      price: 47430,
      id: 25,
    },

    {
      img: nivea1,
      name: "NIVEA Care yuz uchun krem, shi yog'i bilan 100ml",
      month: "3 112 so'm/oyiga",
      price: 43940,
      id: 26,
    },

    {
      img: nivea2,
      name: "NIVEA Care yuz uchun gialuron gel, 100ml",
      month: "3 148 so'm/oyiga",
      price: 44450,
      id: 27,
    },

    {
      img: choy,
      name: "Ko'k choy Tess Style, bargli, 100g",
      month: "981 so'm/oyiga",
      price: 13860,
      id: 28,
    },

    {
      img: choynak,
      name: "Choy damlash uchun choynak",
      month: "4 887 so'm/oyiga",
      price: 69000,
      id: 29,
    },

    {
      img: wellstars,
      name: "Televizor WellStars smart 32*, 43*, 55* 70* ovozli qidiruv pulti bilan",
      month: "98 529 so'm/oyiga",
      price: 1391100,
      id: 30,
    },

    {
      img: korm,
      name: "Quruq ovqat itlar uchun ProXbost go'shtli assorti, 500g",
      month: "1 437 so'm/oyiga",
      price: 20290,
      id: 31,
    },

    {
      img: konserva,
      name: "Konservalangan ovqat mushuklar",
      month: "1 225 so'm/oyiga",
      price: 17300,
      id: 32,
    },

    {
      img: krasofka,
      name: "Ayollar krasofkalari Uniseks Nike CV8837/003",
      month: "106 179 so'm/oyiga",
      price: 1499000,
      id: 33,
    },

    {
      img: mikrokristalli,
      name: "Mikrokristalli krem Cif Kirni olib tashlaydi, 500ml",
      month: "1 991 so'm/oyiga",
      price: 28110,
      id: 34,
    },

    {
      img: kalkulyator,
      name: "Kalkulyator Deli 1616",
      month: "8 344 so'm/oyiga",
      price: 117810,
      id: 35,
    },

    {
      img: kislota,
      name: "Akne tozalash disklari salitsili kislotasi bilan akne, spirtli",
      month: "6 375 so'm/oyiga",
      price: 90000,
      id: 36,
    },

    {
      img: sviter,
      name: "Sviter chiziqli Lamita",
      month: "7 012 so'm/oyiga",
      price: 99000,
      id: 37,
    },

    {
      img: shakar,
      name: "Eritritol asosida shakar o'rnini bosuvchi Fit Parad № 7, 180gr",
      month: "7 437 so'm/oyiga",
      price: 105000,
      id: 38,
    },

    {
      img: konserva,
      name: "Konservalangan ovqat mushuklar",
      month: "1 225 so'm/oyiga",
      price: 17300,
      id: 39,
    },

    {
      img: takumi,
      name: "Tarmoq filtri Takumi",
      month: "3 825 so'm/oyiga",
      price: 54000,
      id: 40,
    },
  ]);

  let [cart, setCart] = useState([]);
  let [visibleItems, setVisibleItems] = useState(10);

  let bosish = () => {
    setVisibleItems((prev) => prev + 10);
  };

  function addtoCartFunc(obj, operator) {
    let result = cart.find((item) => {
      return obj.id === item.id;
    });

    if (result) {
      setCart(
        cart.map((el) => {
          if (obj.id === el.id) {
            let inc = el.count + 1;

            let dec = el.count - 1;
            return {
              ...el,
              count: operator === "+" ? inc : dec,
              subtotal: operator === "+" ? inc * el.price : dec * el.price,
            };
          } else {
            return el;
          }
        })
      );

      setArr(
        arr.map((el) => {
          if (obj.id === el.id) {
            let inc = el.count + 1;

            let dec = el.count - 1;
            return {
              ...el,
              count: operator === "+" ? inc : dec,
              subtotal: operator === "+" ? inc * el.price : dec * el.price,
            };
          } else {
            return el;
          }
        })
      );
    } else {
      setCart([...cart, { ...obj, count: 1, subtotal: obj.price }]);
      setArr(
        arr.map((item) => {
          if (item.id === obj.id) {
            return { ...item, count: 1 };
          } else {
            return item;
          }
        })
      );
    }
  }

  function deleteHandler(id) {
    setCart(
      cart.filter((item) => {
        return id !== item.id;
      })
    );
  }

  return (
    <div className="App">
      <Header cart={cart} />

      {/* Swiper faqat Home sahifasida ko'rsatiladi */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[
                  Navigation,
                  Pagination,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                ]}
                className="mySwiper"
                autoplay={{
                  delay: 5000, // 5 soniya
                  disableOnInteraction: true,
                }}
                loop={true}
              >
                <SwiperSlide>
                  <img src={swiper1} alt="Slide 1 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper2} alt="Slide 2 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper3} alt="Slide 3 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper4} alt="Slide 4 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper5} alt="Slide 5 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper6} alt="Slide 6 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper7} alt="Slide 7 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper8} alt="Slide 8 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper9} alt="Slide 9 description" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swiper10} alt="Slide 10 description" />
                </SwiperSlide>
              </Swiper>

              <Home
                addtoCartFunc={addtoCartFunc}
                arr={arr.slice(0, visibleItems)}
              />
              {visibleItems < arr.length && (
                <button onClick={bosish} className="load-more-button">
                  Yana 10 ta ko'rsat
                </button>
              )}
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              addtoCartFunc={addtoCartFunc}
              cart={cart}
              deleteHandler={deleteHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
