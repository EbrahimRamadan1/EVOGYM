import SponsorRedBull from '@/assets/SponsorRedBull.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import HomePageText from '@/assets/HomePageText.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import { SelectedPage } from '@/shared/Types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionBtn from '../ActionBtn/ActionBtn';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/*Left*/}
        <div className="z-10 md:basis-3/5 mt-16">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionBtn children="Join Now" setSelectedPage={setSelectedPage} />
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Lern More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/*Right*/}
        <div className="flex basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/*Sponsors*/}
      {isAboveMediumScreen && (
        <div className="h-[150] w-full py-10 bg-primary-100">
          <div className="mx-auto w-5/6">
            <div className="flex  w-3/5 justify-between items-center">
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
