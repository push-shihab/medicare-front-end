import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/app/lib/stripe";

export async function POST(req) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const formData = await req.formData();
    const selectedTime = formData.get("selectedTime");
    const bookingDate = formData.get("bookingDate");
    const appointmentFee = formData.get("fee");
    console.log(appointmentFee);

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Appointment`,
              description: `Date: ${bookingDate} at ${selectedTime}`,
            },
            unit_amount: appointmentFee * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
