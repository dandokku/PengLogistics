import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const mockHistory = [
  {
    id: 'PENG-902102',
    name: 'MacBook Pro M3 Max',
    status: 'Delivered',
    date: 'May 15, 2026',
    time: '2:30 PM',
    price: '$24.99',
    type: 'Electronics'
  },
  {
    id: 'PENG-881902',
    name: 'Nike Air Max Sneakers',
    status: 'Delivered',
    date: 'May 10, 2026',
    time: '11:15 AM',
    price: '$12.50',
    type: 'Apparel'
  },
  {
    id: 'PENG-776102',
    name: 'Leather Executive Chair',
    status: 'Cancelled',
    date: 'May 04, 2026',
    time: '4:45 PM',
    price: '$45.00',
    type: 'Furniture'
  }
];

export default function HistoryScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <View className="mb-6">
        <Text variant="h1" className="mb-1">Delivery History</Text>
        <Text variant="body" className="text-slate-500">Track and review your past shipments</Text>
      </View>

      <View className="gap-y-4 mb-10">
        {mockHistory.map((item) => (
          <Card key={item.id} className="p-5 flex-row items-center justify-between">
            <View className="flex-row items-center flex-1 mr-4">
              <View className={`w-12 h-12 rounded-2xl items-center justify-center mr-4 ${
                item.status === 'Delivered' ? 'bg-emerald-500/10' : 'bg-rose-500/10'
              }`}>
                {item.status === 'Delivered' ? (
                  <CheckCircle2 color="#10B981" size={24} />
                ) : (
                  <XCircle color="#F43F5E" size={24} />
                )}
              </View>
              <View className="flex-1">
                <View className="flex-row items-center gap-x-2 mb-1">
                  <Text variant="body" weight="bold" className="text-slate-900 dark:text-slate-100 flex-shrink" numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                <Text variant="caption" className="text-slate-400 mb-1">
                  {item.id} • {item.type}
                </Text>
                <Text variant="caption" className="text-slate-500">
                  {item.date} at {item.time}
                </Text>
              </View>
            </View>

            <View className="items-end">
              <Text variant="body" weight="bold" className="text-slate-900 dark:text-slate-100 mb-2">
                {item.price}
              </Text>
              <Button 
                variant="ghost" 
                size="sm"
                className="px-2"
                onPress={() => router.push(`/parcel/${item.id}`)}
              >
                <ArrowRight color="#F59E0B" size={16} />
              </Button>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
