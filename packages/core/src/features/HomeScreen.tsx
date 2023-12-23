import * as React from 'react';
import { Paragraph, View, Image } from '@acme/ui';
import { ComponentProps } from 'react';
import { TextLink } from 'solito/link';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const HomeScreen = () => (
  <View tw="bg-red-200">
    {/* <Image
      tw="h-12 w-12 flex-none rounded-full bg-green-50"
      source={{
        uri: 'https://psc2.cf2.poecdn.net/8b8a7e1ecc52c932a7ea1e85c5e599b5667d5dc8/_next/static/media/openAIBlue.915c0399.png',
      }}
      alt=""
    />

*/}
    <Image
      tw="h-12 w-12 flex-none rounded-full bg-green-50"
      // source="https://picsum.photos/seed/696/3000/2000"

      source={{
        width: 250,
        height: 250,
        webMaxViewportWidth: 100,
        uri: 'https://picsum.photos/seed/696/3000/2000',
      }}
      placeholder={blurhash}
      contentFit="cover"
      transition={1000}
    />
    <Image
      tw="h-12 w-12 flex-none rou2nded-full bg-green-50"
      contentFit="contain"
      source={{
        width: 150,
        height: 150,
        webMaxViewportWidth: '100',
        uri: 'https://cdn.jsdelivr.net/gh/shelchin2023/binance-icons/crypto/sand.svg',
      }}
    />

    <Paragraph>Hello Expo </Paragraph>
    <TextLink href="/404"> Go to 404</TextLink>
  </View>
);
