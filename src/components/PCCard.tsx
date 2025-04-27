import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface PCProps {
  id: number;
  name: string;
  description: string;
  price: number;
  specs: string[];
  imageUrl: string;
}

const PCCard = ({ name, description, price, specs, imageUrl }: PCProps) => {
  return (
    <Card className="overflow-hidden backdrop-blur-sm bg-black/40 border border-white/10 pulse-rgb">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-1 h-1 rounded-full bg-purple-500 mr-2"></div>
              {spec}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-lg font-bold text-white">
          {price.toLocaleString()} ₽
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
          Купить
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PCCard;
