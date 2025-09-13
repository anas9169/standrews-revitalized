import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import logo from '/lovable-uploads/52a1ec57-e30a-432d-934d-48bef54c2a0d.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const treatments = [
    { name: 'Cosmetic', items: ['Invisalign', 'Porcelain Veneers', 'Teeth Whitening', 'White Filling/Bonding'] },
    { name: 'Restorative Treatment', items: ['Bridges', 'Dentures', 'Crowns', 'Dental Implants'] },
    { name: 'General Dentistry', items: ['Dental Examination', 'Dental Hygiene', 'Root Canal Treatment', 'Snoring', 'TMD/Jaw Pain', 'Mouth Guards'] }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="St Andrews Dental Practice" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-foreground hover:text-white transition-colors duration-200 font-medium">
                  Treatments
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 bg-background border border-border shadow-lg z-50" onMouseEnter={(e) => e.preventDefault()}>
                <div className="grid grid-cols-3 gap-6 p-6">
                  {treatments.map((category) => (
                    <div key={category.name} className="space-y-3">
                      <h4 className="font-semibold text-primary text-sm">{category.name}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#treatments"
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:01767313182" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                01767 313 182
              </a>
            </Button>
            <Button size="sm" className="dental-hero-gradient">
              Book Online
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-border">
                  <Button variant="outline" asChild>
                    <a href="tel:01767313182" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      01767 313 182
                    </a>
                  </Button>
                  <Button className="dental-hero-gradient">Book Online</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;