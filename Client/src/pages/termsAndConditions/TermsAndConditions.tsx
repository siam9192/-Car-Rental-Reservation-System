import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className=" mx-auto p-6 dark:text-slate-100  rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          1. Eligibility Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Age:</strong> Renters are usually required to be at least 21
            years old, though this can vary by location. Drivers under 25 may
            face additional fees.
          </li>
          <li>
            <strong>License:</strong> A valid driver’s license is required.
            International renters may need an International Driving Permit
            (IDP).
          </li>
          <li>
            <strong>Credit Card:</strong> A major credit card in the renter’s
            name is often required for security deposit purposes.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          2. Reservation and Payment
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Booking:</strong> Reservations can be made online, via
            phone, or in person. Booking in advance is generally recommended.
          </li>
          <li>
            <strong>Payment:</strong> Payment is typically made at the time of
            pick-up, but some companies may require a deposit or full payment in
            advance.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          3. Insurance and Coverage
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Insurance Options:</strong> Rental companies usually offer
            various insurance options, including collision damage waiver (CDW)
            and theft protection.
          </li>
          <li>
            <strong>Liability:</strong> Basic insurance may be included, but
            additional coverage may be required for complete protection.
          </li>
          <li>
            <strong>Personal Insurance:</strong> Renters are encouraged to check
            if their personal car insurance or credit card offers coverage for
            rental vehicles.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          4. Usage and Restrictions
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Mileage Limits:</strong> Some rentals include unlimited
            mileage, while others have mileage limits with additional charges
            for exceeding them.
          </li>
          <li>
            <strong>Geographical Restrictions:</strong> Rental vehicles may not
            be driven outside of certain geographic areas or countries.
          </li>
          <li>
            <strong>Prohibited Uses:</strong> Vehicles generally cannot be used
            for off-road driving, racing, or for carrying hazardous materials.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Vehicle Return</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Return Location:</strong> Vehicles must be returned to the
            specified location and by the agreed-upon time to avoid extra
            charges.
          </li>
          <li>
            <strong>Fuel Policy:</strong> Many rentals require the vehicle to be
            returned with a full tank of gas. Failure to do so may result in a
            refueling charge.
          </li>
          <li>
            <strong>Condition:</strong> The vehicle should be returned in the
            same condition as when rented, aside from normal wear and tear.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Fees and Charges</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Additional Drivers:</strong> There may be a fee for adding
            extra drivers.
          </li>
          <li>
            <strong>Late Returns:</strong> Late return fees may apply if the
            vehicle is returned after the agreed-upon time.
          </li>
          <li>
            <strong>Early Returns:</strong> Some companies may not offer refunds
            for early returns.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          7. Cancellation and Modifications
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Cancellation Policy:</strong> Fees may apply for
            cancellations, especially if made within a certain timeframe before
            the pick-up time.
          </li>
          <li>
            <strong>Modifications:</strong> Changes to the reservation (e.g.,
            pick-up time, vehicle type) may incur additional charges.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          8. Responsibility and Liability
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Damages:</strong> Renters are typically responsible for any
            damage to the vehicle, whether or not they have purchased insurance.
          </li>
          <li>
            <strong>Fines and Tolls:</strong> Renters are responsible for any
            traffic fines, tolls, or other charges incurred during the rental
            period.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          9. Privacy and Data Protection
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Rental companies collect
            personal information for booking and rental purposes and may use it
            according to their privacy policy.
          </li>
          <li>
            <strong>Data Security:</strong> Companies are responsible for
            protecting renters' personal data in accordance with applicable data
            protection laws.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Additional Considerations
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Special Requirements:</strong> Some rentals may have
            specific terms related to special equipment (e.g., child seats, GPS)
            or requirements (e.g., international rentals).
          </li>
          <li>
            <strong>Dispute Resolution:</strong> Terms regarding how disputes
            will be handled or resolved, including jurisdiction and applicable
            law.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
