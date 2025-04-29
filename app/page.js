'use client';
import { useState } from 'react';

const restaurants = [
  {
    name: 'Cancun Grill Doral',
    image: 'https://cancungrilldoral.com/wp-content/uploads/2020/08/steak.jpg',
    description: 'Casual, authentic Mexican cuisine with classic dishes. Moderately priced.',
    style: 'Mexican',
    menu: [
      { item: 'Chimichanga de Barbacoa', price: '$15' },
      { item: 'Chimichanga de Pollo', price: '$14' },
    ],
  },
  {
    name: 'Taco & Chelas',
    image: 'https://tacoychelas.com/wp-content/uploads/2020/02/Taco-y-Chelas-scaled.jpg',
    description: 'Trendy Tex-Mex spot, highly reviewed for flavor and atmosphere. Affordable pricing.',
    style: 'Tex-Mex',
    menu: [
      { item: 'Beef Chimichanga', price: '$12' },
      { item: 'Chicken Chimichanga', price: '$11' },
    ],
  },
  {
    name: 'Taco Rico',
    image: 'https://www.tacoricotmc.com/wp-content/uploads/2023/01/Menu-Combo-Fajita.jpg',
    description: 'Relaxed, family-friendly Tex-Mex restaurant known for great value.',
    style: 'Tex-Mex',
    menu: [{ item: 'Chimichanga', price: '$10' }],
  },
  {
    name: 'Chabella Mexican Fusion',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff3d1c7e40b995c8a4f2dd8/1611854997891-LOFP7V88BB0VYVV0U5VH/image0.jpeg',
    description: 'Fusion cuisine blending traditional Mexican dishes with modern culinary techniques.',
    style: 'Mexican Fusion',
    menu: [{ item: 'Various Fusion Dishes', price: 'Varies' }],
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
              <button
                onClick={() => setSelected(selected === idx ? null : idx)}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                {selected === idx ? 'Hide Menu' : 'View Menu & Prices'}
              </button>
              {selected === idx && (
                <ul className="mt-2">
                  {rest.menu.map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item.item} - {item.price}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
