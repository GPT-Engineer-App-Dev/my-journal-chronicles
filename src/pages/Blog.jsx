import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="blog-posts py-10">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <img src="/placeholder.svg" alt="Post" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Post Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the post...</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="Post" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Post Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the post...</p>
            </CardContent>
          </Card>
          <Card>
            <img src="/placeholder.svg" alt="Post" className="mx-auto object-cover w-full h-[200px]" />
            <CardHeader>
              <CardTitle>Post Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Short description of the post...</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Blog;