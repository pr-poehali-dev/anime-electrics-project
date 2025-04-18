import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Scroll, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <ContactSection />
      </main>
      
      <Footer />
      
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-anime-purple hover:bg-anime-pink rounded-full shadow-lg animate-pulse-glow z-50"
          size="icon"
          aria-label="Прокрутить вверх"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      <div className="fixed left-6 bottom-6 text-anime-pink animate-bounce z-40">
        <Scroll className="w-8 h-8 glow-effect" />
      </div>
    </div>
  );
};

export default Index;