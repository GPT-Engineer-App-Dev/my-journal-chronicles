import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z.instanceof(FileList).refine((files) => files.length > 0, "Image is required"),
});

const AddPost = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast("Blog post added successfully!");
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Add New Blog Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-lg font-medium">Title</label>
              <Input type="text" id="title" {...register("title")} />
              {errors.title && <p className="text-red-500">{errors.title.message}</p>}
            </div>
            <div>
              <label htmlFor="content" className="block text-lg font-medium">Content</label>
              <Textarea id="content" {...register("content")} />
              {errors.content && <p className="text-red-500">{errors.content.message}</p>}
            </div>
            <div>
              <label htmlFor="image" className="block text-lg font-medium">Image</label>
              <Input type="file" id="image" accept="image/*" {...register("image")} onChange={handleImageChange} />
              {errors.image && <p className="text-red-500">{errors.image.message}</p>}
              {imagePreview && <img src={imagePreview} alt="Preview" className="mt-4 w-full h-auto" />}
            </div>
            <Button type="submit">Add Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddPost;