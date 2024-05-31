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
<div className="relative h-screen text-white">
        <div className="absolute inset-0 w-full h-full -z-40">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500" className="w-full h-full">
            <rect fill="#000000" width="4000" height="1500"/>
            <defs>
              <rect fill="none" strokeWidth="200" strokeOpacity="10" id="a" x="-740" y="-600" width="1400" height="1200"/>
            </defs>
            <g transform="translate(0, 0)" style={{ transformOrigin: "center" }}>
              <g transform="rotate(180 0 0)" style={{ transformOrigin: "center" }}>
                <g transform="rotate(-160 0 0)" style={{ transformOrigin: "center" }}>
                  <g transform="translate(1000 750)">
                    <use stroke="#000000" href="#a" transform="rotate(10 0 0) scale(1.1)" />
                    <use stroke="#070309" href="#a" transform="rotate(20 0 0) scale(1.2)" />
                    <use stroke="#0d0612" href="#a" transform="rotate(30 0 0) scale(1.3)" />
                    <use stroke="#14091c" href="#a" transform="rotate(40 0 0) scale(1.4)" />
                    <use stroke="#1b0c25" href="#a" transform="rotate(50 0 0) scale(1.5)" />
                    <use stroke="#220f2e" href="#a" transform="rotate(60 0 0) scale(1.6)" />
                    <use stroke="#281237" href="#a" transform="rotate(70 0 0) scale(1.7)" />
                    <use stroke="#2f1540" href="#a" transform="rotate(80 0 0) scale(1.8)" />
                    <use stroke="#36194a" href="#a" transform="rotate(90 0 0) scale(1.9)" />
                    <use stroke="#3d1c53" href="#a" transform="rotate(100 0 0) scale(2)" />
                    <use stroke="#431f5c" href="#a" transform="rotate(110 0 0) scale(2.1)" />
                    <use stroke="#4a2265" href="#a" transform="rotate(120 0 0) scale(2.2)" />
                    <use stroke="#51256e" href="#a" transform="rotate(130 0 0) scale(2.3)" />
                    <use stroke="#582878" href="#a" transform="rotate(140 0 0) scale(2.4)" />
                    <use stroke="#5e2b81" href="#a" transform="rotate(150 0 0) scale(2.5)" />
                    <use stroke="#652E8A" href="#a" transform="rotate(160 0 0) scale(2.6)" />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <Navbar />
        <div className="flex h-screen justify-center items-center">
          <div className="m-auto w-full max-w-md text-center p-4">
            {loading? (
              <p className="text-lg">Loading...</p>
            ) : user? (
              <div className="rounded-lg shadow-lg p-8 bg-gray-800">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-center mb-4">Welcome {user.name} to XYZ Storage</h1>
                  <p className="text-gray-400 text-center mb-8">
                    Whether you're a construction worker, landscaper, or tradesperson, we understand that your tools and equipment are essential to your job. That's why we offer a range of storage options designed specifically for workers like you.
                  </p>
                </div>
                
              </div>
            ) : (
              <p className="text-red-500">Error fetching user data</p>
            )}
          </div>
        </div>
        </div>
    </Authenticated>

);
}
export default Home;