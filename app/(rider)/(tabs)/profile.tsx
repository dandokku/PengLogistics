import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAuthStore } from '@/store/authStore';

export default function RiderProfileScreen() {
  const logout = useAuthStore(state => state.logout);

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Rider Profile</Text>

      <Card className="items-center p-6 mb-6">
        <View className="w-20 h-20 bg-slate-200 dark:bg-slate-800 rounded-full items-center justify-center mb-4" />
        <Text variant="h2">Agent Michael</Text>
        <Text variant="caption" className="mt-1">Rider ID: AGENT-90182</Text>
      </Card>

      <Card className="mb-6 gap-y-4">
        <View className="flex-row justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
          <Text variant="body">Vehicle Type</Text>
          <Text variant="body" className="text-slate-500">Motorcycle</Text>
        </View>
        <View className="flex-row justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
          <Text variant="body">Plate Number</Text>
          <Text variant="body" className="text-slate-500">M-8910-SF</Text>
        </View>
        <View className="flex-row justify-between items-center py-2">
          <Text variant="body">License Status</Text>
          <Text variant="body" className="text-emerald-500 font-bold">Active</Text>
        </View>
      </Card>

      <Button title="Logout" variant="outline" className="w-full mb-10" onPress={logout} />
    </ScrollView>
  );
}
