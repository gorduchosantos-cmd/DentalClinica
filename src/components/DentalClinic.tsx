import { motion } from "motion/react";
import { Star, Instagram, Facebook, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed w-full z-50 glass-header">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-tighter">
          DENTAL<span className="text-accent">CLÍNICA</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-light">
          <a href="#inicio" className="hover:text-accent transition">Início</a>
          <a href="#servicos" className="hover:text-accent transition">Especialidades</a>
          <a href="#sobre" className="hover:text-accent transition">Sobre</a>
          <a href="#depoimentos" className="hover:text-accent transition">Avaliações</a>
        </div>
        <a href="https://wa.me/553138262826" className="btn-premium py-2 px-6 text-xs">Agendar Consulta</a>
      </nav>
    </header>
  );
};

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-30 scale-105" 
          alt="Clínica Luxo"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-accent tracking-[0.3em] uppercase text-sm mb-4 block animate-pulse">Referência em Ipatinga</span>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            A arte de criar <br /><span className="text-gradient">sorrisos memoráveis.</span>
          </h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
          >
            Experiência odontológica premium com tecnologia de ponta e atendimento humanizado. Localizada no coração do Cidade Nobre.
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/553138262826" className="btn-premium text-center">Transforme seu Sorriso</a>
            <a href="#servicos" className="border border-white/20 hover:bg-white/5 py-4 px-8 rounded-full transition flex items-center justify-center">
              Conheça nossos serviços
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const AuthorityStrip = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-around items-center gap-8 opacity-60">
          <div className="text-center">
            <div className="text-3xl font-serif text-white">4.9/5</div>
            <div className="text-[10px] uppercase tracking-widest text-accent">Google Avaliações</div>
          </div>
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-serif text-white">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-accent">Anos de Experiência</div>
          </div>
          <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
          <div className="text-center">
            <div className="text-3xl font-serif text-white">10k+</div>
            <div className="text-[10px] uppercase tracking-widest text-accent">Sorrisos Atendidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const BentoServices = () => {
  return (
    <section id="servicos" className="py-24 container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa <span className="text-accent">Expertise</span></h2>
        <p className="text-gray-500 max-w-xl mx-auto">Combinamos técnica avançada com um olhar estético apurado para resultados naturalmente perfeitos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
        <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          viewport={{ once: true }}
          className="bento-item md:col-span-2 group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
            <Star size={120} />
          </div>
          <h3 className="text-2xl font-serif mb-4 text-accent">Implantes & Próteses</h3>
          <p className="text-gray-400 leading-relaxed">Recupere sua função mastigatória e autoestima com materiais de altíssima durabilidade e Dr. Miguel.</p>
          <img 
            src="https://images.unsplash.com/photo-1460672985063-6764ac8b9c74?q=80&w=400&auto=format&fit=crop" 
            className="absolute bottom-[-20px] right-[-20px] w-48 h-48 object-cover rounded-full mix-blend-luminosity opacity-20" 
            alt="Implante"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          viewport={{ once: true }}
          className="bento-item"
        >
          <h3 className="text-xl font-serif mb-2">Estética Dental</h3>
          <p className="text-sm text-gray-400">Lentes de contato e facetas de porcelana com design personalizado para seu rosto.</p>
        </motion.div>

        <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          viewport={{ once: true }}
          className="bento-item"
        >
          <h3 className="text-xl font-serif mb-2">Ortodontia</h3>
          <p className="text-sm text-gray-400">Aparelhos modernos e alinhadores invisíveis para um sorriso perfeito.</p>
        </motion.div>

        <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          viewport={{ once: true }}
          className="bento-item"
        >
          <h3 className="text-xl font-serif mb-2">Endodontia</h3>
          <p className="text-sm text-gray-400">Tratamento de canal indolor com tecnologia rotatória avançada.</p>
        </motion.div>

        <motion.div 
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 60, opacity: 0 }}
          viewport={{ once: true }}
          className="bento-item md:col-span-3 flex items-center justify-between"
        >
          <div className="max-w-md">
            <h3 className="text-2xl font-serif mb-4 text-accent">Tecnologia 3D</h3>
            <p className="text-gray-400">Utilizamos escaneamento digital para maior precisão e conforto, eliminando moldagens tradicionais.</p>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop" 
              className="w-64 h-40 object-cover rounded-xl" 
              alt="Tecnologia"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    {
      initials: "FR",
      name: "Fatima Rocha",
      text: "Quero agradecer a toda equipe. Estou muito feliz, minhas próteses ficaram perfeitas, muito top. Eu super indico a clínica."
    },
    {
      initials: "AR",
      name: "Ana Rodrigues",
      text: "Fiz umas restaurações na dental clínica. Atendimento ótimo, profissionalismo excelente, recomendo demais!"
    },
    {
      initials: "G",
      name: "Google User",
      text: "Atendimento impecável, ótima recepção e ótimos profissionais! Preço super acessível pela qualidade entregue.",
      highlight: true
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16 italic">"O que dizem sobre nós"</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 60, opacity: 0 }}
              viewport={{ once: true }}
              className={`p-8 border rounded-3xl ${review.highlight ? 'border-accent/30 bg-accent/5' : 'border-white/5 bg-white/[0.02]'}`}
            >
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${review.highlight ? 'bg-accent text-black' : 'bg-accent/20 text-accent'}`}>
                  {review.initials}
                </div>
                <div className="ml-4 text-sm">
                  <div className="font-bold">{review.name}</div>
                  <div className="text-gray-500 text-xs">Paciente</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-3xl font-serif font-bold mb-6">DENTAL<span className="text-accent">CLÍNICA</span></div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Redefinindo o padrão da odontologia em Ipatinga através de inovação, estética e carinho com o paciente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
              <MapPin size={14} /> Localização
            </h4>
            <p className="text-gray-400 text-sm leading-loose">
              Av. Simon Bolívar, 1038<br />
              Cidade Nobre, Ipatinga - MG<br />
              CEP 35162-410
            </p>
          </div>

          <div>
            <h4 className="text-accent uppercase tracking-widest text-xs font-bold mb-6 flex items-center gap-2">
              <Phone size={14} /> Contato
            </h4>
            <p className="text-gray-400 text-sm leading-loose">
              (31) 3826-2826<br />
              Seg - Sex: 08:00 às 18:30<br />
              contato@dentalclinica.com
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2026 Dental Clínica. Todos os direitos reservados.</p>
          <p className="mt-4 md:mt-0">Desenvolvido com excelência</p>
        </div>
      </div>
    </footer>
  );
};
