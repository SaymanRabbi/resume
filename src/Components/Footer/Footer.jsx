import { faFacebookF, faInstagram, faLinkedinIn, faPinterestP, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerItem from './footerItem';
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
            color: 'bg-[#3B5998]'
        },
        {
            name: 'Youtube',
            link:'#',
            icon: faYoutube,
            color: 'bg-[#FFFFFF]'
        },
        {
            name: 'Pinterest',
            link:'#',
            icon:faPinterestP,
            color: 'bg-[#CD1F28]'
        },
        {
            name: 'Instagram',
            link:'#',
            icon: faInstagram,
            color: 'bg-[#F08152]'
        },{
            name: 'Linkedin',
            link:'#',
            icon: faLinkedinIn,
            color: 'bg-[#0077B5]'
        }
    ]
    return (
        <div className='bg-[#0F141E] pb-[20px] px-5'>
            <div className='max-w-[1120px] mx-auto md:pt-[80px] pt-[40px] pb-[30px]'>
            <div className=' w-[100%] md:flex '>
               <div className=' footer_socail w-[260px]'>
                   <h2 className=' text-2xl text-white font-[600]'>Connect with us on social media</h2>
                   <div className=' flex gap-x-2 mt-[10px]'>
                    {
                        social.map((item,index)=> (
                            <div className={` w-[35px] h-[35px] flex justify-center items-center rounded-full bg-opacity-10 cursor-pointer  ${item.name==='Youtube' ? `${item?.color} text-[#CD1F28]` : `${item?.color} text-white`} hover:bg-opacity-100`} key={index}>
                              <FontAwesomeIcon icon={item.icon} className={`
                               text-xl`}/>
                          </div>
                        )
                        )
                    }
                   </div>
               </div>
               <div className=' flex flex-1 md:justify-end flex-wrap mt-[30px] md:mt-0'>
                    {
                     footerItem.map((item,index)=> (
                        <div className=' min-w-[160px] mr-[48px] mb-[32px]' key={index}>
                            <h2 className=' text-gray-700  font-[700] text-[12px] tracking-widest'>{item.title}</h2>
                               {
                                item.links.map((link,index)=> (
                                    <a href={link.link} className=' block text-gray-200 text-[16px] mt-[6px] hover:text-blue-500 font-[500]' key={index}>{link.name}</a>
                                ))
                               }
                            </div>
                     ))
                    }
                
               </div>
            </div>
        </div>
        <div className=' flex justify-center items-center w-[100%] text-gray-500 text-[12px]'>
            <h1> 
                CopyRight {new Date().getFullYear()} - <a href="https://techsroute.com/">Techsroute.com</a>
            </h1>
        </div>
        </div>
    );
};

export default Footer;