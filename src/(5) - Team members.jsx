import { teamMembers } from "./(0) - data"
export default function TeamMembers ()
{
    return (
        <div className=" mt-12 relative" id="Team">
            <h1
                className="
                mt-0 mb-20 mx-auto  border-solid border-2 border-black text-3xl w-fit relative z-10 py-[10px] px-4 move font-bold hover:text-white hover:delay-[.5s]
                hover:after:animate-[rightMove_.5s_linear_forwards]
                hover:before:animate-[leftMove_0.5s_linear_forwards]">TEAM MEMBERS  </h1>
            <div className=" container cont gridteam  ">
                { teamMembers.map( (team) =>
                {
                    return (
                        <>
                            <div className=" relative  mb-12 flex items-center justify-center flex-col hover:after:w-3/4 duration-[0.3s] 
                           before:bg-[#f3f3f3] before:absolute before:top-0 before:h-full before:w-3/4 before:right-0 before:z-[-10] before:rounded-lg  
                           after:bg-[#e4e4e4] after:absolute after:top-0 after:h-full  after:right-0 after:z-[-10] after:rounded-lg">
                            <div className="pt-[60px] ">
                                <img src={team.img} alt="#" className="widtteam rounded-lg " />
                            </div>
                            <div className=" pl-24 my-6">
                            <h1 className=" font-bold text-xl  text-[#2196f3] ">{ team.name }</h1>
                            <p className="">{team.description }</p>
                            </div>
                    </div>
                        </>
                    )
                })}
            </div>
            </div>
  )
}




// before:bg-gray-800 before:absolute before:w-full  before:h-full  before:rounded-lg before:z-[-10] before:opacity-5
// hover:before:animate-[team_0.5s_linear_forwards_]  hover:text-black 