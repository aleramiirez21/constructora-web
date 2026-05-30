export default function Projects() {
  const fotos = [
    "/proyectos/foto1.jpeg",
    "/proyectos/foto2.jpeg",
    "/proyectos/foto3.jpeg",
    "/proyectos/foto4.jpeg",
    "/proyectos/foto5.jpeg",
    "/proyectos/foto6.jpeg",
    "/proyectos/foto7.jpeg",
  ];

  return (
    <section
      id="proyectos"
      className="py-32 px-8 bg-white text-black border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestros Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fotos.map((foto, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={foto}
                alt={`Proyecto ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}