/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function Home ({navigation}) {

  const [cardInfo, setCardInfo] = useState<any>();

  async function searchRandomCard () {
    try{
      const res = await fetch('https://db.ygoprodeck.com/api/v7/randomcard.php');
      const json = await res.json();
      setCardInfo(json);
    } catch (err) {
      setCardInfo('Houve um problema');
    }
  }

  return (
    <View className="h-full flex justify-between items-center p-10">
      <View className="flex items-center gap-2">
        <Text className="text-black text-3xl font-bold">{navigation.getState().routeNames[navigation.getState().index]}</Text>
        <TouchableOpacity className="bg-gray-300 rounded py-2 px-4 justify-center items-center" onPress={() => navigation.navigate('Profile')}>
          <Text className='text-black text-lg'>
            Go to: Profile
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex gap-5">
        <View>
          {cardInfo?.card_images[0]?.image_url && (
            <>
            <Text>ad w dla çl</Text>
            <Image className="h-72" source={{
              uri: cardInfo.card_images[0].image_url,
            }} />
            </>
          )}
        </View>
        <TouchableOpacity className="bg-gray-300 rounded py-2 px-4 justify-center items-center" onPress={searchRandomCard}>
          <Text className='text-black text-lg'>
            Search random card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
