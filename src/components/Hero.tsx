import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


export function Hero(){ // SEÇÃO INICIAL
  const scrollToProjects = () => { //
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
        <div className="w-64 h-64 flex justify-center items-center rounded-full overflow-hidden mx-auto"> {/*SEÇÃO DA FOTO*/}
            <img src="src/assets/ProfilePhoto.png"></img> 
          </div>
          
          <h1 className="text-6xl md:text-8xl tracking-tight"> 
            <span className="block">Samuel Marques</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600">
            Full Stack Developer | Cybersecurity Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto pt-4">
            Construindo soluções escaláveis com código limpo e arquitetura sólida
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button 
            onClick={scrollToProjects}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            Ver Projetos
          </button>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Sam02marques" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-blue-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/samuel-marques-90b818284/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-cyan-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://instagram.com/sam_marques9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-pink-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-neutral-400" />
      </div>
    </section>
  );
}