import {cache} from 'react'

export const getPosts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        
        if (!response.ok) {
          throw new Error(response.statusText)
        }


        const posts = await response.json()

        if (posts === null) {
          throw new Error('Post not found')
        }
    
        return posts
      } catch (error) {
        console.error(error)
      }
    }
    

        /**
     * Server-side function to fetch a single blog post.
     *
     * @see https://nextjs.org/docs/app/building-your-application/data-fetching/caching#graphql-and-cache
     */ 
        export const getRecentPosts = cache(async () => {
            try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/recent/`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              })

              if (!response.ok) {
                throw new Error(response.statusText)
              }
              
                const json = await response.json()
                const posts = json.results
              if (posts === null) {
                throw new Error('Post not found!')
              }

              return posts
            } catch (error) {
              console.error(error)
            }
          })


    /**
     * Server-side function to fetch a single blog post.
     *
     * @see https://nextjs.org/docs/app/building-your-application/data-fetching/caching#graphql-and-cache
     */
    export const getPost = async (slug: string) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const post = await response.json()
        if (post === null) {
          throw new Error('Post not found!')
        }

        return post
        
      } catch (error) {
        console.error(error)
      }
    }

    export const getPostTypes = cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/post-types/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const postTypes = await response.json()
        if (postTypes === null) {
          throw new Error('Post not found!')
        }
    
        return postTypes.results
        
      } catch (error) {
        console.error(error)
      }
    })

    export const getTags = cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/tags/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const tags = await response.json()
        if (tags === null) {
          throw new Error('Post not found!')
        }
    
        return tags.results
        
      } catch (error) {
        console.error(error)
      }
    })


    export const getCategories = cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/post-types/list`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const categories = await response.json()
        if (categories === null) {
          throw new Error('Post not found!')
        }
    
        return categories.results
        
      } catch (error) {
        console.error(error)
      }
    })

    export const createNewPost = cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/create/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const post = await response.json()
        if (post === null) {
          throw new Error('Post not found!')
        }
        debugger
        return post
        
      } catch (error) {
        console.error(error)
      }
    })
