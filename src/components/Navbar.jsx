import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-background">
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-4 py-4">

        <div id="icon" className="mr-auto text-xl font-bold text-primary">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>


        <div className="flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6">
              <NavigationMenuItem>

                <NavigationMenuLink
                  href="/"
                  className={`text-sm font-medium text-foreground hover:text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className={`text-sm font-medium text-foreground hover:text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#Contact"
                  className={`text-sm font-medium text-foreground hover:text-primary ${navigationMenuTriggerStyle()}`}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>


          <div id="signIn">
            <Link to="/signup">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
