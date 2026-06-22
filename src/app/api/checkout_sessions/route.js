import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/app/lib/stripe";

export async function POST(req) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const formData = await req.formData();
    const doctorId = formData.get("doctorId");
    const patientId = formData.get("patientId");
    const appointmentFee = formData.get("fee");
    const doctorName = formData.get("doctorName");
    const appointmentId = formData.get("appointmentId");

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Appointment`,
            },
            unit_amount: appointmentFee * 100,
          },
          quantity: 1,
        },
      ],
      metadata: {
        appointmentFee,
        doctorId,
        patientId,
        doctorName,
        appointmentId,
      },
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
