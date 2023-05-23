import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faPen, faArrowDown,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import Christoper from '../../Components/Resume/Christoper/Christoper';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import useGetResume from '../../hooks/useGetResume';
import Spiner from '../../Components/Spiner';
import Vince from '../../Components/Resume/Vince/Vince';
import Sebastian from '../../Components/Resume/Sebastian/Sebastian';
import Petrica from '../../Components/Resume/Petrica/Petrica';
import Gregory from '../../Components/Resume/Gregory/Gregory';
import Shophie from '../../Components/Resume/Shophie/Shophie';
import Westurner from '../../Components/Resume/Westurner/Westurner';
import Tim from '../../Components/Resume/Tim/Tim';
import IsabelMaher from '../../Components/Resume/IsabelMaher/IsabelMaher';
import Elsa from '../../Components/Resume/Elsa/Elsa';
import Monica from '../../Components/Resume/Monica/Monica';
import Daryal from '../../Components/Resume/Daryal/Daryal';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { data } from '../../App';
import { savePDF } from '@progress/kendo-react-pdf';
const Profile = () => {
    const pdfRef = React.useRef(null);
    const [user,loading] = useAuthState(auth)
    const {allData,setAllData} = useContext(data)
   loading && <Spiner/>
  const Resumedata =  useGetResume(user?.email)
  const path = Resumedata?.resumeId
  console.log(path)
  const DeleteResume = async(id) => {
    if(!id) {
        return toast.error('Something Went Wrong')
    }
    await axios.delete(`http://localhost:5000/api/v1/deleteResume/${id}`).then(res=>{
        if(res.data.success){
            setAllData ({
                ...allData,
                [path] : null
            })
            toast.success('Resume Deleted Successfully')
        }
    } ).catch(err=>console.log(err))
  }
  const GeneratePDF =async () => {
    if(!path){
        return toast.error('Something Went Wrong')
    }
    savePDF(pdfRef.current, { paperSize: 'A4',fileName:`${path}` });
  }
    return (
        <div className=' max-w-[1100px] mx-auto'>
            <h2 className=' text-3xl text-black font-[600]'>Your All Resumes</h2>
            <div className=' relative flex  w-full  border-b border-gray-200 py-2 justify-between'>
                <h2 className=' font-[500]'>
                Resumes
                </h2>
                <Link to='/resume-templates' className=' absolute right-0 top-[-20px] bg-blue-500 text-white px-2 py-2 rounded-md font-[500] flex gap-x-2 items-center'>
                    <FontAwesomeIcon icon={faPlus} />
                    Create New
                </Link>
                <div className=' w-[65px] bg-blue-500 h-[2px] absolute bottom-0'></div>
            </div>
            <div className=' py-5 grid grid-cols-12 gap-x-6 lg:gap-y-5 gap-y-0'>
               <div className=' flex gap-x-10 lg:col-span-6 col-span-12'>
                <div className=' h-[100%] w-[100%] rounded-md border border-gray-200 ' ref={pdfRef}>
                {
                      path==='tokyo'?<Vince id={path}/>
                      :path==='toronto'?<Christoper id={path}/>
                      :path==="madrid"?<Sebastian id={path}/>
                      :path==='vienna'?<Petrica id={path}/>
                      :path==='sydney'?<Gregory id={path}/>
                      :path==="new_york"?<Shophie id={path}/>
                      :path==="amsterdam"?<Westurner id={path}/>
                      :path ==='london' ? <Tim id={path}/>
                      :path==='vancouver' ?<IsabelMaher id={path}/>
                      :path ==='milan' ? <Elsa id={path}/>
                      :path ==='copenhagen' ? <Monica id={path}/>
                      :path==="lisbon" ? <Daryal id={path}/>
                      :null
                     }
                </div>
                <div className=''>
                    <h2 className=' text-2xl text-gray-500'>
                    {Resumedata?.tittle}
                    </h2>
                    <div className=' py-5'>
                      {
                         path ?  <Link to={`/resume_builder/${path}`} className=' flex gap-x-3 items-center text-[18px] font-[400]'>
                         <FontAwesomeIcon icon={faPen} className=' text-blue-500'/>
                         <span className='text-gray-500'>Edit</span>
                    </Link> :  <button className=' flex gap-x-3 items-center text-[18px] font-[400] cursor-not-allowed'>
                            <FontAwesomeIcon icon={faPen} className=' text-blue-500'/>
                            <span className='text-gray-500'>Edit</span>
                       </button>
                      }
                       <div className=' flex gap-x-4 items-center text-[18px] font-[400] py-3 cursor-pointer' onClick={GeneratePDF}>
                            <FontAwesomeIcon icon={faArrowDown} className=' text-blue-500'/>
                            <span className='text-gray-500'>Download PDF</span>
                       </div>
                       <div className=' flex gap-x-4 items-center text-[18px] font-[400] cursor-pointer' onClick={()=>DeleteResume(path)}>
                            <FontAwesomeIcon icon={faTrashCan} className=' text-blue-500'/>
                            <span className='text-gray-500'>Delete</span>
                       </div>
                    </div>
                </div>
               </div>

               <Link to='/resume-templates' className='flex gap-x-10 lg:col-span-6 col-span-12 cursor-pointer group lg:my-0 my-10'>
               <div>
               <div className=' w-[210px] h-[300px] rounded-md border border-gray-200 flex justify-center items-center  '>
                     <div className=' w-[60px] h-[60px] rounded-full bg-gray-100 flex justify-center items-center  text-2xl text-gray-300 group-hover:text-white group-hover:bg-blue-500'>
                        <FontAwesomeIcon icon={faPlus} />
                     </div>
                </div>
               </div>
                     <div className=''>
                     <h2 className=' text-2xl font-[400] text-gray-500'>
                     New Resume
                     </h2>
                     <p className=' text-gray-500 text-[14px]'>
                     Create a tailored resume for each job application. Double your chances of getting hired!
                     </p>
                     </div>
               </Link>
            </div>
        </div>
    );
};

export default Profile;