
function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
    <div className='cardcontainer h-[50vh] w-1/2'>
    <div className='card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004d43]'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
        <button className="absolute border-2 px-5 py-1 rounded-full left-10 bottom-10 ">&copy;2023-2024</button>
    </div>
    </div>
    <div className='cardcontainer  flex gap-5 h-[50vh] w-1/2'>
    <div className='card relative flex rounded-xl items-center justify-center w-1/2 h-full bg-[#212121]'>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
    <button className="absolute border-2 px-5 py-1 rounded-full left-10 bottom-10 ">RATING 5.0 ON CLUTCH</button>
    </div>
    <div className='card relative flex rounded-xl items-center justify-center w-1/2 h-full bg-[#212121]'>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
    <button className="absolute border-2 px-5 py-1 rounded-full left-10 bottom-10 ">BUSINESS BOOTCAMP ALUMNI</button>
    </div>
    </div>
      
    </div>
  )
  
}

export default Cards
