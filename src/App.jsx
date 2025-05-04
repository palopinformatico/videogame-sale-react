import { useState } from "react";
import "./App.css";
import TopMenu from "./components/topmenu/TopMenu";
import Card from "./components/card/Card";
import Paginator from "./components/paginator/Paginator";
import Footer from "./components/footer/Footer";
import ssbImg from "./assets/img/ssb.png";
import lozImg from "./assets/img/loz.png";
import mk8Img from "./assets/img/mk8.png";
import dkcrImg from "./assets/img/dkcr.png";
import mcImg from "./assets/img/mc.png";
import m3dImg from "./assets/img/m3d.png";
import wsImg from "./assets/img/ws.png";
import ksaImg from "./assets/img/ksa.png";


export default function App() {
  const [nintendoOpen, setNintendoOpen] = useState(false);

  const juegos = [
    {
      imagen: ssbImg,
      titulo: "Super Smash Bros",
      precio: "16.552 CLP",
    },
    {
      imagen: lozImg,
      titulo: "The Legend of Zelda",
      precio: "19.990 CLP",
    },
    {
      imagen: dkcrImg,
      titulo: "Donkey Kong Country Return",
      precio: "12.990 CLP",
    },
    {
      imagen: mk8Img,
      titulo: "Mario Kart 8",
      precio: "15.500 CLP",
    },
    {
      imagen: m3dImg,
      titulo: "Super Mario 3D Worlds",
      precio: "16.552 CLP",
    },
    {
      imagen: ksaImg,
      titulo: "Kirby Star Allies",
      precio: "19.990 CLP",
    },
    {
      imagen: mcImg,
      titulo: "Minecraft",
      precio: "12.990 CLP",
    },
    {
      imagen: wsImg,
      titulo: "Wii Sports",
      precio: "15.500 CLP",
    },
  ];

  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="title">Consolas</h1>
        <nav>
          <ul className="menu">
            <li onClick={() => setNintendoOpen(!nintendoOpen)} className="menu-item">
              <span>Nintendo</span>
              <span>{nintendoOpen ? "▼" : "▶"}</span>
            </li>
            {nintendoOpen && (
              <ul className="submenu">
                <li className="submenu-item">Switch 2</li>
                <li className="submenu-item">Switch</li>
                <li className="submenu-item">Wii</li>
                <li className="submenu-item">GameCube</li>
              </ul>
            )}
            <li className="menu-item">
              <span>Playstation</span>
              <span>▶</span>
            </li>
            <li className="menu-item">
              <span>Xbox</span>
              <span>▶</span>
            </li>
            <li className="menu-item">
              <span>PC</span>
              <span>▶</span>
            </li>
            <li className="menu-item">
              <span>Celulares</span>
              <span>▶</span>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <div>
          <TopMenu />
          
          <div
            style={{
              display: "flex",
              gap: "20px",
              padding: "20px",
              flexWrap: "wrap",
            }}
          >
            {juegos.map((juego, index) => (
              <Card
                key={index}
                imagen={juego.imagen}
                titulo={juego.titulo}
                precio={juego.precio}
              />
            ))}
          </div>
        </div>
        <div>
          <Paginator />
        </div>

        <Footer />
      </main>
    </div>
  );
}
