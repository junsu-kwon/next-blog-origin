import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostCard({ post, type }: Props) {
  const { title, description, path } = post;

  return (
    <Link href={`/posts/${path}`} className="relative w-full max-h-40">
      <Image
        className="w-full opacity-60"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={250}
        height={100}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {type === 'prev' && <FaArrowLeft className="absolute left-1/2" />}
        
        <div className="w-full">
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>

        {type === 'next' && <FaArrowRight />}
      </div>
    </Link>
  );
}
