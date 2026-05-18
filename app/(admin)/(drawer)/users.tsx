import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';

const users = [
  { name: 'John Doe', role: 'Customer', phone: '+1 234 567 8900' },
  { name: 'Michael Rider', role: 'Delivery Agent', phone: '+1 987 654 3210' },
  { name: 'Sarah Admin', role: 'Administrator', phone: '+1 555 019 2834' }
];

export default function AdminUsersScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">User Management</Text>

      <View className="gap-y-4">
        {users.map(u => (
          <Card key={u.name} className="flex-row items-center p-4">
            <View className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-full items-center justify-center mr-4" />
            <View className="flex-1">
              <Text variant="body" weight="medium">{u.name}</Text>
              <Text variant="caption">{u.phone}</Text>
            </View>
            <View className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              <Text variant="caption" weight="bold">{u.role}</Text>
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
