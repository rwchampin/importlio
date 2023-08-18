import  Table  from './Table';
import { GrAddCircle } from 'react-icons/gr';
export default async function BlogList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await res.json()

    const data = json.results



   
      
     

    return (
        <Table
            data={data}
            columns={[
                {
                    header: 'Title',
                    field: 'title',
                    sticky: true,
                    className: 'title'
                },
                {
                    header: 'Slug',
                    field: 'slug',
                    sticky: true,
                    className: 'slug'
                },
                 
                {
                    header: 'Headline',
                    field: 'headline',
                    sticky: true,
                    className: 'headline'
                },
                {
                    header: 'Subtitle',
                    field: 'subtitle',
                    sticky: true,
                    className: 'subtitle'
                },
                {
                    header: 'Published',
                    field: 'published',
                    sticky: true,
                    className: 'published'

                },
                {
                    header: 'Tags',
                    field: 'tags',
                    sticky: true,
                    className: 'tags'
                },
                {
                    header: 'Categories',
                    field: 'categories',
                    sticky: true,
                    className: 'categories'
                },
                {
                    header: 'Post Type',
                    field: 'post_type',
                    sticky: true,
                    className: 'post_type'
                },
                {
                    header: 'Featured Image',
                    field: 'featured_image',
                    sticky: true,
                    className: 'featured_image'
                },
                {
                    header: 'Shadow Text',
                    field: 'shadow_text',
                    sticky: true,
                    className: 'shadow_text'
                },
            ]}

            headers={{
                title: 'Blog Posts',
                description: 'A list of all blog posts',
                addButton: <>Add Blog Post <GrAddCircle className='h-5 w-5 stroke-green-11' /></>,
                href: '/dashboard/posts/create/'
            }}
        />
    )
}