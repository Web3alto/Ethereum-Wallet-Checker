import { useState } from "react";
import arrowDown from "./assets/arrow-down.png";
import "./App.css";

function App() {
	const [addressInput, setAddressInput] = useState("");
	const [isAddressInFile, setIsAddressInFile] = useState<null | boolean>(
		null
	);
	const [isValidAddress, setIsValidAddress] = useState(true); // New state to track address validity

	const checkWallet = async () => {
		const inputAddress = addressInput.trim().toLowerCase();
		if (inputAddress === "") {
			setIsAddressInFile(null);
			return;
		}

		if (!inputAddress.startsWith("0x")) {
			// Check if address starts with "0x"
			setIsValidAddress(false);
			setIsAddressInFile(null);
			return;
		}

		setIsValidAddress(true); // Reset if it's a new valid address

		const url = `https://whitelistify.web3alto.workers.dev/?address=${inputAddress}`;

		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			const isValid = data.data.length > 0 ? true : false;
			console.log("Response data:", data);
			setIsAddressInFile(isValid);
		} catch (error) {
			console.error("Error fetching address validity:", error);
			setIsAddressInFile(false); // Assume address is invalid if there's an error
		}
	};

	return (
		<div className="container">
			<nav>
				<div className="left">
					<h1 className="custom-hover">ALTO</h1>
				</div>
				<div className="right custom-hover">
					<a href="mailto:web3alto@gmail.com">
						<h2>Contact</h2>
						<img src={arrowDown} alt="arrowDown" />
					</a>
				</div>
			</nav>
			<div className="card">
				<input
					type="text"
					placeholder="ETH wallet address"
					value={addressInput}
					onChange={(e) => setAddressInput(e.target.value)}
				/>
				<button onClick={checkWallet}>Check Wallet</button>
				{!isValidAddress && (
					<p>Please enter a valid Ethereum address.</p>
				)}{" "}
				{/* Display if address is invalid */}
				{isAddressInFile !== null && isValidAddress && (
					<p>
						{isAddressInFile
							? "You are whitelisted."
							: "You are not whitelisted."}
					</p>
				)}
			</div>
		</div>
	);
}

export default App;
