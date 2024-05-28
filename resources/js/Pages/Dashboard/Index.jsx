
import React, { useEffect, useState } from 'react';
import Navbar from "@/Components/Navbar.jsx";

function Home() {
  const [user, setUser] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
      setLoading(false); 
    };

    fetchUserData();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative bg-gray-900 text-white">
      <Navbar />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-75" />
      <div className="relative z-10 flex flex-col items-center">
        {!loading && user ? (
          <h1 className="text-6xl font-extrabold mb-4">
            Welcome <a href="/users" className="text-4xl underline hover:text-blue-300 transition duration-300">{user.name}!</a>
          </h1>
        ) : (
          <div className="text-lg text-gray-300 mb-8">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Home;
