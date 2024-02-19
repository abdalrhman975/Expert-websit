import { imgsFeatures } from "./(0) - data";

export default function Features() {
    return (
        <div className="relative mt-32" id="Features">
            <h1
                 className="
                 mt-0 mb-20 mx-auto  border-solid border-2 border-black text-3xl w-fit relative z-10 py-[10px] px-5 move font-bold hover:text-white hover:delay-[.5s]
                 hover:after:animate-[rightMove_.5s_linear_forwards]
                 hover:before:animate-[leftMove_0.5s_linear_forwards]">Features </h1>
            <div className="container cont flex items-center justify-center flex-col ">
                { imgsFeatures.map( ( imgsFeatures ) =>
                {
                    return (
                        <>
                        <div className="flex items-center justify-center flex-col text-center mb-28  border-solid border-2 border-[#ccc] ">
                            <div><img src={imgsFeatures.img} alt="#"/></div>
                                <h1 className="font-bold text-4xl mt-8 mb-8">{ imgsFeatures.title }</h1>
                                <p className="text-[#666] text-lg  leading-10">{ imgsFeatures.text }</p>
                                <button className=" relative w-fitt px-7 py-2 my-4 border-solid border-2  border-blue-400 rounded-lg font-bold text-xl hover:text-black
                                before:absolute before:w-0 before:h-full  before:bg-blue-400 before:duration-[.5s]  before:top-0 before:left-0 before:z-[-10]
                                hover:before:w-full
                                "><a href="#">More</a></button>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
  )
    
}
