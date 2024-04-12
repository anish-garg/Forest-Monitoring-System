Forest Monitoring System
The Forest Monitoring System is a web application that provides a visual representation of environmental data for different countries around the world. It uses satellite imagery and remote sensing data to monitor and display information about forest cover, temperature, CO2 emissions, sea level rise, precipitation, humidity, and wind speed.

Features
Interactive world map with hover functionality
Retrieval of environmental data from a JSON data source
Display of country-specific environmental data in a tooltip
Visualization of net forest cover changes over time
Responsive and modern user interface
Getting Started
To run the Forest Monitoring System locally, follow these steps:

Clone the repository:
git clone https://github.com/your-username/forest-monitoring-system.git

Navigate to the project directory:
cd forest-monitoring-system

Install the dependencies:
npm install

Start the development server:
npm start

This will start the development server and open the application in your default web browser.
Usage
Upon opening the application, you will see a world map displayed on the screen.
Hover over a country on the map to view the available environmental data for that region.
A tooltip will appear, displaying the country name and various environmental indicators such as temperature, CO2 emissions, sea level rise, precipitation, humidity, wind speed, and net forest cover changes (if available).
The tooltip will dynamically update based on the selected country, allowing you to explore and compare data across different regions.
Data Source
The environmental data used in this application is stored in a JSON file located at src/utilities/output.json. You can modify or replace this file with your own data source if needed.

Technologies Used
React.js
@react-jvectormap/core
@react-jvectormap/world
Tailwind CSS
Contributing
Contributions to the Forest Monitoring System project are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.
