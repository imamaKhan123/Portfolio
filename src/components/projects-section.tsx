import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const projects = [
    {
      title: "Trello Clone System",
      description: "A full-stack e-commerce solution built with React.js, featuring real-time Data Updates and management, Role based authentication and admin dashboard.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODM1NTAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Laravel Backend", "PostgreSQL"],
      demoUrl: "https://github.com/imamaKhan123/React-.Net-Framework-Project",
      githubUrl: "https://github.com/imamaKhan123/React-.Net-Framework-Project"
    },
    {
      title: "Cleaning Business App",
      description: "Modern analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTgzNTUwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "C# Backend", "PostgreSQL"],
      demoUrl: "https://studio.youtube.com/video/WzLCd_Y5UR4",
      githubUrl: "https://github.com/imamaKhan123/Cleaning-Business-.Net-and-React-"
    },
    {
      title: "Seatfrogt App",
      description: "Seatfrog is an innovative UK-based mobile application that revolutionizes train travel by allowing passengers to bid for upgrades to First Class seats, often at a fraction of the original price.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MzM5NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Three.js", "express", "MySql"],
      demoUrl: "https://seatfrog.com/",
      githubUrl: "https://github.com/imamaKhan123/ReportsApi"
    }
    , {
      title: "Tandemme App",
      description: "Tandemme is a platform designed to connect individuals with complementary skills, fostering collaboration and knowledge sharing.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4MzM5NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Three.js", "express", "MySql"],
      demoUrl: "https://tandemme.com/",
      githubUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-3 w-3" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}