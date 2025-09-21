import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import React from "react";
export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">P</span>
          </div>
          <span className="font-bold">Imama's Portfolio</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Button>
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('achievements')}
          >
            Achievements
          </Button>
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}