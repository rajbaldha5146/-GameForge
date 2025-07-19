# 🎮 GameForge - Pro Setup Builder

A professional React.js web application that recommends gaming PC builds based on user budget. Built with React, Tailwind CSS, React Router, and featuring dark/light mode support.

## ✨ Features

- **🎯 AI-Powered Recommendations**: Get personalized gaming setups for budgets from ₹45,000 to ₹2,80,000
- **🌙 Dark/Light Mode**: Toggle between themes with system preference detection
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **💎 Professional UI**: Modern glassmorphism design with gradients and animations
- **🃏 Component Cards**: Beautiful cards displaying each PC component with icons and hover effects
- **🖨️ Print Functionality**: Print your recommended setup for reference
- **🚀 Multiple Pages**: Home, Setup Suggestion, and About pages with smooth transitions
- **⚡ Performance Optimized**: Fast loading with optimized components

## 🚀 Pages

1. **🏠 Home Page** (`/`)

   - Professional hero section with GameForge branding
   - Budget input with enhanced validation and styling
   - Glassmorphism design with gradient backgrounds
   - Feature highlights with animated icons

2. **💻 Suggestion Page** (`/setup/:budget`)

   - Dynamic component recommendations with professional cards
   - Enhanced setup cards with hover effects and gradients
   - Total price display with gradient styling
   - Print functionality and smooth navigation
   - Pro tips section with helpful advice

3. **ℹ️ About Page** (`/about`)
   - Comprehensive information about GameForge
   - Professional recommendation logic explanation
   - Enhanced budget range table with gradient headers
   - Technology stack showcase with gradient badges

## 🛠️ Tech Stack

- **React.js 18** - Frontend framework with functional components and hooks
- **Tailwind CSS 3** - Utility-first CSS framework with dark mode support
- **React Router v6** - Client-side routing with dynamic parameters
- **Context API** - Theme management for dark/light mode
- **JSON Data** - Static data structure for gaming setups
- **Modern CSS** - Glassmorphism, gradients, and smooth animations

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with logo and theme toggle
│   ├── Footer.jsx          # Footer with Be_A_Learner credit
│   ├── Home.jsx            # Enhanced home page with professional UI
│   ├── Suggestion.jsx      # Setup recommendation with modern cards
│   ├── About.jsx           # About page with comprehensive info
│   ├── SetupCard.jsx       # Reusable component card with animations
│   ├── Logo.jsx            # GameForge logo component
│   └── ThemeToggle.jsx     # Dark/light mode toggle switch
├── context/
│   └── ThemeContext.jsx    # Theme management context
├── data/
│   └── setups.json         # Gaming setup data structure
├── App.jsx                 # Main app with theme provider
├── App.css                 # Custom styles and animations
├── index.js                # App entry point
└── index.css               # Tailwind CSS imports
```

## 🎯 Budget Ranges & Categories

| Budget    | Category                | Performance               | Includes                       |
| --------- | ----------------------- | ------------------------- | ------------------------------ |
| ₹45,000   | Budget Entry Gaming     | 1080p Medium-High         | Basic PC + APU Graphics        |
| ₹60,000   | Budget Gaming           | 1080p High                | PC + Dedicated GPU             |
| ₹75,000   | Mid-Range Gaming        | 1080p Ultra / 1440p High  | PC + Peripherals               |
| ₹90,000   | Performance Gaming      | 1080p Ultra / 1440p High  | PC + Monitor + Peripherals     |
| ₹1,10,000 | High Performance Gaming | 1440p Ultra / 4K High     | Complete Gaming Setup          |
| ₹1,30,000 | Enthusiast Gaming       | 1440p Ultra / 4K High     | Premium Gaming + AIO Cooling   |
| ₹1,50,000 | Premium Gaming          | 1440p Ultra / 4K Ultra    | High-End Gaming + Chair        |
| ₹1,80,000 | Flagship Gaming         | 4K Ultra / 1440p 165+ FPS | 4K Gaming + Premium Setup      |
| ₹2,20,000 | Ultimate Gaming         | 4K Ultra / 8K High        | Gaming + Content Creation      |
| ₹2,80,000 | Professional Studio     | 8K Ultra / Professional   | Streaming Studio + Custom Loop |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd gaming-setup-recommender
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📱 Available Scripts

### `npm start`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000)

### `npm run build`

Builds the app for production to the `build` folder

### `npm run eject`

**Note: This is a one-way operation!** Ejects from Create React App for full configuration control.

## 🎨 Features Implemented

- ✅ **Dark/Light Mode Toggle** - System preference detection with manual override
- ✅ **Professional Branding** - GameForge logo with gradient styling
- ✅ **Glassmorphism UI** - Modern backdrop blur and transparency effects
- ✅ **Responsive Design** - Optimized for all screen sizes and devices
- ✅ **Budget Validation** - Smart input validation with user feedback
- ✅ **Dynamic Routing** - Seamless navigation with React Router v6
- ✅ **Component Architecture** - Reusable and maintainable code structure
- ✅ **Print Functionality** - Professional setup printing capability
- ✅ **Gradient Animations** - Smooth hover effects and transitions
- ✅ **Theme Persistence** - Remembers user's theme preference
- ✅ **Error Handling** - Graceful handling of invalid inputs
- ✅ **Performance Optimized** - Fast loading and smooth interactions

## 🔧 Customization

To add new budget ranges or modify existing setups:

1. Edit `src/data/setups.json`
2. Add new budget keys with component specifications
3. The app will automatically handle the new data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Made with ❤️ by [Be_A_Learner](https://github.com/Be_A_Learner)**

Built using React.js + Tailwind CSS + React Router
