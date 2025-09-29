import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-md bg-background/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="avatar-ring">
                <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">W</span>
                </div>
              </div>
              <h1 className="text-2xl font-montserrat font-bold text-foreground">whywxsrt</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#streams" className="text-foreground hover:text-primary transition-colors">Стримы</a>
              <a href="#donate" className="text-foreground hover:text-accent transition-colors">Донаты</a>
              <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold soft-glow">
              <Icon name="Heart" size={16} className="mr-2" />
              Поддержать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 live-indicator">
                🔴 LIVE ON TWITCH
              </Badge>
              <h2 className="text-5xl md:text-7xl font-montserrat font-black mb-6 text-foreground">
                whywxsrt
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
                IRL стримы, общение с чатом и живые эмоции. Присоединяйся к нашему комьюнити!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold soft-glow">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть на Twitch
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в чат
                </Button>
              </div>
            </div>

            {/* Right side - Profile photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 modern-gradient opacity-20 blur-3xl rounded-full"></div>
                <div className="relative z-10 avatar-ring p-2">
                  <img 
                    src="https://cdn.poehali.dev/files/db0b37ae-26d2-4e8b-83a9-c5ab99da7aeb.jpg" 
                    alt="whywxsrt" 
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full bg-card"
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-background animate-pulse"></div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="stream-card text-center border-primary/30">
              <CardHeader className="pb-2">
                <Icon name="Users" size={32} className="mx-auto text-primary mb-2" />
                <CardTitle className="text-2xl font-montserrat text-primary">8.5K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Подписчиков</p>
              </CardContent>
            </Card>

            <Card className="stream-card text-center border-accent/30">
              <CardHeader className="pb-2">
                <Icon name="Clock" size={32} className="mx-auto text-accent mb-2" />
                <CardTitle className="text-2xl font-montserrat text-accent">420</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Часов стрима</p>
              </CardContent>
            </Card>

            <Card className="stream-card text-center border-stream-green/30">
              <CardHeader className="pb-2">
                <Icon name="MessageSquare" size={32} className="mx-auto text-stream-green mb-2" />
                <CardTitle className="text-2xl font-montserrat text-stream-green">15.2K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Сообщений в чате</p>
              </CardContent>
            </Card>

            <Card className="stream-card text-center border-stream-red/30">
              <CardHeader className="pb-2">
                <Icon name="Heart" size={32} className="mx-auto text-stream-red mb-2" />
                <CardTitle className="text-2xl font-montserrat text-stream-red">2.1K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Лайков</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 stream-text text-stream-pink">
              Расписание стримов
            </h2>
            <p className="text-lg text-muted-foreground">Не пропусти интересные моменты из жизни</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="stream-card border-stream-cyan/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-stream-cyan/20 text-stream-cyan border-stream-cyan/50">
                    IRL
                  </Badge>
                  <span className="text-sm text-muted-foreground">Сегодня 20:00</span>
                </div>
                <CardTitle className="text-stream-cyan">Прогулка по городу</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Исследуем новые места в городе. Общение с чатом и живые эмоции.
                </p>
                <Button size="sm" className="w-full bg-stream-cyan/20 hover:bg-stream-cyan/30 text-stream-cyan border border-stream-cyan/50">
                  Уведомить о начале
                </Button>
              </CardContent>
            </Card>

            <Card className="stream-card border-stream-pink/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-stream-pink/20 text-stream-pink border-stream-pink/50">
                    Кулинария
                  </Badge>
                  <span className="text-sm text-muted-foreground">Завтра 19:00</span>
                </div>
                <CardTitle className="text-stream-pink">Готовим вместе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Готовим новое блюдо вместе с чатом. Делимся рецептами и секретами.
                </p>
                <Button size="sm" className="w-full bg-stream-pink/20 hover:bg-stream-pink/30 text-stream-pink border border-stream-pink/50">
                  Уведомить о начале
                </Button>
              </CardContent>
            </Card>

            <Card className="stream-card border-stream-green/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-stream-green/20 text-stream-green border-stream-green/50">
                    Влоги
                  </Badge>
                  <span className="text-sm text-muted-foreground">Воскресенье 18:00</span>
                </div>
                <CardTitle className="text-stream-green">День из жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Покажу как проходит мой обычный день. Делюсь планами и мыслями.
                </p>
                <Button size="sm" className="w-full bg-stream-green/20 hover:bg-stream-green/30 text-stream-green border border-stream-green/50">
                  Уведомить о начале
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 stream-text text-stream-purple">
              Поддержать стримера
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Твоя поддержка помогает создавать качественный контент и улучшать стримы
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Button className="bg-stream-green hover:bg-stream-green/80 text-background font-bold stream-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">100₽</div>
                  <div className="text-xs opacity-80">Кофе</div>
                </div>
              </Button>
              <Button className="bg-stream-cyan hover:bg-stream-cyan/80 text-background font-bold stream-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">500₽</div>
                  <div className="text-xs opacity-80">Поддержка</div>
                </div>
              </Button>
              <Button className="bg-stream-pink hover:bg-stream-pink/80 text-background font-bold stream-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">1000₽</div>
                  <div className="text-xs opacity-80">Мега поддержка</div>
                </div>
              </Button>
            </div>

            <Card className="stream-card border-stream-purple/30">
              <CardHeader>
                <CardTitle className="text-stream-purple">Последние донаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-stream-cyan font-medium">StreamViewer_777</span>
                  <span className="text-stream-green font-bold">500₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stream-cyan font-medium">LiveFan_2024</span>
                  <span className="text-stream-green font-bold">1000₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stream-cyan font-medium">ChatSupporter_99</span>
                  <span className="text-stream-green font-bold">250₽</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 stream-text text-stream-cyan">
              Связаться со мной
            </h2>
            <p className="text-lg text-muted-foreground">Реклама, коллаборации, предложения</p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4">
              <Icon name="Hash" size={20} className="mr-2" />
              Discord
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4">
              <Icon name="Play" size={20} className="mr-2" />
              YouTube
            </Button>
            <Button className="w-full bg-purple-800 hover:bg-purple-900 text-white font-bold py-4">
              <Icon name="Twitch" size={20} className="mr-2" fallback="Video" />
              Twitch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-stream-cyan to-stream-pink rounded"></div>
            <h3 className="text-xl font-montserrat font-bold text-stream-cyan">whywxsrt</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 whywxsrt. Все права защищены. Создано для любителей живого контента.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;