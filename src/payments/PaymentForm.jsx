import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

export default function PaymentForm() {
	const [amount, setAmount] = useState(0)
	const [email, setEmail] = useState('')
	const [description, setDescription] = useState('')
	const [stripeToken, setStripeToken] = useState(null)

	function handleAmountChange(event) {
			setAmount(event.target.value)
	}

	function handleEmailChange(event) {
			setEmail(event.target.value)
	}

	function handleDescriptionChange(event) {
			setDescription(event.target.value)
	}

	function handleToken(token) {
			setStripeToken(token)
	}

	function handleSubmit(event) {
			event.preventDefault()

			axios.post('http://localhost:8000/api/payments', {
					stripeToken,
					email,
					amount,
					description,
					// cardNumber,
					// cardExpMonth,
					// cardExpYear,
					// cardCvc,
			})
			.then(response => {
					alert('Payment processed successfully!')
			})
			.catch(error => {
					console.error(error);
					alert('An error occurred while processing your payment.')
			})
	}

	return (
		<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" for="email">
						Email
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" value={email} onChange={handleEmailChange} />
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" for="Amount">
						Amount
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="amount" value={amount} onChange={handleAmountChange} />
				</div>

				<div className="mb-6">
					<label className="block text-gray-700 text-sm font-bold mb-2" for="Description">
						Description
					</label>
					<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="description" value={description} onChange={handleDescriptionChange} />
				</div>

				<StripeCheckout
						stripeKey='pk_test_51Mgl0xL744SSmgAvzusTV8spcJCMMjINutqizGKPX6o4vDvO0tokDwp5JzOzwRTzq1t7gQjcWXg1HKpgLplIwixC00Zou3asIE'
						token={handleToken}
						email={email}
						description={description}
						amount={amount * 100}
						currency='EUR'
				/>
				{/* <button type="submit">Submit Payment</button> */}
			</form>
		</div>
	)
}