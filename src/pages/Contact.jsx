import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="contact-form py-10">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <Input type="email" id="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
            <Input type="text" id="subject" placeholder="Subject" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <section className="social-media py-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Follow Me</h2>
        <div className="space-x-4">
          <a href="#" className="text-lg">Facebook</a>
          <a href="#" className="text-lg">Twitter</a>
          <a href="#" className="text-lg">LinkedIn</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;