import React from 'react';

interface BreadcrumbProps {
  links: { name: string; url: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav className="text-sm mx-auto text-gray-200 py-4 ">
      <ul className="flex space-x-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            <a href={link.url} className="hover:underline">
              {link.name}
            </a>
            {index < links.length - 1 && <span className="mx-2 text-gray-400">&gt;</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;