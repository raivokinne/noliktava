



export default function DeleteUser(){


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

      </div>
    </div>

    )

}