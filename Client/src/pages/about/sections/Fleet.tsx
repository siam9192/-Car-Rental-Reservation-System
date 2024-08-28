import React from 'react';

const Fleet = () => {
  return (
    <section className="mb-8 text-black dark:text-slate-50">
      <h2 className="text-3xl font-semibold mb-4">Our Fleet</h2>
      <p className="text-lg mb-4">
        We offer a diverse range of vehicles to suit all needs and preferences.
        Our fleet includes:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Economy:</strong> Affordable and fuel-efficient cars for
          everyday use.
        </li>
        <li>
          <strong>Luxury:</strong> Premium vehicles for a more comfortable and
          stylish experience.
        </li>
        <li>
          <strong>SUVs:</strong> Spacious and versatile vehicles for families
          and adventures.
        </li>
        <li>
          <strong>Vans:</strong> Ideal for group travel or transporting larger
          loads.
        </li>
      </ul>
    </section>
  );
};

export default Fleet;
