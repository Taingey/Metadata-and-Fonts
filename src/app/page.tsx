
import { Suspense } from "react";
import LoadingComponent from "./loading";
import { UserType } from "@/types/users";
import UserCard from "@/components/cards/UserCardComponent";

async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store"
  });
  const res = await users.json();
  return res;
}

export default async function Home() {
  const users = await fetchUsers();

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hi</h1>
        <Suspense fallback={<LoadingComponent/>} >
        {users?.map((user: UserType) => (
          <UserCard
            key={user.id}
            lastname={user.lastname}
            email={user.email}
          />
        ))}
        </Suspense>
      </div>
    </>
  );
}
