import plumbingImage from "../assets/Plumbing.jpg";
import electricalImage from '../assets/electrical.jpg';
import carpentryImage from '../assets/carpentry.png';
import landscapingImage from '../assets/landscaping.png';
import cleaningImage from '../assets/cleaning.webp';
import mechanicImage from '../assets/mechanic.webp';
import itsupportImage from '../assets/IT.avif';
import paintingImage from '../assets/painting.avif';
import tutoringImage from '../assets/tutoring.jpg';
import fitnessImage from '../assets/fit.jpg';
import cateringImage from '../assets/caterer.webp';
import eventplanningImage from '../assets/event-planning.png';
import roofingImage from '../assets/roofing.webp';
import pestControlImage from '../assets/pestControl.jpg';
import applianceRepairImage from '../assets/applianceRepair.jpg';
import mountingImage from '../assets/mounting2.webp';

const services = [
  {
    id: 1,
    name: "Plumbing",
    image: plumbingImage,
    subcategories: [
      { id: 1, name: "Leak Repair" },
      { id: 1, name: "Pipe Installation" },
      { id: 1, name: "Drain Cleaning"}
    ],
    description: 'Professional plumbing services',
  },
  {
    id: 2,
    name: "Electrical",
    image: electricalImage,
    subcategories: [
      { id: 2, name: "Wiring", image:electricalImage },
      { id: 2, name: "Lighting Installation", image:electricalImage },
      { id: 2, name: "Outlet Repair", image:electricalImage },
      { id: 2, name: "Ceiling Fan Installation", image:electricalImage},
    ],
    description: 'Expert electrical repairs and installations',
  },
  {
    id: 3,
    name: "Carpentry",
    image: carpentryImage,
    subcategories: [
      { id: 3, name: "Furniture Assembly" },
      { id: 3, name: "Door, Cabinet, & Furniture Repair" },
      { id: 3, name: "Window & Blinds Repair"},
      { id: 3, name: "Patio Furniture Assembly"},
      { id: 3, name: "Wardrobe Assembly"},
      { id: 3, name: "Desk Assembly"},
      { id: 3, name: "Dresser Assembly"},
      { id: 3, name: "Bed Assembly"},
      { id: 3, name: "Bookshelf Assembly"},
      { id: 3, name: "Couch Assembly"},
      { id: 3, name: "Chair Assembly"},
      { id: 3, name: "Table Assembly"},
      { id: 3, name: "Disassemble furniture"},

    ],
    description: 'Expert carpentry services',
  },
  {
    id: 4,
    name: "Cleaning",
    image: cleaningImage,
    subcategories: [
      { id: 4, name: "House Cleaning Services" },
      { id: 4, name: "Deep Cleaning" },
      { id: 4, name: "Disinfecting Services" },
      { id: 4, name: "Move In Cleaning"},
      { id: 4, name: "Move Out Cleaning"},
      { id: 4, name: "Vacation Rental Cleaning"},
      { id: 4, name: "Carpet Cleaning Service"},
      { id: 4, name: "Garage Cleaning"},
      { id: 4, name: "One Time Cleaning Services"},
      { id: 4, name: "Car Washing"},
      { id: 4, name: "Laundry Help"},
      { id: 4, name: "Pressure Washing"},
      { id: 4, name: "Spring Cleaning"},
    ],
    description: 'Expert cleaning services',
  },
  {
    id: 5,
    image: mechanicImage,
    name: "Mechanic",
    subcategories: [
      { id: 5, name: "Oil Change" },
      { id: 5, name: "Brake Repair" },
      { id: 5, name: "Engine Tune-Up" },
      { id: 5, name: "Battery Replacement" },
      { id: 5, name: "Tire Rotation" },
      { id: 5, name: "Transmission Repair" },
      { id: 5, name: "Air Conditioning Service" },
      { id: 5, name: "Suspension Repair" },
      { id: 5, name: "Exhaust System Repair" },
      { id: 5, name: "Diagnostic Services" },
    ],
    description: 'Expert mechanic services',
  },
  {
    id: 6,
    image: paintingImage,
    name: "Painting",
    subcategories: [
      { id:6, name: "Interior Painting" },
      { id:6, name: "Exterior Painting" },
      { id: 6, name: "Wallpaper Removal" },
      { id: 6, name: "Fence Painting" },
      { id: 6, name: "Cabinet Painting" },
      { id: 6, name: "Deck Staining" },
    ],
    description: 'Expert painting services',
  },
  {
    id: 7,
    name: "IT Support",
    image: itsupportImage,
    subcategories: [
      { id: 7, name: "Computer Repair" },
      { id: 7, name: "Software Installation" },
      { id: 7, name: "Virus Removal" },
      { id: 7, name: "Network Setup" },
      { id: 7, name: "Data Recovery" },
      { id: 7, name: "Backup Solutions" },
      { id: 7, name: "Web design and development" },
    ],
    description: 'Expert IT support services',
  },
  {
    id: 8,
    name: "Tutoring",
    image: tutoringImage,
    subcategories: [
      { id: 8, name: "Math Tutoring" },
      { id: 8, name: "English Tutoring" },
      { id: 8, name: "Science Tutoring" },
      { id: 8, name: "Test Preparation" },
      { id: 8, name: "Language Tutoring" },
      { id: 8, name: "Homework Assisting" },
    ],
    description: 'Expert tutoring services',
  },
  {
    id: 9,
    name: "Fitness Training",
    image: fitnessImage,
    subcategories: [
      { id: 9, name: "Personal Training" },
      { id: 9, name: "Group Fitness Classes" },
      { id: 9, name: "Yoga Instruction" },
      { id: 9, name: "Weight Loss" },
    ],
    description: 'Expert fitness training services',
  },
  {
    id: 10,
    name: "Event Planning",
    image: eventplanningImage,
    subcategories: [
      { id: 10, name: "Wedding Planning" },
      { id: 10, name: "Corporate Event Planning" },
      { id: 10, name: "Birthday Party Planning" },
      { id: 10, name: "Event Decoration" },
      { id: 10, name: "Venue Selection" },
      { id: 10, name: "Graduation Party Planning" }, 
    ],
    description: 'Expert event planning services',
  },
  {
    id: 11,
    name: "Catering",
    image: cateringImage,
    subcategories: [
      { id: 11, name: "Wedding Catering" },
      { id: 11, name: "Corporate Event Catering" },
      { id: 11, name: "Private Party Catering" },
      { id: 11, name: "Buffet Catering" },
      { id: 11, name: "Cocktail Party Catering" },
    ],
    description: 'Expert catering services',
  },
  {
    id: 12,
    name: "Landscaping",
    image: landscapingImage,
    subcategories: [
      { id: 12, name: "Lawn Maintenance" },
      { id: 12, name: "Garden Design" },
      { id: 12, name: "Tree Trimming" },
      { id: 12, name: "Hardscaping" },
      { id: 12, name: "Irrigation System Installation" },
    ],
    description: 'Expert landscaping services',
  },
  {
    id: 13,
    name: "Roofing",
    image: roofingImage,
    subcategories: [
      { id: 13, name: "Roof Repair" },
      { id: 13, name: "Roof Installation" },
      { id: 13, name: "Roof Inspection" },
    ],
    description: 'Expert roofing services',
  },
  {
    id: 14,
    name: "Pest Control",
    image: pestControlImage,
    subcategories: [
      { id: 14, name: "Termite Control" },
      { id: 14, name: "Rodent Control" },
      { id: 14, name: "Bed Bug Control" }
    ],
    description: 'Expert pest control services',
  },
  {
    id: 16,
    name: "Appliance Repair",
    image: applianceRepairImage,
    subcategories: [
      { id: 16, name: "Refrigerator Repair" },
      { id: 16, name: "Washing Machine Repair" },
      { id: 16, name: "Dishwasher Repair" },
      { id: 16, name: "Oven Repair" },
      { id: 16, name: "Dryer Repair" },
      { id: 16, name: "Microwave Repair" },
      { id: 16, name: "Garbage Disposal Repair" },
      { id: 16, name: "Stove Repair" },
    ],
    description: 'Expert appliance repair services',
  },
  {
    id: 17,
    name: "Mounting and Installation",
    image: mountingImage,
    subcategories: [
      { id: 17, name: "Doorbell Installation" },
      { id: 17, name: "Cabinet Installation" },
      { id: 17, name: "Install Blinds & Window Treatments" },
      { id: 17, name: "Install Shelves, Rods & Hooks" },
      { id: 17, name: "TV Mounting" },
      { id: 17, name: "Mirror Mounting" },
      { id: 17, name: "Art & Picture Hanging" },
      { id: 17, name: "Wallpaper Installation" },
      { id: 17, name: "Install Light Fixtures" },
      { id: 17, name: "Install Smart Home Devices" },
    ],
    description: 'Expert appliance repair services',
  },
];

export default services;