'use client'
import { useParams } from "next/navigation";

const getUser = async () => {
  const param = useParams();
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${param.goodcoderId}`);
  return await res.json();
};
type user = { id: number; name: string; username: string; website: string; phone: string; email: string  };

const Details = async () => {
  const user: user = await getUser();
  console.log(user);

  return (
    <main className="main">
      <h1>GoodCoder</h1>
      <div className="mt-2">
        <h1 className='text-xl font-bold text-gray-900'>{user.name}</h1>
      </div>
      
      <div className="flex flex-col gap-2 py-4">
        <p>{user.email}</p>
        <p>{user.username}</p>
        <p>{user.website}</p>
        <p>{user.phone}</p>
        {/* <p>{ param }</p> */}
      </div>

    </main>
  );
}

export default Details;