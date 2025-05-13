import type { TripPlan, TripSummary } from '@/shared/types/trip';

export const mockTrips: TripSummary[] = [
   {
      id: 'trip-1',
      title: 'Weekend in Paris',
      destination: 'Paris, France',
      startDate: '2023-06-15',
      endDate: '2023-06-17',
      summary: 'A romantic weekend getaway to the City of Light',
      travelers: 2,
   },
   {
      id: 'trip-2',
      title: 'Tokyo Adventure',
      destination: 'Tokyo, Japan',
      startDate: '2023-07-10',
      endDate: '2023-07-20',
      summary: 'Exploring the vibrant streets and culture of Tokyo',
      travelers: 1,
   },
   {
      id: 'trip-3',
      title: 'Italian Getaway',
      destination: 'Italy',
      startDate: '2023-08-05',
      endDate: '2023-08-15',
      summary: 'Food, history, and culture in Rome, Florence, and Venice',
      travelers: 2,
   },
];

export const sampleTrip: TripPlan = {
   id: 'trip-123456',
   // title: 'Italian Adventure: Rome & Florence',
   title: 'Rome & Florence Trip',
   destination: 'Italy',
   startDate: '2023-06-15',
   endDate: '2023-06-22',
   duration: 8,
   travelers: 2,
   budget: '$3,000',
   summary:
      'An 8-day journey through the heart of Italy, exploring the historic cities of Rome and Florence. Experience world-class art, ancient ruins, and delicious Italian cuisine while staying in comfortable accommodations in the city centers.',
   days: [
      {
         day: 1,
         date: '2023-06-15',
         title: 'Arrival in Rome',
         description:
            "Welcome to the Eternal City! Today you'll arrive in Rome and settle into your accommodation.",
         activities: [
            {
               time: '14:00',
               title: 'Check-in at Hotel Artemide',
               description:
                  'A 4-star hotel located in the heart of Rome, within walking distance to many attractions.',
               location: 'Hotel Artemide',
               address: 'Via Nazionale, 22, 00184 Roma RM, Italy',
            },
            {
               time: '16:00',
               title: 'Afternoon Stroll',
               description:
                  "Take a leisurely walk to the Spanish Steps and Trevi Fountain to begin soaking in Rome's atmosphere.",
               location: 'Spanish Steps & Trevi Fountain',
               address: 'Piazza di Trevi, 00187 Roma RM, Italy',
            },
            {
               time: '19:30',
               title: 'Welcome Dinner',
               description:
                  'Enjoy authentic Roman cuisine at a traditional trattoria.',
               location: 'Trattoria Da Valentino',
               address: 'Via del Lavatore, 44, 00187 Roma RM, Italy',
               cost: '€60-80 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Artemide',
            address: 'Via Nazionale, 22, 00184 Roma RM, Italy',
            checkIn: '14:00',
            checkOut: '11:00',
            cost: '€180 per night',
            bookingReference: 'ROME123456',
         },
         meals: {
            dinner: {
               time: '19:30',
               title: 'Dinner at Trattoria Da Valentino',
               description: 'Traditional Roman pasta dishes and local wine.',
               location: 'Trattoria Da Valentino',
               address: 'Via del Lavatore, 44, 00187 Roma RM, Italy',
               cost: '€60-80 for two',
            },
         },
         transportation: {
            mode: 'Taxi',
            details: 'From Rome Fiumicino Airport to Hotel Artemide',
            departureTime: '13:00',
            arrivalTime: '13:45',
            cost: '€50',
         },
         notes: 'Remember to have some euros on hand for the taxi and small expenses. The hotel offers free Wi-Fi.',
      },
      {
         day: 2,
         date: '2023-06-16',
         title: 'Ancient Rome Exploration',
         description:
            'Discover the wonders of ancient Rome with visits to the Colosseum, Roman Forum, and Palatine Hill.',
         activities: [
            {
               time: '08:30',
               title: 'Breakfast at Hotel',
               description:
                  "Enjoy the hotel's breakfast buffet to fuel up for a day of exploration.",
               location: 'Hotel Artemide',
            },
            {
               time: '10:00',
               title: 'Colosseum & Roman Forum Tour',
               description:
                  'A guided 3-hour tour of the Colosseum, Roman Forum, and Palatine Hill with skip-the-line access.',
               location: 'Colosseum',
               address: 'Piazza del Colosseo, 1, 00184 Roma RM, Italy',
               cost: '€60 per person',
               tags: ['Historic', 'Must-See'],
            },
            {
               time: '13:30',
               title: 'Lunch near the Colosseum',
               description:
                  'Enjoy a relaxing lunch at a local restaurant with views of the ancient ruins.',
               location: 'Aroma Restaurant',
               address: 'Via Labicana, 125, 00184 Roma RM, Italy',
               cost: '€40-60 per person',
            },
            {
               time: '15:30',
               title: 'Capitoline Museums',
               description:
                  "Explore one of the world's oldest public museums with an impressive collection of classical sculptures and Renaissance art.",
               location: 'Capitoline Museums',
               address: 'Piazza del Campidoglio, 1, 00186 Roma RM, Italy',
               cost: '€15 per person',
            },
            {
               time: '18:00',
               title: 'Evening Walk & Aperitivo',
               description:
                  'Stroll through the charming streets of Monti neighborhood and enjoy a pre-dinner aperitivo.',
               location: 'Monti District',
               address: 'Via dei Serpenti, Roma RM, Italy',
            },
            {
               time: '20:00',
               title: 'Dinner in Monti',
               description:
                  'Dine at a local favorite known for its authentic Roman dishes.',
               location: 'La Taverna dei Fori Imperiali',
               address: 'Via della Madonna dei Monti, 9, 00184 Roma RM, Italy',
               cost: '€70-90 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Artemide',
            address: 'Via Nazionale, 22, 00184 Roma RM, Italy',
            cost: '€180 per night',
            bookingReference: 'ROME123456',
         },
         meals: {
            breakfast: {
               time: '08:30',
               title: 'Breakfast at Hotel',
               description: 'Continental breakfast buffet',
               location: 'Hotel Artemide',
            },
            lunch: {
               time: '13:30',
               title: 'Lunch at Aroma Restaurant',
               description: 'Italian cuisine with Colosseum views',
               location: 'Aroma Restaurant',
               address: 'Via Labicana, 125, 00184 Roma RM, Italy',
               cost: '€40-60 per person',
            },
            dinner: {
               time: '20:00',
               title: 'Dinner at La Taverna dei Fori Imperiali',
               description:
                  'Family-run restaurant with traditional Roman cuisine',
               location: 'La Taverna dei Fori Imperiali',
               address: 'Via della Madonna dei Monti, 9, 00184 Roma RM, Italy',
               cost: '€70-90 for two',
            },
         },
         notes: "Wear comfortable shoes and bring water, as you'll be walking a lot today. Don't forget your camera!",
      },
      {
         day: 3,
         date: '2023-06-17',
         title: "Vatican City & Rome's Piazzas",
         description:
            "Visit the magnificent Vatican Museums, St. Peter's Basilica, and explore Rome's famous piazzas.",
         activities: [
            {
               time: '07:30',
               title: 'Early Breakfast',
               description:
                  'Quick breakfast at the hotel before heading to the Vatican.',
               location: 'Hotel Artemide',
            },
            {
               time: '09:00',
               title: 'Vatican Museums & Sistine Chapel',
               description:
                  "Early access guided tour of the Vatican Museums, including Michelangelo's Sistine Chapel.",
               location: 'Vatican Museums',
               address: 'Viale Vaticano, 00165 Roma RM, Italy',
               cost: '€70 per person',
               tags: ['Art', 'Must-See'],
            },
            {
               time: '12:00',
               title: "St. Peter's Basilica",
               description:
                  "Visit the world's largest church and marvel at its Renaissance architecture and art.",
               location: "St. Peter's Basilica",
               address:
                  'Piazza San Pietro, 00120 Città del Vaticano, Vatican City',
            },
            {
               time: '13:30',
               title: 'Lunch near Vatican City',
               description:
                  'Enjoy lunch at a local restaurant known for its Roman specialties.',
               location: 'Ristorante Arlu',
               address: 'Via Borgo Pio, 135, 00193 Roma RM, Italy',
               cost: '€30-50 per person',
            },
            {
               time: '15:30',
               title: 'Piazza Navona & Pantheon',
               description:
                  "Explore Rome's beautiful Piazza Navona with its Baroque fountains, then visit the ancient Pantheon.",
               location: 'Piazza Navona',
               address: 'Piazza Navona, 00186 Roma RM, Italy',
            },
            {
               time: '17:30',
               title: 'Gelato Break',
               description:
                  "Try some of Rome's best gelato at a renowned gelateria.",
               location: 'Giolitti',
               address:
                  'Via degli Uffici del Vicario, 40, 00186 Roma RM, Italy',
               cost: '€5-7 per person',
            },
            {
               time: '19:30',
               title: 'Dinner in Trastevere',
               description:
                  'Cross the Tiber River to dine in the charming neighborhood of Trastevere.',
               location: 'Da Enzo al 29',
               address: 'Via dei Vascellari, 29, 00153 Roma RM, Italy',
               cost: '€60-80 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Artemide',
            address: 'Via Nazionale, 22, 00184 Roma RM, Italy',
            cost: '€180 per night',
            bookingReference: 'ROME123456',
         },
         meals: {
            breakfast: {
               time: '07:30',
               title: 'Breakfast at Hotel',
               description: 'Quick continental breakfast',
               location: 'Hotel Artemide',
            },
            lunch: {
               time: '13:30',
               title: 'Lunch at Ristorante Arlu',
               description: 'Traditional Roman cuisine near the Vatican',
               location: 'Ristorante Arlu',
               address: 'Via Borgo Pio, 135, 00193 Roma RM, Italy',
               cost: '€30-50 per person',
            },
            dinner: {
               time: '19:30',
               title: 'Dinner at Da Enzo al 29',
               description:
                  'Authentic Roman cuisine in the heart of Trastevere',
               location: 'Da Enzo al 29',
               address: 'Via dei Vascellari, 29, 00153 Roma RM, Italy',
               cost: '€60-80 for two',
            },
         },
         notes: 'The Vatican has a dress code: no shorts, bare shoulders, or miniskirts. Bring a light scarf to cover up if needed.',
      },
      {
         day: 4,
         date: '2023-06-18',
         title: 'Travel to Florence',
         description:
            'Bid farewell to Rome and travel to Florence, the birthplace of the Renaissance.',
         activities: [
            {
               time: '07:30',
               title: 'Breakfast & Check-out',
               description: 'Enjoy breakfast at the hotel before checking out.',
               location: 'Hotel Artemide',
            },
            {
               time: '09:30',
               title: 'Train to Florence',
               description:
                  'Take a high-speed train from Roma Termini to Firenze Santa Maria Novella station.',
               location: 'Roma Termini Station',
               address: 'Piazza dei Cinquecento, 00185 Roma RM, Italy',
               cost: '€50 per person',
            },
            {
               time: '11:30',
               title: 'Arrival in Florence',
               description: "Arrive at Florence's main train station.",
               location: 'Firenze Santa Maria Novella Station',
               address: 'Piazza della Stazione, 50123 Firenze FI, Italy',
            },
            {
               time: '12:30',
               title: 'Check-in at Hotel',
               description:
                  'Check into your boutique hotel in the historic center of Florence.',
               location: 'Hotel Brunelleschi',
               address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            },
            {
               time: '14:00',
               title: 'Lunch in Piazza della Signoria',
               description:
                  "Enjoy lunch with a view of Florence's famous square.",
               location: 'Ristorante Cafaggi',
               address: 'Via Guelfa, 35r, 50129 Firenze FI, Italy',
               cost: '€30-50 per person',
            },
            {
               time: '16:00',
               title: 'Orientation Walk',
               description:
                  "Take a leisurely walk through Florence's historic center, including Piazza della Signoria, Ponte Vecchio, and the exterior of the Duomo.",
               location: 'Historic Center of Florence',
            },
            {
               time: '19:30',
               title: 'Dinner in Florence',
               description:
                  'Enjoy Tuscan cuisine at a traditional Florentine restaurant.',
               location: 'Trattoria Sostanza',
               address: 'Via del Porcellana, 25/R, 50123 Firenze FI, Italy',
               cost: '€60-80 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Brunelleschi',
            address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            checkIn: '12:30',
            checkOut: '11:00',
            cost: '€220 per night',
            bookingReference: 'FLORENCE789012',
         },
         meals: {
            breakfast: {
               time: '07:30',
               title: 'Breakfast at Hotel Artemide',
               description: 'Final breakfast in Rome',
               location: 'Hotel Artemide',
            },
            lunch: {
               time: '14:00',
               title: 'Lunch at Ristorante Cafaggi',
               description: 'Traditional Tuscan cuisine',
               location: 'Ristorante Cafaggi',
               address: 'Via Guelfa, 35r, 50129 Firenze FI, Italy',
               cost: '€30-50 per person',
            },
            dinner: {
               time: '19:30',
               title: 'Dinner at Trattoria Sostanza',
               description: 'Famous for its butter chicken and artichoke pie',
               location: 'Trattoria Sostanza',
               address: 'Via del Porcellana, 25/R, 50123 Firenze FI, Italy',
               cost: '€60-80 for two',
            },
         },
         transportation: {
            mode: 'High-speed Train',
            details:
               'Trenitalia Frecciarossa from Roma Termini to Firenze S.M. Novella',
            departureTime: '09:30',
            arrivalTime: '11:30',
            cost: '€50 per person',
            bookingReference: 'TRAIN456789',
         },
         notes: 'Keep your valuables secure on the train. The hotel in Florence is within walking distance from the train station, but you can also take a taxi if you have heavy luggage.',
      },
      {
         day: 5,
         date: '2023-06-19',
         title: 'Florence Renaissance Art',
         description:
            'Immerse yourself in Renaissance art with visits to the Uffizi Gallery and Accademia Gallery.',
         activities: [
            {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Enjoy breakfast at your hotel.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '09:30',
               title: 'Uffizi Gallery',
               description:
                  "Guided tour of one of the world's most important art museums, home to masterpieces by Botticelli, Leonardo da Vinci, Michelangelo, and more.",
               location: 'Uffizi Gallery',
               address: 'Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy',
               cost: '€20 entrance + €25 guided tour per person',
               tags: ['Art', 'Must-See'],
            },
            {
               time: '13:00',
               title: 'Lunch in Florence',
               description: 'Enjoy lunch at a local trattoria.',
               location: 'Trattoria Antico Fattore',
               address: 'Via Lambertesca, 1/3, 50122 Firenze FI, Italy',
               cost: '€25-40 per person',
            },
            {
               time: '15:00',
               title: 'Accademia Gallery',
               description:
                  "Visit the Accademia Gallery to see Michelangelo's David and other Renaissance masterpieces.",
               location: 'Accademia Gallery',
               address: 'Via Ricasoli, 58/60, 50122 Firenze FI, Italy',
               cost: '€12 per person',
               tags: ['Art', 'Must-See'],
            },
            {
               time: '17:30',
               title: 'Piazzale Michelangelo',
               description:
                  'Head to this scenic overlook for panoramic views of Florence at sunset.',
               location: 'Piazzale Michelangelo',
               address: 'Piazzale Michelangelo, 50125 Firenze FI, Italy',
            },
            {
               time: '20:00',
               title: 'Dinner with a View',
               description:
                  'Enjoy dinner at a restaurant with views of Florence.',
               location: 'La Loggia Restaurant',
               address: 'Piazzale Michelangelo, 1, 50125 Firenze FI, Italy',
               cost: '€70-100 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Brunelleschi',
            address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            cost: '€220 per night',
            bookingReference: 'FLORENCE789012',
         },
         meals: {
            breakfast: {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Continental breakfast with Italian pastries',
               location: 'Hotel Brunelleschi',
            },
            lunch: {
               time: '13:00',
               title: 'Lunch at Trattoria Antico Fattore',
               description: 'Traditional Tuscan cuisine',
               location: 'Trattoria Antico Fattore',
               address: 'Via Lambertesca, 1/3, 50122 Firenze FI, Italy',
               cost: '€25-40 per person',
            },
            dinner: {
               time: '20:00',
               title: 'Dinner at La Loggia Restaurant',
               description: 'Fine dining with panoramic views of Florence',
               location: 'La Loggia Restaurant',
               address: 'Piazzale Michelangelo, 1, 50125 Firenze FI, Italy',
               cost: '€70-100 for two',
            },
         },
         notes: 'Book your museum tickets in advance to avoid long lines. The walk to Piazzale Michelangelo involves uphill sections, so wear comfortable shoes.',
      },
      {
         day: 6,
         date: '2023-06-20',
         title: 'Florence Duomo & Artisan Workshops',
         description:
            "Explore Florence's magnificent cathedral complex and discover the city's artisan traditions.",
         activities: [
            {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Enjoy breakfast at your hotel.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '09:30',
               title: 'Florence Cathedral Complex',
               description:
                  "Visit the Florence Cathedral (Duomo), climb Brunelleschi's Dome for panoramic views, explore the Baptistery and Bell Tower.",
               location: 'Florence Cathedral',
               address: 'Piazza del Duomo, 50122 Firenze FI, Italy',
               cost: '€18 combined ticket per person',
               tags: ['Historic', 'Must-See'],
            },
            {
               time: '13:00',
               title: 'Lunch near the Duomo',
               description: 'Enjoy lunch at a restaurant near the cathedral.',
               location: 'Osteria del Porcellino',
               address: 'Piazza del Mercato Nuovo, 50123 Firenze FI, Italy',
               cost: '€25-40 per person',
            },
            {
               time: '15:00',
               title: 'Artisan Workshop Tour',
               description:
                  'Take a guided tour of traditional Florentine artisan workshops in the Oltrarno district, including leather crafting, paper marbling, and goldsmithing.',
               location: 'Oltrarno District',
               address: 'Oltrarno, Florence, Italy',
               cost: '€45 per person',
            },
            {
               time: '18:00',
               title: 'Aperitivo Time',
               description:
                  'Experience the Italian tradition of pre-dinner drinks and snacks at a local wine bar.',
               location: 'Enoteca Pitti Gola e Cantina',
               address: "Piazza de' Pitti, 16, 50125 Firenze FI, Italy",
               cost: '€15-20 per person',
            },
            {
               time: '20:00',
               title: 'Dinner in Oltrarno',
               description:
                  'Enjoy dinner at a local favorite in the Oltrarno neighborhood.',
               location: 'Il Santo Bevitore',
               address: 'Via di Santo Spirito, 64, 50125 Firenze FI, Italy',
               cost: '€60-80 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Brunelleschi',
            address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            cost: '€220 per night',
            bookingReference: 'FLORENCE789012',
         },
         meals: {
            breakfast: {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Continental breakfast',
               location: 'Hotel Brunelleschi',
            },
            lunch: {
               time: '13:00',
               title: 'Lunch at Osteria del Porcellino',
               description: 'Traditional Tuscan cuisine',
               location: 'Osteria del Porcellino',
               address: 'Piazza del Mercato Nuovo, 50123 Firenze FI, Italy',
               cost: '€25-40 per person',
            },
            dinner: {
               time: '20:00',
               title: 'Dinner at Il Santo Bevitore',
               description:
                  'Contemporary Tuscan cuisine in a rustic-chic setting',
               location: 'Il Santo Bevitore',
               address: 'Via di Santo Spirito, 64, 50125 Firenze FI, Italy',
               cost: '€60-80 for two',
            },
         },
         notes: 'Climbing the Duomo requires 463 steps and is not recommended for those with claustrophobia or mobility issues. Modest dress is required to enter the cathedral.',
      },
      {
         day: 7,
         date: '2023-06-21',
         title: 'Tuscan Countryside Day Trip',
         description:
            'Venture into the beautiful Tuscan countryside to visit vineyards, medieval towns, and enjoy local cuisine.',
         activities: [
            {
               time: '07:30',
               title: 'Breakfast at Hotel',
               description: 'Early breakfast at your hotel.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '09:00',
               title: 'Tuscany Day Tour Departure',
               description:
                  'Join a small group tour to explore the Tuscan countryside, including the Chianti wine region and medieval towns.',
               location: 'Meeting point near hotel',
               cost: '€150 per person (includes transportation, guide, wine tasting, and lunch)',
               tags: ['Wine', 'Scenic'],
            },
            {
               time: '10:30',
               title: 'Visit to Siena',
               description:
                  'Explore the medieval city of Siena, including its famous Piazza del Campo and stunning cathedral.',
               location: 'Siena',
               address: 'Siena, Italy',
            },
            {
               time: '13:00',
               title: 'Lunch at a Tuscan Farm',
               description:
                  'Enjoy a farm-to-table lunch at a traditional Tuscan farmhouse with wine tasting.',
               location: 'Fattoria Poggio Alloro',
               address: 'San Gimignano, Italy',
               cost: 'Included in tour price',
            },
            {
               time: '15:00',
               title: 'San Gimignano',
               description:
                  'Visit the picturesque hilltop town known for its medieval towers.',
               location: 'San Gimignano',
               address: 'San Gimignano, Italy',
            },
            {
               time: '17:00',
               title: 'Chianti Wine Tasting',
               description:
                  'Visit a family-owned winery in the Chianti region for a guided tasting of local wines.',
               location: 'Chianti Region',
               cost: 'Included in tour price',
               tags: ['Wine'],
            },
            {
               time: '19:30',
               title: 'Return to Florence',
               description: 'Return to your hotel in Florence.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '21:00',
               title: 'Farewell Dinner',
               description:
                  "Enjoy a special farewell dinner at one of Florence's finest restaurants.",
               location: 'Borgo San Jacopo',
               address: 'Borgo S. Jacopo, 62, 50125 Firenze FI, Italy',
               cost: '€100-150 for two',
            },
         ],
         accommodation: {
            name: 'Hotel Brunelleschi',
            address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            cost: '€220 per night',
            bookingReference: 'FLORENCE789012',
         },
         meals: {
            breakfast: {
               time: '07:30',
               title: 'Breakfast at Hotel',
               description: 'Early continental breakfast',
               location: 'Hotel Brunelleschi',
            },
            lunch: {
               time: '13:00',
               title: 'Lunch at Tuscan Farm',
               description:
                  'Traditional Tuscan meal with local ingredients and wine',
               location: 'Fattoria Poggio Alloro',
               address: 'San Gimignano, Italy',
               cost: 'Included in tour price',
            },
            dinner: {
               time: '21:00',
               title: 'Farewell Dinner at Borgo San Jacopo',
               description: 'Fine dining with river views',
               location: 'Borgo San Jacopo',
               address: 'Borgo S. Jacopo, 62, 50125 Firenze FI, Italy',
               cost: '€100-150 for two',
            },
         },
         transportation: {
            mode: 'Minivan Tour',
            details: 'Small group tour with air-conditioned minivan',
            departureTime: '09:00',
            arrivalTime: '19:30',
            cost: 'Included in tour price',
         },
         notes: 'Bring a camera, sunscreen, and a light jacket as evenings in the countryside can be cool. The tour involves some walking on uneven surfaces and hills.',
      },
      {
         day: 8,
         date: '2023-06-22',
         title: 'Departure Day',
         description: 'Enjoy your final morning in Florence before departing.',
         activities: [
            {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Final breakfast at your hotel.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '09:30',
               title: 'Last-Minute Shopping',
               description: 'Time for any last-minute shopping or sightseeing.',
               location: 'Florence City Center',
            },
            {
               time: '11:00',
               title: 'Check-out',
               description:
                  'Check out of your hotel and store luggage if needed.',
               location: 'Hotel Brunelleschi',
            },
            {
               time: '12:30',
               title: 'Farewell Lunch',
               description: 'Enjoy a final meal in Florence.',
               location: 'Mercato Centrale',
               address: 'Piazza del Mercato Centrale, 50123 Firenze FI, Italy',
               cost: '€20-30 per person',
            },
            {
               time: '15:00',
               title: 'Transfer to Airport',
               description:
                  'Private transfer to Florence Airport for your departure flight.',
               location: 'Florence Airport',
               address: 'Via del Termine, 11, 50127 Firenze FI, Italy',
               cost: '€40',
            },
         ],
         accommodation: {
            name: 'Hotel Brunelleschi',
            address: "Piazza Sant'Elisabetta, 3, 50122 Firenze FI, Italy",
            checkOut: '11:00',
            bookingReference: 'FLORENCE789012',
         },
         meals: {
            breakfast: {
               time: '08:00',
               title: 'Breakfast at Hotel',
               description: 'Final breakfast in Florence',
               location: 'Hotel Brunelleschi',
            },
            lunch: {
               time: '12:30',
               title: 'Lunch at Mercato Centrale',
               description:
                  'Explore the food market and enjoy local specialties',
               location: 'Mercato Centrale',
               address: 'Piazza del Mercato Centrale, 50123 Firenze FI, Italy',
               cost: '€20-30 per person',
            },
         },
         transportation: {
            mode: 'Private Transfer',
            details: 'Hotel to Florence Airport',
            departureTime: '15:00',
            arrivalTime: '15:30',
            cost: '€40',
         },
         notes: 'Make sure to keep your passport and travel documents easily accessible. If your flight is later in the day, the hotel can store your luggage after check-out.',
      },
   ],
   totalCost: '€3,200',
   createdAt: '2023-05-01T10:30:00Z',
   updatedAt: '2023-05-02T14:15:00Z',
};
