import React from 'react';
import { View, ScrollView, Switch } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function SettingsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Settings</Text>

      <Card className="mb-6 gap-y-4">
        <View className="flex-row justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
          <View>
            <Text variant="body" weight="medium">Push Notifications</Text>
            <Text variant="caption">Receive active tracking alerts</Text>
          </View>
          <Switch value={true} />
        </View>

        <View className="flex-row justify-between items-center py-2">
          <View>
            <Text variant="body" weight="medium">Dark Mode</Text>
            <Text variant="caption">Switch app color palette theme</Text>
          </View>
          <Switch value={false} />
        </View>
      </Card>

      <Button title="Save Changes" className="w-full" />
    </ScrollView>
  );
}
