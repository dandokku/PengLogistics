import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Truck } from 'lucide-react-native';

const deliveries = [
  { id: '1', rider: 'Michael', dest: '456 Market St', status: 'IN_TRANSIT' },
  { id: '2', rider: 'Sarah', dest: '789 Mission St', status: 'DELIVERED' },
  { id: '3', rider: 'David', dest: '101 California St', status: 'PENDING' }
];

export default function AdminDeliveriesScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Delivery Overview</Text>

      <View className="gap-y-4">
        {deliveries.map(d => (
          <Card key={d.id} className="flex-row items-center p-4">
            <View className="w-10 h-10 bg-accent/20 rounded-full items-center justify-center mr-4">
              <Truck size={20} color="#F59E0B" />
            </View>
            <View className="flex-1">
              <Text variant="body" weight="medium">Rider: {d.rider}</Text>
              <Text variant="caption">{d.dest}</Text>
            </View>
            <View className={`px-3 py-1 rounded-full ${d.status === 'DELIVERED' ? 'bg-emerald-500/10' : 'bg-amber-500/10'}`}>
              <Text variant="caption" weight="bold" className={d.status === 'DELIVERED' ? 'text-emerald-500' : 'text-amber-500'}>
                {d.status}
              </Text>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
