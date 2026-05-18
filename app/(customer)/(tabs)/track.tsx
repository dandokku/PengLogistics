import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { MapPin, Navigation, Phone } from 'lucide-react-native';

export default function TrackScreen() {
  // Mock coordinates
  const origin = { latitude: 37.78825, longitude: -122.4324 };
  const destination = { latitude: 37.75825, longitude: -122.4624 };
  const rider = { latitude: 37.77825, longitude: -122.4424 };

  return (
    <View className="flex-1">
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 37.77325,
          longitude: -122.4474,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker coordinate={origin}>
          <View className="bg-primary p-2 rounded-full">
            <MapPin color="white" size={16} />
          </View>
        </Marker>
        <Marker coordinate={destination}>
          <View className="bg-success p-2 rounded-full">
            <MapPin color="white" size={16} />
          </View>
        </Marker>
        <Marker coordinate={rider}>
          <View className="bg-accent p-2 rounded-full border-2 border-white">
            <Navigation color="white" size={20} />
          </View>
        </Marker>
        <Polyline 
          coordinates={[origin, rider, destination]}
          strokeColor="#F59E0B"
          strokeWidth={4}
        />
      </MapView>

      <View className="absolute bottom-0 w-full p-4">
        <Card className="p-6">
          <View className="flex-row justify-between items-center mb-4">
            <View>
              <Text variant="h3">Arriving in 15 mins</Text>
              <Text variant="caption">Rider is approaching</Text>
            </View>
            <View className="bg-accent/20 px-3 py-1 rounded-full">
              <Text variant="caption" weight="bold" className="text-accent">IN TRANSIT</Text>
            </View>
          </View>
          
          <View className="flex-row items-center border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
            <View className="w-12 h-12 bg-slate-200 rounded-full mr-4" />
            <View className="flex-1">
              <Text variant="body" weight="medium">Michael Rider</Text>
              <Text variant="caption">Toyota Prius • ABC-123</Text>
            </View>
            <View className="bg-primary/10 p-3 rounded-full">
              <Phone color="#0F172A" size={20} />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}
