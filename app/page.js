'use client';
import { useState } from 'react';

const restaurants = [
  {
    name: 'Cancun Grill Doral',
    image: 'https://restaurantguru.com/upload/restaurant_photos/2/5/5/255f7e7e9c1b7a0d0e1c0d0e1c0d0e1c.jpg',
    description: 'Authentic Mexican cuisine with a vibrant atmosphere. Offers dine-in and catering options.',
    menuLink: 'https://cancungrillmia.com/menu-doral/',
    review: '“Cancun Grill Doral serves authentic Mexican cuisine that\'s to die for.”',
    analysis: 'Spacious setting suitable for group lunches. Offers catering services, making it convenient for office events.',
  },
  {
    name: 'Taco & Chelas',
    image: 'https://tacoychelas.com/wp-content/uploads/2020/02/Taco-y-Chelas-scaled.jpg',
    description: 'Trendy Tex-Mex spot known for flavorful dishes like birria tacos and chimichangas.',
    menuLink: 'https://tacoychelas.com/',
    review: '“A great neighborhood Mexican restaurant. The dining area is ample and nicely decorated.”',
    analysis: 'Casual ambiance suitable for relaxed team lunches. Efficient service with online ordering options, ideal for quick office meals.',
  },
  {
    name: 'Taco Rico',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/2b/3c/4d/taco-rico-doral.jpg',
    description: 'Family-friendly Tex-Mex chain offering a variety of tacos, burritos, and chimichangas.',
    menuLink: 'https://www.grubhub.com/restaurant/taco-rico-8688-nw-13th-ter-miami/340251',
    review: '“The chimichanga stood out as one of the best tasted, featuring soft and flavorful dough enveloping delicious steak.”',
    analysis: 'Comfortable setting for casual lunches. Offers catering services through platforms like ezCater, suitable for office gatherings.',
  },
  {
    name: 'Chabella Mexican Fusion',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/2b/3c/4d/chabella-dish.jpg',
    description: 'Upscale Mexican fusion restaurant offering innovative dishes and a sophisticated dining experience.',
    menuLink: 'https://www.chabellamiami.com/menu-chabella',
    review: '“The food was exceptional, loved the brunch and the service was great.”',
    analysis: 'Elegant setting ideal for client meetings or special team lunches. Offers takeout options, though the upscale nature may be more suited for dine-in experiences.',
  },
];

export default function Page() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-3xl font-bold mb-6">🌯 Best Chimichangas in Doral</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((rest, idx) => (
          <div key={idx} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img src={rest.image} alt={rest.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{rest.name}</h2>
              <p className="text-gray-600">{rest.description}</p>
              <p className="text-gray-700 italic mt-2">"{rest.review}"</p>
              <p className="text-gray-700 mt-2">{rest.analysis}</p>
              <a
                href={rest.menuLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                View Menu & Prices
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
