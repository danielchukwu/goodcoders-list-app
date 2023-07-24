import Link from "next/link";

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
};

type user = { id: number; name: string; username: string; email: string };

const Details = async () => {
  const users = await getUsers();

  return (
    <main className="main">
      <h1 className="text-xl font-bold text-gray-900">All Goodcoders</h1>

      <div className="mt-7">
        {/* List of goodcoders */}
        {users.map((user: user) => (
          <div className="mt-3" key={user.id}>
            <Link href={`/goodcoders/${user.id}`}>
              <div className="bg-white px-6 py-5 border-l-4 rounded-sm border-white hover:border-blue-500">
                <p>{user.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Details;
