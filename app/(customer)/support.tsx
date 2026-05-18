import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from '@/components/ui/Text';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function SupportChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'agent', text: 'Hello! How can I help you track your parcel today?' }
  ]);

  const handleSend = () => {
    if (!message) return;
    setMessages([...messages, { id: Date.now().toString(), sender: 'user', text: message }]);
    setMessage('');
    
    // Simulate auto response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'agent', text: 'Our agent Michael has been assigned and is verifying your request.' }]);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-50 dark:bg-slate-950"
    >
      <ScrollView className="flex-1 pt-16 px-4 mb-4">
        <Text variant="h1" className="mb-6">Support Chat</Text>

        <View className="gap-y-4">
          {messages.map((m) => (
            <View key={m.id} className={`flex-row ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <Card className={`p-4 max-w-[80%] ${m.sender === 'user' ? 'bg-primary' : 'bg-white dark:bg-slate-900'}`}>
                <Text className={m.sender === 'user' ? 'text-white' : 'text-primary dark:text-white'}>{m.text}</Text>
              </Card>
            </View>
          ))}
        </View>
      </ScrollView>

      <View className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex-row gap-x-2">
        <Input 
          placeholder="Type your message..." 
          containerClassName="flex-1" 
          value={message} 
          onChangeText={setMessage} 
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
}
