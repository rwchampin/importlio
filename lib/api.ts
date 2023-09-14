import {cache} from 'react'
// import 'server-only'

export const getPosts = cache(async () => {
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
    })
    

        /**
     * Server-side function to fetch a single blog post.
     *
     * @see https://nextjs.org/docs/app/building-your-application/data-fetching/caching#graphql-and-cache
     */ 
        export const getRecentPosts = async () => {
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
          }


    /**
     * Server-side function to fetch a single blog post.
     *
     * @see https://nextjs.org/docs/app/building-your-application/data-fetching/caching#graphql-and-cache
     */
    export const getPost = async (slug: string) => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}/`, {
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

    export const getPostTypes =  cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post-types`, {
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

    export const getTags =  cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/tags`, {
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories/`, {
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

    export const getPostStatuses = cache(async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post-status/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
    
        if (!response.ok) {
          throw new Error(response.statusText)
        }
    
        const postStatus = await response.json()
        if (postStatus === null) {
          throw new Error('Post not found!')
        }
    
        return postStatus.results
        
      } catch (error) {
        console.error(error)
      }
    })

    export const createNewPost = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/create/new/`, {
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
    }

    
    export const createBlankPost = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/create/blank/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',

          },
          credentials: 'include',
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
    }

    

    export const updatePost = async ({
      id,
      body
    }:any) => {

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${id}/update/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body
        })

       if (!response.ok) {
          throw new Error(response.statusText)
        } 
    
        const json = await response.json()
        const post = json.results

        if (post === null) {
          throw new Error('Post not found!')
        }

        return post
        
      } catch (error) {
        console.error(error)
      }
    }

    export const deletePost = async (id: string) => {

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${id}/delete`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
        })

       if (!response.ok) {
          throw new Error(response.statusText)
        } 
    
        // const post = await response.json()
        // if (post === null) {
        //   throw new Error('Post not found!')
        // }
    
        return response.status === 204;
        
      } catch (error) {
        console.error(error)
      }
    }

    export const scrapeUrl = async (url: string) => {

      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/amazon/scrape-url/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const data = await res.json()

      if (data === null) {
        throw new Error('Post not found!')
      }

      return data
    }


  
 
   