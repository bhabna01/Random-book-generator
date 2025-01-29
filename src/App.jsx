
import React, { useState, useEffect, useCallback } from 'react';
import {faker} from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
import { CSVLink } from 'react-csv';

// function generateBookTitle(language) {
//   // Define patterns for each language
//   const patterns = {
//     en_US: [
//       "The #Adjective# #Noun#",
//       "A #Noun# of #Noun#",
//       "#Adjective# #Noun#",
//       "The #Noun# of the #Adjective# #Noun#",
//       "#Verb# the #Noun#",
//       "#Noun#'s #Noun#",
//       "The #Profession# and the #Noun#",
//       "#Adjective# #Noun# in #Place#",
//       "The #Number# #Noun.Plural#",
//       "When #Noun.Plural# #Verb#"
//     ],
//     de_DE: [
//       "Das #Adjective# #Noun#",
//       "Die #Adjective# #Noun#",
//       "Der #Adjective# #Noun#",
//       "#Adjective# #Noun# und #Noun#",
//       "Ein #Noun# für #Noun.Plural#",
//       "Die #Noun.Plural# des #Noun#",
//       "Das Geheimnis der #Noun.Plural#",
//       "Im Schatten der #Noun.Plural#",
//       "Die #Adjective# #Noun.Plural# von #Place#",
//       "Der #Noun# von #Place#"
//     ],
//     fr_FR: [
//       "Le #Noun# #Adjective#",
//       "La #Adjective# #Noun# de #Noun#",
//       "Un #Noun# à #Place#",
//       "Le #Noun# du #Profession#",
//       "#Verb# le #Noun#",
//       "Les #Noun.Plural# et les #Noun.Plural#",
//       "Le #Profession# et la #Noun#",
//       "#Adjective# #Noun.Plural# à #Place#",
//       "Les #Number# #Noun.Plural#",
//       "Quand les #Noun.Plural# #Verb#"
//     ]
//   };

//   // Define word lists for each language
//   const wordLists = {
//     en_US: {
//       Adjective: ['great', 'small', 'old', 'new', 'dark', 'bright', 'strong', 'weak', 'quick', 'slow'],
//       Noun: ['book', 'house', 'forest', 'star', 'river', 'mountain', 'person', 'child', 'city', 'land'],
//       'Noun.Plural': ['books', 'houses', 'forests', 'stars', 'rivers', 'mountains', 'people', 'children', 'cities', 'lands'],
//       Place: ['New York', 'London', 'Paris', 'Berlin', 'Tokyo', 'Sydney', 'Rome', 'Moscow', 'Toronto', 'Dubai'],
//       Profession: ['writer', 'teacher', 'doctor', 'artist', 'engineer', 'scientist', 'chef', 'pilot', 'lawyer', 'musician'],
//       Verb: ['read', 'write', 'explore', 'discover', 'create', 'build', 'solve', 'travel', 'learn', 'teach'],
//       Number: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
//     },
//     de_DE: {
//       Adjective: ['groß', 'klein', 'alt', 'neu', 'dunkel', 'hell', 'stark', 'schwach', 'schnell', 'langsam'],
//       Noun: ['Buch', 'Haus', 'Wald', 'Stern', 'Fluss', 'Berg', 'Mensch', 'Kind', 'Stadt', 'Land'],
//       'Noun.Plural': ['Bücher', 'Häuser', 'Wälder', 'Sterne', 'Flüsse', 'Berge', 'Menschen', 'Kinder', 'Städte', 'Länder'],
//       Place: ['Berlin', 'München', 'Hamburg', 'Wien', 'Zürich', 'Frankfurt', 'Köln', 'Stuttgart', 'Dresden', 'Leipzig'],
//       Profession: ['Schriftsteller', 'Lehrer', 'Arzt', 'Künstler', 'Ingenieur', 'Wissenschaftler', 'Koch', 'Pilot', 'Anwalt', 'Musiker'],
//       Verb: ['lesen', 'schreiben', 'erkunden', 'entdecken', 'erschaffen', 'bauen', 'lösen', 'reisen', 'lernen', 'lehren'],
//       Number: ['eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn']
//     },
//     fr_FR: {
//       Adjective: ['grand', 'petit', 'vieux', 'nouveau', 'sombre', 'lumineux', 'fort', 'faible', 'rapide', 'lent'],
//       Noun: ['livre', 'maison', 'forêt', 'étoile', 'rivière', 'montagne', 'personne', 'enfant', 'ville', 'pays'],
//       'Noun.Plural': ['livres', 'maisons', 'forêts', 'étoiles', 'rivières', 'montagnes', 'personnes', 'enfants', 'villes', 'pays'],
//       Place: ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Lille', 'Rennes'],
//       Profession: ['écrivain', 'professeur', 'médecin', 'artiste', 'ingénieur', 'scientifique', 'chef', 'pilote', 'avocat', 'musicien'],
//       Verb: ['lire', 'écrire', 'explorer', 'découvrir', 'créer', 'construire', 'résoudre', 'voyager', 'apprendre', 'enseigner'],
//       Number: ['un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix']
//     }
//   };

