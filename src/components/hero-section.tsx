import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import React from "react"
export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Imama Jahanzaib
            </h1>
            <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>
          <div className="max-w-[600px] space-y-4">
            <p className="text-lg text-muted-foreground">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, great user experiences, and continuous learning.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="lg" onClick={scrollToProjects} className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button  variant="outline" size="lg">
              <a href="./Imama jahanzaib CV.pdf" download>
    Download CV
  </a>
            </Button>
          </div>
          <div className="flex items-center space-x-4 pt-8">
             <a href="https://github.com//imamaKhan123"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Github className="h-5 w-5" />
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/imama-jahanzaib-319592b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Linkedin className="h-5 w-5" />
            </Button>
            </a>
            <a
                href="mailto:imamakhan123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Mail className="h-5 w-5" />
            </Button>
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
}