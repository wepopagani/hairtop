import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      it: {
        translation: {
          nav: {
            home: 'Home',
            about: 'Chi Siamo',
            gallery: 'Galleria',
            reviews: 'Recensioni',
            prices: 'Listino Prezzi',
            contact: 'Contatti'
          },
          hero: {
            title: 'HairTop Lugano',
            about: 'Chi Siamo',
            book: 'Prenota'
          },
          about: {
            title: 'Chi Siamo',
            description: 'Il salone Hair Top Lugano, in centro a Lugano, ti offre servizi di parrucchiere e barbiere di alta qualità per valorizzare il tuo stile unico. Lasciati coccolare da professionisti esperti che curano ogni dettaglio per un look impeccabile.',
            transport: {
              title: 'Trasporto pubblico più vicino:',
              description: 'Il salone si trova a pochi minuti a piedi dalla stazione ferroviaria di Lugano.'
            },
            team: {
              title: 'Il team:',
              description: 'Il titolare Luigi accoglie ogni cliente con gentilezza e professionalità, cercando di offrire a tutti un servizio di prima qualità.'
            },
            strengths: {
              title: 'I punti forti del salone:',
              environment: '• Ambiente: curato e professionale',
              specialization: '• Specializzato in: taglio, piega, colore, barba'
            }
          },
          gallery: {
            title: 'La Nostra Galleria',
            viewAll: 'Vedi tutte le foto',
            follow: 'Seguici su Instagram'
          },
          reviews: {
            title: 'Recensioni'
          },
          prices: {
            title: 'Listino Prezzi',
            book: 'Prenota'
          },
          booking: {
            title: 'Prenota un Appuntamento',
            coming: 'Sistema di prenotazione in arrivo...'
          },
          footer: {
            hours: 'Orari di Apertura',
            contacts: 'Contatti',
            follow: 'Seguici',
            days: {
              monday: 'Lunedì',
              tuesday: 'Martedì',
              wednesday: 'Mercoledì',
              thursday: 'Giovedì',
              friday: 'Venerdì',
              saturday: 'Sabato',
              sunday: 'Domenica'
            },
            closed: 'Chiuso',
            rights: 'Tutti i diritti riservati'
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About Us',
            gallery: 'Gallery',
            reviews: 'Reviews',
            prices: 'Price List',
            contact: 'Contact'
          },
          hero: {
            title: 'HairTop Lugano',
            about: 'About Us',
            book: 'Book Now'
          },
          about: {
            title: 'About Us',
            description: 'Hair Top Lugano salon, in the center of Lugano, offers high-quality hairdressing and barber services to enhance your unique style. Let yourself be pampered by expert professionals who take care of every detail for an impeccable look.',
            transport: {
              title: 'Nearest public transport:',
              description: 'The salon is a few minutes walk from Lugano railway station.'
            },
            team: {
              title: 'The team:',
              description: 'The owner Luigi welcomes every client with kindness and professionalism, trying to offer everyone a first-class service.'
            },
            strengths: {
              title: 'Our strengths:',
              environment: '• Environment: refined and professional',
              specialization: '• Specialized in: cutting, styling, color, beard'
            }
          },
          gallery: {
            title: 'Our Gallery',
            viewAll: 'View all photos',
            follow: 'Follow us on Instagram'
          },
          reviews: {
            title: 'Reviews'
          },
          prices: {
            title: 'Price List',
            book: 'Book'
          },
          booking: {
            title: 'Book an Appointment',
            coming: 'Booking system coming soon...'
          },
          footer: {
            hours: 'Opening Hours',
            contacts: 'Contacts',
            follow: 'Follow Us',
            days: {
              monday: 'Monday',
              tuesday: 'Tuesday',
              wednesday: 'Wednesday',
              thursday: 'Thursday',
              friday: 'Friday',
              saturday: 'Saturday',
              sunday: 'Sunday'
            },
            closed: 'Closed',
            rights: 'All rights reserved'
          }
        }
      },
      fr: {
        translation: {
          nav: {
            home: 'Accueil',
            about: 'À Propos',
            gallery: 'Galerie',
            reviews: 'Avis',
            prices: 'Tarifs',
            contact: 'Contact'
          },
          hero: {
            title: 'HairTop Lugano',
            about: 'À Propos',
            book: 'Réserver'
          },
          about: {
            title: 'À Propos',
            description: 'Le salon Hair Top Lugano, au centre de Lugano, vous propose des services de coiffure et de barbier de haute qualité pour mettre en valeur votre style unique. Laissez-vous choyer par des professionnels experts qui soignent chaque détail pour un look impeccable.',
            transport: {
              title: 'Transport public le plus proche :',
              description: 'Le salon se trouve à quelques minutes à pied de la gare de Lugano.'
            },
            team: {
              title: 'L\'équipe :',
              description: 'Le propriétaire Luigi accueille chaque client avec gentillesse et professionnalisme, en essayant d\'offrir à tous un service de première qualité.'
            },
            strengths: {
              title: 'Nos points forts :',
              environment: '• Environnement : soigné et professionnel',
              specialization: '• Spécialisé en : coupe, coiffage, couleur, barbe'
            }
          },
          gallery: {
            title: 'Notre Galerie',
            viewAll: 'Voir toutes les photos',
            follow: 'Suivez-nous sur Instagram'
          },
          reviews: {
            title: 'Avis'
          },
          prices: {
            title: 'Tarifs',
            book: 'Réserver'
          },
          booking: {
            title: 'Prendre Rendez-vous',
            coming: 'Système de réservation bientôt disponible...'
          },
          footer: {
            hours: 'Horaires d\'Ouverture',
            contacts: 'Contacts',
            follow: 'Suivez-nous',
            days: {
              monday: 'Lundi',
              tuesday: 'Mardi',
              wednesday: 'Mercredi',
              thursday: 'Jeudi',
              friday: 'Vendredi',
              saturday: 'Samedi',
              sunday: 'Dimanche'
            },
            closed: 'Fermé',
            rights: 'Tous droits réservés'
          }
        }
      },
      de: {
        translation: {
          nav: {
            home: 'Home',
            about: 'Über Uns',
            gallery: 'Galerie',
            reviews: 'Bewertungen',
            prices: 'Preisliste',
            contact: 'Kontakt'
          },
          hero: {
            title: 'HairTop Lugano',
            about: 'Über Uns',
            book: 'Buchen'
          },
          about: {
            title: 'Über Uns',
            description: 'Der Salon Hair Top Lugano im Zentrum von Lugano bietet Ihnen hochwertige Friseur- und Barbierdienstleistungen, um Ihren einzigartigen Stil zu unterstreichen. Lassen Sie sich von erfahrenen Profis verwöhnen, die auf jedes Detail achten, für einen makellosen Look.',
            transport: {
              title: 'Nächster öffentlicher Verkehr:',
              description: 'Der Salon ist nur wenige Gehminuten vom Bahnhof Lugano entfernt.'
            },
            team: {
              title: 'Das Team:',
              description: 'Der Inhaber Luigi empfängt jeden Kunden mit Freundlichkeit und Professionalität und versucht, allen einen erstklassigen Service zu bieten.'
            },
            strengths: {
              title: 'Unsere Stärken:',
              environment: '• Umgebung: gepflegt und professionell',
              specialization: '• Spezialisiert auf: Schnitt, Styling, Farbe, Bart'
            }
          },
          gallery: {
            title: 'Unsere Galerie',
            viewAll: 'Alle Fotos ansehen',
            follow: 'Folgen Sie uns auf Instagram'
          },
          reviews: {
            title: 'Bewertungen'
          },
          prices: {
            title: 'Preisliste',
            book: 'Buchen'
          },
          booking: {
            title: 'Termin Buchen',
            coming: 'Buchungssystem in Kürze verfügbar...'
          },
          footer: {
            hours: 'Öffnungszeiten',
            contacts: 'Kontakt',
            follow: 'Folgen Sie uns',
            days: {
              monday: 'Montag',
              tuesday: 'Dienstag',
              wednesday: 'Mittwoch',
              thursday: 'Donnerstag',
              friday: 'Freitag',
              saturday: 'Samstag',
              sunday: 'Sonntag'
            },
            closed: 'Geschlossen',
            rights: 'Alle Rechte vorbehalten'
          }
        }
      }
    },
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 