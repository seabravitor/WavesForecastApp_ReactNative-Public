import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function FetchedData(props) {
	// Function to convert degrees into cardinal directions
	const getDirection = (degrees) => {
		if (degrees >= 350 || degrees < 10) return 'North (N)';
		if (degrees >= 10 && degrees < 80) return 'Northeast (NE)';
		if (degrees >= 80 && degrees < 100) return 'East (E)';
		if (degrees >= 100 && degrees < 170) return 'Southeast (SE)';
		if (degrees >= 170 && degrees < 190) return 'South (S)';
		if (degrees >= 190 && degrees < 260) return 'Southwest (SW)';
		if (degrees >= 260 && degrees < 280) return 'West (W)';
		if (degrees >= 280 && degrees < 350) return 'Northwest (NW)';
		return 'Unknown';
	};

	return (
		<View style={styles.grid} >
			<View style={styles.conditionsicons}>
				<Text>🌡</Text>
				<Text></Text>
				<Text>💧</Text>
				<Text></Text>
				<Text>⛅️</Text>
				<Text></Text>
				<Text>💧</Text>
				<Text></Text>
				<Text>🌊</Text>
				<Text></Text>
				<Text>🌊</Text>
				<Text></Text>
				<Text>💨</Text>
				<Text></Text>
				<Text>💨</Text>
			</View>
			<View>
				<Text>{props.individualData.airTemperature.sg}ºC</Text>
				<Text></Text>
				<Text>{props.individualData.precipitation.sg}hPa</Text>
				<Text></Text>
				<Text>{props.individualData.cloudCover.sg} % Cloud</Text>
				<Text></Text>
				<Text>{props.individualData.waterTemperature.sg}ºC</Text>
				<Text></Text>
				<Text>{props.individualData.waveHeight.sg} Meters</Text>
				<Text></Text>
				<Text>{getDirection(props.individualData.waveDirection.sg)}</Text>
				<Text></Text>
				<Text>{props.individualData.windSpeed.sg} km/h</Text>
				<Text></Text>
				<Text>{getDirection(props.individualData.windDirection20m.sg)}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	grid: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	conditionsicons: {
		paddingHorizontal: '15%'
	}
});
