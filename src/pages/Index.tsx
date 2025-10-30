import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const tours = [
    {
      id: 1,
      title: 'Путешествие по Европе',
      location: 'Франция, Италия, Испания',
      duration: '14 дней',
      price: '120 000 ₽',
      rating: 4.9,
      image: 'https://cdn.poehali.dev/projects/02d2ba95-2579-4a49-9bf9-1c84eb6da19d/files/1e6da5b3-80a6-4f4d-84a7-d388d16c7d56.jpg',
      type: 'Культурный тур'
    },
    {
      id: 2,
      title: 'Экзотика Бали',
      location: 'Индонезия',
      duration: '10 дней',
      price: '95 000 ₽',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      type: 'Пляжный отдых'
    },
    {
      id: 3,
      title: 'Сафари в Африке',
      location: 'Кения, Танзания',
      duration: '7 дней',
      price: '150 000 ₽',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801',
      type: 'Приключения'
    },
    {
      id: 4,
      title: 'Горные вершины',
      location: 'Швейцария',
      duration: '5 дней',
      price: '85 000 ₽',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
      type: 'Активный отдых'
    }
  ];

  const gazetteArticles = [
    {
      id: 1,
      title: 'Скрытые жемчужины Азии',
      excerpt: 'Откройте для себя места, о которых не знают туристы',
      date: '15 октября 2024',
      category: 'Путеводители'
    },
    {
      id: 2,
      title: 'Эко-туризм: путешествуй ответственно',
      excerpt: 'Как сохранить природу во время путешествий',
      date: '12 октября 2024',
      category: 'Тренды'
    },
    {
      id: 3,
      title: 'Топ-10 городов для удаленной работы',
      excerpt: 'Работай из райских уголков планеты',
      date: '8 октября 2024',
      category: 'Советы'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TourTales
              </h1>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#tours" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors story-link">
                  Туры
                </a>
                <a href="#hotels" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors story-link">
                  Отели
                </a>
                <a href="#gazette" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors story-link">
                  The Route Gazette
                </a>
                <a href="#checkpoint" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors story-link">
                  Checkpoint
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Globe" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/02d2ba95-2579-4a49-9bf9-1c84eb6da19d/files/e3096208-62ab-46e8-8ce5-9f30a997f970.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Открой мир.<br />Остальное — мы возьмём на себя.
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Туры, отели, путеводители и вдохновение — всё в одном месте
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white shadow-lg hover-scale">
              <Icon name="Compass" size={20} className="mr-2" />
              Найти тур
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover-scale">
              <Icon name="Newspaper" size={20} className="mr-2" />
              Читать газету
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover-scale">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть Checkpoint
            </Button>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Туры и Экскурсии</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Подберём идеальное путешествие для вас
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Куда хотите поехать?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 rounded-2xl border-gray-200"
                />
              </div>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="h-12 rounded-2xl border-gray-200">
                  <SelectValue placeholder="Выберите страну" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="europe">Европа</SelectItem>
                  <SelectItem value="asia">Азия</SelectItem>
                  <SelectItem value="africa">Африка</SelectItem>
                  <SelectItem value="america">Америка</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-12 rounded-2xl bg-primary hover:bg-primary/90 text-white">
                <Icon name="Search" size={20} className="mr-2" />
                Найти
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour, index) => (
              <Card 
                key={tour.id} 
                className="overflow-hidden rounded-3xl border-0 shadow-lg hover-scale cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-primary hover:bg-white rounded-full">
                    {tour.type}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{tour.location}</span>
                  </div>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      {tour.rating}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">от</div>
                    <div className="text-2xl font-bold text-primary">{tour.price}</div>
                  </div>
                  <Button className="rounded-full">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Показать все туры
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="checkpoint" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <Badge className="bg-white/20 text-white mb-4 rounded-full">
                  🎬 Новое шоу
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Шоу Checkpoint
                </h2>
                <p className="text-xl mb-6 text-white/90">
                  Твой взгляд на мир изнутри
                </p>
                <p className="text-lg mb-8 text-white/80">
                  Смотри выпуски о самых неожиданных маршрутах и людях, которые делают путешествия особенными.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                    <Icon name="PlayCircle" size={20} className="mr-2" />
                    Смотреть все выпуски
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                    Подробнее о шоу
                  </Button>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" 
                    alt="Checkpoint Show"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors cursor-pointer">
                    <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover-scale">
                      <Icon name="Play" size={32} className="text-primary ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gazette" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 rounded-full">
              📰 The Route Gazette
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Газета путешественников</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Истории, советы и вдохновение для ваших приключений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {gazetteArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="rounded-3xl border-0 shadow-lg hover-scale cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 rounded-full">{article.category}</Badge>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </span>
                  <Button variant="ghost" size="sm" className="rounded-full">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-secondary to-primary rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-4 leading-relaxed">
              "Путешествия — это единственная покупка, которая делает нас богаче."
            </blockquote>
            <cite className="text-white/80">— Неизвестный путешественник</cite>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                TourTales
              </h3>
              <p className="text-gray-400 mb-4">
                Живая платформа для путешественников, журналистов и мечтателей.
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Путешествия</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors story-link">Туры</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Экскурсии</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Отели</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Путеводители</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контент</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors story-link">The Route Gazette</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Шоу Checkpoint</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Штампотерапия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">О проекте</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors story-link">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Партнёрство</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors story-link">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 TourTales. Все права защищены. Создано с любовью к путешествиям. ✈️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
