import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Conditions from './Conditions';
import * as Location from 'expo-location';
import axios from 'axios';
import DateHour from './DateHour';
import config from '../config'

export default function ForecastModal() {
    // API LOCATIONs
	// Get current location based on locations device
	const [location, setLocation] = useState();
	const [errorMsg, setErrorMsg] = useState(null);
	//
	//
	// ACTIVE FOR DISPLAY
	//Show Search Container
	// const [active, setActive] = useState(false);
	//
	//
	// LAT & LNG FOR API
	// breaking lat to pass in the API
	// breaking lng to pass in the API
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();
	//
	//
	// // DROPDOWN
	// // open dropdown menu
	// // set real value to dropdown optios
	// // set options to dropdown
	// const [items, setItems] = useState([]);
    // const [value, setValue] = useState(undefined);
    const [finalData, setFinalData] = useState([])
	// const [isDataReady, setIsDataReady] = useState(false); // New state to track when data is available

	
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

	let handleSubmit = async () => {
		console.log('AXIOS FUNCTION CALLED');
		console.log('your latitude is:', lat);
		console.log('your longitude is:', lng);
		console.log('your location is:', location);
		await axios(options)
			.then((response) => {
				console.log('AXIOS WORKING RESPONSE.DATA.HOURS');
				compileHours(response.data.hours);
			})
			.catch((error) => {
				console.log('Error retrieving customer data!', error);
			});
	};

	// IMPROVEMENTS: COMPILING DATA FOR EVERY 3 HOURS & METHOD FOR COORDINATES FAR FROM ANY COAST

	// let compileHours = () => {
	// 	var finalData = [];
	// 	waves.forEach(function (ele, i) {
	// 		if (i % 3 === 0) {
	// 			finalData.push(ele);
	// 		}
	// 	});
	// 	console.log('Thats the data for every 3 hours =>', finalData);
	// 	defineItems();
	// };
	// SETTINGS WAVES HEIGHT === 0 to Flat or Not Beach Close
	// finalData.forEach(function (ele, i) {
	// 	if (ele[i].waveHeight == false ) {
	// 	???????
	// 		time: response.data.hours[0].time,
	// 		waves: 'Not close beach located',
	// 		waveDirection: 'Not close beach located',
	// 		airTemperature: response.data.hours[0].airTemperature.sg,
	// 		waterTemperature: response.data.hours[0].waterTemperature.sg,
	// 		windSpeed: response.data.hours[0].windSpeed.sg,
	// 		windDirection: response.data.hours[0].windDirection20m.sg,
	// 		precipitation: response.data.hours[0].precipitation.sg,
	// 		cloudCover: response.data.hours[0].cloudCover.sg,

	function compileHours(hours){
		// console.log(hours)
		var filteredData = []
		hours.forEach(function (ele, i, arr) {
			if (i % 24 == 0) {
				// GETTING THE DATA OF NEXT 07 DAYS HOURS 00:00
				filteredData.push(ele)
				return filteredData
			}
		});
		showFinalData(filteredData)
	};

	function showFinalData(value) {
		setFinalData(value);
		setIsDataReady(true); // Update state when data is ready
		console.log('this is finalData =>', value);
	}

    useEffect(() => {
        if (lat !== null && lng !== null) {
            handleSubmit();
        }
    }, [lat, lng]); // Runs handleSubmit when lat or lng change


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
			borderColor: 'rgb(192, 192, 192)',
			backgroundColor: '#fff',
			flexDirection: 'row',  // Ensures dropdown aligns properly
			// alignItems: 'center',  // Centers content vertically
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
	