import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Code, Database, Palette, Smartphone } from "lucide-react";
import React from "react";
export function AboutSection() {
  const skills = [
    { category: "Frontend", icon: <Code className="h-5 w-5" />, items: ["React", "TypeScript", "Angular.Js","Wordpress","Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", icon: <Database className="h-5 w-5" />, items: ["Laravel","C# .Net Framework","Node.js", "Python", "Django","PostgreSQL", "MongoDB", "GraphQL"] },
    { category: "Design", icon: <Palette className="h-5 w-5" />, items: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Prototyping"] },
    { category: "Mobile", icon: <Smartphone className="h-5 w-5" />, items: ["React Native", "Flutter", "iOS", "PWA"] },
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that drive business growth. I love turning complex problems 
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          I’m currently living in Sweden with a residence permit. Outside of coding, I love diving into new technologies, contributing to open source, and sipping coffee while thinking about the next exciting idea.
          </p>
        </div>
      </div>
    </section>
  );
}