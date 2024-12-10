import React from 'react';
import { ClipLoader } from 'react-spinners';

const ProSpinner = ({ loading, size = 40, color = "#1da1f2", style = {} }) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', ...style }}>
      <ClipLoader color={color} loading={loading} size={size} />
  </div>
);


export default ProSpinner;
