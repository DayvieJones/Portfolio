// import techLogo from "../../../public/techs.png";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

export default function IndexPage() {
  return (
    <div className="container">
      <Header />
      <div className="flex flex-col text-slate-300">
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-3">Hey, ich bin David</h2>
          <h1>Frontend Developer</h1>
          <p>Willkommen auf meinem Portfolio</p>
          <div>
            <a href="#about" className="text-slate-300 hover:text-slate-50">
              Über mich
            </a>
          </div>
          <div className="opacity-0">
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
          {/* <div>
          <img src={techLogo} alt="tech logo" />
        </div> */}
        </div>
        <Navbar />
      </div>
    </div>
  );
}

/*
Aufbau:

#Hero Section
    -Header
      -LinkedIn
      -GitHub
      -Email
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
