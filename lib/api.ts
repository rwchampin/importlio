
import useFetch from '@/hooks/useFetch'
import {cache} from 'react'
// import 'server-only'

export const getPosts = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
        debugger
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
    
 
export const getRecentPosts = async () => {
  try {
    const posts = await useFetch({
      endpoint: `/posts/recent/`,
      method: 'GET',
    })

    

    if (posts === null) {
      throw new Error('Post not found')
    }

    return posts
  } catch (error) {
    console.error(error)
  }
}

 
export const getPost = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${slug}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    debugger
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

export const getPostsByQueryParams = async (type:string, name:string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${type}/${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json();
  debugger
  return data;
}


export const getPostTypes =  async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/post-types/`, {
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

    return postTypes
    
  } catch (error) {
    console.error(error)
  }
}

export const getTags =  async () => {
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

    return tags
    
  } catch (error) {
    console.error(error)
  }
}


export const getCategories = async () => {
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

    return categories
    
  } catch (error) {
    console.error(error)
  }
}
 
export const createPost = async (post:any) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    debugger
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const createdPost = await response.json()
    if (createdPost === null) {
      throw new Error('Post not found!')
    }
    debugger
    return createdPost
    
  } catch (error) {
    console.error(error)
  }
}

export const getPostCount = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/count/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const { count } = await response.json()
    if (count === null || count === undefined) {
      throw new Error('Count not found!')
    }

    return count
    
  } catch (error) {
    console.error(error)
  }
}

export const createBlankPost = async () => {
  try {
    const count = await getPostCount();
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        title: `New Post ${count + 1}`,
        slug: `new-post-${count + 1}`,
        content: '',
        post_status: 'draft',
        })
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
  slug,
  body
}:any) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/update/${slug}/`, {
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


 


export const getRegistrants = async () => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/registrants/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    } 

    const registrants = await response.json()
    if (registrants === null) {
      throw new Error('Post not found!')
    }

    return registrants
    
  } catch (error) {
    console.error(error)
  }
}


export const saveChatRoom = async ( body: any) => {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/chat-rooms/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    } 

    const chatRoom = await response.json()
    if (chatRoom === null) {
      throw new Error('Post not found!')
    }

    return chatRoom
    
  } catch (error) {
    console.error(error)
  }
}


export const getUser = async (access: string) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users/me/`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${access}`,
      'Content-Type': 'application/json'
    },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const user = await response.json()

  if (user === null) {
    throw new Error('Post not found!')
  }

  return user

}

