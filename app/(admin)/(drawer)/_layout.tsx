import { Tabs } from 'expo-router';
import { ShieldAlert, Truck, Package, Users, BarChart3, FileText, UserPlus } from 'lucide-react-native';

export default function AdminTabsLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#F59E0B',
      tabBarStyle: { borderTopWidth: 0, elevation: 10, shadowOpacity: 0.1 }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <ShieldAlert color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          title: 'Deliveries',
          tabBarIcon: ({ color }) => <Truck color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="parcels"
        options={{
          title: 'Parcels',
          tabBarIcon: ({ color }) => <Package color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon: ({ color }) => <Users color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <BarChart3 color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reports',
          tabBarIcon: ({ color }) => <FileText color={color} size={22} />,
        }}
      />
      <Tabs.Screen
        name="assign"
        options={{
          title: 'Assign',
          tabBarIcon: ({ color }) => <UserPlus color={color} size={22} />,
        }}
      />
    </Tabs>
  );
}
