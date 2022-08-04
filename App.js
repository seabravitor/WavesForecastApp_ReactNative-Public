import React,{useState, useEffect}  from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Modal, Pressable} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import ForecastModal from './components/ForecastModal';


export default function App() {

const [modalVisible, setModalVisible] = useState(false); 

useEffect(() => {
	(async () => {
		let {status} = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}
		console.log(process.env)
		// let location = await Location.getCurrentPositionAsync({});
		// setLat(location.coords.latitude);
		// setLng(location.coords.longitude);
		// console.log('your current latitude is:', lat);
		// console.log('your current longitude is:', lng);
	})();
}, []);

return <ImageBackground source={require('./assets/beachbackground.png')} style={styles.background}> 
				
				{/* HEADER */}
				<View style={styles.header}>
				{/* <Image style={styles.shaka} source={require('./assets/shaka.png')}/> */}
				<Text style={styles.title}> Trezenzioitenta380</Text>
				<Text style={styles.subtitle}>Forecast dos guri</Text>
				</View>

				{/*SEARCH MODAL*/}
				<View style={styles.openModal}>
					<Pressable onPress={() => setModalVisible(true)}>
						{/* <Text style={styles.textStyle}>Show Modal</Text> */}
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
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
								>
								{/* <Text style={styles.textStyle}>Hide Modal</Text> */}
								{/* <Image style={styles.error} source={require('./assets/error.png')}/> */}
								<Image style={styles.error} source={require('./assets/shaka.png')}/>
								</Pressable>

								<ForecastModal />

							</View>
						</View>
					</Modal>

				</View>

				{/* ICONE ROMULO */}
				<View style={styles.avatar}>
				{/* <Image source={require('./assets/iconpixel.png')} style={styles.icon}/> */}
				<Text style={styles.textavatar}>#descansinho</Text>
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
		marginBottom: '100%',
		paddingBottom: '40%',
		marginHorizontal: '40%',
		zIndex: 1,
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
		width: '105%',
		height: '65%',
		borderRadius: 20,
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
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	  },
	buttonOpen: {
		// backgroundColor: "#F194FF",
	  },
	earth : {
		width: '150%',
		height: '100%',
	},
	error : {
		display: 'flex',
		alignSelf: 'flex-end',
		width: '100%',
		height: '80%',
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
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	  },
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	  },

	// ICON ROMULO // 
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
		width:'20%',
		height: '50%',
	},
});


{/* <a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Good Ware - Flaticon</a> */}