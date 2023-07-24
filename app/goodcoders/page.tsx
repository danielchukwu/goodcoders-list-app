import Link from "next/link";

const Details = () => {
  return (
    <main className="main">
      <h1 className='text-xl font-bold text-gray-900'>All Goodcoders</h1>

      <div className="mt-7">
        {/* List of goodcoders */}
        <div className="mt-3">
          <Link href={`/details/${5}`}>
            <div className="bg-white px-6 py-5 border-l-4 rounded-sm border-white hover:border-blue-500">
              <p>Luke Shaw</p>
            </div>
          </Link>
        </div>
        
      </div>
    </main>
  );
}

export default Details;