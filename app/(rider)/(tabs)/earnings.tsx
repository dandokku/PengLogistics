import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Landmark } from 'lucide-react-native';

const transactions = [
  { id: '1', date: 'May 17, 2026', amount: '$45.00', status: 'Completed' },
  { id: '2', date: 'May 16, 2026', amount: '$32.50', status: 'Completed' },
  { id: '3', date: 'May 15, 2026', amount: '$51.00', status: 'Completed' }
];

export default function EarningsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Earnings Overview</Text>

      <Card className="p-6 bg-primary dark:bg-slate-900 mb-8 items-center border-none">
        <Text variant="caption" className="text-slate-300 mb-2">Total Balance Available</Text>
        <Text variant="h1" className="text-white text-4xl mb-4">$450.25</Text>
        <Card className="bg-white/10 dark:bg-white/5 px-6 py-2 rounded-full border-none">
          <Text variant="caption" className="text-accent font-bold">Request Payout</Text>
        </Card>
      </Card>

      <Text variant="h3" className="mb-4">Payout History</Text>
      
      <View className="gap-y-4">
        {transactions.map((t) => (
          <Card key={t.id} className="flex-row justify-between items-center p-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-emerald-500/10 rounded-full items-center justify-center mr-4">
                <Landmark size={20} color="#10B981" />
              </View>
              <View>
                <Text variant="body" weight="medium">Bank Transfer</Text>
                <Text variant="caption">{t.date}</Text>
              </View>
            </View>
            <View className="items-end">
              <Text variant="body" weight="bold" className="text-emerald-500">{t.amount}</Text>
              <Text variant="caption">{t.status}</Text>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
