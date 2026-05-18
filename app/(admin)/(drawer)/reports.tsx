import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminReportsScreen() {
  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <Text variant="h1" className="mb-6">Operational Reports</Text>

      <Card className="p-6 mb-6">
        <Text variant="h3" className="mb-2">Daily Revenue Summary</Text>
        <Text variant="caption" className="mb-4">May 17, 2026</Text>
        <Button title="Export CSV" className="w-full" />
      </Card>

      <Card className="p-6">
        <Text variant="h3" className="mb-2">Rider Performance Metrics</Text>
        <Text variant="caption" className="mb-4">Monthly dispatch evaluations</Text>
        <Button title="Export PDF" className="w-full" />
      </Card>
    </ScrollView>
  );
}
