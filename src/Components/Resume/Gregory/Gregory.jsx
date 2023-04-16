import Left from './Components/Left';
import Right from './Components/Right';

const Gregory = () => {
    return (
        <div className=' bg-[#EFF2F9] p-12'>
    <div className='  bg-[white] rounded-md w-[990px]  mx-auto'>
      <div className=' grid grid-cols-12'>
        <Left/>
        <Right/>
      </div>
    </div>
 </div>
    );
};

export default Gregory;