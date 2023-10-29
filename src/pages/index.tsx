import { useExploreProfiles } from '@lens-protocol/react-web'
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link'

import Header from '../Header';

export default function Home() {
  const { data: profiles } = useExploreProfiles({
    limit: 25
  })
  
  return (
    <>
        <Head>
            <title>Orb Social</title>
            <meta name="description" content="Your social app" />
            <meta property="og:title" content="Orb Social" />
            <meta property="og:description" content="Your social app" />
        </Head>

        <Header />

        <div className="container m-auto">
            <div className='all-users'>
                {
                    profiles?.map((profile, index) => (
                    <Link className="user" href={`/${profile.handle}`} key={index}>
                        <div>
                        {
                            profile.picture && profile.picture.__typename === 'MediaSet' ? (
                            <Image
                                src={profile.picture.original.url}
                                width="120"
                                height="120"
                                alt={profile.handle}
                            />
                            ) : <div className="w-14 h-14 bg-slate-500	" />
                        }
                        <div className="p-4">
                            <h3 className="text-2xl mb-1">{profile.handle}</h3>
                            <p className="text-sm opacity-70">{profile.bio}</p>
                        </div>
                        </div>
                    </Link>
                    ))
                }
            </div>
        </div>
    </>
  )
}
