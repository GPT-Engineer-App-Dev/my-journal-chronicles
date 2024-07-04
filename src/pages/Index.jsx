import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="Logo" className="h-10 w-10" />
          <nav className="space-x-4">
            <a href="/" className="text-lg font-semibold">Home</a>
            <a href="/about" className="text-lg font-semibold">About</a>
            <a href="/blog" className="text-lg font-semibold">Blog</a>
            <a href="/contact" className="text-lg font-semibold">Contact</a>
          </nav>
        </div>
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </header>

      <main>
        <section className="hero bg-gray-200 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-xl">Sharing my thoughts and experiences</p>
        </section>

        <section className="recent-posts py-10">
          <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
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
      </main>

      <aside className="sidebar py-10">
        <h2 className="text-3xl font-bold mb-6">Categories</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-lg">Category 1</a></li>
          <li><a href="#" className="text-lg">Category 2</a></li>
          <li><a href="#" className="text-lg">Category 3</a></li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 mb-6">Recent Posts</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-lg">Recent Post 1</a></li>
          <li><a href="#" className="text-lg">Recent Post 2</a></li>
          <li><a href="#" className="text-lg">Recent Post 3</a></li>
        </ul>
      </aside>

      <footer className="py-10 text-center">
        <div className="space-x-4">
          <a href="#" className="text-lg">Facebook</a>
          <a href="#" className="text-lg">Twitter</a>
          <a href="#" className="text-lg">LinkedIn</a>
        </div>
        <p className="mt-4">&copy; 2023 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;