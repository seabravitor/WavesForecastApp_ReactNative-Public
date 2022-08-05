import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Conditions from './Conditions';

export default function DateHour(props) {
 
 	// DROPDOWN
	// open dropdown menu
	// set real value to dropdown optios
	// set options to dropdown
	const [items, setItems] = useState([]);
    const [value, setValue] = useState(undefined);
    const [open, setOpen] = useState(false);

    let defineItems = (data) => {
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
	};

let displayConditions = (value) => {
    if (value !== undefined) {
        return <Conditions waves={value} />;
    } else {
        return (
            // <Text style={styles.selectDay}>
            // 	When do you wanna surf?
            // </Text>
            null
        );
    }
};

return   <View>
                <View style={styles.dropdown}>
                    <DropDownPicker
                        open={props.open}
                        value={props.value}
                        items={props.items}
                        placeholder="TEST a day"
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={defineItems}
                        zIndex={1}
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"
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
                        // onChangeValue={() => {}}
                        onPress={(open) => console.log('was the picker open?', open)}
                    />
                </View>
				
                {/* {displayConditions(props.value)} */}
				<View>{value ? <Conditions waves={value}/> : null}</View>
				
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
	selectDay: {
		position: 'absolute',
		alignSelf: 'flex-end',
		fontWeight: 'bold',
		marginTop: '12%',
		paddingRight: '5%',
		marginBottom: '5%',
	}
})
   
