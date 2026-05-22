import React, { useState } from 'react';

export default function Header({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold text-red-600">YouTube Clone</h1>
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
          className="border p-2 rounded-l w-64"
        />
        <button className="bg-red-600 text-white px-4 rounded-r">Search</button>
      </form>
    </header>
  );
}