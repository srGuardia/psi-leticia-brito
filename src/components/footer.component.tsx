import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] px-6 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-6">
          <h3 className="font-light text-2xl tracking-wider">
            Leticia <span className="font-medium text-brand">Brito</span>
          </h3>
          <p className="max-w-xs font-light text-gray-400 leading-relaxed">
            Psicoterapia Psicanalítica para adolescentes e adultos. Um espaço de
            escuta e transformação em busca do seu bem-estar emocional.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/psi.leticiabrito/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-brand"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-lg">Localização</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-400 transition-colors hover:text-white">
              <MapPin size={20} className="mt-1 shrink-0 text-brand" />
              <p className="font-light">
                Pedra Branca, Cidade Universitária
                <br />
                Palhoça, SC - 88132-599
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-lg">Contato</h4>
          <div className="space-y-4">
            <a
              href={`https://wa.me/${import.meta.env.PUBLIC_WHATSAPP_NUMBER}`}
              className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
            >
              <Phone size={20} className="text-brand" />
              <p className="font-light">WhatsApp Business</p>
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={20} className="text-brand" />
              <p className="font-light">le.brito_martins@hotmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 flex flex-col items-center justify-between gap-4 border-white/10 border-t pt-8 font-light text-gray-500 text-sm md:flex-row">
        <p>© {currentYear} Leticia Brito. Todos os direitos reservados.</p>
        <p>CRP 12/30305</p>
      </div>
    </footer>
  );
}
