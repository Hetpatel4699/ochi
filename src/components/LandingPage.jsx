import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    const headings = ["We Create", "Eye-Opening", "Presentations"];
    const footerText = ["For public and private companies", "From the first pitch to IPO"];

    return (
        <div className="w-full h-fit bg-zinc-900 pt-1">
            <div className="textstructure mt-52 px-20">
                {headings.map((item, index)=> (
                    <div className="masker" key={index}>
                        <div className="w-fit flex">
                            {index === 1 && (
                                <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative top-[1vw] bg-red-500"></div>
                            )}
                            <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7.5vw] tracking-tighter font-['Space Grotesk'] font-bold">
                                {item}
                            </h1>
                        </div>  
                    </div>
                ))}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {footerText.map((item, index) => (
                    <p key={index} className="text-md font-light tracking-tight leading-none">
                        {item}
                    </p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
                        Start the Project
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
