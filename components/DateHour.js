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
		console.log('Updated items:', items);
		console.log('Selected value:', value);
	}, [props.data]); // Re-run whenever props.data changes

let defineItems = (data) => {
    console.log('DATEHOUR CALLED');
    setItems(
        data.data.map((item, index) => ({
            id: index + 1, // Ensure ID is unique
            key: `date_${index}`, // Explicitly add a unique key
            label: item.time.slice(0, 10),
            value: item,
        }))
    );
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
		marginTop: '5%',
		marginBottom: '10%',
		width: '60%',
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
   
