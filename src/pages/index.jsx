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
    </div>
  );
}
