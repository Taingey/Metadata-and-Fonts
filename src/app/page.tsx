
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { UserType } from "@/types/users";
import UserCard from "@/components/cards/UserCardComponent";
import { Image } from '@nextui-org/react';

async function fetchUsers() {
  const users = await fetch("https://dummyjson.com/users", {
    cache: "no-store"
  });
  const res = await users.json();
  return res.users;
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <div className="container mx-auto flex items-center justify-center flex-col mt-5">
      <div className="text-2xl text-center grid gap-4">
        <h1 className="font-bold">This is poppins font</h1>
        <h1 className="font-bold">នេះគឺជាប្រភេទអក្សរកន្ទុមរុយ</h1>
      </div>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />}>
          {users?.map((user: UserType) => (
            <UserCard
              key={user.id}
              lastName={user.lastName}
              maidenName={user.maidenName}
              image={user.image}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
