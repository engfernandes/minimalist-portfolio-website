"use client";

import { Button, Typography } from "@/components/ui";
import { Github, Icon, Linkedin } from "lucide-react";

export function Contact() {
  const contactItems = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/engfernandes",
      icon: <Linkedin size={16} />,
    },
    {
      label: "GitHub",
      url: "https://www.github.com/engfernandes",
      icon: <Github size={16} />,
    },
  ];

  const handleClickContactItem = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer
      className="flex flex-col gap-4 items-start justify-center"
      id="contacts"
    >
      <Typography text="Contacts" variant="h3" className="font-bold" />
      <div className="flex items-center justify-start gap-6">
        {contactItems.map((item, index) => (
          <div className="flex items-center justify-center gap-2" key={index}>
            {item.icon}
            <Button
              key={index}
              variant="link"
              onClick={() => handleClickContactItem(item.url)}
              className="p-0"
            >
              {item.label}
            </Button>
          </div>
        ))}
      </div>
    </footer>
  );
}
