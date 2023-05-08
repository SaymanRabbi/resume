import useWidth from '../../../hooks/useWidth';
import Left from './Components/Left';
import Right from './Components/Right';

const Gregory = () => {
  const width = useWidth()
    return (
        
    <div className={`bg-[white] rounded-md ${width>1280?"w-[100%] h-[100%]":"w-[990px]"}  mx-auto`}>
      <div className=' grid grid-cols-12 w-[100%] h-[100%] overflow-hidden'>
        <Left/>
        <Right/>
      </div>
    </div>
 
    );
};

export default Gregory;