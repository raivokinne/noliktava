import React, { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
import Authenticated from '@/Layouts/AuthedLayout';



function Home() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 

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
    <Authenticated>
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : user ? (
        <div className="px-8 pt-6 pb-8 mb-4 w-full max-w-md text-center">
          <div className="mb-4">
          <p className="text-3xl font-bold text-white mb-2">Welcome, {user.name}!</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Error fetching user data</p>
      )}
    </div>
  </Authenticated>
  );
}

export default Home;
