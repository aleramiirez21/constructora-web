export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-8 bg-gray-100 text-black text-center">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contacta con Construcciones Martinez
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Pide tu presupuesto sin compromiso. Te respondemos rápido.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <a
            href="tel:611 543 322"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition"
          >
            📞 Llamar ahora
          </a>

          <a
            href="construccionesrubenm@gmail.com"
            className="border border-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition"
          >
            ✉️ Enviar email
          </a>

          <a
            href="https://wa.me/34611543322"
            target="_blank"
            className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}