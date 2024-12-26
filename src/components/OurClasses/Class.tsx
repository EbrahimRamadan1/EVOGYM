// type Props = {};

import { ClassType } from '@/shared/Types';

export default function Class({ title, descrip, img }: ClassType) {
  const overLayStyle = `p-5 absolute z-30 flex top-0 right-0
  h-[380px] w-[450px] flex-col items-center justify-center gap-5
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px] ">
      <img src={img} alt={`Image of ${title}`} />
      <div className={overLayStyle}>
        <h4 className="font-bold text-2xl text-white">{title}</h4>
        <p className="text-sm text-white">{descrip}</p>
      </div>
    </li>
  );
}