//   // Get the patterns and word list for the selected language
//   const selectedPatterns = patterns[language];
//   const selectedWords = wordLists[language];

//   // Choose a random pattern and replace placeholders with random words
//   const pattern = selectedPatterns[Math.floor(Math.random() * selectedPatterns.length)];
//   return pattern.replace(/#(.*?)#/g, (_, key) => {
//     const wordList = selectedWords[key];
//     return wordList[Math.floor(Math.random() * wordList.length)];
//   });
// }
// function generateBookTitle(language, seedOffset) {
//   faker.seed(seedOffset);  // Set the seed before generating a title
  
//   const patterns = {
//       en_US: [
//           "The {adjective} {noun}",
//           "A {noun} of {noun}",
//           "{adjective} {noun}",
//           "The {noun} of the {adjective} {noun}",
//           "{verb} the {noun}",
//           "{noun}'s {noun}",
//           "The {profession} and the {noun}",
//           "{adjective} {noun} in {place}",
//           "The {number} {pluralNoun}",
//           "When {pluralNoun} {verb}"
//       ],
//   };

//   const words = {
//       adjective: ["great", "small", "old", "new", "dark", "bright"],
//       noun: ["book", "house", "forest", "star", "river"],
//       pluralNoun: ["books", "houses", "forests", "stars"],
//       place: ["New York", "London", "Paris"],
//       profession: ["writer", "teacher", "doctor"],
//       verb: ["read", "write", "explore"],
//       number: ["one", "two", "three"],
//   };

//   const pattern = faker.helpers.arrayElement(patterns[language]);
//   return pattern.replace(/\{(.*?)\}/g, (_, key) => faker.helpers.arrayElement(words[key]));
// }

function generateBookTitle(language, seedOffset) {
  faker.seed(seedOffset);  // Set the seed before generating a title

  const patterns = {
      en_US: [
          "The {adjective} {noun}",
          "A {noun} of {noun}",
          "{adjective} {noun}",
          "The {noun} of the {adjective} {noun}",
          "{verb} the {noun}",
          "{noun}'s {noun}",
          "The {profession} and the {noun}",
          "{adjective} {noun} in {place}",
          "The {number} {pluralNoun}",
          "When {pluralNoun} {verb}"
      ],
      fr_FR: [
          "Le {adjective} {noun}",
          "Un {noun} de {noun}",
          "{adjective} {noun}",
          "Le {noun} du {adjective} {noun}",
          "{verb} le {noun}",
          "{noun} et {noun}",
          "Le {profession} et le {noun}",
          "{adjective} {noun} à {place}",
          "Les {number} {pluralNoun}",
          "Quand {pluralNoun} {verb}"
      ],
      de_DE: [
          "Der {adjective} {noun}",
          "Ein {noun} von {noun}",
          "{adjective} {noun}",
          "Der {noun} des {adjective} {noun}",
          "{verb} den {noun}",
          "{noun}s {noun}",
          "Der {profession} und der {noun}",
          "{adjective} {noun} in {place}",
          "Die {number} {pluralNoun}",
          "Wenn {pluralNoun} {verb}"
      ]
  };

  const words = {
      en_US: {
          adjective: ["great", "small", "old", "new", "dark", "bright"],
          noun: ["book", "house", "forest", "star", "river"],
          pluralNoun: ["books", "houses", "forests", "stars"],
          place: ["New York", "London", "Paris"],
          profession: ["writer", "teacher", "doctor"],
          verb: ["read", "write", "explore"],
          number: ["one", "two", "three"],
      },
      fr_FR: {
          adjective: ["grand", "petit", "ancien", "nouveau", "sombre", "brillant"],
          noun: ["livre", "maison", "forêt", "étoile", "rivière"],
          pluralNoun: ["livres", "maisons", "forêts", "étoiles"],
          place: ["Paris", "Lyon", "Marseille"],
          profession: ["écrivain", "professeur", "docteur"],
          verb: ["lire", "écrire", "explorer"],
          number: ["un", "deux", "trois"],
      },
      de_DE: {
          adjective: ["groß", "klein", "alt", "neu", "dunkel", "hell"],
          noun: ["Buch", "Haus", "Wald", "Stern", "Fluss"],
          pluralNoun: ["Bücher", "Häuser", "Wälder", "Sterne"],
          place: ["Berlin", "München", "Hamburg"],
          profession: ["Schriftsteller", "Lehrer", "Arzt"],
          verb: ["lesen", "schreiben", "erkunden"],
          number: ["eins", "zwei", "drei"],
      }
  };

  if (!patterns[language]) {
      language = "en_US"; // Fallback to English if language not supported
  }

  const pattern = faker.helpers.arrayElement(patterns[language]);
  return pattern.replace(/\{(.*?)\}/g, (_, key) => faker.helpers.arrayElement(words[language][key]));
}

