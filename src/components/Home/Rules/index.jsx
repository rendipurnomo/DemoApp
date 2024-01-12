import { RefreshCw } from 'lucide-react';
import { Coins } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Truck } from 'lucide-react';

const Rule = () => {
  return (
    <div className="my-16 grid grid-cols-2 md:grid-cols-4 gap-4">
      {rules.map((category, index) => (
        <li
          key={index}
          className="flex flex-col items-center gap-2 px-4 py-8 rounded-xl  border-none">
          <span className="hover:text-primary hover:scale-125 transition-all duration-300 ease-in-out">
            {category.icon}
          </span>
          <h1>{category.name}</h1>
          <p className='text-gray-600'>{category.dsc}</p>
        </li>
      ))}
    </div>
  );
};

export default Rule;

const rules = [
  {
    id: 1,
    name: 'Secure Payment',
    dsc: 'Free Shipping on all order',
    icon: <Coins className="w-10 h-10" />,
  },
  {
    id: 4,
    name: 'Free Delivery',
    dsc: 'Free Shipping on all order',
    icon: <Truck className="w-10 h-10" />,
  },
  {
    id: 2,
    name: 'Return Policy',
    dsc: 'Free Shipping on all order',
    icon: <RefreshCw className="w-10 h-10" />,
  },
  {
    id: 3,
    name: '24/7 Support',
    dsc: 'Free Shipping on all order',
    icon: <Headphones className="w-10 h-10" />,
  },
];
