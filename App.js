import React,{useState, useEffect}  from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Modal, Pressable} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ForecastModal from './components/ForecastModal';
//import Geolocation from 'react-native-geolocation-service';

// useEffect(() => {
// 	if (hasLocationPermission) {
// 		Geolocation.getCurrentPosition(
// 			(position) => {
// 			  console.log(position);
// 			},
// 			(error) => {
// 			  // See error code charts below.
// 			  console.log(error.code, error.message);
// 			},
// 			{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
			
// 		)}	
// 	})


export default function App() {

const [modalVisible, setModalVisible] = useState(false); 

// useEffect(() => {
// 	(async () => {
// 		let {status} = await Location.requestForegroundPermissionsAsync();
// 		if (status !== 'granted') {
// 			setErrorMsg('Permission to access location was denied');
// 			return;
// 		}
// 		console.log(process.env)
// 		let location = await Location.getCurrentPositionAsync({});
// 		setLat(location.coords.latitude);
// 		setLng(location.coords.longitude);
// 		console.log('your current latitude is:', lat);
// 		console.log('your current longitude is:', lng);
// 	})();
// }, []);

return <ImageBackground source={require('./assets/beachbackground.png')} style={styles.background}> 
				
				{/* HEADER */}
				<View style={styles.header}>
				{/* <Image style={styles.shaka} source={require('./assets/shaka.png')}/> */}
				<Text style={styles.title}>Find your waves</Text>
				<Text style={styles.subtitle}>Go Ripple!</Text>
				</View>

				{/*SEARCH MODAL*/}
				<View style={styles.openModal}>
					<Pressable onPress={() => setModalVisible(true)}>
						<Image style={styles.earth} source={require('./assets/earth.png')}/>
					</Pressable>
					
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.hideModal}>
							<View style={styles.modalView}>
								<Pressable
								style={[styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
								>
								{/* <Text style={styles.textStyle}>Hide Modal</Text> */}
								<Image style={styles.error} source={require('./assets/error2.png')}/>
								</Pressable>

								<ForecastModal />

							</View>
						</View>
					</Modal>

				</View>

				{/* ICONE ROMULO */}
				<View style={styles.avatar}>
				<Image style={styles.icon} source={require('./assets/shaka.png')}/>
				<Text style={styles.textavatar}>#descansinho #forecastdosguri</Text>
				</View>
			</ImageBackground> 
	}

const styles = StyleSheet.create({
	// GENERAL // 
	background: {
		flex: 1,
		width: '100%',
		height: '100%',
		justifyContent: "center"
	  },

	// HEADER // 
	header: {
		position: 'absolute',
		// marginHorizontal: '10%',
		alignSelf: 'center',
		paddingBottom: '100%',
	},
	title: {
		color: 'blue',
		fontSize: RFPercentage(4),
		paddingBottom: '2%',
		alignSelf: 'center',
	},
	subtitle: {
		color: 'black',
		fontSize: RFPercentage(3),
		paddingBottom: '2%',
		alignSelf: 'center',
	},

	// SEARCH // 
	// -----
	openModal: {
		position: 'absolute',
		paddingBottom: '50%',
		paddingTop: '80%',
		marginHorizontal: '40%',
		zIndex: 1,
	  },
	  earth : {
		maxWidth: '120%',
		maxHeight: '30%',
		alignSelf:'center',
	},
	  hideModal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: '15%', // can get rid of it
		marginHorizontal: '10%',
		maxHeight:'90%',
		maxWidth: '80%'
	  },
	modalView: {
		backgroundColor: "white",
		width: '115%',
		height: '65%',
		borderRadius: 10,
		padding: 10,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	  },
	// button: {
	// 	borderRadius: 20,
	// 	padding: 10,
	// 	elevation: 2
	//   },
	// buttonOpen: {
	// 	backgroundColor: "#F194FF",
	//   },
	error : {
		// display: 'flex',
		marginRight: '20%',
		alignSelf: 'flex-end',
		width: '50%',
		height: '70%',
		resizeMode: 'contain'
	},
	buttonClose: {
		// backgroundColor: "#2196F3",
		// margin: 10, 
		position: 'absolute',
		display: 'flex',
		alignSelf: 'flex-end',
		width: '20%',
		height: '15%',
		// resizeMode: 'contain',
	  },
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	  },

	// FOOTER // 
	textavatar: {
		color: 'rgb(160, 151, 99)',
		fontSize: RFPercentage(2),
	},
	avatar: {
		// position: 'absolute',
		paddingTop: '180%',
		marginLeft: '5%'
	},
	icon: {
		width:'15%',
		height: '50%',
	},
});


{/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Good Ware - Flaticon</a> */}