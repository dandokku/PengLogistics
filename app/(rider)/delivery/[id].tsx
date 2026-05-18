import React from 'react';
import { View, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { MapPin, Package } from 'lucide-react-native';

export default function RiderDeliveryDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Delivery Details</Text>

      <Card className="mb-6 p-6">
        <Text variant="caption" className="text-accent font-bold mb-2">PICKUP LOCATION</Text>
        <View className="flex-row items-start mb-4">
          <MapPin size={20} color="#F59E0B" className="mr-3 mt-1" />
          <View className="flex-1">
            <Text variant="body" weight="medium">San Francisco HQ Warehouse</Text>
            <Text variant="caption">123 Logistics Way, SF</Text>
          </View>
        </View>
        
        <View className="w-full h-[1px] bg-slate-100 dark:bg-slate-800 my-4" />

        <Text variant="caption" className="text-accent font-bold mb-2">DELIVERY LOCATION</Text>
        <View className="flex-row items-start">
          <MapPin size={20} color="#10B981" className="mr-3 mt-1" />
          <View className="flex-1">
            <Text variant="body" weight="medium">456 Market St, SF</Text>
            <Text variant="caption">John Doe • Apt 4B</Text>
          </View>
        </View>
      </Card>

      <Card className="mb-6 p-6">
        <Text variant="caption" className="text-slate-400 mb-2">PARCEL DESCRIPTION</Text>
        <View className="flex-row items-center">
          <Package size={24} color="#0F172A" className="mr-3" />
          <View className="flex-1">
            <Text variant="body" weight="medium">MacBook Pro M3</Text>
            <Text variant="caption">Electronics • Fragile</Text>
          </View>
        </View>
      </Card>

      <View className="flex-row gap-x-4 mb-10">
        <Button 
          title="Call Customer" 
          variant="outline" 
          className="flex-1" 
          onPress={() => alert('Calling...')}
        />
        <Button 
          title="Confirm Delivery" 
          className="flex-1" 
          onPress={() => router.push(`/(rider)/delivery/${id}/confirm`)}
        />
      </View>
    </ScrollView>
  );
}
