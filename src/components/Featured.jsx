function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl  font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative  w-1/2 h-[75vh] ">
            <h1 className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"FYSE".split('').map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="flex gap-5 p-4">
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">AUDIT</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">COPYWRITING</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">SALES DECK</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">SLIDER DESIGN</button>
            </div>
          </div>

          <div className="cardcontainer relative  w-1/2 h-[75vh]">
            <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-5 p-4 border-rounded">
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">AGENCY</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">COMPANY PRESENTATION</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 pt-10">
      <h3 className=" pt-10">
        TRAWA
      </h3>
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative  w-1/2 h-[75vh] ">
            <h1 className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"TRAWA".split('').map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-5 p-4">
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">AUDIT</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">COPYWRITING</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">SALES DECK</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">SLIDER DESIGN</button>
            </div>
          </div>

          <div className="cardcontainer relative  w-1/2 h-[75vh]">
            <h1 className key="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="flex gap-5 p-4 border-rounded">
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">AGENCY</button>
                <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">COMPANY PRESENTATION</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
