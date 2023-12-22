import { DiamondIcon1, MaskFace, RightArrow, Star1 } from 'assets/svg/Icon'
import './style.css'
import Doctor1 from '../../assets/images/Doctor-Image1.png'

const ContactUs = () => {
  return (
    <div className='home-contact-us-container-wrapper'>
        <div className='home-contact-us-container'>
            <div className='grid1'>
                <div className='self-center relative'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <img className='' src={Doctor1} alt="" />
                    </div>

                    <div className='image-over-box absolute top-16 -left-12'>
                        <div>🤝</div>
                        <h5 className=' text-2xl font-bold'>25+</h5>
                        <p>Partner Collaboration</p>
                    </div>

                    <div className=' absolute right-10 bottom-16'>
                        <Star1/>
                    </div>
                </div>
                <div className='mask-icon self-center'>
                    <h4> Contact US </h4>
                    <h1 className='py-4'>
                        True <span> Healthcare </span> For Your <MaskFace/> Family!
                    </h1> 
                    <p>
                        Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, world class expertise and outstanding personalized care.
                    </p> 

                    <h2 className='py-4'>Our support services inclide:</h2>  
                    <div className='ml-4 flex gap-16'>
                        <div>
                            <ul className='list-disc flex flex-col gap-2'>
                                <li>
                                    <p>ESWL - Lithotripsy</p>
                                </li>
                                <li>
                                    <p>Cystolitholapaxy</p>
                                </li>
                                <li>
                                    <p>HOLEP</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='list-disc'>
                                <li>
                                    <p>Endoscopic Surgery</p>
                                </li>
                                <li>
                                    <p>Open Surgery</p>
                                </li>
                                <li>
                                    <p>RIRS</p>
                                </li>
                            </ul>
                        </div>
                    </div>               
                    <p className='py-4'>
                        Contact us today to learn more about our support services and to find out how we can help you.
                    </p>

                    <button>Contact Us <RightArrow/></button>
                </div>
            </div>

            <div className='options'>
                <div className='flex justify-between'>
                    <h2>Home Care</h2>
                    <DiamondIcon1/>
                    <h2>Adult Day Care</h2>
                    <DiamondIcon1/>
                    <h2>Assisted Living</h2>
                    <DiamondIcon1/>
                    <h2>Nursing Home</h2>
                    <DiamondIcon1/>
                    <h2>Adult Day Care</h2>
                    <DiamondIcon1/>
                    <h2>Home Care</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs