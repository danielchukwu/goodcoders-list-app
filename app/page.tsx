import Image from 'next/image'
import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <main className='main flex items-start'>
        <div className='rounded-2xl overflow-hidden bg-red-500'>
          <Image src={'/laptop.jpg'} alt='laptop' width={800} height={50} className='object-fill'/>
        </div>
        <div className='pl-10 pt-10'>
          <h1 className='text-xl font-bold text-gray-900'>Homepage</h1>

          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus quaerat voluptate consequatur modi consequuntur dicta ipsam quidem maiores ipsum deleniti, possimus accusantium maxime. Asperiores reprehenderit soluta laborum aut dolorum.</p>

          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad natus quaerat voluptate consequatur modi consequuntur dicta ipsam quidem maiores ipsum deleniti, possimus accusantium maxime. Asperiores reprehenderit soluta laborum aut dolorum.</p>

          <div className='mt-5'>
            <Link href={'/goodcoders'}>
              <span className='bg-blue-400 rounded-lg py-3 px-4 text-white inline-block cursor-pointer hover:shadow-lg transition ease-out duration-100 hover:bg-blue-500 active:bg-blue-600'>See Goodcoders List</span>
            </Link>
          </div>
        </div>

      </main>

    </div>
  )
}
