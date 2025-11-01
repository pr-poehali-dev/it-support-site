import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const services = [
    {
      icon: "Headphones",
      title: "Техподдержка 24/7",
      description:
        "Круглосуточная поддержка пользователей, решение инцидентов, удалённая помощь",
    },
    {
      icon: "Cloud",
      title: "IT-аутсорсинг",
      description:
        "Полное обслуживание IT-инфраструктуры, администрирование серверов и систем",
    },
    {
      icon: "Network",
      title: "Настройка сетей",
      description:
        "Проектирование и настройка корпоративных сетей, VPN, защищённые каналы",
    },
    {
      icon: "Server",
      title: "Настройка сервисов",
      description:
        "Развёртывание и конфигурация бизнес-приложений, CRM, ERP систем",
    },
    {
      icon: "Mail",
      title: "Настройка почты",
      description:
        "Корпоративная почта, защита от спама, интеграция с Outlook и другими клиентами",
    },
    {
      icon: "Shield",
      title: "Информационная безопасность",
      description:
        "Аудит безопасности, антивирусная защита, резервное копирование данных",
    },
  ];

  const plans = [
    {
      id: "basic",
      name: "Базовый",
      price: "15 000",
      period: "месяц",
      features: [
        "Техподдержка 8/5",
        "До 10 рабочих станций",
        "Базовое обслуживание сети",
        "Email поддержка",
        "Ежемесячный отчёт",
      ],
    },
    {
      id: "pro",
      name: "Профессиональный",
      price: "35 000",
      period: "месяц",
      features: [
        "Техподдержка 24/7",
        "До 50 рабочих станций",
        "Полное обслуживание IT",
        "Приоритетная поддержка",
        "Выезд специалиста",
        "Резервное копирование",
      ],
      popular: true,
    },
    {
      id: "enterprise",
      name: "Корпоративный",
      price: "По запросу",
      period: "",
      features: [
        "Безлимитная поддержка 24/7",
        "Неограниченно станций",
        "Выделенная команда",
        "Персональный менеджер",
        "SLA гарантии",
        "Индивидуальные решения",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">TechSupport Pro</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              Тарифы
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Контакты
            </a>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={() => navigate('/admin')} 
              variant="outline" 
              size="icon"
              className="border-border"
            >
              <Icon name="Shield" size={18} />
            </Button>
            <Button onClick={() => setIsContactDialogOpen(true)} className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              IT-поддержка нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Аутсорсинг IT-инфраструктуры, настройка сетей и сервисов,
              круглосуточная техподдержка для вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow"
              >
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать сейчас
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Клиентов</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div
              className="animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-4xl font-bold text-secondary mb-2">
                15 мин
              </div>
              <div className="text-muted-foreground">Реакция</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексные IT-решения для бизнеса любого масштаба
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon
                      name={service.icon as any}
                      className="text-primary"
                      size={28}
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда опытных IT-специалистов, которая помогает бизнесу
                сосредоточиться на развитии, беря на себя всю техническую
                инфраструктуру.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2015 года мы предоставляем услуги IT-аутсорсинга, техподдержки
                и настройки корпоративных систем. Наша миссия — делать
                технологии простыми и доступными.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <Icon name="Users" className="text-primary mb-2" size={32} />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">
                    Специалистов
                  </div>
                </div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <Icon
                    name="Award"
                    className="text-secondary mb-2"
                    size={32}
                  />
                  <div className="text-2xl font-bold mb-1">8 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div className="flex-1 p-4 bg-card rounded-lg border border-border">
                  <Icon name="Target" className="text-primary mb-2" size={32} />
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">SLA</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 p-8 flex items-center justify-center">
                <Icon name="Cpu" size={200} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Тарифные планы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выберите оптимальный план для вашего бизнеса
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/20"
                    : ""
                } ${selectedPlan === plan.id ? "ring-2 ring-primary" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">
                        ₽/{plan.period}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          className="text-primary mt-1"
                          size={18}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-muted-foreground">
              Готовы улучшить вашу IT-инфраструктуру? Напишите нам!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);
                    setSubmitMessage("");

                    try {
                      const response = await fetch(
                        "https://functions.poehali.dev/89f15840-23b4-494a-9914-0d335e5988ba",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(formData),
                        },
                      );

                      if (response.ok) {
                        setSubmitMessage("Сообщение успешно отправлено!");
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          message: "",
                        });
                      } else {
                        setSubmitMessage(
                          "Ошибка при отправке. Попробуйте позже.",
                        );
                      }
                    } catch (error) {
                      setSubmitMessage(
                        "Ошибка при отправке. Попробуйте позже.",
                      );
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-background"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-background"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон"
                      className="bg-background"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      rows={4}
                      className="bg-background"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  {submitMessage && (
                    <div
                      className={`text-sm ${submitMessage.includes("успешно") ? "text-green-500" : "text-red-500"}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    <Icon name="Send" size={18} className="mr-2" />
                    {isSubmitting ? "Отправка..." : "Отправить"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        Москва, ул. Каргопольская, д. 14к2
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">
                        +7 (996) 362-43-75
                      </p>
                      <p className="text-muted-foreground">
                        +7 (996) 365-73-13
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@out-sorting.ru
                      </p>
                      <p className="text-muted-foreground">
                        support@out-sorting.ru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Свяжитесь с нами</DialogTitle>
            <DialogDescription>
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="border-border bg-card/50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Телефон</h3>
                      <p className="text-sm text-muted-foreground">
                        +7 (996) 362-43-75
                      </p>
                      <p className="text-sm text-muted-foreground">
                        +7 (996) 365-73-13
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardContent className="pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">
                        info@out-sorting.ru
                      </p>
                      <p className="text-sm text-muted-foreground">
                        support@out-sorting.ru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-border bg-card/50">
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Адрес</h3>
                    <p className="text-sm text-muted-foreground">
                      Москва, ул. Каргопольская, д. 14к2
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="border-t border-border pt-4">
              <h3 className="font-semibold mb-4">Форма обратной связи</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
                {submitMessage && (
                  <p className="text-sm text-center text-muted-foreground">
                    {submitMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
                <span className="font-bold text-lg">TechSupport Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональные IT-услуги для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Техподдержка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Аутсорсинг
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Настройка сетей
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-border hover:border-primary hover:text-primary"
                >
                  <Icon name="Facebook" size={18} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-border hover:border-primary hover:text-primary"
                >
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-border hover:border-primary hover:text-primary"
                >
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 TechSupport Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;