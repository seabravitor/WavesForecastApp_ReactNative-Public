import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Conditions from './Conditions';

export default function DateHour(props) {
 
 	// DROPDOWN
	// open dropdown menu
	// set real value to dropdown optios
	// set options to dropdown
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([]);


	useEffect(() => {
			defineItems(props);
	}, []);

    let defineItems = (data) => {
		console.log('DATEHOUR CALLED')
		setItems([
			{
				id: 1,
				label: `${props.data[0].time.slice(0, 10)}`,
				value: props.data[0],
			},
			{
				id: 2,
				label: `${props.data[1].time.slice(0, 10)}`,
				value: props.data[1],
			},
			{
				id: 3,
				label: `${props.data[2].time.slice(0, 10)}`,
				value: props.data[2],
			},
			{
				id: 4,
				label: `${props.data[3].time.slice(0, 10)}`,
				value: props.data[3],
			},
			{
				id: 5,
				label: `${props.data[4].time.slice(0, 10)}`,
				value: props.data[4],
			},
			{
				id: 6,
				label: `${props.data[5].time.slice(0, 10)}`,
				value: props.data[5],
			},
			{
				id: 7,
				label: `${props.data[6].time.slice(0, 10)}`,
				value: props.data[6],
			},
			{
				id: 8,
				label: `${props.data[7].time.slice(0, 10)}`,
				value: props.data[7],
			},
		]);
		console.log('this is the item=>', items)
		console.log('this is the value=>', value)
};

return   <View>
                <View style={styles.dropdown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
						setValue={setValue}
						placeholder="Choose a day"
						closeAfterSelecting={true}
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"
						zIndex={1}
                        listItemLabelStyle={{
                            color: 'black',
                        }}
                        text={{
                            alignSelf: 'center'
                        }}
                        textStyle={{
                            color: 'black',
                        }}
                        dropDownContainerStyle={{}}
                        containerStyle={{ height: '100%', width:'100%' }}
                        onPress={(open) => console.log('was the picker open?', open)}
                    />
                </View>
				
				<View>{value == null ? null : <Conditions waves={value}/>}</View>
				
            </View>
}

const styles = StyleSheet.create({
	dropdown: {
		position: 'absolute',
		alignSelf: 'center',
		marginTop: '15%',
		marginBottom: '10%',
		width: '60%',
		zIndex: 10,
	},
	// selectDay: {
	// 	position: 'absolute',
	// 	alignSelf: 'flex-end',
	// 	fontWeight: 'bold',
	// 	marginTop: '12%',
	// 	paddingRight: '5%',
	// 	marginBottom: '5%',
	// }
})
   
