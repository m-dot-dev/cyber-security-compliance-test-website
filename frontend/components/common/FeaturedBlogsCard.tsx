import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { backendURL } from "@/constants/bankendURL";

interface Blog {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
}

const FeaturedBlogsCard = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageSize: 9,
    totalCount: 0,
    totalPages: 0,
  });

  useEffect(() => {
    fetchBlogs(pagination.currentPage);
  }, []);

  const fetchBlogs = async (page: number) => {
    try {
      const response = await axios.get(`${backendURL}/blog/blogs`, {
        params: { page: page, pageSize: pagination.pageSize },
      });
      setBlogs(response.data.blogs);
      setPagination({
        ...pagination,
        currentPage: page,
        totalCount: response.data.pagination.totalCount,
        totalPages: response.data.pagination.totalPages,
      });
    } catch (error) {
      toast.error("Error fetching blogs.");
    }
  };

  const handlePrevPage = () => {
    const prevPage = pagination.currentPage - 1;
    if (prevPage >= 1) {
      fetchBlogs(prevPage);
    }
  };

  const handleNextPage = () => {
    const nextPage = pagination.currentPage + 1;
    if (nextPage <= pagination.totalPages) {
      fetchBlogs(nextPage);
    }
  };

  return (
    <div className="container mx-auto shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden"
          >
            <div className="m-5">
              <img
                src={`${backendURL.replace("/api", "")}${blog.imageUrl}`}
                alt={blog.title}
                className="h-60 w-full object-cover rounded-[16px]"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-5">
                <Link href={`${routes.blogDetail.replace(":id", blog._id)}`}>
                  {blog.title.substring(0, 60)}
                </Link>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                {blog.content.substring(0, 100)}...
              </p>
              <div className="flex justify-between">
                <Button className="rounded-lg w-32 h-10 mt-2">
                  <Link href={`${routes.blogDetail.replace(":id", blog._id)}`}>
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 pr-5">
        <Button
          className="rounded-lg w-12 h-9 mt-0"
          onClick={handlePrevPage}
          disabled={pagination.currentPage === 1}
        >
          Prev
        </Button>
        <Button
          className="rounded-lg w-12 h-9 mt-0"
          onClick={handleNextPage}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default FeaturedBlogsCard;
