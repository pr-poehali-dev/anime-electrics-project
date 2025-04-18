import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-card/50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-anime-red to-anime-pink bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-lg text-anime-lightBlue">Готовы решить ваши проблемы с электричеством</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-muted/30 p-6 rounded-lg border border-anime-purple/30">
            <h3 className="text-2xl font-semibold text-anime-yellow mb-6">Заполните форму</h3>
            
            <div className="space-y-4">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background/50 border-anime-blue/30 focus:border-anime-purple"
                />
              </div>
              <div>
                <Input 
                  placeholder="Телефон" 
                  className="bg-background/50 border-anime-blue/30 focus:border-anime-purple"
                />
              </div>
              <div>
                <Input 
                  placeholder="Адрес (Колпино)" 
                  className="bg-background/50 border-anime-blue/30 focus:border-anime-purple"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Опишите проблему или необходимые работы" 
                  className="bg-background/50 border-anime-blue/30 focus:border-anime-purple"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-anime-red hover:bg-anime-pink animate-pulse-glow flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Отправить заявку
              </Button>
            </div>
          </div>
          
          <div className="bg-muted/30 p-6 rounded-lg border border-anime-purple/30">
            <h3 className="text-2xl font-semibold text-anime-yellow mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-anime-green mt-1 mr-3 animate-electricity" />
                <div>
                  <h4 className="text-lg font-medium text-anime-lightBlue">Телефон</h4>
                  <a 
                    href="tel:+79500308830" 
                    className="text-xl hover:text-anime-green transition-colors duration-300"
                  >
                    8 950 030 88 30
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-anime-pink mt-1 mr-3 animate-electricity" />
                <div>
                  <h4 className="text-lg font-medium text-anime-lightBlue">Электронная почта</h4>
                  <a 
                    href="mailto:electrik@kolpino.ru" 
                    className="hover:text-anime-pink transition-colors duration-300"
                  >
                    electrik@kolpino.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-anime-red mt-1 mr-3 animate-electricity" />
                <div>
                  <h4 className="text-lg font-medium text-anime-lightBlue">Обслуживаемые районы</h4>
                  <p>Колпино и окрестности</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-anime-yellow mt-1 mr-3 animate-electricity" />
                <div>
                  <h4 className="text-lg font-medium text-anime-lightBlue">Время работы</h4>
                  <p>Ежедневно с 8:00 до 22:00</p>
                  <p className="text-anime-green text-sm mt-1">Экстренные вызовы - круглосуточно</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  className="w-full border-anime-yellow text-anime-yellow hover:bg-anime-yellow/10"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;