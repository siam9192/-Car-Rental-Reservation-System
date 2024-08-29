import { TCar } from '../../types';
import { IoCheckmarkDone } from 'react-icons/io5';
import { LuDollarSign } from 'react-icons/lu';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import AlertModal from '../modal/AleartModal';
import { useDeleteCarMutation } from '../../redux/features/admin/CarManagement.api';
import { toast } from 'sonner';
import { useAppSelector } from '../../redux/hook';
type TPrimaryCarCard = {
  car: TCar;
};
const AdminCarCard = ({ car }: TPrimaryCarCard) => {

  const navigate = useNavigate();
  // /images/cars/car1.png
  const user = useAppSelector(state=>state.auth.user)
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };
  
  const [deleteCar] = useDeleteCarMutation()
  const handelDeleteCar = async() => {
    const res = await deleteCar(car._id)
    if(!res.error){
      toast.success('Car deleted successfully',{duration:3000})
    }
    else {
      toast.error('Something went wrong',{duration:3000})
    }
  };

  const handelNavigate = () => {
    navigate(`/car/${car._id}`);
  };
  const handelNavigateToEditPage = (e:any)=>{
   e.stopPropagation()
  navigate(`/dashboard/admin/update-car/${car._id}`)
  
 
  }
  return (
    <div
      onClick={handelNavigate}
      className=" bg-white dark:bg-[#1D232A] p-3 rounded-lg hover:cursor-pointer border  dark:border-none flex flex-col h-full "
    >
      <div className="bg-gray-secondary dark:bg-transparent p-3 md:p-5 rounded-lg">
        <img className="w-full scale-125" src={car.images[0]} alt="" />
      </div>
      <div className="mt-5 flex-grow ">
        <div className="space-y-3">
          <div className="space-y-2">
            <h6 className="font-medium dark:text-slate-200">{car.brand}</h6>
            <h1 className="text-xl text-black font-semibold dark:text-slate-50">
              {car.name}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-fit bg-gray-50  flex items-center gap-1 px-2 py-1 border rounded-full dark:text-gray-800">
              <span>
                {' '}
                <MdOutlineAirlineSeatReclineExtra />
              </span>{' '}
              <span className="font-medium ">{car.seats}</span>
            </div>
            <div className="w-fit bg-gray-50 flex items-center gap-1 px-2 py-1 border rounded-full">
              <span>
                {' '}
                <IoCheckmarkDone />
              </span>{' '}
              <span
                className={`font-medium uppercase text-[0.9rem] ${car.status === 'available' ? 'text-green-500' : 'text-red-500'}`}
              >
                {car.status}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <div className="flex items-center text-2xl font-bold dark:text-slate-100">
            <span>
              <LuDollarSign />
            </span>
            <h1>
              {car.pricePerHour}
              <span className="text-[1.2rem] font-medium">/hour</span>
            </h1>
          </div>
        </div>
        
      </div>
      <div className="flex justify-between items-center mt-5">
        
            <button onClick={handelNavigateToEditPage} className="px-4 py-2  bg-secondary-color text-white rounded-full">
              Edit
            </button>
         
          <AlertModal onConfirm={handelDeleteCar} message="Are you sure?">
            <button className="px-4 py-2  bg-red-500 text-white rounded-full">
            Delete
            </button>
          </AlertModal>
        </div>
    </div>
  );
};

export default AdminCarCard;
