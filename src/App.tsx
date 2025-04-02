import { useState } from 'react';
import { Menu, X,  Star,  Instagram } from 'lucide-react';
import { Link } from 'react-scroll';
import { GalleryModal } from './components/GalleryModal';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';

const services = [
  { 
    category: "Piega", 
    items: [
      { name: "Piega", price: "35.00" },
      { name: "Piega The Lux", price: "50.00" }
    ]
  },
  { 
    category: "Trattamenti", 
    items: [
      { name: "Trattamento Capelli", price: "15.00" },
      { name: "Trattamento alla Cheratina", price: "200.00" },
      { name: "Laminazione Capelli", price: "75.00" },
      { name: "Trattamento Botox", price: "25.00" },
      { name: "Fusia Dose", price: "25.00" }
    ]
  },
  { 
    category: "Taglio", 
    items: [
      { name: "Taglio", price: "40.00" },
      { name: "Cut & Go", price: "60.00" }
    ]
  },
  { 
    category: "Colore", 
    items: [
      { name: "Colore", price: "60.00" },
      { name: "Riflessante", price: "25.00" },
      { name: "Colore Fresh", price: "20.00" },
      { name: "Color Watch", price: "10.00" }
    ]
  },
  { 
    category: "Effetti", 
    items: [
      { name: "Meches", price: "100.00" },
      { name: "Balayage Bagno Colore", price: "100.00" },
      { name: "Decolorazione", price: "50.00", prefix: "da" }
    ]
  },
  { 
    category: "Trattamento Forma", 
    items: [
      { name: "Permanente", price: "67.00" },
      { name: "Stiratura", price: "74.00" },
      { name: "Raccolto", price: "65.00" }
    ]
  },
  { 
    category: "Bambini", 
    items: [
      { name: "Taglio Bambina", price: "26.00" },
      { name: "Taglio Ragazze", price: "56.00" },
      { name: "Taglio Bambino", price: "20.00" }
    ]
  },
  { 
    category: "Uomo", 
    items: [
      { name: "Taglio Capelli Barba", price: "65.00" },
      { name: "Taglio Uomo Forbici", price: "45.00" },
      { name: "Taglio Uomo Macchinetta", price: "35.00" },
      { name: "Barba The Lux", price: "35.00" },
      { name: "Barba Daily", price: "22.00" },
      { name: "Rasatura Testa", price: "15.00" },
      { name: "Colore Barba", price: "15.00" },
      { name: "Colore Uomo", price: "45.00" },
      { name: "Toner Grigio", price: "20.00" },
      { name: "Rifinitura Baffi", price: "7.00" },
      { name: "Stiratura Uomo", price: "40.00" }
    ]
  }
];

