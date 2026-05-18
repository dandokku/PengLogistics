import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { BarChart3, Package, Truck, Users, LogOut } from 'lucide-react-native';
import { useAuthStore } from '@/store/authStore';

export default function AdminDashboardScreen() {
  const logout = useAuthStore(state => state.logout);

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      <View className="flex-row justify-between items-center mb-6">
        <Text variant="h1">Admin Control Center</Text>
        <TouchableOpacity 
          onPress={logout}
          activeOpacity={0.7}
          className="w-10 h-10 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 rounded-full items-center justify-center"
        >
          <LogOut size={18} color="#f43f5e" />
        </TouchableOpacity>
      </View>

      <View className="flex-row flex-wrap gap-4 mb-8">
        <Card className="w-[45%] p-4 bg-primary dark:bg-slate-900 border-none justify-center">
          <Truck size={20} color="white" className="mb-2" />
          <Text variant="caption" className="text-slate-300">Active Riders</Text>
          <Text variant="h2" className="text-white mt-1">42</Text>
        </Card>
        <Card className="w-[45%] p-4 justify-center">
          <Package size={20} color="#F59E0B" className="mb-2" />
          <Text variant="caption">Pending Packages</Text>
          <Text variant="h2" className="mt-1">118</Text>
        </Card>
        <Card className="w-[45%] p-4 justify-center">
          <Users size={20} color="#10B981" className="mb-2" />
          <Text variant="caption">Active Users</Text>
          <Text variant="h2" className="mt-1">1,204</Text>
        </Card>
        <Card className="w-[45%] p-4 justify-center">
          <BarChart3 size={20} color="#EF4444" className="mb-2" />
          <Text variant="caption">Today Revenue</Text>
          <Text variant="h2" className="mt-1">$4,850</Text>
        </Card>
      </View>

      <Text variant="h3" className="mb-4">Recent Exceptions / Delays</Text>
      <Card className="p-4 flex-row items-center border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900/40">
        <View className="w-10 h-10 bg-red-500/20 rounded-full items-center justify-center mr-4">
          <Package color="#EF4444" size={20} />
        </View>
        <View className="flex-1">
          <Text variant="body" weight="medium" className="text-red-800 dark:text-red-300">Rider Delayed</Text>
          <Text variant="caption" className="text-red-600 dark:text-red-400">Rider #90182 flat tire on route to stop #3</Text>
        </View>
      </Card>
    </ScrollView>
  );
}
