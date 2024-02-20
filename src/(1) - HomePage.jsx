import { navbar } from "./(0) - data"

function Home ()
{
  return (
    <header className=" bg-white  relative ">
      <div className=" container cont flex items-center justify-center flex-col ">
        <a href="" className=" text-[#2895b3] font-bold text-lg h-fit my-2 hover:text-blue-500">Experts</a>
        <ul className="flex items-center justify-center mb-3">
          { navbar.map( (navbar) =>
          {
            return (<><li ><a key={navbar.id} href={navbar.id} className="relative text-sm mx-3 beforeLinks hover:before:w-full">{navbar.name }</a></li></>)
          })}
        </ul>
      </div>
    </header>
  )
}
export default Home