const reviews = [
  { 
    name: "Axel", 
    stars: 5, 
    text: "...m" 
  },
  { 
    name: "Francesca", 
    stars: 5, 
    text: "Professionalità, cordialità e capelli più sani grazie ai prodotti consigliati!!!!" 
  },
  { 
    name: "Marco", 
    stars: 5, 
    text: "Luigi è un professionista e pure una bella persona. Ottimo servizio, capacissimo. sono contento che ho scelto hair top lugano!" 
  },
  { 
    name: "Eva", 
    stars: 5, 
    text: "Tutto molto bene! Tornerò" 
  },
  { 
    name: "Danila", 
    stars: 5, 
    text: "Luigi è un vero artista nel suo lavoro capace di uire passione per il cliente n ogni dettaglio del suo lavoro. la sua capacità di ogni visita è un'esperienza comprendere e soddisfare, le esigenze dei clienti é straordinariae" 
  },
  { 
    name: "Fabio", 
    stars: 5, 
    text: "Luigi mi ha fornito un'ottima consulenza nel trovare l'acconciatura perfetta alla mia personalità. Luigi è professionale e soprattutto non tralascia alcun dettaglio. Vi consiglio di prendere subito un appuntamento con lui, sono sicuro che resterete molto soddisfatti e vi sentirete realizzati." 
  },
  { 
    name: "Elia", 
    stars: 5, 
    text: "......" 
  },
  { 
    name: "Federica", 
    stars: 5, 
    text: "Tutto perfetto" 
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-[rgb(25,24,25)] text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src="/logo.png" alt="HairTop Lugano" className="h-12" />
            </div>
            <div className="hidden md:flex md:items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="home" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.home')}</Link>
                <Link to="about" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.about')}</Link>
                <Link to="gallery" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.gallery')}</Link>
                <Link to="reviews" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.reviews')}</Link>
                <Link to="prices" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.prices')}</Link>
                <Link to="contact" smooth={true} className="cursor-pointer px-3 py-2">{t('nav.contact')}</Link>
              </div>
              <div className="ml-6">
                <LanguageSwitcher />
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="home" smooth={true} className="block px-3 py-2">{t('nav.home')}</Link>
              <Link to="about" smooth={true} className="block px-3 py-2">{t('nav.about')}</Link>
              <Link to="gallery" smooth={true} className="block px-3 py-2">{t('nav.gallery')}</Link>
              <Link to="reviews" smooth={true} className="block px-3 py-2">{t('nav.reviews')}</Link>
              <Link to="prices" smooth={true} className="block px-3 py-2">{t('nav.prices')}</Link>
              <Link to="contact" smooth={true} className="block px-3 py-2">{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/hero.png"
            alt="Barbershop" 
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-[rgb(25,24,25)] bg-opacity-50"></div>
        </div>
        <div className="relative flex items-center justify-center h-full text-white">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">{t('hero.title')}</h1>
            <div className="space-x-4">
              <Link to="about" smooth={true} className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition">
                {t('hero.about')}
              </Link>
              <Link to="booking" smooth={true} className="bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                {t('hero.book')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-8">{t('about.title')}</h2>
              <p className="text-gray-600 mb-8 text-lg">
                {t('about.description')}
              </p>
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-xl">{t('about.transport.title')}</h3>
                <p className="text-gray-600 text-lg">
                  {t('about.transport.description')}
                </p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold mb-3 text-xl">{t('about.team.title')}</h3>
                <p className="text-gray-600 text-lg">
                  {t('about.team.description')}
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-3 text-xl">{t('about.strengths.title')}</h3>
                <ul className="text-gray-600 space-y-2 text-lg">
                  <li>{t('about.strengths.environment')}</li>
                  <li>{t('about.strengths.specialization')}</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img 
                src="/chi_siamo.png" 
                alt="Salon Interior" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('gallery.title')}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={`/galleria/${i}.webp`}
                  alt={`Immagine ${i}`}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div className="mb-6">
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex items-center justify-center bg-[rgb(25,24,25)] text-white px-8 py-3 rounded-full hover:bg-[rgb(35,34,35)] transition"
              >
                {t('gallery.viewAll')}
              </button>
            </motion.div>
            <a 
              href="https://www.instagram.com/hairtoplugano_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-600 hover:text-[rgb(25,24,25)]"
            >
              <Instagram className="w-5 h-5 mr-2" />
              {t('gallery.follow')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-[rgb(25,24,25)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('reviews.title')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "{t(`reviews.reviews.${review.name.toLowerCase()}`)}"
                </p>
                <p className="text-white tracking-wider uppercase">
                  {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section id="prices" className="py-20 bg-[rgb(25,24,25)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-16 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('prices.title')}
          </motion.h2>
          <div className="space-y-16">
            {services.map((category, index) => {
              const categoryKey = category.category
                .toLowerCase()
                .replace(/[^a-z]/g, '');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-8 text-white text-center">
                    {t(`services.categories.${categoryKey}`)}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((service, serviceIndex) => {
                      const serviceKey = service.name
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .replace(/[^a-z]/g, '');

                      return (
                        <motion.div
                          key={serviceIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex justify-between items-center border-b border-gray-700 pb-3 text-gray-300"
                        >
                          <div className="flex items-center">
                            <span>{t(`services.items.${serviceKey}`)}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-white">
                              {service.prefix && <span className="mr-1">{service.prefix} </span>}
                              CHF {service.price}
                            </span>
                            <Link 
                              to="booking" 
                              smooth={true}
                              className="ml-4 text-[rgb(139,185,185)] hover:text-[rgb(159,205,205)] transition cursor-pointer"
                            >
                              {t('services.book')}
                            </Link>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-12">{t('booking.title')}</h2>
          <div className="max-w-3xl mx-auto bg-[rgb(25,24,25)] text-white rounded-2xl p-8 shadow-2xl">
            <p className="text-center text-gray-400">{t('booking.coming')}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[rgb(25,24,25)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4">{t('footer.hours')}</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.monday')}</span>
                      <span>{t('footer.closed')}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.tuesday')}</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.wednesday')}</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.thursday')}</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.friday')}</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.saturday')}</span>
                      <span>08:30 - 16:30</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>{t('footer.days.sunday')}</span>
                      <span>{t('footer.closed')}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">{t('footer.contacts')}</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="tel:076 743 51 21" className="flex items-center hover:text-white transition">
                        <span className="mr-2">📞</span>
                        076 743 51 21
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hairtoplugano@gmail.com" className="flex items-center hover:text-white transition">
                        <span className="mr-2">✉️</span>
                        hairtoplugano@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">{t('footer.follow')}</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/hairtoplugano_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.facebook.com/luigi.maniglia.3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.6307391419397!2d8.951416!3d46.003735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAwJzEzLjQiTiA4wrA1NycwNS4xIkU!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HairTop Lugano. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>

      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  );
}

export default App;