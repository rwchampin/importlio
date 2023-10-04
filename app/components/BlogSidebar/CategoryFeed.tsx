import TagCloud from '@/app/components/TagCloud';
import { getCategories } from '@/lib/api';
 
export default async function CategoryFeed() {
    const tags = await getCategories();

  return (
    <TagCloud data={tags} type="categories" />
    )
}
