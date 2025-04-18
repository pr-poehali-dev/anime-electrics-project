import { Button } from "./ui/button";
import { Bolt, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="lightning-bg py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-card/80 backdrop-blur-sm p-6 md:p-10 rounded-xl border border-anime-purple">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-anime-red via-anime-pink to-anime-purple bg-clip-text text-transparent">
                Электромонтажные работы в Колпино
              </span>
            </h1>
            <p className="text-xl text-anime-lightBlue mb-6">
              Профессиональные услуги электрика для вашего дома и офиса
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-anime-red hover:bg-anime-pink text-white flex items-center gap-2 animate-pulse-glow"
              >
                <Zap className="w-5 h-5" />
                Вызвать электрика
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-anime-blue hover:bg-anime-blue/10 text-anime-lightBlue"
              >
                <Bolt className="w-5 h-5 mr-2" />
                Узнать цены
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-anime-darkBlue/50 p-4 rounded-lg border border-anime-blue hover:border-anime-lightBlue transition-colors duration-300">
              <h3 className="text-lg font-semibold text-anime-lightBlue mb-2">Быстрый выезд</h3>
              <p className="text-gray-300">Оперативное решение проблем с электричеством</p>
            </div>
            <div className="bg-anime-darkBlue/50 p-4 rounded-lg border border-anime-blue hover:border-anime-lightBlue transition-colors duration-300">
              <h3 className="text-lg font-semibold text-anime-lightBlue mb-2">Гарантия качества</h3>
              <p className="text-gray-300">Надёжные решения и профессиональный подход</p>
            </div>
            <div className="bg-anime-darkBlue/50 p-4 rounded-lg border border-anime-blue hover:border-anime-lightBlue transition-colors duration-300">
              <h3 className="text-lg font-semibold text-anime-lightBlue mb-2">Доступные цены</h3>
              <p className="text-gray-300">Честная стоимость без скрытых платежей</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-80 md:h-80 opacity-10 bg-anime-red rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 md:w-60 md:h-60 opacity-10 bg-anime-purple rounded-full blur-3xl animate-pulse-glow"></div>
    </section>
  );
};

export default Hero;