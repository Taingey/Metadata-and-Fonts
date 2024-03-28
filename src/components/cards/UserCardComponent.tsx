import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { UserType } from "@/types/users";

export default function UserCard({image, lastName,maidenName}: UserType) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">{lastName}</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{maidenName}</p>
        <img src={image} width={200} height={200}/>
      </CardBody>
      <Divider/>
      
    </Card>
  );
}
