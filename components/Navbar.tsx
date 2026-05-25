export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-black/30 border-b border-white/10 transition-all duration-300">

      <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white flex items-center gap-2">
  Construcciones Martinez

  <div className="flex items-center gap-1">
    <img src="/arg bandera.png" alt="Argentina" className="w-5 h-5 rounded-full" />
    <img src="/can bandera.png" alt="Canarias" className="w-5 h-5 rounded-full" />
  </div>
</h1>

      <div className="hidden md:flex gap-10 text-sm uppercase tracking-widest text-white items-center">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">¿Quienes Somos?</a>
        <a href="#quehacemos">¿Qué hacemos?</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>

<a href="tel:611 543 322" className="text-yellow-400 hover:text-yellow-300">
  📞 611 543 322
</a>

<a href="mailto:construccionesrubenm@gmail.com" className="text-gray-300 hover:text-white">
  ✉️ construccionesrubenm@gmail.com
</a>
      </div>

    </nav>
  );
}