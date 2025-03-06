import React from 'react';
import { StyleSheet, View } from 'react-native';
import FetchedData from './Sub_Conditions/FetchedData';

export default function Conditions(props) {
	return (
		<View style={styles.container}>
				<View>
					<FetchedData individualData={props.waves} />
				</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '120%',
		height: '100%',
		marginTop: '12%' // Margin space between arrows and conditions
	},
});
