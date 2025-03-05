import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground, Animated, Modal, Pressable, Image} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ForecastModal from './components/ForecastModal';
import InfoModal from './components/InfoModal';

export default function App() {
    const [forecastModalVisible, setForecastModalVisible] = useState(false);
    const [infoModalVisible, setInfoModalVisible] = useState(false);
    const scaleAnim = useRef(new Animated.Value(1)).current; // Animation state

    useEffect(() => {
        const pulseAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.1, // Scale up
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1, // Scale down
                    duration: 500,
                    useNativeDriver: true,
                }),
            ])
        );

        pulseAnimation.start();

        return () => {
            scaleAnim.setValue(1); // Reset animation when unmounted
        };
    }, []);

    return (
        <ImageBackground source={require('./assets/beachbackground.png')} style={styles.background}>

            {/* SEARCH MODAL */}
			<View style={styles.openModal}>
				<View style={styles.surfTextContainer}>
        			<Text style={styles.surfText}>GoSurf</Text>
    			</View>
                <Pressable onPress={() => setForecastModalVisible(true)}>
                    <Animated.Image
                        style={[styles.earth, { transform: [{ scale: scaleAnim }] }]}
                        source={require('./assets/earth.png')}
                    />
                </Pressable>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={forecastModalVisible}
                    onRequestClose={() => setForecastModalVisible(false)}
                >
                    <View style={styles.hideModal}>
                        <View style={styles.modalView}>
                            <Pressable style={styles.buttonClose} onPress={() => setForecastModalVisible(false)}>
                                <Image style={styles.error} source={require('./assets/error2.png')} />
                            </Pressable>
                            <ForecastModal />
                        </View>
                    </View>
                </Modal>
            </View>

            {/* INFO MODAL */}
            <View style={styles.avatar}>
                <Pressable onPress={() => setInfoModalVisible(true)}>
                    <Image style={styles.icon} source={require('./assets/info2.png')} />
					{/* <Image style={styles.icon} source={require('./assets/info.png')} /> */}
                </Pressable>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={infoModalVisible}
                onRequestClose={() => setInfoModalVisible(false)}
            >
                <View style={styles.hideModal}>
                    <View style={styles.modalView}>
                        <Pressable style={styles.buttonClose} onPress={() => setInfoModalVisible(false)}>
                            <Image style={styles.error} source={require('./assets/error2.png')} />
                        </Pressable>
                        <InfoModal />
                    </View>
                </View>
            </Modal>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    openModal: {
        position: 'absolute',
        paddingBottom: '50%',
        paddingTop: '80%',
        marginHorizontal: '40%',
        zIndex: 1,
    },
    earth: {
        maxWidth: '120%',
        maxHeight: '30%',
        alignSelf: 'center',
    },
	surfTextContainer: {
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
        paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 10,
        borderRadius: 20, // Rounded effect
        elevation: 3, // Adds a shadow for depth
    },
    surfText: {
        fontSize: RFPercentage(2.5),
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    hideModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '10%',
        maxHeight: '90%',
        maxWidth: '80%',
    },
    modalView: {
        backgroundColor: 'white',
        width: '115%',
        height: '65%',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    error: {
        marginRight: '20%',
        alignSelf: 'flex-end',
        width: '50%',
        height: '60%',
        resizeMode: 'contain',
    },
    buttonClose: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '20%',
        height: '15%',
    },
    avatar: {
        position: 'absolute',
        bottom: 50,
        right: 20,
    },
    icon: {
        width: 30,
        height: 30,
    },
});
