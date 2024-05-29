import React, { useState } from 'react';

export default function ShowUserInfo({ user, logedUser }) {
  const [isHovered, setIsHovered] = useState(false);

  console.log(logedUser);
  return (
    <div className="h-full">
      <div className="border-b-2 block md:flex">
        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
          <div 
            className="w-max p-8 mx-2 flex justify-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div>
              {user.image ? (
                <img
                  className="w-[250px] h-[250px] rounded-full"
                  src={user.image}
                  alt=""
                />
              ) : (
                <img
                  className="w-[250px] h-[250px] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt=""
                />
              )}
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full flex-col">
                    <h1 className='text-2xl m-2 text-white font-bold' >Change img</h1>
                    <input type="file" className='text-white bg-black text-l px-2 py-1 rounded' />
                </div>
              )}
            </div>
          </div>
        </div>
        <form className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md" >
            <div>
            <div className="rounded shadow p-6">
                <div className="pb-6">
                <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                <div className="flex">
                    <input
                    disabled
                    id="username"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="text"
                    value={user.name}
                    />
                </div>
                </div>
                <div className="pb-6">
                <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                <input
                    disabled
                    id="email"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="email"
                    value={user.email}
                />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <h1 className='font-semibold text-gray-700 block'>Role</h1>
                    {user.role === 'admin' ? (
                        <select value={user.role} onChange={(e) => setUserRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="worker">Worker</option>
                        <option value="sorter">Sorter</option>
                        </select>
                    ) : (
                        <select className=' hover:border-red-600' value={user.role} disabled>
                        <option value="admin">Admin</option>
                        <option value="worker">Worker</option>
                        <option value="sorter">Sorter</option>
                        </select>
                    )}
                </div>
                <button type='submit'
                    className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded text-indigo-50 hover:bg-indigo-500 mt-6"
                >Save changes</button>
            </div>
            </div>
        </form>

      </div>
    </div>
  );
}
