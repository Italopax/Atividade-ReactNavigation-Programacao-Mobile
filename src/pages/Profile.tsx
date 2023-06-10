/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity, View} from 'react-native';

export default function Profile ({navigation}) {

  return (
    <View className="h-full flex justify-center items-center">
      <View className="flex items-center gap-2">
        <Text className="text-black text-3xl font-bold">Profile</Text>
        <TouchableOpacity className="bg-gray-300 rounded py-2 px-4 justify-center items-center" onPress={() => navigation.navigate('Home')}>
          <Text className='text-black text-lg'>
            teste botão
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
