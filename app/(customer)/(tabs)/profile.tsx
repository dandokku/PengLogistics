import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { useAuthStore } from '@/store/authStore';
import { User, MapPin, CreditCard, HelpCircle, Bell, Settings, LogOut, ChevronRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const menuItems = [
    {
      icon: <User size={20} color="#64748b" />,
      label: 'Account Details',
      action: () => alert('Edit account info')
    },
    {
      icon: <MapPin size={20} color="#64748b" />,
      label: 'Saved Addresses',
      action: () => alert('View saved addresses')
    },
    {
      icon: <CreditCard size={20} color="#64748b" />,
      label: 'Payment Methods',
      action: () => alert('Manage wallets')
    },
    {
      icon: <Bell size={20} color="#64748b" />,
      label: 'Notifications',
      action: () => router.push('/notifications')
    },
    {
      icon: <Settings size={20} color="#64748b" />,
      label: 'App Settings',
      action: () => router.push('/settings')
    },
    {
      icon: <HelpCircle size={20} color="#64748b" />,
      label: 'Help & Support',
      action: () => router.push('/support')
    }
  ];

  return (
    <ScrollView className="flex-1 bg-slate-50 dark:bg-slate-950 pt-16 px-4">
      {/* Header Profile Section */}
      <View className="items-center mb-8">
        <View className="w-24 h-24 bg-accent/20 rounded-full items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm mb-4">
          <Text variant="h1" className="text-accent text-3xl font-extrabold">
            {user?.name?.charAt(0) || 'U'}
          </Text>
        </View>
        <Text variant="h2" className="mb-1">{user?.name || 'User Profile'}</Text>
        <Text variant="body" className="text-slate-500">{user?.email || 'user@example.com'}</Text>
      </View>

      {/* Account Performance Cards */}
      <View className="flex-row gap-x-4 mb-8">
        <Card className="flex-1 p-4 items-center justify-center bg-white dark:bg-slate-900 border-none">
          <Text variant="caption" className="text-slate-400">Total Fulfillments</Text>
          <Text variant="h2" className="mt-1 text-accent font-extrabold">14</Text>
        </Card>
        <Card className="flex-1 p-4 items-center justify-center bg-white dark:bg-slate-900 border-none">
          <Text variant="caption" className="text-slate-400">Account Tier</Text>
          <Text variant="h2" className="mt-1 text-emerald-500 font-extrabold">Gold</Text>
        </Card>
      </View>

      {/* Settings Options Groups */}
      <Card className="p-4 mb-6 bg-white dark:bg-slate-900 gap-y-4 border-none">
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            onPress={item.action}
            activeOpacity={0.7}
            className="flex-row items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800"
          >
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl items-center justify-center mr-4">
                {item.icon}
              </View>
              <Text variant="body" weight="medium" className="text-slate-800 dark:text-slate-200">
                {item.label}
              </Text>
            </View>
            <ChevronRight size={18} color="#94a3b8" />
          </TouchableOpacity>
        ))}
      </Card>

      {/* Logout button */}
      <Button 
        title="Logout" 
        variant="outline" 
        className="w-full border-rose-200 dark:border-rose-950 bg-rose-50/50 dark:bg-rose-950/20 py-4 mb-14"
        onPress={logout}
      >
        <View className="flex-row items-center justify-center gap-x-2">
          <LogOut size={18} color="#f43f5e" />
          <Text variant="body" weight="bold" className="text-rose-500">
            Log Out Account
          </Text>
        </View>
      </Button>
    </ScrollView>
  );
}
