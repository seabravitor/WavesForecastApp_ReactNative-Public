import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Parameters from './Sub_Conditions/Parameters';
import FetchedData from './Sub_Conditions/FetchedData';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function Conditions(props) {
	console.log('CONDITIONS CALLED!!!')
	// console.log('Im props waves', props);

	return (
		<View>
			<View style={styles.grid}>
				<View style={styles.conditions}>
					<Parameters />
				</View>
				<View>
					<FetchedData individualData={props.waves} />
				</View>
			</View>
			{/* <Text style={styles.selectedDay}>{props.waves.time.slice(0, 10)}</Text> TEXT TITTLE  */}
		</View>
	);
}

const styles = StyleSheet.create({
	grid: {
		// display: 'flex',
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '30%',
	},
	conditions: {
		marginRight: '2%',
	},
});
