import { FooterData } from '../Shared/Consts';
import ContactDiv from './ContactDiv';

const Footer = () => {
  return (
    <div className="bg-[#aed4ff] mt-20 p-10 md:px-16">
      <div className="max-w-[1250px] m-auto flex justify-center gap-14 flex-wrap md:flex-nowrap">
        <div className="font-bold">
          <img width={50} src={FooterData.logo} alt="Logo" />
          {FooterData.addresses.map((address, index) => (
            <p className="my-3" key={index}>
              {address}
            </p>
          ))}
          <p>{FooterData.phone}</p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-bold text-lg">Departments</p>
            <ul>
              {FooterData.departments.map((department, index) => (
                <li key={index}>{department}</li>
              ))}
            </ul>
          </div>
          <ul>
            {FooterData.links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <ContactDiv />
      </div>
    </div>
  );
};

export default Footer;
