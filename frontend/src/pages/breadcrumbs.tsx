import { Link } from 'react-router-dom';
import React from 'react';


// Define the type for a single breadcrumb
interface Crumb {
  path: string;
  label: string;
}

// Define the type for the props of the Breadcrumbs component
interface BreadcrumbsProps {
  crumbs: Crumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav className="text-gray-600 my-4">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link to={crumb.path} className="hover:underline">{crumb.label}</Link>
          {index < crumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
