import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';

export const metadata = {
  title: '모든 게시글',
  description: '준수가 올린 게시글을 확인하세요.',
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
