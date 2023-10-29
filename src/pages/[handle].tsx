import { useProfile, usePublications, Profile } from "@lens-protocol/react-web";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Profile({ handle }) {
  let { data: profile, loading } = useProfile({ handle });

  if (loading) return <p className="p-14">Loading ...</p>;

  return (
    <>
      <Head>
        <title>Orb Social</title>
        <meta name="description" content="Your social app" />
        <meta property="og:title" content="Orb Social" />
        <meta property="og:description" content="Your social app" />
      </Head>

      <div>
        <Image
          width={500}
          height={100}
          src={profile.coverPicture.original.url}
          alt={profile.handle}
          className="w-full"
        />
        <div className="p-14">
          {profile?.picture?.__typename === "MediaSet" && (
            <Image
              width="200"
              height="200"
              alt={profile.handle}
              className="rounded-xl"
              src={profile.picture.original.url}
            />
          )}
        </div>

        <h1 className="text-3xl">{profile?.name}</h1>
        <h2 className="text-xl opacity-75">@{profile?.handle}</h2>
        <h3 className="text-sm my-4">{profile?.bio}</h3>
        {profile && <Publications profile={profile} />}
      </div>
    </>
  );
}

function Publications({ profile }: { profile: Profile }) {
  let { data: publications } = usePublications({
    profileId: profile.id,
    limit: 10,
  });
  publications = publications?.map((publication) => {
    if (publication.__typename === "Mirror") {
      return publication.mirrorOf;
    } else {
      return publication;
    }
  });

  return (
    <>
      {publications?.map((pub: any, index: number) => (
        <Link href={`/post/${pub.id}`} key={index}>
            <div className="py-4 bg-zinc-900 rounded mb-3 px-4">
            <p>{pub.metadata.content}</p>
            {pub.metadata?.media[0]?.original &&
                ["image/jpeg", "image/png"].includes(
                pub.metadata?.media[0]?.original.mimeType
                ) && (
                <Image
                    width="400"
                    height="400"
                    alt={profile.handle}
                    className="rounded-xl mt-6 mb-2"
                    src={pub.metadata.media[0].original.url}
                />
                )}
            </div>
        </Link>
      ))}
    </>
  );
}

export async function getServerSideProps({ query: handle }) {
    return {
        props: handle
    };
}
