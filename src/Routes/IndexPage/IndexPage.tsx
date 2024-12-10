// import techLogo from "../../../public/techs.png";

import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex flex-col text-slate-300">
          <div id="start" className="flex flex-col justify-center items-center">
            <h2 className="mt-5">Hey, ich bin David</h2>
            <h1 className="mt-5">Frontend Developer</h1>
            <p className="mt-5" >Willkommen in meinem Portfolio</p>
            <Button />

            {/* <div>
          <img src={techLogo} alt="tech logo" />
        </div> */}
          </div>
          <div className="flex flex-col justify-center items-center opacity-1">
            About
            <div>
              <img src="" alt="Profile picture" />
              <p>
                Mein Name ist David Johrden, aufgewachsen im schönen Windecker
                Ländchen im Rhein-Sieg-Kreis und lebe nun in der Stadt
                Troisdorf, welches in der Nähe von Köln/Bonn. In meiner Teenager
                Zeit habe ich mit Microcontrollern experimentiert und an diesen
                gebastelt. Schon dort bemerkte ich mein starkes interesse an der
                programmierung.
              </p>
              <div>Tech Stack</div>
              <div>
                <a href="">Projekte betrachten</a>
              </div>
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

/*
Aufbau:

#Hero Section
    -Header
      -LinkedIn x
      -GitHub x
      -Email x
      (Statisch)
    -Einleitungssatz
      -Button to #about
    -Navbar
      -Als roter Faden auf der Seite
      -Aussehen wie Balken
        Wenn im Bereich, Blaken farbe/größe ändern
        Mobile: unten
        Large: links
      

#About Me
  -Wer bin ich
  -Wo komme ich her
  -Micro controller
  -Leidenschaft
  -Ziel

#Projects
  -TechStack im Projekt
  -Sushi-Restaurant
  -WeatherApp
  -NoteApp
  -userAdministration

#Contact
    -LinkedIn
    -GitHub
    -Email
    -Xing

Design
  -Background
    (Space)
    Mouse interaktiv
    Smooth scrolling
*/