const App = () => {
  const [language, setLanguage] = useState('en_US');
  const [seed, setSeed] = useState(Math.floor(Math.random() * 1000000));
  const [likes, setLikes] = useState(5);
  const [reviews, setReviews] = useState(4.7);
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
 
  
 
  
// const generateBooks = useCallback((pageNum) => {
//   setLoading(true);

//   faker.locale = language;
//   faker.seed(seed + pageNum);

//   const newBooks = Array.from({ length: pageNum === 1 ? 20 : 10 }, () => {
//       const bookLikes = parseFloat((Math.random() * 10).toFixed(1)); 
//       return {
//           isbn: uuidv4(),
//           title: generateBookTitle(language), 
//           author: `${faker.person.firstName()} ${faker.person.lastName()}`, 
//           publisher: faker.company.name(), 
//           likes: bookLikes,
//           reviews: Array.from({ length: Math.floor(reviews) }, () => ({
//               text: faker.lorem.sentence(),
//               author: `${faker.person.firstName()} ${faker.person.lastName()}`,
//           })),
//           cover: faker.image.url({ width: 200, height: 300, category: "book" }),
//       };
//   }).filter(book => book.likes >= likes); 

//   setBooks((prevBooks) => (pageNum === 1 ? newBooks : [...prevBooks, ...newBooks]));
//   setLoading(false);
// }, [language, seed, likes, reviews]);


const generateBooks = useCallback(() => {
  setLoading(true);

  faker.locale = language;

  const newBooks = Array.from({ length: page * 10 }, (_, index) => {
      faker.seed(seed + index);  
      
      return {
          isbn: uuidv4(), 
          title: generateBookTitle(language, seed + index), 
          author: `${faker.person.firstName()} ${faker.person.lastName()}`, 
          publisher: faker.company.name(), 
          likes: parseFloat(faker.number.float({ min: 0, max: 10 }).toFixed(1)), 
          reviews: Array.from({ length: Math.floor(reviews) }, (_, i) => {
              faker.seed(seed + index + i + 1000); 
              return {
                  text: faker.lorem.sentence(),
                  author: `${faker.person.firstName()} ${faker.person.lastName()}`,
              };
          }),
          cover: faker.image.url({ width: 200, height: 300, category: "book" }), // Last call
      };
  });

  setBooks(newBooks);
  setLoading(false);
}, [language, seed, likes, reviews, page]);





useEffect(() => {
  
  setPage(1); 
}, [language, seed, likes, reviews]);
  
  useEffect(() => {
    generateBooks(page);
  }, [page, generateBooks]);

  
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Random Book Generator</h1>
        <div className="flex justify-between mb-4">
        
        <CSVLink
          data={books}
          filename="books.csv"
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Export CSV
        </CSVLink>
      </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Language/Region:</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="en_US">English (USA)</option>
                <option value="de_DE">German (Germany)</option>
                <option value="fr_FR">French (France)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Seed:</label>
              <div className="flex items-center mt-1">
                <input
                  type="number"
                  value={seed}
                  onChange={(e) => setSeed(Number(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md flex-grow"
                />
                <button
                  onClick={() => setSeed(Math.floor(Math.random() * 1000000))}
                  className="ml-2 p-2 bg-blue-500 text-white rounded-md"
                >
                  🔀
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Average Likes:</label>
              <input
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={likes}
                onChange={(e) => setLikes(Number(e.target.value))}
                className="mt-1 block w-full"
              />
              <span className="text-sm text-gray-600">{likes}</span>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Average Reviews:</label>
              <input
                type="number"
                step="0.1"
                value={reviews}
                onChange={(e) => setReviews(Number(e.target.value))}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Index</th>
                <th className="p-2 text-left">ISBN</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Author</th>
                <th className="p-2 text-left">Publisher</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <React.Fragment key={index}>
                  <tr
                    onClick={() => handleRowClick(index)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-2">{index + 1}</td>
                    <td className="p-2">{book.isbn}</td>
                    <td className="p-2">{book.title}</td>
                    <td className="p-2">{book.author}</td>
                    <td className="p-2">{book.publisher}</td>
                  </tr>
                  {expandedRow === index && (
                    <tr>
                      <td colSpan="5" className="p-4 bg-gray-50">
                        <div className="flex">
                          <img src={book.cover} alt="Book Cover" className="w-32 h-48 object-cover rounded-lg" />
                          <div className="ml-4">
                            <h2 className="text-xl font-bold">{book.title}</h2>
                            <p className="text-sm text-gray-600">by {book.author}</p>
                            <p className="text-sm text-gray-600">Published by {book.publisher}</p>
                            <div className="mt-2">
                              <h3 className="font-semibold">Reviews:</h3>
                              {book.reviews.length > 0 ? (
                                book.reviews.map((review, i) => (
                                  <div key={i} className="mt-1">
                                    <p className="text-sm text-gray-700">"{review.text}"</p>
                                    <p className="text-xs text-gray-500">- {review.author}</p>
                                  </div>
                                ))
                              ) : (
                                <p className="text-sm text-gray-600">No reviews available.</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
          {loading && <div className="text-center py-4">Loading more books...</div>}
        </div>
      </div>
    </div>
    
  );
};

export default App;

