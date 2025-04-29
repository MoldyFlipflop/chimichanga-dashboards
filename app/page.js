'use client';
import { useState } from 'react';

const restaurants = [
  {
    name: 'Cancun Grill Doral',
    image: 'https://www.vivemia.com/wp-content/uploads/2018/08/Cancun-Grill-Doral.jpg',
    description: 'Vibrant atmosphere with authentic Mexican cuisine. Offers dine-in and catering options.',
    menuLink: 'https://cancungrillmia.com/menu-doral/'
  },
  {
    name: 'Taco & Chelas',
    image: 'https://restaurantguru.com/upload/restaurant_photos/2/5/5/255f7e7e9c1b7a0d0e1c0d0e1c0d0e1c.jpg',
    description: 'Trendy Tex-Mex spot, great for team lunches and known for flavorful dishes.',
    menuLink: 'https://tacoychelas.com/'
  },
  {
    name: 'Taco Rico',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/2b/3c/4d/taco-rico-doral.jpg',
    description: 'Family-friendly Tex-Mex chain offering reliable takeout and catering.',
    menuLink: 'https://www.grubhub.com/restaurant/taco-rico-8688-nw-13th-ter-miami/340251'
  },
  {
    name: 'Chabella Mexican Fusion',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/2b/3c/4d/chabella-dish.jpg',
    description: 'Upscale Mexican fusion with elegant dining — great for client meetings.',
    menuLink: 'https://www.chabellamiami.com/menu-chabella'
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
