# ksahlos-firebase 📸

This is a photography portfolio website created for showcasing the work of a photographer. The project utilizes Next.js for the frontend and Firebase services (Firestore database and Storage) for backend functionalities.

You can view a live demo of the website deployed on Vercel by following this link: [Live Demo](https://ksahlosapp.vercel.app/)
## Features 🚀
- View photos categorized by different categories.
- Navigate through various pages including about, contact, and prices.
- Backend powered by Firebase for efficient data storage and management.
- Admin panel for performing CRUD (Create, Read, Update, Delete) operations on the database.

## Admin Panel 🔧
The admin panel allows authorized users to perform CRUD operations on the database. Key functionalities include:
- **Create**: Add new photos or categories to the portfolio.
- **Read**: View existing photos and categories.
- **Update**: Edit information about photos or categories.
- **Delete**: Remove photos or categories from the portfolio.

## Technologies Used 💻
- Next.js
- Firebase (Firestore, Authentication Storage)

## Installation ⚙️
1. Clone the repository: ``git clone https://github.com/EliasSahlos/ksahlos-firebase.git``
2. Navigate into the project directory: ``cd ksahlos-firebase ``
3. Install dependencies: ``npm install``
4. Set up Firebase:
- Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
- Set up Firestore database and Storage.
- Copy your Firebase configuration settings.
- Create a `.env` file in the root directory and add your Firebase configuration:
  ```
  NEXT_PUBLIC_API_KEY=<your-api-key>
  NEXT_PUBLIC_AUTH_DOMAIN=<your-auth-domain>
  NEXT_PUBLIC_PROJECT_ID=<your-project-id>
  NEXT_PUBLIC_STORAGE_BUCKET=<your-storage-bucket>
  NEXT_PUBLIC_MESSAGING_SENDER_ID=<your-sender-id>
  NEXT_PUBLIC_APP_ID=<your-app-id>
  ```
## Usage 🚀
- Start the development server: ``npm run dev``
- Open your browser and navigate to `http://localhost:3000` to view the website.


## Author ✍️
- Elias Sahlos
- [Find me on Github](https://github.com/EliasSahlos/)
