import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500">
            CYBER PC
          </span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/shop">
            <Button variant="ghost" className="hover:bg-white/10 transition-all">
              Магазин
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
