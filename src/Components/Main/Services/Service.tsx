import { SelectedService } from '@/Components/Shared/Types';

type Props = {
  SelectService: string;
  setSelectService: (value: SelectedService) => void;
  service: {
    img: string;
    title: string;
  };
};

const Service = ({ SelectService, setSelectService, service }: Props) => {
  const lowerCaseService = service.title
    .toLowerCase()
    .replace(/\s+/g, '') as SelectedService;
  return (
    <div
      onClick={() => setSelectService(lowerCaseService)}
      className={`${
        SelectService === lowerCaseService
          ? 'bg-[#6adcff] rounded-ss-[25px] xs:rounded-ss-[50px] sm:rounded-ss-[75px]'
          : 'bg-[#ffffffd1] hover:bg-[#c2f1ff] rounded-lg'
      }  cursor-pointer transition-all rounded-lg flex flex-col items-center gap-4 p-2 xs:p-4 lg:p-10 shadow-md `}
    >
      <img
        className="max-w-[30px] xs:max-w-[50px] md:max-w-[75px] lg:max-w-[60px]"
        src={service.img}
        alt={service.title}
      />
      <p className="text-[10px] font-bold sm:text-sm lg:text-xl">
        {service.title}
      </p>
    </div>
  );
};

export default Service;
