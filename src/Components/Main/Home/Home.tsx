import Button from '@/Components/UI/Button';
import hero from '@/assets/images/hero.png';
import DescNums from './DescNums';

const Home = () => {
  return (
    <section className="pt-28" id="home">
      <div className="flex flex-col-reverse text-center md:text-left md:flex-row items-center justify-between gap-10">
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
    </section>
  );
};

export default Home;
