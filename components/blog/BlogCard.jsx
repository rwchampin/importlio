import Image from "next/image"

const BlogCard = ({ post }) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded relative">
              <Image fill src={post.featured_image} alt="" className="w-full" />
            </div>
            <div>

                <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                  {post.published}
                </span>
                <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
                  {post.readtime}
                </span>
              <h3>
                <a
                  href="/#"
                  className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {post.title}
                </a>
              </h3>
              <p className="text-base text-body-color line-clamp-3">{post.content}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default BlogCard;