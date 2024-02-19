import { howItWorks } from "./(0) - data";

export default function HowItWorks() {
  return (
    <div className="relative bg-[#ececec] pb-12 pt-20">
         <h1
                className="
                mt-0 mb-20 mx-auto  border-solid border-2 border-black text-3xl w-fit relative z-10 py-[10px] px-5 move font-bold hover:text-white hover:delay-[.5s]
                hover:after:animate-[rightMove_.5s_linear_forwards]
                hover:before:animate-[leftMove_0.5s_linear_forwards]">HOW IT WORKS ?</h1>
            <div className=" relative container cont flex justify-center items-center flex-col ">
              <img src="../public/imgs/work-steps.png" alt="#" />
              <div>
                {howItWorks.map((howItWorks)=>{
                  return (
                    <>
                      <div className="flex items-center justify-center flex-col mt-12 rounded-lg bg-white  p-8">
                      <img src={howItWorks.img } alt="#" className="w-[64px]" />
                      <div className="flex justify-center items-center flex-col text-center ">
                          <h1 className="font-bold text-xl mt-5">{howItWorks.title }</h1>
                        <p className="text-lg max-w-xs mb-4 mt-4 text-[#777]">{howItWorks.description }</p>
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
