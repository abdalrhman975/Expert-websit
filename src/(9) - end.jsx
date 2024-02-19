import { end } from "./(0) - data";

export default function End() {
  return (
    <div className=" container cont relative bg-black  flex items-center justify-center flex-col  ">
          <h1 className="m-12 mb-20 mx-auto w-fit relative z-10 py-[10px] px-5  font-bold text-[40px] text-white ">Experts</h1>
      <div className="max-w-xs text-wrap"><p className="text-[#b9b9b9] text-sm text-center leading-10  ">This is all about our company and our work. We hope that you will like us and put your work in our hands.</p></div>
      <div className=" m-10 pb-8">
      { end.map( (end) =>
      {
        return (
          <>
            <div className="flex items-center justify-center flex-col text-center mt-5">
             <span className="material-symbols-outlined  my-2 text-[30px] text-[#2196f3]">{end.icon }</span>
             <p className=" text-[#b9b9b9] text-sm ">{end.description }</p>
          </div>
          </>
        )
      })}
      </div>
    </div>
  )
}
