import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import moment from "moment";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import CheckoutForm from "@/components/account/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

const Payment = ({ data, refetch, setOpen }) => {
	const [error, setError] = useState("");
	const [transactionID, setTransactionID] = useState("");
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();

	const onSubmit = async (CardElement, clientSecret, elements, stripe) => {
		if (!stripe || !elements) {
			return;
		}

		const card = elements.getElement(CardElement);

		if (!card) {
			return;
		}

		const { error: createError } = await stripe.createPaymentMethod({
			type: "card",
			card,
		});

		if (createError) {
			setError(createError.message);
			return;
		}

		const { error: confirmError, paymentIntent } =
			await stripe.confirmCardPayment(clientSecret, {
				payment_method: {
					card,
					billing_details: {
						email: user?.email || "anonymous",
						name: user?.displayName || "anonymous",
					},
				},
			});

		if (confirmError) {
			setError(confirmError.message);
			return;
		}

		if (paymentIntent?.status === "succeeded") {
			await axiosSecure.post("/payments", {
				courseId: data._id,
				uid: user.uid,
				price: data.price,
				status: "enrolled",
				timestamp: moment().unix(),
				transactionID: paymentIntent.id,
			});

			setTransactionID(paymentIntent.id);
			await refetch();
		}
	};

	return (
		<Elements stripe={stripePromise}>
			<CheckoutForm
				error={error}
				price={data.price}
				onSubmit={onSubmit}
				setOpen={setOpen}
				transactionID={transactionID}
			/>
		</Elements>
	);
};

export default Payment;
