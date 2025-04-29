import React from 'react';

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
