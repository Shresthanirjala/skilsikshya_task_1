"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Task One", link: "/" },
    { name: "Task Two", link: "/task-two" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-blue-500 bg-clip-text transition-all duration-300 hover:opacity-80">
              Vrit Tech
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.name}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                <a
                  href="/"
                  className="text-2xl font-extrabold tracking-tight mb-4"
                >
                  <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    Vrit Tech
                  </span>
                </a>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center text-lg font-medium text-foreground/70 transition-all duration-300 hover:text-foreground hover:translate-x-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    className="w-full transition-transform active:scale-95"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
