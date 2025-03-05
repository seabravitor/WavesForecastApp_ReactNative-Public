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
		width: '120%',
		paddingBottom: 5,
	},
});
