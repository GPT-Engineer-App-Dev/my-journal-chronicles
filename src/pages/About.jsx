import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="profile py-10 text-center">
        <img src="/placeholder.svg" alt="Profile" className="mx-auto object-cover w-[150px] h-[150px] rounded-full" />
        <h1 className="text-4xl font-bold mt-4">About Me</h1>
        <p className="text-xl mt-2">A brief introduction about myself...</p>
      </section>

      <section className="skills py-10">
        <h2 className="text-3xl font-bold mb-6">Skills & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of skill 1...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skill 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of skill 2...</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skill 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of skill 3...</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;