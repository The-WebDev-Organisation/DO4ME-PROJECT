import  { useState } from 'react';
import { Link } from 'react-router-dom';
import serviceImage from '../assets/tools.jpg';
import services from './services'

const ServicesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices = services.filter(service => {
        return (
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) || service.subcategories.some(subcategory => subcategory.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });


    return (
        <div>
            <div className="container mx-auto py-12 bg-[#FCF8F1] bg-opacity-30">
                <div className='flex items-center justify-between'>
                <div className="flex flex-wrap items-center">
                    <img src={serviceImage} alt="services" className="w-full sm:w-64 h-auto object-cover" />
                    <div className="ml-4">
                        <p className="font-bold text-base sm:text-xl text-cyan-300 mb-1 ">Explore Our Services</p>
                        <p className="font-black text-2xl sm:text-5xl ">Discover a variety of services</p>
                    </div>
                </div>
                <div className='mr-0 mb-4'>
                <input
            type="text"
            placeholder="Search for services..."
            className="border p-2 w-64 rounded-full border-cyan-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          </div>

                {/* <SearchBar onSearch={handleSearch}/>
                <Filters onFilter={handleFilter}/> */}
                </div>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                    {filteredServices.map(service => (
                        <div key={service.id} className="relative w-full sm:w-64 m-2 sm:m-4 p-4 border rounded-lg shadow-lg transition duration-300 group">
                            <img src={service.image} alt={service.name} className="w-screen h-40 object-cover rounded-t-lg" />
                            <div className="text-center mt-2">
                                <h2 className="text-lg sm:text-xl font-semibold">{service.name}</h2>
                                <p className="text-gray-500">{service.description}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center hidden group-hover:block">
                                {service.subcategories.map(subcategory => (
                                    <Link key={subcategory.id} to={`/services/${service.id}/${subcategory.id}`} className="block py-1">
                                        {subcategory.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;

