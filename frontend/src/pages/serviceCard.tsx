import { Link } from 'react-router-dom';
import services from './services';

interface services {
    id: number;
    image: string;
    name: string;
    description: string;
  }
  
  interface ServiceCardProps {
    service: services;
  }
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Link to={`/services/${service.id}`} className="block">
        <img src={service.image} alt={service.name} className="w-full h-48 object-cover"/>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
        </Link>
      </div>
    );
  };
  
  export default ServiceCard;