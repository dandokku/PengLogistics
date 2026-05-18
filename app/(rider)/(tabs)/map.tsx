import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Navigation } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function RiderRouteMapScreen() {
  const router = useRouter();
  
  const currentLoc = { latitude: 37.77825, longitude: -122.4424 };
  const nextStop = { latitude: 37.75825, longitude: -122.4624 };

  return (
    <View className="flex-1">
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.76825,
          longitude: -122.4524,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
      >
        <Marker coordinate={currentLoc}>
          <View className="bg-accent p-2 rounded-full border-2 border-white">
            <Navigation color="white" size={20} />
          </View>
        </Marker>
        <Marker coordinate={nextStop}>
          <View className="bg-primary p-2 rounded-full">
            <MapPin color="white" size={16} />
          </View>
        </Marker>
        <Polyline 
          coordinates={[currentLoc, nextStop]}
          strokeColor="#F59E0B"
          strokeWidth={4}
        />
      </MapView>

      <View className="absolute bottom-0 w-full p-4">
        <Card className="p-6">
          <Text variant="caption" className="text-accent font-bold mb-1">NEXT STOP</Text>
          <Text variant="h3" className="mb-2">456 Market St, SF</Text>
          <Text variant="caption" className="mb-4">Deliver MacBook Pro M3</Text>
          
          <Button 
            title="Arrived at Location" 
            onPress={() => router.push('/(rider)/delivery/d-123')} 
          />
        </Card>
      </View>
    </View>
  );
}
