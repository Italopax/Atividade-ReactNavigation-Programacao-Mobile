/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home ({navigation}) {

  return (
    <View className="h-full flex justify-center items-center">
      <View className="flex items-center gap-2">
        <Text className="text-black text-3xl font-bold">Home</Text>
        <TouchableOpacity className="bg-gray-300 rounded py-2 px-4 justify-center items-center" onPress={() => navigation.navigate('Profile')}>
          <Text className='text-black text-lg'>
            teste botão
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
