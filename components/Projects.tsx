export default function Projects() {
  return (
    <section
      id="proyectos"
      className="py-32 px-8 bg-white text-black border-t border-gray-200"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestros Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Proyecto 1 */}
          <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Reformas generales
              </h3>

              <p className="text-gray-600">
                Trabajos de reforma y renovación en viviendas y locales.
              </p>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070&auto=format&fit=crop"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Construcción y obra
              </h3>

              <p className="text-gray-600">
                Obras realizadas con materiales de calidad y acabados profesionales.
              </p>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2070&auto=format&fit=crop"
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold">
                Trabajos exteriores
              </h3>

              <p className="text-gray-600">
                Reformas exteriores y mejoras estructurales adaptadas a cada proyecto.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}