import Logo from '/android-chrome-192x192.png';
import { Link } from 'react-router-dom';
import { FooterList1, FooterList2, FooterList3 } from '../../lib/constans';
import { Phone } from 'lucide-react';
import { ArrowBigLeftDash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="md:h-screen container flex flex-col justify-around">
      <div className="flex max-md:flex-col justify-between items-center">
        <div className="flex flex-col md:w-1/3 max-md:items-center max-md:mb-4">
          <h3 className="text-2xl font-medium mb-3">
            Mulailah Belanja Sekarang
          </h3>
          <p className="text-md text-gray-600 max-md:text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus et deleniti numquam eos, laboriosam repellat veritatis minima, nam voluptates eveniet! Excepturi blanditiis obcaecati animi.
          </p>
        </div>
        <div className="flex gap-4 max-md:w-full max-md:justify-between">
          <button className="max-md:w-1/2 bg-none px-8 py-3 rounded-md text-primary font-medium border-2 border-primary shadow-main">
            <Link to="/">Buat Akun</Link>
          </button>
          <button className="max-md:w-1/2 bg-primary px-8 py-3 rounded-md text-white font-medium hover:bg-primary/70 transition-all duration-300 ease-in-out shadow-main">
            <Link className="flex items-center gap-2 justify-center" to="/">
              <Phone />
              <span>Konsultasi Gratis</span>
            </Link>
          </button>
        </div>
      </div>

      <hr />

      <div className="flex justify-between max-md:flex-col max-md:mt-5">
        <div className="md:w-1/3 flex flex-col">
          <div className="flex items-center max-md:justify-center gap-2 mb-4">
            <img className="w-12" src={Logo} alt="logo" />
            <h3 className="text-xl md:text-2xl font-bold">
              UMKM Digital Blockchain
            </h3>
          </div>
          <p className="text-md text-gray-600 mb-4 max-md:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi odio quo officia consequuntur voluptatum culpa atque vitae sequi? Fuga dignissimos maxime odio reprehenderit eius.
          </p>
          <button className="md:w-3/4 bg-gradient-to-r from-violet-500 to-red-500 text-white px-8 py-3 rounded-lg">
            <Link className="flex items-center justify-center gap-2" to="/">
              <Phone /> <span>Ikuti kami di Instagram</span>
            </Link>
          </button>
        </div>
        <div className="flex gap-10 max-md:mt-5 max-md:flex-col max-md:text-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">Perusahaan</h3>
            {FooterList1.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-md text-gray-600 hover:text-primary">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">Peserta</h3>
            {FooterList2.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-md text-gray-600 hover:text-primary">
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-3">Bantuan</h3>
            {FooterList3.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-md text-gray-600 hover:text-primary flex items-center gap-2 max-md:justify-center">
                {item.title}
                <ArrowBigLeftDash />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-md text-gray-600 text-center max-md:mt-5">
        © {new Date().getFullYear()} PT.UMKM Digital Blockchain Indonesia
      </p>
    </footer>
  );
};

export default Footer;
