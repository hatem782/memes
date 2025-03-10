import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";
import type { ImageProps } from "../../utils/types";
import { memes } from "../../data/memes";

const Home: NextPage = ({ currentPhoto }: { currentPhoto: string }) => {
  const router = useRouter();
  const { photoId } = router.query;
  let index = memes.findIndex((meme: any) => meme === Number(photoId));

  return (
    <>
      <Head>
        <title>Meme</title>
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} />
      </main>
    </>
  );
};

export default Home;
