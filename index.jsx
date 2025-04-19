import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function EstrellasLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-gold p-4">
      <header className="text-center py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-wide text-gold"
        >
          Estrellas
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300">
          Живий супровід популярної музики на скрипці для ваших подій
        </p>
        <p className="italic text-zinc-400 mt-2">
          "Музика, яка підкреслює моменти"
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">🎻 Репертуар</h2>
            <p className="text-zinc-300">
              Сучасна поп-музика, саундтреки з кіно та серіалів, легка класика.
              Гнучкий вибір під атмосферу заходу.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">💍 Події</h2>
            <p className="text-zinc-300">
              Весілля, корпоративи, дні народження, хрестини, камерні вечері.
              Де музика — там і ми.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">💰 Вартість</h2>
            <p className="text-zinc-300">
              1 година виступу — <strong>3000 грн</strong>.<br />
              Кожна наступна година — <strong>1000 грн</strong>.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">📸 Галерея</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            src="/images/estrellas1.jpg"
            alt="Виступ Estrellas"
            className="rounded-xl shadow-md"
          />
          <img
            src="/images/estrellas2.jpg"
            alt="Скрипковий дует"
            className="rounded-xl shadow-md"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">🎬 Відео</h2>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Estrellas live"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">📩 Залишити заявку</h2>
        <form action="#" method="POST" className="space-y-4 text-zinc-200">
          <input type="text" placeholder="Ваше ім'я" className="w-full p-3 rounded bg-zinc-800" required />
          <input type="tel" placeholder="Номер телефону" className="w-full p-3 rounded bg-zinc-800" required />
          <textarea placeholder="Коментар або дата події" className="w-full p-3 rounded bg-zinc-800" rows={4}></textarea>
          <Button type="submit" className="bg-gold text-black hover:bg-yellow-400">Надіслати</Button>
        </form>
      </section>

      <footer className="text-center text-zinc-400 border-t border-zinc-700 pt-6 pb-10">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://instagram.com/violins_estrellas" target="_blank" className="flex items-center gap-2 hover:text-gold">
            <Instagram /> violins_estrellas
          </a>
          <a href="tel:+380977827009" className="flex items-center gap-2 hover:text-gold">
            <Phone /> +38 (097) 782 70 09
          </a>
        </div>
        <p className="text-sm">© Estrellas – Музика, яка підкреслює моменти</p>
      </footer>
    </div>
  );
}
