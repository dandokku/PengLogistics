import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Package } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function RiderDashboardScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <View className="flex-row justify-between items-center mb-8">
        <View>
          <Text variant="caption">Welcome back,</Text>
          <Text variant="h2">Agent Michael</Text>
        </View>
        <View className="bg-emerald-500/20 px-3 py-1 rounded-full">
          <Text variant="caption" weight="bold" className="text-emerald-500">ONLINE</Text>
        </View>
      </View>

      <View className="flex-row gap-x-4 mb-8">
        <Card className="flex-1 p-4 bg-primary dark:bg-slate-900 justify-center border-none">
          <Text variant="caption" className="text-slate-300">Today's Earnings</Text>
          <Text variant="h2" className="text-white mt-1">$128.50</Text>
        </Card>
        <Card className="flex-1 p-4 justify-center">
          <Text variant="caption">Completed</Text>
          <Text variant="h2" className="mt-1">8 Trips</Text>
        </Card>
      </View>

      <Text variant="h3" className="mb-4">Assigned Deliveries (Pending)</Text>
      
      <View className="gap-y-4 mb-8">
        <Card className="flex-row items-center p-4">
          <View className="w-12 h-12 bg-accent/20 rounded-xl items-center justify-center mr-4">
            <Package color="#F59E0B" size={24} />
          </View>
          <View className="flex-1">
            <Text variant="body" weight="medium">MacBook Pro M3</Text>
            <Text variant="caption">To: 456 Market St, SF</Text>
          </View>
          <Button 
            title="Start" 
            size="sm" 
            onPress={() => router.push('/(rider)/delivery/d-123')} 
          />
        </Card>
      </View>
    </ScrollView>
  );
}
