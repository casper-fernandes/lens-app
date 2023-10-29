import { usePublication, Profile } from "@lens-protocol/react-web";
import Image from "next/image";
import Link from "next/link";

export default function Profile({ publicationId }) {
  let { data: profile, loading } = usePublication({ publicationId });

  if (loading) return <p className="p-14">Loading ...</p>;

  return (
    <div>
      {/* <div className="p-14">
        {profile?.picture?.__typename === "MediaSet" && (
          <Image
            width="200"
            height="200"
            alt={profile.handle}
            className="rounded-xl"
            src={profile.picture.original.url}
          />
        )}
        <h1 className="text-3xl my-3">{profile?.handle}</h1>
        <h3 className="text-xl mb-4">{profile?.bio}</h3>
        {profile && <Publications profile={profile} />}
      </div> */}
    </div>
  );
}

export async function getServerSideProps({ query: publicationId }) {
    return {
        props: publicationId
    };
}