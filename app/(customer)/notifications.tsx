import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Truck, Package } from 'lucide-react-native';

const notifications = [
  {
    id: '1',
    title: 'Out for Delivery',
    message: 'Your parcel MacBook Pro M3 is out for delivery with Michael Rider.',
    time: '2 hours ago',
    type: 'delivery',
  },
  {
    id: '2',
    title: 'Parcel Registered',
    message: 'A new parcel has been registered for pickup at San Francisco HQ.',
    time: 'Yesterday',
    type: 'package',
  }
];

export default function NotificationsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Notifications</Text>
      
      <View className="gap-y-4">
        {notifications.map((n) => (
          <Card key={n.id} className="flex-row items-start p-4">
            <View className="w-10 h-10 bg-accent/20 rounded-full items-center justify-center mr-4">
              {n.type === 'delivery' ? <Truck size={20} color="#F59E0B" /> : <Package size={20} color="#F59E0B" />}
            </View>
            <View className="flex-1">
              <Text variant="body" weight="medium" className="mb-1">{n.title}</Text>
              <Text variant="caption" className="mb-2">{n.message}</Text>
              <Text variant="caption" className="text-slate-400">{n.time}</Text>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
