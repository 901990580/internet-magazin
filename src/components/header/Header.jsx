import React from "react";
import uzum_1 from "../../imgs/SVG.svg";
import uzum_2 from "../../imgs/div.localization-switcher-desktop.svg";
import uzum_3 from "../../imgs/Link → SVG.svg";
import uzum_4 from "../../imgs/div.slot.svg";
import uzum_5 from "../../imgs/div.slot (1).svg";
import uzum_6 from "../../imgs/SVG_margin.png";
import uzum_7 from "../../imgs/SVG_margin (1).png";
import uzum_8 from "../../imgs/SVG_margin (2).png";
import uzum_9 from "../../assets/qwerty.jpg";
import uzum_10 from "../../imgs/SVG_margin (3).png";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = ({ cart }) => {
  let navigate = useNavigate();
  return (
    <div className="head1">
      <section class="need">
        <div class="conteaner need__pushka">
          <div class="need__left">
            <img class="need__img" src={uzum_1} alt="link" />
            <div class="need__small">
              <p class="need__p">Shahar:</p>
              <p class="need__p-2">Toshkent</p>
            </div>
            <p class="need__p-3">Topshirish punktlari</p>
          </div>
          <div class="need__rght">
            <p class="need__p-4">Savol-javoblar</p>
            <p class="need__p-5">Buyurtmalarim</p>
            <img src={uzum_2} alt="rasim" />
          </div>
        </div>
      </section>

      <header class="conteaner header">
        <img class="header__logo" src={uzum_3} alt="logo" />
        <div class="header__div-2">
          <button class="header__imgs">
            <img src={uzum_4} alt="link" />
          </button>
          <input
            placeholder="Mahsulotlar va turkumlar izlash"
            class="input"
            type="text"
          />
          <button class="input-btn">
            <img src={uzum_5} alt="srich" />
          </button>
        </div>
        <div class="header__div">
          <div class="div">
            <img src={uzum_6} alt="rasim" />
            <p class="header__p">Kirish</p>
          </div>
          <div class="div">
            <img src={uzum_7} alt="rasim" />
            <p class="header__p">Saralanganlar</p>
          </div>
          <div
            class="div"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <img src={uzum_8} alt="rasim" />
            <p class="header__p">Savat</p>
            <p className="length">{cart.length}</p>
          </div>
        </div>
      </header>

      <section class="suzlar conteaner">
        <div class="img-div">
          <img class="img-asolsiy" src={uzum_9} alt="rasim" />
          <p class="img-p">Muddatli to'lov</p>
        </div>
        <ul class="kategore">
          <li class="big-p">
            <data value="">Elektronika</data>
          </li>
          <li class="big-p">
            <data value="">Maishiy texnika</data>
          </li>
          <li class="big-p">
            <data value="">Kiyim</data>
          </li>
          <li class="big-p">
            <data value="">Poyabzallar</data>
          </li>
          <li class="big-p">
            <data value="">Aksessuarlar</data>
          </li>
          <li class="big-p">
            <data value="">Go'zallik va parvarish</data>
          </li>
          <li class="big-p">
            <data value="">Salomatlik</data>
          </li>
          <li class="big-p">
            <data value="">Uy-ro'zg'or buyumlari</data>
          </li>
          <li class="big-p">
            <data value="">Qurilish va ta'mirlash</data>
          </li>
        </ul>
        <div class="yaratish">
          <p>Yana</p>
          <img class="kerak" src={uzum_10} alt="kerak" />
        </div>
      </section>
    </div>
  );
};

export default Header;
