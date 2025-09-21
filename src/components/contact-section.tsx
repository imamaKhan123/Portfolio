import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
export function ContactSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    console.log(formData)
    const response = await fetch("https://formspree.io/f/manpwqdy", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData, // Formspree accepts FormData
    });
  
    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  };
  

  return (
    <section id="contact" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">imamakhan123@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+46 73 497 66 38</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Stockholm Sweden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
  <div className="grid gap-4 md:grid-cols-2">
    <div className="space-y-2">
      <label htmlFor="name" className="text-sm font-medium">Name</label>
      <Input id="name" name="name" placeholder="Your name" required />
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium">Email</label>
      <Input id="email" name="email" type="email" placeholder="your@email.com" required />
    </div>
  </div>

  <div className="space-y-2">
    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
    <Input id="subject" name="subject" placeholder="Project inquiry" required />
  </div>

  <div className="space-y-2">
    <label htmlFor="message" className="text-sm font-medium">Message</label>
    <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
  </div>

  <Button type="submit" className="w-full">Send Message</Button>
</form>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}