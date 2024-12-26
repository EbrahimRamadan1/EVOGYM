import { SelectedPage } from '@/shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Benefit({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      className="rounded-md border-2 border-gray-100 px-5 py-16 text-center items-center"
      variants={childVariant}
    >
      <div className="flex justify-center mb-4">
        <div className="rounded-full border-gray-100 border-2 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="py-5">{description}</p>
      <AnchorLink
        className="font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Lern More</p>
      </AnchorLink>
    </motion.div>
  );
}
