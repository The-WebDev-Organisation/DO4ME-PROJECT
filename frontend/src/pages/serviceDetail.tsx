
import { useParams } from 'react-router-dom';
import React from 'react';
import services from './services';
import Breadcrumbs from './breadcrumbs';
import workImage from '../assets/work.png';

// Define the type for a single breadcrumb
interface Crumb {
  path: string;
  label: string;
}

// Type guard to filter out null values
const isCrumb = (item: Crumb | null): item is Crumb => item !== null;

const ServiceDetail: React.FC = () => {
  const { id, subcategoryId } = useParams<{ id?: string; subcategoryId?: string }>();

  // Ensure id is a string before parsing
  const serviceId = id ? parseInt(id, 10) : null;
  const subcategoryIdInt = subcategoryId ? parseInt(subcategoryId, 10) : null;

  // Find the service based on the id
  const service = serviceId !== null ? services.find(service => service.id === serviceId) : null;

  // Find the subcategory if applicable
  const sub = subcategoryIdInt ? service?.subcategories.find(sub => sub.id === subcategoryIdInt) : null;

  if (!service) return <div>Service not found</div>;

  // Define breadcrumbs
  const crumbs: (Crumb | null)[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: service.name, path: `/services/${id}` },
    sub ? { label: sub.name, path: `/services/${id}/${subcategoryId}` } : null
  ];

  // Filter the crumbs array using the type guard
  const validCrumbs: Crumb[] = crumbs.filter(isCrumb);
  

  return (
    <div>
    <div className="bg-[#FCF8F1] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
        <div className="bg-white p-6 shadow-xl max-w-lg w-full text-center mt-20">
          <p className="text-4xl font-bold mb-2 text-gray-800">{service.name}</p>
          <p className="text-gray-600 mb-4">{service.description}</p>
          {sub && <p className="text-gray-600 mb-4">{sub.name}</p>}

          <button className="bg-cyan-500 text-white p-2 font-bold text-lg rounded hover:bg-cyan-700 transition mt-4">
            Sign In to Book Now
          </button>
          <Breadcrumbs crumbs={validCrumbs} />
        </div>
        </div>
        </div>
        </div>

      <div className="bg-gray-200 flex flex-col items-center my-20 p-6 rounded-lg" >
        <h2 className="text-2xl font-bold mb-4 mt-6">How does it work?</h2>
        <p className="mb-4">After creating a free DO4ME account, follow these steps:</p>
        <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-x-4 ">
          <div className="flex flex-col items-center w-full md:w-1/3 bg-gray-100 p-5 rounded-xl">
            <img src={workImage} alt="Step 1" className="mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-2">Choose a professional by price range, skills, and reviews</h3>
            <p className="text-center">Choose a professional for your job that fits your needs!</p>
          </div>
          <div className="flex flex-col items-center md:w-1/3 w-full bg-gray-100 p-5 rounded-xl">
            <img src={workImage} alt="Step 2" className="mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-2">Describe Your Task</h3>
            <p className="text-center">Schedule a survey for a professional to physically examine the job.</p>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3 bg-gray-100 p-5 rounded-xl">
            <img src={workImage} alt="Step 3" className="mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-2">Get it done!</h3>
            <p className="text-center">Easily communicate with your service provider, make payments, and make reviews all in one place.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
