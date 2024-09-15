# Country Guide Web Application

## Overview

This project is an interactive Country Guide web application built using HTML, CSS, and JavaScript. It allows users to search for countries and view detailed information about them, including their flag, capital, continent, population, currency, and languages.

## Features

- Search for countries by name
- Display country information including:
  - National flag
  - Country name
  - Capital city
  - Continent
  - Population
  - Currency (name and symbol)
  - Languages spoken
- Responsive design with a gradient background
- Error handling for invalid country names

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- RESTful API (REST Countries API)
- Google Fonts (Montserrat)

## Project Structure

The project consists of three main files:

1. `guide.html`: The main HTML structure of the application
2. `guide.css`: Styles for the application
3. `guide.js`: JavaScript functionality for fetching and displaying country data

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/oussama548/country-guide-app.git
   ```

2. Navigate to the project directory:
   ```
   cd country-guide-app
   ```

3. Open `guide.html` in your preferred web browser.

4. Start searching for countries!

## How to Use

1. Type a country name in the search input field.
2. Click the "Search" button or press Enter.
3. The application will display information about the country, including its flag, capital, continent, population, currency, and languages.
4. If an invalid country name is entered, an error message will be displayed.

## API Used

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data. No API key is required for basic usage.

## Customization

You can easily customize the appearance of the application by modifying the `guide.css` file. Some quick customizations include:

- Changing the background gradient in the `body` selector
- Modifying the font styles (the project uses Montserrat by default)
- Adjusting the colors and dimensions of various elements

## Dependencies

This project uses the following external resources:

- Montserrat font from Google Fonts (linked in the HTML file)
- REST Countries API (no additional setup required)

## Browser Compatibility

This application is built using modern web technologies and should work on all recent versions of major browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## Future Enhancements

Some potential improvements for the project:

- Add more detailed country information (e.g., time zones, calling codes)
- Implement autocomplete for country names in the search input
- Add a map view for each country
- Create a dark mode option

## Contact

If you have any questions or suggestions, please open an issue in the GitHub repository.

---

Explore the world, one country at a time!
