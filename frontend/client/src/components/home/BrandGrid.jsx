import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const brands = [
  {
    name: "Fender",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/fender.webp",
  },
  {
    name: "ESP",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/esp.webp",
  },
  {
    name: "KORG",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/korg.webp",
  },
  {
    name: "Gibson",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/gibson.webp",
  },
  {
    name: "Yamaha",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/yamaha.webp",
  },
  {
    name: "Shure",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/shure.webp",
  },
  {
    name: "Sennheiser",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/sennheiser.webp",
  },
  {
    name: "Roland",
    logo: "https://thumbs.static-thomann.de/thumb//thumb270x160/pics/herstlogos/roland.webp",
  },
];

console.log(Card);

function BrandGrid() {
  return (
    <div className="m-6 gap-2 grid grid-cols-2 sm:grid-cols-4">
      {brands.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log(item.name)}
          className="transition-transform duration-300 transform hover:scale-105 m-2"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              alt={item.name}
              className="w-full object-scale-down h-[100px]"
              src={item.logo}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default BrandGrid;
