/*
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import illu3 from "./resources/img/illu-3.png";
import illu1 from "./resources/img/illu-1.png";
import { Container, Row, Col } from "react-bootstrap";
import CircleType from "circletype";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const App = () => {
  const circleInstance = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    new CircleType(circleInstance.current).radius(0);
  }, []);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const shopImages = importAll(
    require.context("./resources/img/shop", false, /\.(png|jpe?g|svg)$/)
  );

  console.log(shopImages["0.jpg"].default);

  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={shopImages[`${i}.jpg`].default}
          className="img-tienda"
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  console.log(slides);

  return (
    <div>
      <div className="App-inner">
        <Header></Header>
        <div className="lineBorder"></div>
        <div className="wrapper-illu">
          <img className="illu-3" src={illu3} alt="" srcset="" />
          <img className="illu-1" src={illu1} alt="" srcset="" />
        </div>
        <iframe
          src="https://player.twitch.tv/?channel=zheroa&amp;parent=localhost"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
          height="378"
          width="75%"
        ></iframe>
        <Container>
          <Row>
            <Col className="description-text" xs={12} md={6}>
              <p>
                EndSummer naci?? en el a??o 2020 con la finalidad de dar fin a un
                verano at??pico marcado por la pandemia de Covid-19 que azot?? el
                mundo. Quisimos organizar un evento que uniese a la gente a
                trav??s de sus pantallas para olvidar durante unos d??as todo lo
                que esta enfermedad nos hab??a quitado.
              </p>
              <p className="text-indent-p">
                Un a??o despu??s, en 2021, volvemos a reunirnos de nuevo para
                disfrutar juntos del mundo de los videojuegos. Para recordar
                todo aquello que perdimos por esta enfermedad que cada vez est??
                m??s cerca de ver su fin, pero con la que a??n debemos tener
                cuidado. Adem??s, esta ser?? la primera edici??n, esperamos que de
                muchas, en la que se organizar?? el evento con un fin ben??fico.
                Queremos ayudar a <b>Juegaterapia</b> y para hablar de ellos y
                de su maravilloso proyecto, consultad el apartado Juegaterapia.
                Nos vemos en las redes Summers.
              </p>
            </Col>
            <Col xs={12} md={6}>
              fasdf
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-inner-black">
        <Container>
          <Row>
            <Col className="col-title">
              <h2 className="title-white">Juegaterapia</h2>
              <hr className="hr-divisor hr-left" />
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-juega">
                Nos fascina el mundo de los videojuegos y todo lo que tenga que
                ver con ello. Por eso, quer??amos dedicar este primer ben??fico a
                una fundaci??n que tuviese relaci??n con nu estra pasi??n.
                Entonces, encontramos Juegaterapia. Juegaterapia naci?? en 2010
                de la mano de M??nica Esteban, la maravillosa fundadora de esta
                fundaci??n que se dedica a otorgar consolas, tablets y
                videojuegos a los ni??os hospitalizados de todo el pa??s. Adem??s,
                est??n construyendo jardines para jugar en las azoteas de los
                hospitales. <br /> Su labor es demasiado grande como para
                resumirla en unas l??neas pero puedes conocer m??s haciendo click{" "}
                <a href="https://www.juegaterapia.org/">aqu??</a>. Puedes
                contribuir de muchas formas:
                <ul>
                  <li>
                    Enviando las consolas, tablets o juegos que ya no quieras a
                    la fundaci??n a trav??s de la empresa Envialia.
                  </li>
                  <li>
                    Comprando productos oficiales o packs de regalo para los
                    ni??os en la web de Juegaterapia.
                  </li>
                  <li>
                    Donando al fondo que hemos preparado para el torneo aqu??.
                  </li>
                </ul>
                Cualquier donaci??n o forma de contribuir ser?? bienvenida y nos
                ayudar?? a hacer sonre??r a muchas familias con ni??os
                hospitalizados.
              </p>
              <div className="circle-text-container">
                
                <p ref={circleInstance} id="circle-text-btn">
                  {"  "}
                  donar &#9679; donar &#9679; donar &#9679; donar &#9679;
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-title">
              <hr className="hr-divisor hr-right" />
              <h2 className="title-white">Tienda</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ marginBottom: "3em" }}>
                Este a??o quer??amos hacer algo especial para el primer
                aniversario. Hablamos con la maravillosa artista Sonia (
                <a href="https://www.instagram.com/sonilustra/" target="_blank">
                  @Sonilustra
                </a>{" "}
                en Instagram) y le encargamos un dise??o cargado de magia y
                belleza para el evento. Una camiseta ser?? sorteada durante el
                evento entre todos los participantes y otra ser?? pujada al mejor
                postor. Esta edici??n va destinada, como puede leerse en el
                apartado superior, a la fundaci??n Juegaterapia. Por ello, este
                dise??o est?? dedicado a todos esos ni??os valientes, los
                superh??roes que salvar??n el mundo el d??a de ma??ana.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Swiper
                id="thumbs"
                className="swiper-component"
                spaceBetween={5}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                }}
                onSwiper={setThumbsSwiper}
              >
                {slides}
              </Swiper>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;

*/

import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Donate from "./Donate";
import Valorant from "./Valorant";
import LeagueOfLegends from "./LeagueOfLegends";

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/donar" component={Donate}></Route>
      <Route
        exact
        path="/league-of-legends"
        component={LeagueOfLegends}
      ></Route>
      <Route exact path="/valorant" component={Valorant}></Route>
    </div>
  );
};

export default App;
