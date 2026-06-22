import React from "react";
import PaymentHistoryClient from "./PaymentHistoryClient";
import { getSession } from "@/app/utility/server/session";
import { getPaymentHistoryById } from "@/app/utility/fetchData/payment/payment";

const PayemntHistoryPage = async () => {
  const session = await getSession();
  const payments = await getPaymentHistoryById(session.id);
  console.log(payments);
  return (
    <div>
      <PaymentHistoryClient payments={payments}></PaymentHistoryClient>
    </div>
  );
};

export default PayemntHistoryPage;
