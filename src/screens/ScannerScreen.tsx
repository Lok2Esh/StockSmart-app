
import { BarcodeScanningResult, Camera, CameraView } from 'expo-camera';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react"
import { Alert, Linking, Platform, SafeAreaView, StyleSheet, Text, View } from "react-native"

type scannerDataProps = {
    type: any,
    data: {}
}

export default function ScannerScreen() {

    const [hasPermission, setHasPermission] = useState<Boolean | null>(null);
    const [scanned, setScanned] = useState(false);

    useEffect(()=>{
        const getBarCodeScannerPermissions = async ()=>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");

        }

        getBarCodeScannerPermissions();
    })

    const handlePermission =(scannerDataProps: BarcodeScanningResult)=>{
        const {type, data} = scannerDataProps;
        setScanned(true);
        Alert.alert('QR code Scanned', `Type: ${type}\nData: ${data}`, [
            {text: 'OK', onPress: ()=> setScanned(false)},
        ]);
    }

    if(hasPermission === null){
        return <Text>Requesting camera permission...</Text>
    }

    if(hasPermission === false){
        return <Text>No access to camera</Text>
    }

    return(
        <SafeAreaView style={styles.container}>
            {/* <Stack.Screen 
                options={{
                    title: 'overlay',
                    headerShown: false
                }}
            /> */}
                {/* {Platform.OS === 'android' ? <StatusBar hidden={true}/>: null} */}
                <View style={styles.cameraContainer}>
                    <CameraView
                        style={styles.camera}
                        facing="back"
                        onBarcodeScanned={({ data }) => {
                            Alert.alert("Data: " + data);
                            console.log(data);
                            Linking.openURL(data)
                        }}
                    />
                </View>
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
});