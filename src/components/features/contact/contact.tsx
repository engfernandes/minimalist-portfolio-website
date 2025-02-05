"use client";

import { Button, Typography } from "@/components/ui";

export function Contact() {
  const contactItems = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/engfernandes",
    },
    {
      label: "GitHub",
      url: "https://www.github.com/engfernandes",
    },
  ];

  const handleClickContactItem = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer
      className="flex flex-col gap-2 items-start justify-center"
      id="contact"
    >
      <Typography text="Contact" variant="p" className="font-medium" />
      <div className="flex items-center justify-start gap-4">
        {contactItems.map((item, index) => (
          <Button
            key={index}
            variant="link"
            onClick={() => handleClickContactItem(item.url)}
            className="p-0"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </footer>
  );
}
