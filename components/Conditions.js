import React from 'react';
import { StyleSheet, View } from 'react-native';
import FetchedData from './Sub_Conditions/FetchedData';

export default function Conditions(props) {
	return (
		<View style={styles.container}>
			<View style={styles.grid}>
				<View style={styles.dataContainer}>
					<FetchedData individualData={props.waves} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		paddingVertical: 10,
	},
	// grid: {
	// 	flexDirection: 'row', // Align in a row
	// 	alignItems: 'center', // Ensure vertical alignment
	// 	justifyContent: 'space-between', // Keep elements balanced
	// 	width: '90%', // Ensure proper width
	// 	backgroundColor: '#f5f5f5',
	// 	padding: 10,
	// 	borderRadius: 8,
	// 	shadowColor: '#000',
	// 	shadowOffset: { width: 0, height: 2 },
	// 	shadowOpacity: 0.1,
	// 	shadowRadius: 4,
	// 	elevation: 3,
	// },
	// conditions: {
	// 	flex: 1, // Give equal space to Parameters
	// 	alignItems: 'flex-start',
	// },
	// dataContainer: {
	// 	flex: 20, // Allow more space for FetchedData
	// 	alignItems: 'flex-start',
	// },
});
