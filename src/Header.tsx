import Image from "next/image";

const Header = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <Image src="https://pbs.twimg.com/profile_images/1554199747560230912/uthjq-0D_400x400.jpg" height={100} width={100} className="mr-3 h-6 sm:h-9" alt="Orb Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Orb</span>
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
