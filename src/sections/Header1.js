import Image from 'next/image'
import HeaderContent from '@/components/HeaderContent';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderData from '@/content/HeaderContent.json';

export default function Home() {
  return (
    <header>
        <nav>
            <div className='flex w-full h-40 bg-gradient-radial text-white justify-between p-10'>
                <HeaderContent data={HeaderData} />
                <HeaderLogo data={HeaderData} />
            </div>
        </nav>
    </header>
  )
}
