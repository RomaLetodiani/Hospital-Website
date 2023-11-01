import SocialsDiv from '../Socials/SocialsDiv';
import Input from '../UI/Input';

const ContactDiv = () => {
  return (
    <div className="max-w-xs">
      <p className="ml-1 font-bold max-w-[250px]">
        Have Something To Talk About With Our Professionals?
      </p>
      <Input placeholder="Your Email" />
      <SocialsDiv />
    </div>
  );
};

export default ContactDiv;
