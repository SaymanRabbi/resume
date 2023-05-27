import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
FontAwesomeIcon.icon = {
    faFacebookF,
    faYoutube,
    faPinterestP,
    faInstagram,
    faLinkedinIn
}
const Footer = () => {
    const social = [
        {
            name: 'Facebook',
            link:'#',
            icon: faFacebookF,
            color: '#3B5998'
        },
        {
            name: 'Youtube',
            link:'#',
            icon: faYoutube,
            color: '#FFFFFF'
        },
        {
            name: 'Pinterest',
            link:'#',
            icon:faPinterestP,
            color: '#CD1F28'
        },
        {
            name: 'Instagram',
            link:'#',
            icon: faInstagram,
            color: '#F08152'
        },{
            name: 'Linkedin',
            link:'#',
            icon: faLinkedinIn,
            color: '#0077B5'
        }
    ]
    return (
        <div className='bg-[#0F141E] pb-[20px]'>
            <div className='max-w-[1120px] mx-auto pt-[80px] pb-[30px]'>
            <div className=' w-[100%]'>
               <div className=' footer_socail w-[260px]'>
                   <h2 className=' text-2xl text-white font-[600]'>Connect with us on social media</h2>
                   <div className=' flex gap-x-2 mt-[10px]'>
                    {
                        social.map((item,index)=> (
                            <div className={` w-[35px] h-[35px] flex justify-center items-center bg-gray-50 rounded-full bg-opacity-10  hover:bg-[${item.color}]`} key={index}>
                              <FontAwesomeIcon icon={item.icon} className={`
                              text-white text-xl cursor-pointer`}/>
                          </div>
                        )
                        )
                    }
                   </div>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;