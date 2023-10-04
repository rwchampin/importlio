import TagCloud from '@/app/components/TagCloud';
import { getTags } from '@/lib/api';
 
export default async function TagFeed() {
    const tags = await getTags();

  return (
    <TagCloud data={tags} type="tags" />
    )
}
