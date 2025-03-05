import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet, Image } from 'react-native';

export default function InfoModal({ visible, onClose }) {

    return (
        <View>
            <View style={styles.overlay}>
                <Text style={styles.title}>Ripple Forecast Info</Text>
                <Image style={styles.icon} source={require('../assets/shaka.png')} />
                <Text style={styles.info}>
                    <Text style={styles.label}>Version: </Text>1.0.0
                </Text>
                <Text style={styles.info}>
                    <Text style={styles.label}>Company: </Text>DPivot Consulting Firm
                </Text>
                <Text style={styles.info}>
                    <Text style={styles.label}>Developed by: </Text>Vitor Sansao
                </Text>
            </View>

            <View style={styles.hashtag}>
                <Text style={styles.hashtagText}>#romuleradescansinho</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
    },
    hashtag: {
        flexDirection: 'column'
    },
    hashtagText: {
        fontSize: 12,
        alignSelf: 'flex-end'
    },
    icon: {
        width: 90,
        height: 70,
        padding: 10,
        marginBottom: 5
    },
});
