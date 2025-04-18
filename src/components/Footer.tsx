import { Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-anime-darkBlue py-8 px-4 border-t border-anime-purple/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-anime-lightBlue mb-4 flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/396c5946-0b9a-4a0c-9dce-2c63637f7bf5.png" 
                alt="Электрик Колпино" 
                className="w-6 h-6 mr-2 inline glow-effect"
              />
              Электрик Колпино
            </h3>
            <p className="text-gray-400 mb-4">
              Профессиональные электромонтажные работы в Колпино и окрестностях.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="w-4 h-4 text-anime-green mr-2" />
              <a href="tel:+79500308830" className="hover:text-anime-green transition-colors duration-300">
                8 950 030 88 30
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 text-anime-pink mr-2" />
              <a href="mailto:electrik@kolpino.ru" className="hover:text-anime-pink transition-colors duration-300">
                electrik@kolpino.ru
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-anime-lightBlue mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-anime-yellow transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-yellow" />
                  Замена розеток и выключателей
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-yellow transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-yellow" />
                  Ремонт электропроводки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-yellow transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-yellow" />
                  Установка светильников
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-yellow transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-yellow" />
                  Замена электросчетчиков
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-yellow transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-yellow" />
                  Все услуги
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-anime-lightBlue mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-anime-blue transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-blue" />
                  Цены на услуги
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-blue transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-blue" />
                  Гарантия и сроки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-blue transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-blue" />
                  Зона обслуживания
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-anime-blue transition-colors duration-300 flex items-center">
                  <ExternalLink className="w-3 h-3 mr-2 text-anime-blue" />
                  Советы по электробезопасности
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-anime-purple/20 text-center text-sm text-gray-500">
          <p>© {currentYear} Электрик Колпино. Все права защищены.</p>
          <p className="mt-1">
            Сайт не является публичной офертой. Для уточнения стоимости услуг звоните по телефону.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;