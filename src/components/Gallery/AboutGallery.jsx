import Heading1 from "components/heading/Heading1"
import Branch1 from 'assets/images/branch-1.png'
import Branch2 from 'assets/images/branch-2.png'
import Branch3 from 'assets/images/branch-3.png'
import Branch4 from 'assets/images/branch-4.png'

const Data = [
    {
        image: Branch1,
        title: 'Branch 1 : Lal Darwaja',
        position: 'justify-start',
    },
    {
        image: Branch2,
        title: 'Branch 2 : Udhna Darwaja',
        position: 'justify-end',
    },
    {
        image: Branch3,
        title: 'Branch 3 : Adajan',
        position: 'justify-start',
    },
    {
        image: Branch4,
        title: 'Branch 4 : Amroli',
        position: 'justify-end',
    },
];

const Card1 = ({ image, title, position }) => {

    return (
        <div className={`${position} flex flex-col `}>
            <div className={`flex justify-center items-center`}>
                <img 
                    className="rounded-[1rem] overflow-hidden h-[20.875rem] w-[16.875rem]" 
                    src={image} 
                    alt="branch-image" 
                />
            </div>
            <h3 className="w-full text-center font-fredoka font-[500] text-[1.5rem] text-[#000]">{title}</h3>
        </div>
    );
}

const Card2 = ({ position }) => {

    return (
        <div className={`${position} bg-gradient8 rounded-[1rem] w-[21.375rem] h-[20.875rem] overflow-hidden`}>

        </div>
    );
}

const AboutGallery = () => {
  return (
    <div className="py-[6rem]">
        <div className="relative">
            <div className="mb-10">
                <Heading1
                    subHeading={`Gallery`}
                    headingStart={`See Our `}
                    headingMid={`Gallery`}
                    position="text-center"
                />
            </div>
            <div className="">
                <div className="max-w-[90%] mx-auto grid grid-cols-4 gap-8 h-[36rem]">
                    {Data.map((e, ind) => (
                        <Card1 key={ind} {...e} />
                    ))}




                    {/* <div className="flex flex-col gap-2 mx-auto items-end justify-end">
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
                    </div> */}
                </div>

                <div className="absolute">
                    
                </div>
                <Card2 position={`absolute top-[10%] -left-[2%] -z-10`} />
                <Card2 position={`absolute top-[35%] -right-[2%] -z-10`} />
                
            </div>
        </div>
    </div>
  )
}

export default AboutGallery