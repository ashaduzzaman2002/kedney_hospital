import Heading1 from "components/heading/Heading1"
import Branch1 from 'assets/images/branch-1.png'
import Branch2 from 'assets/images/branch-2.png'
import Branch3 from 'assets/images/branch-3.png'
import Branch4 from 'assets/images/branch-4.png'

const AboutGallery = () => {
  return (
    <div className="border-[5px] border-red-500 py-[6rem]">
        <div>
            <div className="mb-10">
                <Heading1
                    subHeading={`Gallery`}
                    headingStart={`See Our `}
                    headingMid={`Gallery`}
                    position="text-center"
                />
            </div>
            <div className="relative">
                <div className="max-w-[90%] mx-auto grid grid-cols-4 gap-8">
                    <div className="flex flex-col mx-auto gap-2 items-start mb-[70%]">
                        <img className="aspect-2/3 rounded-[1rem] overflow-hidden " src={Branch1} alt="branch-image-1" />
                        <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">Branch 1 : Lal Darwaja</h3>
                    </div>
                    <div className="flex flex-col gap-2 mx-auto items-end justify-end">
                        <img className="aspect-2/3 rounded-[1rem] overflow-hidden" src={Branch2} alt="branch-image-2" />
                        <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">Branch 2 : Udhna Darwaja</h3>
                    </div>
                    <div className="flex flex-col gap-2 mx-auto items-start">
                        <img className="aspect-2/3 rounded-[1rem] overflow-hidden" src={Branch3} alt="branch-image-3" />
                        <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">Branch 3 : Adajan</h3>
                    </div>
                    <div className="flex flex-col gap-2 mx-auto items-end justify-end">
                        <img className="aspect-2/3 rounded-[1rem] overflow-hidden" src={Branch4} alt="branch-image-4" />
                        <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">Branch 4 : Amroli</h3>
                    </div>
                </div>

                <div className="absolute">
                    
                </div>
                <div className="absolute">

                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutGallery