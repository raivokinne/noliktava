import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';

export default function ShowUserInfo({ user, auth }) {
  const [isHovered, setIsHovered] = useState(false);
  const { data, setData, put, errors } = useForm({
    name: user.name,
    email: user.email,
    role: user.role,
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('users.update', { user: user.id }));
  };

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
                  <h1 className='text-2xl m-2 text-white font-bold'>Change img</h1>
                  <input type="file" className='text-white bg-black text-l px-2 py-1 rounded' />
                </div>
              )}
            </div>
          </div>
        </div>
        <form className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md" onSubmit={handleSubmit}>
          <div className="rounded shadow p-6">
            <div className="pb-6">
              <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
              <div className="flex">
                <input
                  id="name"
                  name="name"
                  className="border-1 rounded-r px-4 py-2 w-full"
                  type="text"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && <div className="text-red-500">{errors.name}</div>}
            </div>
            <div className="pb-6">
              <label htmlFor="email" className="font-semibold text-gray-700 block pb-1">Email</label>
              <input
                id="email"
                name="email"
                className="border-1 rounded-r px-4 py-2 w-full"
                type="email"
                value={data.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-red-500">{errors.email}</div>}
            </div>
            <div className='pb-6'>
              <label htmlFor="password" className="font-semibold text-gray-700 block pb-1">Password</label>
              <input
                id="password"
                name="password"
                className="border-1 rounded-r px-4 py-2 w-full"
                type="password"
                value={data.password}
                onChange={handleChange}
              />
              {errors.password && <div className="text-red-500">{errors.password}</div>}
            </div>
            <div className='pb-6'>
              <label htmlFor="password_confirmation" className="font-semibold text-gray-700 block pb-1">Confirm Password</label>
              <input
                id="password_confirmation"
                name="password_confirmation"
                className="border-1 rounded-r px-4 py-2 w-full"
                type="password"
                value={data.password_confirmation}
                onChange={handleChange}
              />
              {errors.password_confirmation && <div className="text-red-500">{errors.password_confirmation}</div>}
            </div>
            <div className='flex flex-row gap-3 items-center'>
              <h1 className='font-semibold text-gray-700 block'>Role</h1>
              {auth.role === 'admin' ? (
                <select
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                >
                  <option value="admin">Admin</option>
                  <option value="worker">Worker</option>
                  <option value="sorter">Sorter</option>
                </select>
              ) : (
                <input
                  id="role"
                  name="role"
                  className="border-1 rounded-r px-4 py-2 w-full"
                  type="text"
                  value={data.role}
                  disabled
                />
              )}
              {errors.role && <div className="text-red-500">{errors.role}</div>}
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-semibold transition duration-150 bg-indigo-600 rounded text-indigo-50 hover:bg-indigo-500 mt-6"
            >Save changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
