import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminAssignScreen() {
  const [assigned, setAssigned] = useState(false);

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Rider Assignment</Text>

      <Card className="p-6 mb-6">
        <Text variant="h3" className="mb-1">Unassigned Parcel</Text>
        <Text variant="caption" className="mb-4">MacBook Pro M3 • PENG-902</Text>
        <Text variant="body" className="mb-4">Route: Warehouse SF HQ ➡️ 456 Market St, SF</Text>
        
        <View className="border-t border-slate-100 dark:border-slate-800 pt-4">
          <Text variant="caption" className="mb-2">AVAILABLE RIDERS NEARBY</Text>
          <Card variant="flat" className="flex-row justify-between items-center p-4 border-none">
            <View>
              <Text variant="body" weight="medium">Michael Rider</Text>
              <Text variant="caption">Motorcycle • 0.8 miles away</Text>
            </View>
            <Button 
              title={assigned ? "Assigned" : "Assign"} 
              size="sm" 
              variant={assigned ? "outline" : "primary"}
              onPress={() => setAssigned(true)} 
            />
          </Card>
        </View>
      </Card>
    </ScrollView>
  );
}
