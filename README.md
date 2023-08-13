# Ethereum Wallet Checker

## Overview

This application serves as a wallet checker on the Ethereum blockchain. With the growing popularity and significance of blockchain technologies, verifying the validity and status of a wallet address has become a crucial part of many processes in the decentralized ecosystem.

The wallet checker aims to confirm whether an Ethereum wallet address is part of a specific whitelist. The whitelisting process enables only approved addresses to interact with certain smart contracts or participate in exclusive events.

## Features

- **Wallet Whitelist Verification:** The application allows users to input an Ethereum wallet address and checks whether it's part of the approved whitelist.
- **Responsive Design:** The wallet checker is designed to work across various devices, ensuring a smooth user experience whether accessed via a desktop, tablet, or mobile device.
- **Whitelisted Wallets:** The following wallet addresses are part of the current whitelist:
  - `0x444275e3a5189dDE85D32f9c60c8D227c2D4d9A4`
  - `0x2515177cE54d815CB692832f94FDe6cE9DF02190`
  - `0xB8C50fbC358E1ceA415D9c659dcd363DED53b2b8`
  - `0xA55C1F3f1f353F697FC7a4fDB509CcfCC7c8D57c`
  - `0x9e0c426256E488B2adEe61Db15758F7a8937fC64`

## Implementation Details

The application is powered by a Cloudflare worker, which handles the requests to validate the wallet addresses against the whitelist. The front-end is built using React and is hosted separately.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install` or `yarn install`.
3. Start the local development server using `npm start` or `yarn start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Contact

For any questions or support, please contact [web3alto@gmail.com](mailto:web3alto@gmail.com).
