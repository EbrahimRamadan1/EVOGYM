import Logo from '@/assets/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-primary-100 w-full py-16 flex items-center justify-center">
      <div className="w-5/6 flex flex-wrap justify-between items-start gap-10 md:gap-5 md:flex-nowrap">
        {/*Left*/}
        <div className="w-full md:basis-1/2">
          <img src={Logo} alt="Logo" />

          <p className="py-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>

          <p>© Evogym All Rights Reserved.</p>
        </div>

        {/*Middle*/}
        <div className="w-full md:basis-1/4">
          <p className="font-bold">Links</p>
          <p className="py-5">Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p className="py-5">Ullamcorper vivamus</p>
        </div>

        {/*Right*/}
        <div className="w-full md:basis-1/4">
          <p className="font-bold">Contact Us</p>
          <p className="py-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
}
