import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className=" tracking-wider md:tracking-normal max-w-xs lg:max-w-xl ">
          <h1 className="lg:text-7xl text-4xl font-bold">
            Your Health Is Our Top Priority
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            Securely share your comprehensive medical history with doctors and
            loved ones, for better communication and care.
          </p>
          <Button>Appointment Now</Button>
        </div>
        <div className="max-w-xs md:max-w-none">
          <img src={hero} alt="hero" />
        </div>
      </div>
      <DescNums />
    </SectionWrapper>
  );
};

export default Home;
