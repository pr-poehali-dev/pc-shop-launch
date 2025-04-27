import Navbar from "@/components/Navbar";
import PCCard from "@/components/PCCard";
import { Button } from "@/components/ui/button";

const featuredPCs = [
  {
    id: 1,
    name: "Cyber Beast X",
    description: "Мощный игровой ПК с RGB подсветкой",
    price: 159990,
    specs: [
      "Intel Core i9-13900K",
      "NVIDIA RTX 4090 24GB",
      "32GB DDR5 5600MHz",
      "2TB NVMe SSD"
    ],
    imageUrl: "https://images.unsplash.com/photo-1623126464548-3a88736198a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    name: "Elite Gaming Pro",
    description: "Оптимальное соотношение цены и производительности",
    price: 99990,
    specs: [
      "AMD Ryzen 9 7900X",
      "NVIDIA RTX 4070 Ti 12GB",
      "32GB DDR5 5200MHz",
      "1TB NVMe SSD"
    ],
    imageUrl: "https://images.unsplash.com/photo-1548083718-5bdd3d8e887d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    name: "Streamer Dream",
    description: "Идеальный ПК для стримеров и контент-мейкеров",
    price: 129990,
    specs: [
      "AMD Ryzen 9 7950X",
      "NVIDIA RTX 4080 16GB",
      "64GB DDR5 5600MHz",
      "4TB NVMe SSD"
    ],
    imageUrl: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen blurred-bg rgb-glow">
      <Navbar />
      
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
              Игровые ПК с мощной производительностью
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Эксклюзивные компьютеры с RGB подсветкой, собранные специально для вас
            </p>
            <div className="flex justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-lg py-6 px-8">
                Выбрать компьютер
              </Button>
            </div>
          </div>
          
          <div className="mt-24 mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Популярные модели
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPCs.map((pc) => (
                <PCCard key={pc.id} {...pc} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
                Смотреть все компьютеры
              </Button>
            </div>
          </div>
          
          <div className="mt-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl filter blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-black/40 rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                    Индивидуальная сборка
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Не нашли подходящую конфигурацию? Мы соберем компьютер по вашим требованиям с учетом бюджета и предпочтений.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
                    Собрать свой ПК
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1624705013726-8cb4f9145a16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Custom PC Build" 
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="border-t border-white/10 backdrop-blur-md bg-black/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500">
                CYBER PC
              </span>
              <p className="text-sm text-gray-400 mt-1">© 2025 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                VK
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
