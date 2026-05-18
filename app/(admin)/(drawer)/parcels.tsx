import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Package } from 'lucide-react-native';

const parcels = [
  { id: 'PENG-902', name: 'MacBook Pro M3', weight: '2.5kg', status: 'Registered' },
  { id: 'PENG-903', name: 'Nike Air Max', weight: '1.2kg', status: 'In Transit' },
  { id: 'PENG-904', name: 'Leather Jacket', weight: '1.8kg', status: 'Pending' }
];

export default function AdminParcelsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Parcel Management</Text>

      <View className="gap-y-4">
        {parcels.map(p => (
          <Card key={p.id} className="flex-row justify-between items-center p-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-primary/10 rounded-xl items-center justify-center mr-4">
                <Package size={20} color="#0F172A" />
              </View>
              <View>
                <Text variant="body" weight="medium">{p.name}</Text>
                <Text variant="caption">{p.id} • {p.weight}</Text>
              </View>
            </View>
            <Text variant="caption" weight="bold" className="text-accent">{p.status.toUpperCase()}</Text>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
