import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex justify-center items-center">
            <div className="border-2 border-gray-500 p-10 rounded-lg w-96 flex flex-col justify-center items-center m-10">
                <div className="w-40 h-40 bg-gray-500 rounded-full mb-10"></div>
                <h1 className="font-bold text-3xl"> Facundo Lema </h1>
                <p className="text-gray-600 text-lg"> Software Developer </p>
                <div className="font-bold w-full"> About me </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ullam amet commodi maiores consequatur ex qui quod impedit veniam vitae, ut atque deleniti fugit itaque facere sint quisquam ducimus dolorem.
                </div>
                <Link className='bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition-all ease' href="/team/facundoelema">
                    See more
                </Link>
            </div>
            <div className="border-2 border-gray-500 p-10 rounded-lg w-96 flex flex-col justify-center items-center m-10">
                <div className="w-40 h-40 bg-gray-500 rounded-full mb-10"></div>
                <h1 className="font-bold text-3xl"> Catalina Lettieri</h1>
                <p className="text-gray-600 text-lg"> Graphic Designer </p>
                <div className="font-bold w-full"> About me </div>
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ullam amet commodi maiores consequatur ex qui quod impedit veniam vitae, ut atque deleniti fugit itaque facere sint quisquam ducimus dolorem.
                </div>
                <Link className='bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition-all ease' href="/team/catalinalettieri">
                    See more
                </Link>
            </div>
        </div>
    )
}