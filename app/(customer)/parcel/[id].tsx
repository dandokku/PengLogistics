import React from 'react';
import { View, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Package, Truck, CheckCircle2 } from 'lucide-react-native';

export default function ParcelDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <View className="flex-row items-center justify-between mb-6">
        <Text variant="h1">Parcel Details</Text>
        <Text variant="caption">#{id || 'PENG-123456'}</Text>
      </View>

      <Card className="mb-6 bg-primary dark:bg-surfaceDark p-6">
        <View className="flex-row items-center mb-4">
          <View className="w-12 h-12 bg-accent/20 rounded-xl items-center justify-center mr-4">
            <Package color="#F59E0B" size={24} />
          </View>
          <View>
            <Text variant="h3" className="text-white">MacBook Pro M3</Text>
            <Text variant="caption" className="text-slate-300">Electronics • 2.5 kg</Text>
          </View>
        </View>
        <View className="border-t border-white/10 pt-4 flex-row justify-between">
          <View>
            <Text variant="caption" className="text-slate-400">Status</Text>
            <Text variant="body" weight="medium" className="text-accent">IN TRANSIT</Text>
          </View>
          <View className="items-end">
            <Text variant="caption" className="text-slate-400">Estimated Delivery</Text>
            <Text variant="body" weight="medium" className="text-white">Today, 2:30 PM</Text>
          </View>
        </View>
      </Card>

      <Text variant="h3" className="mb-4">Tracking History</Text>
      
      <Card className="mb-6 p-6">
        <View className="gap-y-6">
          <View className="flex-row">
            <View className="items-center mr-4">
              <View className="w-8 h-8 bg-accent rounded-full items-center justify-center z-10">
                <Truck size={16} color="white" />
              </View>
              <View className="w-[2px] h-12 bg-slate-200 dark:bg-slate-800" />
            </View>
            <View className="flex-1 pt-1">
              <Text variant="body" weight="medium">In Transit</Text>
              <Text variant="caption">Rider Michael has picked up your parcel.</Text>
            </View>
          </View>

          <View className="flex-row">
            <View className="items-center mr-4">
              <View className="w-8 h-8 bg-success rounded-full items-center justify-center z-10">
                <CheckCircle2 size={16} color="white" />
              </View>
            </View>
            <View className="flex-1 pt-1">
              <Text variant="body" weight="medium">Registered</Text>
              <Text variant="caption">Parcel was successfully registered at warehouse.</Text>
            </View>
          </View>
        </View>
      </Card>

      <Button title="Live Track on Map" onPress={() => router.push('/(customer)/(tabs)/track')} className="w-full mb-10" />
    </ScrollView>
  );
}
