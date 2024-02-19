import { services } from "./(0) - data";

export default function Services() {
    return (
        <div className="">
             <h1
                className="
                mt-0 mb-20 mx-auto  border-solid border-2 border-black text-3xl w-fit relative z-10 py-[10px] px-5 move font-bold hover:text-white hover:delay-[.5s]
                hover:after:animate-[rightMove_.5s_linear_forwards]
                hover:before:animate-[leftMove_0.5s_linear_forwards]">Services</h1>
            <div>
                <div className=" container cont relative gridAll">
                    { services.map( (services) =>
                    {
                        return (
                            <>
                                <div className="flex items-center justify-center flex-col mb-10 border-solid border-2 border-green-950"> 
                                    <img src={ services.icon } alt="#" className="w-1/2" />
                                    <h1 className="text-[#2196f3] font-bold text-2xl mt-4">{ services.title }</h1>
                                    <div className="flex justify-center items-start  w-full">
                                        <h1>{ services.number }</h1>
                                        <a href="#" className=" h-fit">Details</a>
                                     </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
      </div>
  )
}
