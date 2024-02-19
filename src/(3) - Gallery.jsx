import { imgsGallery } from "./(0) - data"

function Gallery ()
{
    return (
        <div className="relative mt-20  " id="Gallery">
            
                <h1
                    className="
                    mt-0 mb-20 mx-auto  border-solid border-2 border-black text-3xl w-fit relative z-10 py-[10px] px-5 move font-bold hover:text-white hover:delay-[.5s]
                    hover:after:animate-[rightMove_.5s_linear_forwards]
                    hover:before:animate-[leftMove_0.5s_linear_forwards]">Gallery </h1>
                <div className=" container cont flex items-center justify-center flex-col  ">
                    { imgsGallery.map( (imgsGallery) =>
                    {
                        return ( <>
                        <div className="shadow p-[15px] mb-5">
                            <div>
                                <img src={ imgsGallery.img } alt="#" />
                            </div>
                        </div></> )
                    })}
                </div>
            
        </div>
  )
}

export default Gallery
