import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function FetchedData(props) {
	// Function to convert degrees into cardinal directions
	const getDirection = (degrees) => {
		if (degrees >= 350 || degrees < 10) return `${props.individualData.waveDirection.sg} + North (N)`
		if (degrees >= 10 && degrees < 80) return `${props.individualData.waveDirection.sg} Northeast (NE)`;
		if (degrees >= 80 && degrees < 100) return `${props.individualData.waveDirection.sg} East (E)`;
		if (degrees >= 100 && degrees < 170) return `${props.individualData.waveDirection.sg} Southeast (SE)`;
		if (degrees >= 170 && degrees < 190) return `${props.individualData.waveDirection.sg} South (S)`;
		if (degrees >= 190 && degrees < 260) return `${props.individualData.waveDirection.sg} Southwest (SW)`;
		if (degrees >= 260 && degrees < 280) return `${props.individualData.waveDirection.sg} West (W)`;
		if (degrees >= 280 && degrees < 350) return `${props.individualData.waveDirection.sg} Northwest (NW)`;
		return 'Unknown';
	};

	return (
		<View style={styles.container}>

			<View style={styles.labelsColumn}>
				<Text style={styles.rowText}>Temp:</Text>
				<Text style={styles.rowText}>Pressure:</Text>
				<Text style={styles.rowText}>Clouds:</Text>
				<Text style={styles.rowText}>Water Temp:</Text>
				<Text style={styles.rowText}>Wave Height:</Text>
				<Text style={styles.rowText}>Wave Direction:</Text>
				<Text style={styles.rowText}>Wind Speed:</Text>
				<Text style={styles.rowText}>Wind Direction:</Text>
			</View>
			<View style={styles.iconsColumn}>
				<Text style={styles.rowText}>🌡</Text>
				<Text style={styles.rowText}>💧</Text>
				<Text style={styles.rowText}>⛅️</Text>
				<Text style={styles.rowText}>💧</Text>
				<Text style={styles.rowText}>🌊</Text>
				<Text style={styles.rowText}>🌊</Text>
				<Text style={styles.rowText}>💨</Text>
				<Text style={styles.rowText}>💨</Text>
			</View>

			<View style={styles.dataColumn}>
				<Text style={styles.rowText}>{props.individualData.airTemperature.sg}ºC</Text>
				<Text style={styles.rowText}>{props.individualData.precipitation.sg}hPa</Text>
				<Text style={styles.rowText}>{props.individualData.cloudCover.sg}%</Text>
				<Text style={styles.rowText}>{props.individualData.waterTemperature.sg}ºC</Text>
				<Text style={styles.rowText}>{props.individualData.waveHeight.sg}m</Text>
				<Text style={styles.rowText}>{getDirection(props.individualData.waveDirection.sg)}</Text>
				{/* <Text style={styles.rowText}>{props.individualData.waveDirection.sg}</Text> */}
				<Text style={styles.rowText}>{props.individualData.windSpeed.sg} km/h</Text>
				{/* <Text style={styles.rowText}>{getDirection(props.individualData.windDirection20m.sg)}</Text> */}
				<Text style={styles.rowText}>{props.individualData.windDirection20m.sg}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 10,
		height: '68%',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		backgroundColor: '#f5f5f5',
	},
	iconsColumn: {
		alignItems: 'center',
	},
	labelsColumn: {
		alignItems: 'flex-start',
	},
	dataColumn: {
		alignItems: 'flex-start',
	},
	rowText: {
		marginBottom: 18, // Adds space between each row
		fontSize: RFPercentage(2),
	},
});
