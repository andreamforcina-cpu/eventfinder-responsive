# EventFinder - Starter Code

This is the starter application for **Assignment 9: Making Your App Work on Every Screen**.

## Current Problems

This app is **broken on mobile devices**. Try these things to see the problems:

1. Resize your browser window to 375px wide (phone size)
2. Open it on your actual phone
3. Use Chrome DevTools responsive mode

You'll see:
- The header navigation doesn't fit
- The sidebar and events grid don't stack properly
- Text is too large on mobile
- The event cards look stretched
- Everything requires horizontal scrolling

## Setup Instructions


1. Fork and clone down the repository to your own machine. Don't forgot to install dependencies
```bash
git clone REPO_NAME
cd REPO_NAME
npm install
```
2. Start the development server and explore the starter code.
```bash
npm run dev
```
3. Open the app in your browser and resize the window to see the problems! You'll notice that you need an API key before you can start.
4. Get your Ticketmaster API key by doing the following
    - Go to https://developer.ticketmaster.com/
    - Click "Get Your API Key" or "Register"
    - Create an account
    - Click "Add a new app"
    - Remove "OAuth product" from the Product field
    - Click "Create application"
    - Copy your **Consumer Key** - this is your API key!

5. Create a `.env` file in the root of your project:
```bash
VITE_TICKETMASTER_API_KEY=your_actual_api_key_here
```

**Important:** Never commit your `.env` file to Git! It's already in `.gitignore`.

5. Run the app to see events!
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Your Assignment

Make this application fully responsive using:
- Mobile-first design approach
- Responsive CSS units (rem, em, %, vw, vh)
- CSS Flexbox and Grid
- Media queries
- Accessibility best practices

The app should look great on:
- Mobile phones (320px - 480px)
- Tablets (481px - 768px)
- Desktops (769px and up)