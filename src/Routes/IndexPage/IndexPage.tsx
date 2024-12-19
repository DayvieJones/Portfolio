import techLogo from "../../../public/techs.png";
import avatar from "../../../public/avatar.jpg";
import sushiRestaurant from "../../../public/sushi-restaurant-prev.png";
import noteApp from "../../../public/note-app-prev.png";
import userAdministration from "../../../public/user-administration-prev.png";
import weatherApp from "../../../public/weatherApp-prev.png";
import Header from "../../Components/Header/Header";
import TechStack from "../../Components/TechStack/TechStack";
import Project from "../../Components/Project/Project";

export default function IndexPage() {
  return (
    <div>
      <Header />
      {/* Hero */}
      <main className="flex flex-col">
        <section
          id="start"
          className="container h-screen pt-32 px-6 lg:pt-80  mx-auto"
        >
          <div className="flex flex-col text-slate-300 gap-32 justify-center items-center lg:flex-row lg:gap-40">
            <div className="mx-5 px-5">
              <h1 className="text-6xl text-cyan-300 mb-16">
                Hey, ich bin David Johrden
              </h1>
              <h2 className="text-3xl text-cyan-100 mb-12">
                {"<Frontend Developer/>"}
              </h2>
              <p className="text-2xl text-cyan-400 mb-10">Sei gegrüßt</p>
              <a
                href="#about"
                className="text-slate-100  bg-cyan-700 rounded-lg px-4 py-2 hover:bg-cyan-500 flex items-center justify-center lg:text-xl"
              >
                Über mich
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 -mr-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="mt-10">
              <img
                src={techLogo}
                alt="Meine Technologien"
                className="w-full max-w-[500px] mx-auto"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="container flex flex-col pt-24 px-4 py-12 mx-auto "
        >
          <div className="flex items-center mt-5 mb-6">
            <div className="w-[10%] h-[1px] bg-cyan-600"></div>
            <h2 className="text-4xl text-nowrap mx-5 text-cyan-300">
              Das bin ich
            </h2>
            <div className="w-full h-[1px] bg-cyan-600"></div>
          </div>
          <div className="flex flex-col md:flex-row  items-center md:gap-8 lg:mt-20">
            <img
              className="w-52 h-52 rounded-full p-4 mb-6 object-cover md:mb-0 w- md:w-60 md:h-60"
              src={avatar}
              alt="Profile picture"
            />
            <div className="text-lg lg:w-[40%] text-slate-300">
              <p className="mb-2">
                Ich bin David Johrden, leidenschaftlicher Entwickler aus dem
                schönen Rhein-Sieg-Kreis und wohne in der Stadt Troisdorf.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis cupiditate enim nisi corrupti praesentium ut non
                magni nihil tenetur sapiente explicabo animi accusantium ipsam,
                magnam.
              </p>
              <p className="mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reiciendis cupiditate enim nisi corrupti praesentium ut non
                magni nihil tenetur sapiente explicabo animi accusantium ipsam,
                magnam, distinctio necessitatibus quos illo ullam soluta dicta
                quis ex qui vel. Quia unde neque hic ducimus aspernatur eius
                iure sit. Architecto expedita velit libero tempora.
              </p>
            </div>
          </div>
          <div className=" lg:mt-20  flex flex-col bg-slate-600 mt-10 rounded-lg p-4 mx-auto border-4 border-double border-cyan-400 lg:w-[50%]">
            <div className="text-2xl font-medium">{"< Tech Stack />"}</div>
            <div className="flex flex-wrap gap-2 mt-4 ">
              <TechStack content={"HTML"} />
              <TechStack content={"CSS"} />
              <TechStack content={"SCSS"} />
              <TechStack content={"Tailwind"} />
              <TechStack content={"JavaScript"} />
              <TechStack content={"TypeScript"} />
              <TechStack content={"vite"} />
              <TechStack content={"npm"} />
              <TechStack content={"React"} />
              <TechStack content={"VS-Code"} />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="container pt-24 px-4 py-12 mt-10 mx-auto"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-56 h-[1px] bg-cyan-600"></div>
              <h2 className="text-4xl text-nowrap mx-5 text-cyan-300">
                Projects
              </h2>
              <div className="w-full h-[1px] bg-cyan-600"></div>
            </div>
            <div className="text-lg ">
              Hier finden Sie meine Projekte, die Ihnen einen Einblick in meine
              Fähigkeiten geben kann.
            </div>
            <div className="flex flex-wrap items-center justify-start gap-8">
              <Project
                projectTitle={"Mirai Sushi"}
                textContent={
                  "Die Website Mirai Sushi präsentiert ein fiktives Sushi-Restaurant und setzt den Schwerpunkt auf ein responsives Design. Als eines meiner ersten Projekte demonstriert es die Anwendung grundlegender Webtechnologien wie HTML, CSS und JavaScript. Die klare Struktur und intuitive Navigation machen die Seite zu einem soliden Einstieg in die Welt des Webdesigns."
                }
                picturePreview={sushiRestaurant}
                githubLink={"https://github.com/DayvieJones/SushiRestaurant"}
                projectLink={"https://dayviejones.github.io/SushiRestaurant/"}
                altText={"Vorschaubild Sushi Restaurant"}
                techStack={{ tech1: "HTML", tech2: "CSS" }}
              />
              <Project
                projectTitle={"Notiz App"}
                textContent={
                  "Die Note-App ist ein praktisches Tool, das die Anwendung von LocalStorage demonstriert. Nutzer können Notizen erstellen, bearbeiten und löschen, die dank der lokalen Speicherung auch nach einem Neustart des Browsers verfügbar bleiben. Dieses Projekt zeigt den effektiven Einsatz von JavaScript, um Daten persistent und nutzerfreundlich zu verwalten."
                }
                picturePreview={noteApp}
                githubLink={"https://github.com/DayvieJones/Note-App"}
                projectLink={"https://dayviejones.github.io/Note-App/"}
                altText={"Vorschaubild Notiz App"}
                techStack={{ tech1: "HTML", tech2: "CSS", tech3: "JavaScript" }}
              />
              <Project
                projectTitle={"Wetter App"}
                textContent={
                  "Die WeatherApp zeigt die Integration von APIs in einer Webanwendung. Über die WeatherAPI werden aktuelle Wetterdaten sowie eine 3-Tage-Vorhersage abgerufen. Nutzer können Orte favorisieren, und diese werden im LocalStorage gespeichert. Mit Technologien wie HTML, SCSS und JavaScript verbindet die App interaktive Features mit modernem Design."
                }
                picturePreview={weatherApp}
                githubLink={"https://github.com/DayvieJones/WeatherApp"}
                projectLink={"https://dayviejones.github.io/WeatherApp/"}
                altText={"Vorschaubild Wetter App"}
                techStack={{
                  tech1: "HTML",
                  tech2: "SCSS",
                  tech3: "JavaScript",
                }}
              />
              <Project
                projectTitle={"Nutzer Verwaltung"}
                textContent={
                  "Das User Administration Tool wurde mit dem Framework React entwickelt und bietet eine effiziente Möglichkeit zur Verwaltung von Benutzerdaten. Funktionen wie Hinzufügen, Bearbeiten und Löschen von Datensätzen machen es zu einem flexiblen und leicht erweiterbaren Tool. Dieses Projekt zeigt die Vorteile moderner Frameworks wie Wiederverwendbarkeit von Komponenten und reaktive Benutzeroberflächen."
                }
                picturePreview={userAdministration}
                githubLink={"https://github.com/DayvieJones/userAdministration"}
                projectLink={
                  "https://dayviejones.github.io/userAdministration/"
                }
                altText={"Vorschaubild Nutzer Verwalung"}
                techStack={{
                  tech1: "HTML",
                  tech2: "CSS",
                  tech3: "JavaScript",
                  tech4: "TypeScript",
                  tech5: "React",
                  tech6: "Router",
                }}
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container flex flex-col mx-auto">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 px-4 ">
              <div className="w-[60%] h-[1px] bg-cyan-600"></div>
              <h2 className="text-4xl text-cyan-300">Contact</h2>
              <div className="w-[40%] h-[1px] bg-cyan-600"></div>
            </div>
            <div className="flex flex-col justify-center lg:items-center lg:flex-row lg:gap-5">
              {/* Weitere Erfahrungen */}
              <div className="p-10 rounded-lg mx-auto text-center lg:w-[50%]">
                <h2 className="text-3xl font-bold text-white">
                  Weitere Erfahrungen
                </h2>
                <p className="text-slate-300 mt-4 text-lg">
                  Auf meinem GitHub-Profil finden Sie weitere Projekte, die ich
                  im Laufe der Zeit erstellt habe. Dort können Sie sich auch
                  selbst von meinem Code überzeugen.
                </p>
                <a
                  target="_blank"
                  href="https://github.com/DayvieJones"
                  className="mt-8 text-sm font-medium transition-colors bg-cyan-700 hover:bg-cyan-600 rounded-xl px-5 py-3 flex items-center justify-center lg:text-lg "
                >
                  GitHub ansehen
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 ml-2 -mr-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    ></path>
                  </svg>
                </a>
                <div className="lg:flex lg:flex-row lg:mt-5 lg:justify-center">
                  <p className="text-slate-300 mt-5 text-center  lg:mr-8">
                    Sie finden mich auch auf:{" "}
                  </p>
                  <div className="flex justify-center gap-6 mt-2 lg:mt-2 lg:gap-3">
                    <a
                      href="https://www.linkedin.com/in/david-johrden/"
                      target="_blank"
                      className="group p-1 -ml-1"
                    >
                      <svg
                        className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/DayvieJones"
                      target="_blank"
                      className="group p-1"
                    >
                      <svg
                        className="h-6 w-6 lg:h-8 lg:w-8 fill-slate-400 transition group-hover:fill-slate-300"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.591 8.199-6.088 8.199-11.387 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* Fragen offen */}
              <div className="mt-20 p-10 rounded-xl justify-center items-center text-center px-8 lg:w-[50%] lg:mt-0 bg-slate-800 ">
                <h2 className="text-3xl text-center font-bold">
                  Sind noch Fragen offen?
                </h2>
                <p className="text-slate-400 mt-4 text-lg text-center ">
                  Dann zögern Sie nicht mich zu kontaktieren.
                  <br />
                  Nutzen Sie dafür gerne die unten aufgeführte E-Mail Adresse.
                </p>
                <a
                  href="mailto:david.johrden@gmail.com"
                  className="text-cyan-500 font-medium flex items-center text-lg mt-8 lg:justify-center lg:mt-5 lg:text-xl lg:font-semibold hover:text-cyan-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2.5"
                    stroke="currentColor"
                    className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    ></path>
                  </svg>
                  David.Johrden@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="relative bottom-0 py-4 mt-5 w-full bg-slate-950 text-center text-slate-400 text-sm">
          <a href="./Impressum" className="mr-4">
            Impressum
          </a>
          <span>© David Johrden 2024</span>
        </footer>
      </main>
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
        Mobile: header
        Large: links

#About Me
  -Wer bin ich
  -Wo komme ich her
  -Micro controller
  -Leidenschaft
  -Ziel
  -TechStack
    -logos

#Projects
  -Techs im Projekt
  -Sushi Restaurant
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
