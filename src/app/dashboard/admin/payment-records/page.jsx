import React from "react";
import PaymentRecordsClient from "./PaymentRecordsClient";
import { getAllPaymentRecords } from "@/app/utility/fetchData/payment/payment";

const PaymentRecordsPage = async () => {
  const payments = await getAllPaymentRecords();
  return (
    <div>
      <PaymentRecordsClient payments={payments}></PaymentRecordsClient>
    </div>
  );
};

export default PaymentRecordsPage;
