export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen">

      {/* Imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold">
          TU CASA ESTÁ CERCA
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Te ayudamos a construir tus sueños
        </p>

        <a
        href="https://wa.me/34611543322?text=Hola,%20quiero%20solicitar%20un%20presupuesto"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-block"
>
        Solicitar presupuesto
        </a>
      </div>

    </section>
  );
}