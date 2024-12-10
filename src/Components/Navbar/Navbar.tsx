export default function Navbar() {
  return (
    <footer className="sticky flex gap-8 justify-center mt-24 text-slate-300 ">
      <div>
        <a href="#start" className="border-b-1 hover:text-slate-100">
          <span>Start</span>
        </a>
      </div>
      <div>
        <a href="#about" className="border-b-1 hover:text-slate-100">
          <span>About</span>
        </a>
      </div>
      <div>
        <a href="#projects" className="border-b-1 hover:text-slate-100">
          <span>Projects</span>
        </a>
      </div>
      <div>
        <a href="contact" className="border-b-1 hover:text-slate-100">
          <span>Contact</span>
        </a>
      </div>
    </footer>
  );
}
