import useWidth from '../../../hooks/useWidth';
import Left from './Components/Left';
import Right from './Components/Right';

const Gregory = ({id}) => {
  const width = useWidth()
  // w-[990px]
    return (
        
    <div id='sydney' className={`bg-[white] rounded-md ${width>=1280 || width<=480 || width<=768?"w-[100%] h-[100%] ":"overflow-x-scroll overflow-y-scroll"}  mx-auto  `}>
      <div className=' grid grid-cols-12 w-[100%] h-[100%]'>
        <Left id={id}/>
        <Right id={id}/>
      </div>
    </div>
 
    );
};

export default Gregory;