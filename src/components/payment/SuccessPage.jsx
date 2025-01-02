import React from "react";
import { useSearchParams } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const trxref = searchParams.get("trxref");
  const reference = searchParams.get("reference");

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Transaction Reference: {trxref}</p>
      <p>Reference: {reference}</p>
    </div>
  );
};

export default SuccessPage;
