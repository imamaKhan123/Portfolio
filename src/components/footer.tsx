import { Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";
export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="font-bold">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting digital experiences that make a difference.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#about" className="text-muted-foreground hover:text-foreground">About</a></div>
              <div><a href="#projects" className="text-muted-foreground hover:text-foreground">Projects</a></div>
              <div><a href="#achievements" className="text-muted-foreground hover:text-foreground">Achievements</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-foreground">Contact</a></div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Web Development</div>
              <div className="text-muted-foreground">Mobile Apps</div>
              <div className="text-muted-foreground">UI/UX Design</div>
              <div className="text-muted-foreground">Consulting</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <div className="flex space-x-2">
            <a href="https://github.com//imamaKhan123"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/imama-jahanzaib-319592b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              </a>
              <a href="https://www.facebook.com/share/19t1QbQwt1/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              </a>
              <a
                href="mailto:imamakhan123@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Imama Jahanzaib FullStack developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}