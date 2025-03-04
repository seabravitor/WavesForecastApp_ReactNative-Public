import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Conditions from './Conditions';

export default function DateHour(props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        defineItems(props);
    }, [props.data]); // Re-run whenever props.data changes

    const defineItems = (data) => {
        setItems(
            data.data.map((item, index) => ({
                id: index + 1,
                key: `date_${index}`,
                label: item.time.slice(0, 10),
                value: item,
            }))
        );
    };

    const handleNextDay = () => {
        if (!value) return;
        const currentIndex = items.findIndex((item) => item.value === value);
        if (currentIndex < items.length - 1) {
            setValue(items[currentIndex + 1].value);
        }
    };

    const handlePrevDay = () => {
        if (!value) return;
        const currentIndex = items.findIndex((item) => item.value === value);
        if (currentIndex > 0) {
            setValue(items[currentIndex - 1].value);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.navigation}>
                <TouchableOpacity onPress={handlePrevDay} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>⬅️</Text>
                </TouchableOpacity>

                <View style={styles.dropdown}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setItems={setItems}
                        setValue={setValue}
                        placeholder="Select a day here!"
                        closeAfterSelecting={true}
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"
                        zIndex={1}
                    />
                </View>

                <TouchableOpacity onPress={handleNextDay} style={styles.arrowButton}>
                    <Text style={styles.arrowText}>➡️</Text>
                </TouchableOpacity>
            </View>

            {value && <Conditions waves={value} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
		alignItems: 'center',
        marginTop: 10,
    },
    navigation: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdown: {
        width: '60%',
		borderColor: 'rgb(192, 192, 192)',
    },
    selectedText: {
        fontSize: RFPercentage(2.2),
        color: 'black',
        textAlign: 'center',
    },
    arrowButton: {
        paddingHorizontal: 15,
    },
    arrowText: {
        fontSize: RFPercentage(3),
    },
});

