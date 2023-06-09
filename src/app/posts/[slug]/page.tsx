import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="flex shadow-md">
        {next && <AdjacentPostCard post={next} type="prev" />}
        {prev && <AdjacentPostCard post={prev} type="next" />}
      </section>
    </article>
  );
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, description } = post;
  return {
    title,
    description,
  };
}
