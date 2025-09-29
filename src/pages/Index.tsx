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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-gaming-dark" />
              </div>
              <h1 className="text-2xl font-montserrat font-bold neon-text text-neon-cyan">whywxsrt</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-neon-cyan transition-colors">Главная</a>
              <a href="#streams" className="text-foreground hover:text-neon-pink transition-colors">Стримы</a>
              <a href="#donate" className="text-foreground hover:text-neon-green transition-colors">Донаты</a>
              <a href="#contact" className="text-foreground hover:text-neon-purple transition-colors">Контакты</a>
            </div>
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-gaming-dark font-bold neon-glow">
              <Icon name="Heart" size={16} className="mr-2" />
              Поддержать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 cyber-gradient opacity-20 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <Badge className="mb-4 bg-neon-green/20 text-neon-green border-neon-green/50">
                🔴 LIVE STREAMING
              </Badge>
              <h2 className="text-6xl md:text-8xl font-montserrat font-black mb-6 neon-text text-neon-cyan">
                WHYWXSRT
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                Топовый стример и киберспортсмен. Захватывающие стримы, профессиональный геймплей и незабываемые моменты
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-neon-cyan hover:bg-neon-cyan/80 text-gaming-dark font-bold neon-glow">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть стрим
                </Button>
                <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
                  <Icon name="Users" size={20} className="mr-2" />
                  Присоединиться
                </Button>
              </div>
            </div>
          </div>

          {/* Stream Preview */}
          <div className="gaming-card max-w-4xl mx-auto mb-16">
            <div className="aspect-video bg-gradient-to-br from-gaming-dark to-gaming-gray rounded-lg overflow-hidden relative">
              <img 
                src="/img/51dac160-0d4a-4bfb-99af-264c95df14a0.jpg" 
                alt="Gaming setup" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-neon-cyan mb-1">Киберспорт Arena</h3>
                    <p className="text-sm text-muted-foreground">Топовый геймплей и профессиональные матчи</p>
                  </div>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/50 animate-pulse">
                    🔴 LIVE
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="gaming-card text-center border-neon-cyan/30">
              <CardHeader className="pb-2">
                <Icon name="Users" size={32} className="mx-auto text-neon-cyan mb-2" />
                <CardTitle className="text-2xl font-montserrat text-neon-cyan neon-text">15.2K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Подписчиков</p>
              </CardContent>
            </Card>

            <Card className="gaming-card text-center border-neon-pink/30">
              <CardHeader className="pb-2">
                <Icon name="Clock" size={32} className="mx-auto text-neon-pink mb-2" />
                <CardTitle className="text-2xl font-montserrat text-neon-pink neon-text">1.8K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Часов стрима</p>
              </CardContent>
            </Card>

            <Card className="gaming-card text-center border-neon-green/30">
              <CardHeader className="pb-2">
                <Icon name="Trophy" size={32} className="mx-auto text-neon-green mb-2" />
                <CardTitle className="text-2xl font-montserrat text-neon-green neon-text">47</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Побед</p>
              </CardContent>
            </Card>

            <Card className="gaming-card text-center border-neon-purple/30">
              <CardHeader className="pb-2">
                <Icon name="Heart" size={32} className="mx-auto text-neon-purple mb-2" />
                <CardTitle className="text-2xl font-montserrat text-neon-purple neon-text">892</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Донатов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section id="streams" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 neon-text text-neon-pink">
              Расписание стримов
            </h2>
            <p className="text-lg text-muted-foreground">Не пропусти эпичные моменты</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="gaming-card border-neon-cyan/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50">
                    CS2
                  </Badge>
                  <span className="text-sm text-muted-foreground">Сегодня 20:00</span>
                </div>
                <CardTitle className="text-neon-cyan">Ранговые матчи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Поднимаем ранг до Global Elite. Профессиональная игра и тактики.
                </p>
                <Button size="sm" className="w-full bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/50">
                  Уведомить о начале
                </Button>
              </CardContent>
            </Card>

            <Card className="gaming-card border-neon-pink/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/50">
                    Valorant
                  </Badge>
                  <span className="text-sm text-muted-foreground">Завтра 19:00</span>
                </div>
                <CardTitle className="text-neon-pink">Турнир</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Участие в киберспортивном турнире. Командная игра на высшем уровне.
                </p>
                <Button size="sm" className="w-full bg-neon-pink/20 hover:bg-neon-pink/30 text-neon-pink border border-neon-pink/50">
                  Уведомить о начале
                </Button>
              </CardContent>
            </Card>

            <Card className="gaming-card border-neon-green/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-neon-green/20 text-neon-green border-neon-green/50">
                    Новинки
                  </Badge>
                  <span className="text-sm text-muted-foreground">Воскресенье 18:00</span>
                </div>
                <CardTitle className="text-neon-green">Обзор игр</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Первый взгляд на новые релизы. Честные обзоры и геймплей.
                </p>
                <Button size="sm" className="w-full bg-neon-green/20 hover:bg-neon-green/30 text-neon-green border border-neon-green/50">
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
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 neon-text text-neon-purple">
              Поддержать стримера
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Твоя поддержка помогает создавать качественный контент и улучшать стримы
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <Button className="bg-neon-green hover:bg-neon-green/80 text-gaming-dark font-bold neon-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">100₽</div>
                  <div className="text-xs opacity-80">Кофе</div>
                </div>
              </Button>
              <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-gaming-dark font-bold neon-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">500₽</div>
                  <div className="text-xs opacity-80">Поддержка</div>
                </div>
              </Button>
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-gaming-dark font-bold neon-glow h-16">
                <div className="text-center">
                  <div className="text-lg font-bold">1000₽</div>
                  <div className="text-xs opacity-80">Мега поддержка</div>
                </div>
              </Button>
            </div>

            <Card className="gaming-card border-neon-purple/30">
              <CardHeader>
                <CardTitle className="text-neon-purple">Последние донаты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-neon-cyan font-medium">GameMaster_777</span>
                  <span className="text-neon-green font-bold">500₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neon-cyan font-medium">ProGamer_2024</span>
                  <span className="text-neon-green font-bold">1000₽</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neon-cyan font-medium">StreamFan_99</span>
                  <span className="text-neon-green font-bold">250₽</span>
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
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4 neon-text text-neon-cyan">
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
            <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-pink rounded"></div>
            <h3 className="text-xl font-montserrat font-bold text-neon-cyan">whywxsrt</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 whywxsrt. Все права защищены. Создано для настоящих геймеров.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;