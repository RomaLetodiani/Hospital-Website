import { ServicesData } from '@/Components/Shared/Consts';
import Button from '@/Components/UI/Button';
import Service from './Service';
import { useState } from 'react';
import { SelectedService } from '@/Components/Shared/Types';
import { SparklesIcon } from '@heroicons/react/20/solid';

const Services = () => {
  const [SelectService, setSelectService] = useState<SelectedService>(
    SelectedService.Cardiology
  );

  const selectedServiceData = ServicesData.find(
    (service) => service.id === SelectService
  );
  return (
    <section className="pt-12" id="services">
      <h2 className="text-4xl font-bold text-center mt-20 mb-10">Services</h2>
      <div className="max-w-6xl m-auto flex flex-col justify-center lg:flex-row gap-10 lg:gap-20">
        <div className="grid grid-cols-3 gap-5">
          {ServicesData.map((service, index) => (
            <Service
              key={index}
              service={service}
              SelectService={SelectService}
              setSelectService={setSelectService}
            />
          ))}
        </div>
        <div className="lg:min-w-[345px]">
          <h3 className="text-xl xs:text-2xl font-bold mb-6">
            {selectedServiceData?.heading}
          </h3>
          <ul className=" lg:ml-5 min-h-[310px] sm:min-h-[225px] md:min-h-[190px] text-xs xs:text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
            {selectedServiceData?.texts.map((text, index) => (
              <div key={index} className="flex lg:items-center gap-3">
                <SparklesIcon className="h-3 w-3 text-[#2c84f7]" />

                <li>{text}</li>
              </div>
            ))}
          </ul>
          <div className="lg:ml-5 mt-5">
            <Button>Appointment Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
