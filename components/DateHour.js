import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Conditions from './Conditions';

export default function DateHour({ data }) {
    const [openDay, setOpenDay] = useState(false);
    const [openHour, setOpenHour] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [days, setDays] = useState([]);
    const [hours, setHours] = useState([]);

    useEffect(() => {
        if (data) {
            const groupedByDate = data.reduce((acc, item) => {
                const date = item.time.slice(0, 10); // Extract YYYY-MM-DD
                if (!acc[date]) acc[date] = [];
                acc[date].push(item);
                return acc;
            }, {});

            const dayItems = Object.keys(groupedByDate).map((date, index) => ({
                id: index,
                key: `day_${index}`,
                label: date,
                value: date,
            }));

            setDays(dayItems);
        }
    }, [data]);

    useEffect(() => {
        if (selectedDay) {
            const availableHours = data
                .filter((item) => item.time.startsWith(selectedDay))
                .map((item, index) => ({
                    id: index,
                    key: `hour_${index}`,
                    label: item.time.slice(11, 16), // Extract HH:MM
                    value: item,
                }));

            setHours(availableHours);
            setSelectedHour(availableHours[0]?.value || null); // Default to first available hour
        }
    }, [selectedDay]);

    const handleNextHour = () => {
        if (!selectedHour) return;
        const currentIndex = hours.findIndex((item) => item.value === selectedHour);
        if (currentIndex < hours.length - 1) {
            setSelectedHour(hours[currentIndex + 1].value);
        }
    };

    const handlePrevHour = () => {
        if (!selectedHour) return;
        const currentIndex = hours.findIndex((item) => item.value === selectedHour);
        if (currentIndex > 0) {
            setSelectedHour(hours[currentIndex - 1].value);
        }
    };

    return (
        <View style={styles.container}>
            {/* Dropdowns inline */}
            <View style={styles.dropdownContainer}>
                <View style={styles.dropdownDay}>
                    <DropDownPicker
                        open={openDay}
                        value={selectedDay}
                        items={days}
                        setOpen={setOpenDay}
                        setValue={setSelectedDay}
                        setItems={setDays}
                        placeholder="Select a day"
                        closeAfterSelecting={true}
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"
                        zIndex={2}
                    />
                </View>

                <View style={styles.dropdownHour}>
                    <DropDownPicker
                        open={openHour}
                        value={selectedHour}
                        items={hours}
                        setOpen={setOpenHour}
                        setValue={setSelectedHour}
                        setItems={setHours}
                        placeholder="Select an hour"
                        closeAfterSelecting={true}
                        listMode="SCROLLVIEW"
                        dropDownDirection="BOTTOM"
                        zIndex={1}
                    />
                </View>
            </View>

            {/* Navigation & Conditions aligned properly */}
            {selectedHour && (
                <View style={styles.navigation}>
                    <TouchableOpacity onPress={handlePrevHour} style={styles.arrowButton}>
                        <Text style={styles.arrowText}>⬅️</Text>
                    </TouchableOpacity>

                    <View style={styles.conditionsWrapper}>
                        <Conditions waves={selectedHour} />
                    </View>

                    <TouchableOpacity onPress={handleNextHour} style={styles.arrowButton}>
                        <Text style={styles.arrowText}>➡️</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    dropdownContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', // Adjust width to fit within the screen
        marginBottom: 10,
    },
    dropdownDay: {
        width: '60%', // Ensure both dropdowns fit properly
        borderColor: 'rgb(192, 192, 192)',
    },
    dropdownHour: {
        width: '35%', // Ensure both dropdowns fit properly
        borderColor: 'rgb(192, 192, 192)',
    },
    // navigation: {
    //     flexDirection: 'row',
    //     alignItems: 'flex-start',       
    //     width: '90%', // Ensures arrows & Conditions align properly
    // },
    // arrowText: {
    //     fontSize: RFPercentage(3),
    // },
    // arrowButton: {
    //     zIndex: 1,
    // },
    // conditionsWrapper: {
    //     flex: 1,
    //     alignItems: 'center', // Center Conditions
    // },
    navigation: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center', // Centers all elements in the row
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 6,
    },
    arrowButton: {
        zIndex: 1
    },
    arrowText: {
        fontSize: RFPercentage(3,5),
    },
    conditionsWrapper: {
        flex: 1, // Ensures Conditions takes available space without pushing arrows out
        alignItems: 'center', // Centers Conditions
    },
});
