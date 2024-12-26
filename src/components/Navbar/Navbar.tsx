import Logo from '@/assets/Logo.png';
import Link from './Link';
import { SelectedPage } from '@/shared/Types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import ActionBtn from '../ActionBtn/ActionBtn';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) {
  const isAboveMediumScreen = useMediaQuery('(min-width: 950px)');
  const flexBetween = 'flex items-center justify-between';
  const [isMenueToggled, setIsMenueToggled] = useState<boolean>(false);
  const navbarBackground = !isTopOfPage ? 'bg-primary-100 drop-shadow' : '';
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed w-full py-6 z-50 top-0`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*Left Side*/}
            <img src={Logo} alt="Logo" />

            {/*Right Side*/}
            {isAboveMediumScreen ? (
              <div className={`${flexBetween} w-full`}>
                {/*Left Side*/}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />

                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                {/*Right Side*/}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <ActionBtn
                    children="Become a Member"
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-500"
                onClick={() => setIsMenueToggled(!isMenueToggled)}
              >
                <Bars3Icon className="text-white h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/*Mobile Menu*/}
      {!isAboveMediumScreen && isMenueToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-5">
            <button onClick={() => setIsMenueToggled(!isMenueToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="flex flex-col gap-10 ml-[25%] text-xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
