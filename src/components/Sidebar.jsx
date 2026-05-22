import React from 'react';

const categories = ['Music', 'Gaming', 'News', 'Movies', 'Technology'];

export default function Sidebar({ onSelectCategory }) {
  return (
    <aside className="w-48 bg-gray-100 p-3 border-r hidden md:block">
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className="cursor-pointer p-2 hover:bg-gray-200 rounded"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}