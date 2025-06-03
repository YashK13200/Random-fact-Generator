# Random Fact Generator

A beautiful, responsive web application that displays random cat facts at the click of a button. Built with React, TypeScript, and Tailwind CSS.

![Random Fact Generator](https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 🎲 Fetch random cat facts with a single click
- 🎨 Beautiful, minimalist design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast and lightweight
- 🔄 Loading states and error handling
- 🎯 Accessibility-focused UI

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/random-fact-generator.git
cd random-fact-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/        # React components
│   ├── FactButton.tsx
│   └── FactDisplay.tsx
├── services/         # API services
│   └── api.ts
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## API

The application uses the [Cat Facts API](https://catfact.ninja/) to fetch random cat facts. The API is free to use and doesn't require authentication.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
