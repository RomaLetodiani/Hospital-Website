import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;

  const handleLinkClick = () => {
    setSelectedPage(lowerCasePage);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? 'text-primary border-b-2 mt-0.5 border-[#2b7dad]'
          : 'text-[#1d4d85]'
      } transition font-bold text-lg duration-500 hover:text-[#2b7dad]`}
      href={`#${lowerCasePage}`}
      onClick={handleLinkClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
