import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import React from "react";

function InstrumentsCard({instrument}) {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-1">
      <Card
          shadow="sm"
          key={instrument._id}
          isPressable
          onPress={() => console.log(instrument.title)}
          className="transition-transform duration-300 transform hover:scale-105 m-2"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="sm"
              width="100%"
              alt={instrument.title}
              className="w-full object-scale-down h-[100px]"
              src={instrument.productImg[0]}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{instrument.title}</b>
            <p className="text-default-500">{instrument.price} $</p>
          </CardFooter>
        </Card>
    </div>
  );
}

export default InstrumentsCard;
