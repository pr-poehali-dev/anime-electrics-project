import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Lightbulb, Cable, Plug, Wrench, Bolt, PlugZap, CheckCircle, Zap, Power, Gauge } from "lucide-react";

const serviceItems = [
  {
    title: "Замена розеток, выключателей",
    description: "Профессиональная замена и установка новых розеток и выключателей любой сложности",
    icon: <Plug className="w-8 h-8 text-anime-yellow" />
  },
  {
    title: "Ремонт электропроводки",
    description: "Диагностика и устранение проблем с электропроводкой в жилых и коммерческих помещениях",
    icon: <Cable className="w-8 h-8 text-anime-green" />
  },
  {
    title: "Установка светильников",
    description: "Монтаж и подключение осветительных приборов любого типа и сложности",
    icon: <Lightbulb className="w-8 h-8 text-anime-yellow" />
  },
  {
    title: "Прокладка кабеля",
    description: "Профессиональная прокладка кабельных линий с соблюдением всех норм безопасности",
    icon: <Cable className="w-8 h-8 text-anime-blue" />
  },
  {
    title: "Устранение неисправностей",
    description: "Быстрая диагностика и устранение любых неполадок в электропроводке",
    icon: <Wrench className="w-8 h-8 text-anime-red" />
  },
  {
    title: "Подключение стиральных машин",
    description: "Профессиональное подключение бытовой техники с гарантией безопасности",
    icon: <PlugZap className="w-8 h-8 text-anime-lightBlue" />
  },
  {
    title: "Ремонт электроплит",
    description: "Аварийный и плановый ремонт электрических плит и варочных поверхностей",
    icon: <Bolt className="w-8 h-8 text-anime-yellow" />
  },
  {
    title: "Замена счетчиков электроэнергии",
    description: "Замена и установка новых электросчетчиков с оформлением необходимых документов",
    icon: <Gauge className="w-8 h-8 text-anime-green" />
  },
  {
    title: "Восстановление электроснабжения",
    description: "Оперативное восстановление подачи электроэнергии после аварий и отключений",
    icon: <Power className="w-8 h-8 text-anime-pink" />
  },
  {
    title: "Устранение коротких замыканий",
    description: "Поиск и устранение причин коротких замыканий в электрической сети",
    icon: <Zap className="w-8 h-8 text-anime-red" />
  },
  {
    title: "Замена автоматов",
    description: "Замена автоматических выключателей, УЗО и переборка старых электрощитов",
    icon: <CheckCircle className="w-8 h-8 text-anime-purple" />
  },
  {
    title: "Установка электрооборудования",
    description: "Монтаж и подключение различного электрооборудования для дома и офиса",
    icon: <Bolt className="w-8 h-8 text-anime-blue" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            <span className="bg-gradient-to-r from-anime-pink to-anime-purple bg-clip-text text-transparent">
              Наши услуги
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-anime-pink to-anime-purple rounded-full"></span>
          </h2>
          <p className="text-lg text-anime-lightBlue">Комплексные решения для любых электротехнических задач</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="bg-card border-anime-blue/30 hover:border-anime-purple/70 transition-all duration-300 group overflow-hidden">
              <CardHeader className="pb-2">
                <div className="float-animation flex items-center mb-2">
                  <div className="mr-3 glow-effect">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-anime-lightBlue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 flex justify-end">
                  <span className="text-xs text-anime-green inline-flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" /> Доступно в Колпино
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;