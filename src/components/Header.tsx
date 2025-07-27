import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingCart, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/assets/logos/Main logo/logo1.png";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full relative">
      {/* Top Info Bar */}
      <div className="bg-[#4b5563] text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-white/80">
              A SUBSIDIARY OF GurkhaJaGoods TRADING OY
            </span>
            <span className="hidden md:block text-white/80">•</span>
            <span className="hidden md:block">
              ONE-STOP SHOP FOR EVERYTHING YOU NEED
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {/* Social Media Icons - Using React Icons */}
            <Link to="" className="text-white/80 hover:text-white">
              <FaTwitter className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaPinterest className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaInstagram className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaWhatsapp className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaLinkedin className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaPhone className="w-4 h-4" />
            </Link>
            <Link to="" className="text-white/80 hover:text-white">
              <FaYoutube className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - Made sticky */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="" className="flex items-center space-x-2">
              <img src={Logo} alt="Helkan Store" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white bg- px-4 py-2 rounded font-medium">
                HOME
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium">
                  <span>FASHION</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={5}
                  className="min-w-[200px] shadow-lg">
                  <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                  <DropdownMenuItem>Best Sellers</DropdownMenuItem>
                  <DropdownMenuItem>Kids</DropdownMenuItem>
                  <DropdownMenuItem>For HER</DropdownMenuItem>
                  <DropdownMenuItem>For HIM</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium">
                  <span>GROCERY</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Rice</DropdownMenuItem>
                  <DropdownMenuItem>Noodles</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/sport"
                className="text-gray-700 hover:text-primary font-medium">
                SPORT
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-primary font-medium">
                SHOP
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 hover:text-primary font-medium">
                  <span>CART</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Checkout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/news"
                className="text-gray-700 hover:text-primary font-medium">
                NEWS
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium">
                ABOUT US
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium">
                CONTACT US
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-600 hover:text-primary">
                <Search className="h-5 w-5" />
              </Button>

              {/* User Account */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-primary">
                <User className="h-5 w-5" />
              </Button>

              {/* Shopping Cart */}
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-gray-700 hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:block text-sm font-medium">
                  CART / €0.00
                </span>
                <span className="bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      Navigate through our store
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 mt-4">
                    <Link to="/" className="text-lg font-medium">
                      Home
                    </Link>
                    <Link to="/fashion" className="text-lg font-medium">
                      Fashion
                    </Link>
                    <Link to="/grocery" className="text-lg font-medium">
                      Grocery
                    </Link>
                    <Link to="/sport" className="text-lg font-medium">
                      Sport
                    </Link>
                    <Link to="/shop" className="text-lg font-medium">
                      Shop
                    </Link>
                    <Link to="/cart" className="text-lg font-medium">
                      Cart
                    </Link>
                    <Link to="/news" className="text-lg font-medium">
                      News
                    </Link>
                    <Link to="/about" className="text-lg font-medium">
                      About Us
                    </Link>
                    <Link to="/contact" className="text-lg font-medium">
                      Contact Us
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="pb-4">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full max-w-md mx-auto"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
