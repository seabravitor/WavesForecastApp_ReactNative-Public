import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function FetchedData(props) {
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
				<Text>⬆️</Text>
				<Text></Text>
				<Text>💨</Text>
				<Text></Text>
				<Text>⬆️</Text>
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
				<Text>{props.individualData.waveDirection.sg} North</Text>
				<Text></Text>
				<Text>{props.individualData.windSpeed.sg} km/h</Text>
				<Text></Text>
				<Text>{props.individualData.windDirection20m.sg} North</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	grid: {
		// display: 'flex',
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	conditionsicons: {
		paddingHorizontal: '15%'
	}
});
/* CLOUDCOVER: Change according to the  % cloudcover (fog, sunny, cloudy)
WAVEDIRECTION & WINDDIRECTION: Change according to North Direction 0º ADD Bússola */
