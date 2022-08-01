# Ripple Waves Forecast

With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world.

Ripple Waves Forecast is a forecast application developed as a final project for a Full-Stack Javascript and React Bootcamp hosted by Barcelona Code School. 

This project uses React-Native as its main technology.

Ripple Waves Forecast running on an Android device:

https://user-images.githubusercontent.com/82412725/127003042-b7ffc2c6-d814-4b46-a9c3-208e2a9d0465.mp4

## Installation

Install all dependencies
```bash
npm install
```

Run project on expo (Web / Android / iOS)
```bash
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
```

## Usage

It's usage is not recommended for web version.

It's usage is recommended to test on its own devices.

## Status

This project is on its beta version. 

This project is not available for download.

## Features

With Ripple Waves Forecast application you can find out how are the weather and the waves on your current location or any other city in the world.

For the location we use a Google Places API (https://developers.google.com/maps/documentation/places/web-service/search) and to obtain its forecast we run the StormGlass API (https://stormglass.io/).

## Improvements Ripple 2.0

- Update current location name and insert and the search (Use Google Reverse Geolocation);
- Show message "No beach located" on wave height parameter for cities far from the coast;
- Display Forecsats of every 3 hours in a time frame of 7 days;
- Fix Dropdown Bug (Problem with height - https://github.com/hossein-zare/react-native-dropdown-picker/issues/204)
- Add Dynamic icons - Arrows - for direction parameters (Wind & Waves)
