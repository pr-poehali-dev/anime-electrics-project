import { Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="relative z-10 py-4 px-4 md:px-8 bg-card rounded-b-lg shadow-lg border-b-2 border-anime-pink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="glow-effect">
            <img 
              src="https://cdn.poehali.dev/files/396c5946-0b9a-4a0c-9dce-2c63637f7bf5.png" 
              alt="Электрик Колпино" 
              className="w-12 h-12 mr-4"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-anime-red via-anime-pink to-anime-purple bg-clip-text text-transparent">
              Электрик Колпино
            </h1>
            <p className="text-sm text-anime-lightBlue">Профессиональные электромонтажные работы</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <a 
            href="tel:+79500308830" 
            className="flex items-center group mb-2 text-anime-yellow hover:text-anime-green transition-colors duration-300"
          >
            <Phone className="w-5 h-5 mr-2 animate-electricity" />
            <span className="text-xl font-semibold">8 950 030 88 30</span>
          </a>
          <Button className="bg-anime-red hover:bg-anime-pink text-white animate-pulse-glow">
            Вызвать электрика
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;