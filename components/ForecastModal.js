import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import DateHour from './DateHour';
import config from '../config'

export default function ForecastModal() {
    // API LOCATIONs
	// Get current location based on locations device
	const [location, setLocation] = useState();
	const [errorMsg, setErrorMsg] = useState(null);
	// LAT & LNG FOR API
	// breaking lat to pass in the API
	// breaking lng to pass in the API
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();

	// // DROPDOWN
	// // open dropdown menu
	// // set real value to dropdown optios
	// // set options to dropdown
	// const [items, setItems] = useState([]);
    // const [value, setValue] = useState(undefined);
    const [finalData, setFinalData] = useState([])
	
	const params =
		'waveHeight,waveDirection,windSpeed,windDirection20m,waterTemperature,airTemperature,precipitation,cloudCover';
	const source = 'sg';
	const options = {
		method: 'GET',
		url: `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&source=${source}`,
		headers: {
			Authorization:
				config.REACT_APP_STORMGLASS
		},
	};

useEffect(() => {
        if (lat !== null && lng !== null) {
            handleSubmit();
        }
}, [lat, lng]); // Runs handleSubmit when lat or lng change


let handleSubmit = async () => {
    console.log('Fetching weather data...');
    console.log('Latitude:', lat);
    console.log('Longitude:', lng);
    console.log('Location:', location);
    
    try {
        const response = await axios(options);
        console.log('API Response received');
        compileHours(response.data.hours);
    } catch (error) {
        console.log('Error fetching data:', error);
    }
};

function compileHours(hours) {
    let filteredData = [];
    hours.forEach((ele, i) => {
        if (i % 3 === 0) {  // Filter data every 3 hours
            filteredData.push(ele);
        }
    });
    showFinalData(filteredData);
}

function showFinalData(value) {
    setFinalData(value);
    console.log('Final Data:', value);
}


//--

    // START DISPLAYING
    return <View>
				<View style={styles.search}>
					<GooglePlacesAutocomplete
						style={styles.dropdown}
						placeholder='Go search'
						fetchDetails={true}
						onPress={(data, details = null) => {
							console.log('this is working');
							setLat(details.geometry.location.lat);
							setLng(details.geometry.location.lng);
						}}
						query={{
							key: `${config.REACT_APP_AUTOCOMPLETE}`,
							language: 'en',
							// types: 'geocode',
						}}
						// currentLocation={true}
						// currentLocationLabel='Current location'
						nearbyPlacesAPI="GoogleReverseGeocoding"
						GooglePlacesDetailsQuery={{ fields: 'geometry' }}
					/>
				</View>
				<View>
				{!finalData.length ? null : <DateHour data={finalData}/>}
				</View>
			</View>
    }

	const styles = StyleSheet.create({
		search: {
			width: '100%',
			marginTop: 30,  // Provides better spacing from top
			paddingHorizontal: 10,
			borderRadius: 6,
			borderWidth: 1,
			backgroundColor: '#fff',
			flexDirection: 'row',  // Ensures dropdown aligns properly
		},
		dropdown: {
			borderColor: 'rgb(192, 192, 192)',
		},
		currentLocation: {
			fontSize: RFPercentage(2),
			color: 'black',
			textDecorationLine: 'underline',
		},
	});
	