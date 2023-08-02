import { apiSlice } from './apiSlice';

// Define the required types and interfaces for the blog slice
interface BlogPost {
  id: string;
  title: string;
  content: string;
  featured_image: File | null;
  categories: string[];
  tags: string[];
}

interface CreateBlogPostResponse {
  success: boolean;
  post: BlogPost;
}

// Create the blogApiSlice with the appropriate endpoints and queries
const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // createBlogPost: builder.mutation<CreateBlogPostResponse, BlogPost>({
    //   query: (blogPost) => {
    //     const formDataToSubmit = new FormData();
    //     formDataToSubmit.append('title', blogPost.title);
    //     formDataToSubmit.append('content', blogPost.content);
    //     formDataToSubmit.append('featured_image', blogPost.featured_image || ''); // Append the file data
    //     formDataToSubmit.append('tags', JSON.stringify(blogPost.tags)); // Convert tags to JSON string
    //     formDataToSubmit.append('categories', JSON.stringify(blogPost.categories)); // Convert categories to JSON string
        
    //     // Set the headers for the request
    //     const headers = {
    //       Accept: 'application/json',
    //     };
        
    //     return {
    //       url: '/posts/create/',
    //       method: 'POST',
    //       headers: headers,
    //       body: formDataToSubmit,
    //     };
    //   },
    // }),
    // Add more endpoints as needed for your blog functionality
    
  }),
});

// Export the specific hooks generated by blogApiSlice
export const {
  // useCreateBlogPostMutation,
  // Add other hooks here for other blog-related actions
} = blogApiSlice;

// Export the auto-generated hooks for the blogApiSlice
export default blogApiSlice;