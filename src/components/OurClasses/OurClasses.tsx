import { ClassType, SelectedPage } from '@/shared/Types';
import { motion } from 'framer-motion';
import HText from '../HText/HText';
import img1 from '@/assets/image1.png';
import img2 from '@/assets/image2.png';
import img3 from '@/assets/image3.png';
import img4 from '@/assets/image4.png';
import img5 from '@/assets/image5.png';
import img6 from '@/assets/image6.png';
import Class from './Class';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: ClassType[] = [
  {
    title: 'Weight Training Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img1,
  },
  {
    title: 'Yoga Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img2,
  },
  {
    title: 'Ab Core Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img3,
  },
  {
    title: 'Adventure Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img4,
  },
  {
    title: 'Fitness Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img5,
  },
  {
    title: 'Training Classes',
    descrip:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: img6,
  },
];

export default function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className=" mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="my-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>

        <div className="w-full overflow-x-auto overflow-y-hidden mt-10 h-[353px]">
          <div className="w-[2800px] whitespace-nowrap">
            {classes.map((el, index) => (
              <Class
                key={`${el.title} - ${index}`}
                img={el.img}
                title={el.title}
                descrip={el.descrip}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
