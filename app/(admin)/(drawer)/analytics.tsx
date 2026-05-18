import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';

export default function AdminAnalyticsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Analytics Overview</Text>

      <Card className="p-6 mb-6">
        <Text variant="h3" className="mb-2">Delivery Performance</Text>
        <Text variant="caption" className="mb-4">Average dispatch transit times</Text>
        <View className="h-40 bg-slate-100 dark:bg-slate-900 rounded-xl justify-center items-center border border-slate-200 dark:border-slate-800">
          <Text variant="body" className="text-slate-500">[Performance Chart Placeholder]</Text>
        </View>
      </Card>

      <Card className="p-6">
        <Text variant="h3" className="mb-2">Fulfillment Rate</Text>
        <Text variant="caption" className="mb-4">Completed vs missed delivery quotas</Text>
        <View className="h-40 bg-slate-100 dark:bg-slate-900 rounded-xl justify-center items-center border border-slate-200 dark:border-slate-800">
          <Text variant="body" className="text-slate-500">[Quota Graph Placeholder]</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
