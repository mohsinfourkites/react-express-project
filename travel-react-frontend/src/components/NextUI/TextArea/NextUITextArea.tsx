import React from 'react';
import { Textarea } from '@nextui-org/react';

const NextUITextArea: React.FC = () => {
return (
    <Textarea
        isReadOnly
        label="Description"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Enter your description"
        defaultValue="`Nestled in the northern reaches of Kashmir, Bangus Valley is a spectacular yet lesser-known destination that captivates visitors with its unspoiled beauty. This hidden gem is tucked away in the Kupwara district and boasts lush meadows, dense forests, sparkling streams, and breathtaking mountain views. Known for its tranquil ambiance and raw natural charm, Bangus is an ideal destination for those looking to escape the crowded tourist hubs of Kashmir and immerse themselves in pristine wilderness.
         Bangus Valley, also known as Green Meadows of Kashmir, spans over 300 square kilometers and sits at an altitude of approximately 10,000 feet. The valley is a blend of vast green pastures, dense pine forests, and crystal-clear rivers and lakes. During spring and summer, wildflowers in vibrant colors carpet the valley, while the surrounding peaks create a majestic backdrop, offering unparalleled scenic beauty. The valley is also home to a variety of wildlife, including Himalayan black bears, musk deer, and snow leopards, making it a paradise for nature lovers and wildlife enthusiasts. The valley is dotted with several small villages inhabited by the nomadic Gujjar and Bakarwal tribes, who lead a simple and traditional way of life. Visitors can interact with the locals, learn about their customs and traditions, and enjoy their warm hospitality. Bangus Valley is a paradise for trekkers and adventure seekers, offering numerous trekking routes that lead to high-altitude lakes, alpine meadows, and panoramic viewpoints. The valley is also a great destination for camping, birdwatching, and photography, with its diverse landscapes and abundant wildlife providing endless opportunities for exploration and discovery. Whether you're seeking a peaceful retreat in nature, an adrenaline-pumping adventure, or a cultural experience, Bangus Valley has something for everyone. So pack your bags, leave the hustle and bustle behind, and embark on an unforgettable journey to this hidden paradise in the heart of Kashmir.`"
        className="max-w-xs"
        style={{ color: 'white' }}
    />
);
};

export default NextUITextArea;
