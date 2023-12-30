import { RightArrow, SpringArrow1, TrajArrow1 } from 'assets/svg/Icon'
import Heading1 from 'components/heading/Heading1'
import Doctor1 from '../../assets/images/Doctor-Image11.png'

const Card = ({ rotate = 'rotate-0', position}) => {

    return (
        <div className={`absolute ${position}`}>
            <div className={` rounded-[1.875rem]  ${rotate} overflow-hidden border-white-A700 border-[7px] shadow-bs8`} >
                <img src={Doctor1} alt="doctor-image" />
            </div>
        </div>
    );
}

const AboutHospital = () => {
  return (
    <div className='py-[10rem]'>
        <div className='max-w-[90%] mx-auto grid grid-cols-[25%_50%_25%]'>
            <div className='relative'>
                <div className=' absolute z-10 top-[50%] right-0'>
                    <SpringArrow1/>
                </div>
                <Card rotate='rotate-15'/>
            </div>
            <div className='rounded-[1.875rem] shadow-bs6 bg-gradient7 py-8'>
                <div className='flex flex-col justify-center items-center gap-2 max-w-[80%] mx-auto'>
                    <Heading1
                        subHeading={`About hospital`}
                        headingStart={`Super`}
                        headingMid={` Speciality `}
                        headingLast={`Hospital Of South Gujarat.`}
                        position='text-center'
                    />
                    <div className='flex flex-col gap-4'>
                        <p className="font-dmsans text-[#888] text-[0.875rem] md:text-[1rem] font-[500] leading-[139.884%] text-center">
                            Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care. With time it has become best kidney hospital in SURAT. Hospital with all facilities under one roof provides for greater efficiency in meeting the overall needs of a patient.
                        </p>
                        <p  className="font-dmsans text-[#888] text-[0.875rem] md:text-[1rem] font-[500] leading-[139.884%] text-center">
                            patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology
                        </p>
                    </div>
                    <button className='flex gap-2 justify-center items-center text-white-A700 rounded-[0.625rem] bg-blue_gray-700 md:w-[11.80988rem] md:h-[3.24725rem] my-4'>Read More <RightArrow/> </button>
                </div>
            </div>
            <div className='relative'>
                <div className=' absolute'>
                    <TrajArrow1/>
                </div>
                <Card rotate='-rotate-12' position='left-0 bottom-[10%]'/>                
            </div>
        </div>
    </div>
  )
}

export default AboutHospital