# MediWare - Medical Inventory Management System

A web-based application for managing medical equipment inventory, built with Node.js, Express, and PostgreSQL.

## Features

- Real-time inventory tracking for medical equipment
- Management of various medical supplies:
  - Ventilators
  - Oxygen Cylinders
  - Syringes
  - Medicines
- Dynamic updates to inventory levels
- User-friendly web interface

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Template Engine**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS, JavaScript

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd MediWare
```

2. Install dependencies:
```bash
npm install
```

3. Set up the PostgreSQL database:
   - Create a database named "trial"
   - Configure your database connection in `index.js`

4. Start the application:
```bash
npm start
```

The server will start running on port 5000.

## Project Structure

```
MediWare/
├── public/          # Static files (CSS, JS, images)
├── views/           # EJS template files
├── index.js         # Main application file
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## API Endpoints

- `GET /` - Home page
- `GET /ventilators` - Ventilator inventory page
- `GET /cylinders` - Oxygen cylinders page
- `GET /syringes` - Syringes page
- `GET /medicines` - Medicines page
- `POST /updateVentilator` - Update ventilator inventory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Authors

- [Your Name/Team Name]

## Acknowledgments

- Express.js team
- PostgreSQL team
- All contributors to this project