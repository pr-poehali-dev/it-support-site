import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchMessages();
    } else {
      setIsLoading(false);
    }
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/3c579f7e-e046-43fe-93aa-85e8c4d5277f');
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error('Ошибка загрузки сообщений:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === 'admin' && password === 'b1413331051') {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setError('');
      fetchMessages();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    setLogin('');
    setPassword('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить это сообщение?')) return;
    
    try {
      const response = await fetch(
        `https://functions.poehali.dev/a6b29ddf-fa2b-4618-bf89-d73d5bfdd3ac?id=${id}`,
        { method: 'DELETE' }
      );
      
      if (response.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
      } else {
        alert('Ошибка при удалении');
      }
    } catch (error) {
      alert('Ошибка при удалении');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-md border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Вход в админ-панель</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Логин"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="bg-background"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background"
                  required
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Сообщения из формы обратной связи</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-border">
            <Icon name="LogOut" size={18} className="mr-2" />
            Выйти
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Загрузка...</p>
          </div>
        ) : messages.length === 0 ? (
          <Card className="border-border bg-card">
            <CardContent className="py-12 text-center">
              <Icon name="Inbox" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Сообщений пока нет</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <Card key={msg.id} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{msg.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formatDate(msg.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">#{msg.id}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(msg.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Icon name="Trash2" size={18} />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-muted-foreground" />
                    <a href={`mailto:${msg.email}`} className="text-primary hover:underline">
                      {msg.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                    <a href={`tel:${msg.phone}`} className="text-primary hover:underline">
                      {msg.phone}
                    </a>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium mb-2 text-muted-foreground">Сообщение:</p>
                    <p className="whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;