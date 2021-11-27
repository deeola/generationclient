import React from 'react'

function BillingDetailsFields() {
    return (
        <>
        <input
          name="name"
          label="Name"
          type="text"
          placeholder="Jane Doe"
          required
        />
        <input
          name="email"
          label="Email"
          type="email"
          placeholder="jane.doe@example.com"
          required
        />
        <input
          name="address"
          label="Address"
          type="text"
          placeholder="185 Berry St. Suite 550"
          required
        />
        <input
          name="city"
          label="City"
          type="text"
          placeholder="San Francisco"
          required
        />
        <input
          name="state"
          label="State"
          type="text"
          placeholder="California"
          required
        />
        <input
          name="zip"
          label="ZIP"
          type="text"
          placeholder="94103"
          required
        />
      </>
    )
}

export default BillingDetailsFields;
