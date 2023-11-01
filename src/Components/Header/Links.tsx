import { SelectedPage } from '@/Components/Shared/Types';
import Link from './Link';
import { links } from '@/Components/Shared/Consts';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <>
      {links.map((link) => (
        <Link
          key={link}
          page={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </>
  );
};

export default Links;
