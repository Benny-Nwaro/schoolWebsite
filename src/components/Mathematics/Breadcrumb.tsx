import React from 'react';

interface BreadcrumbProps {
  links: { name: string; url: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links }) => {
  return (
    <nav className="text-sm text-white py-4">
      <ul className="flex space-x-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            <a href={link.url} className="hover:underline hover:cursor-pointer">
              {link.name}
            </a>
            {index < links.length - 1 && <span className="mx-2"> &gt; </span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
