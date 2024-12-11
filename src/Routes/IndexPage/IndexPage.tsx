import techLogo from "../../../public/techs.png";
import avatar from "../../../public/test44.jpg";

import Button from "../../Components/Button/Button";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import TechStack from "../../Components/TechStack/TechStack";

export default function IndexPage() {
  return (
    <div className=" ">
      <Header />
      {/* Hero */}
      <main>
        <section id="start" className="container h-screen">
          <div className="flex flex-col text-slate-300">
            <Navbar />
            <div className="flex flex-col  justify-center items-start ml-8 mt-60">
              <h1 className="mt-3 ml-4 items-center text-4xl text-cyan-300">
                First Lastname
              </h1>
              <h2 className="text-2xl mt-3 text-cyan-100">
                {"<Frontend Developer/>"}
              </h2>
              <p className="text-xl ml-4 mt-2 text-cyan-400">Greetings</p>
              <div className="mt-5">
                <a
                  href="#about"
                  className="text-slate-100 bg-cyan-700 rounded-lg mb-3 px-2 py-2  hover:bg-cyan-500"
                >
                  <Button buttonContent="About" />
                </a>
              </div>
              <div>
                <img src={techLogo} alt="tech logo" />
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section id="about" className="container h-screen ">
          <div className="flex">
            <div className="px-4 mt-24">
              <div className="flex items-center gap-3">
                <div className="w-[20%] h-[1px] bg-cyan-600"></div>
                <h2 className="text-4xl w-[80%] text-cyan-300">Who is he</h2>
                {/* <h2 className="text-4xl w-[80%] text-cyan-300">{"<Who is he/>"}</h2> */}
                <div className="w-[80%] h-[1px] bg-cyan-600"></div>
              </div>
              <img
                className="w-[50%] rounded-full p-4 ml-10 mr-auto bg-transparent"
                src={avatar}
                alt="Profile picture"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                minus harum accusamus saepe velit laudantium, accusantium
                assumenda quasi explicabo error voluptas dicta sed doloribus
                soluta autem ullam illum pariatur enim porro repellat animi
                reprehenderit dignissimos fuga. Consectetur, et fuga quia
                ducimus ullam quaerat suscipit, iste vitae quo obcaecati
                cupiditate facere totam asperiores sit delectus a, dicta facilis
                omnis reprehenderit. Dolorum porro voluptatem maxime nisi
                commodi rem possimus numquam, perspiciatis quaerat quia ab,
                sequi officia nesciunt eos sunt ipsam nihil. Enim fuga aut odio,
                iure distinctio maiores, nulla dicta ipsam voluptatibus sapiente
                aliquam amet ducimus soluta animi vitae quod obcaecati
                repudiandae.
              </p>
              <div className="bg-slate-600 mt-10 rounded-lg p-2 border-4 border-double border-cyan-400">
                <div className="">{"< Tech Stack />"}</div>
                <div className="flex flex-wrap gap-2 mt-4">
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
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="container h-screen">
          <div className="flex">
            <div className="px-4 mt-24">
              <div className="flex items-center gap-3">
                <div className="w-56 h-[1px] bg-cyan-600"></div>
                <h2 className="text-4xl text-cyan-300">Projects</h2>
                {/* <h2 className="text-4xl text-cyan-300">{"<Projects/>"}</h2> */}
                <div className="w-[20%] h-[1px] bg-cyan-600"></div>
              </div>
              <div className="bg-slate-600 mt-10 rounded-lg p-2 border border-cyan-500">
                test
              </div>
            </div>
          </div>
        </section>
        <section id="contact"></section>
      </main>
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
  -TechStack

#Projects
  -Techs im Projekt
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
