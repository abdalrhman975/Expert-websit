import { awesome } from "./(0) - data";


export default function OurAwesomeStats () {

  return (
    <div className=" container cont img  ">
          <h1 className="m-14 mb-20 mx-auto w-fit relative z-10 py-[10px] px-5  font-bold text-3xl">Our Awesome Stats </h1>
      <div className="container cont relative flex items-center justify-center flex-col">
              { awesome.map( (awesome) =>
              {
                  return(
                      <>
                      <div   className="flex items-center justify-center flex-col mt-5  w-full m-auto py-5 border-2 border-soild border-gray-200 bg-gray-100 rounded-md">
                        <span className="material-symbols-outlined text-[60px] text-gray-600">{ awesome.img }</span>
                        <span className="font-bold text-[50px] mt-1">{awesome.number}</span>
                        <h2 className="text-lg font-bold text-[#2196f3]">{ awesome.name }</h2>
                      </div>
                      </>
                  )
              })}
          </div>
    </div>
  )
}
