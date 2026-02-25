import { env } from '@/types/env';
import { SiFacebook, SiInstagram } from '@icons-pack/react-simple-icons';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] px-6 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-6">
          <h3 className="font-light text-2xl tracking-wider">
            Psicóloga&nbsp;
            <span className="font-medium text-brand">Leticia Brito</span>
          </h3>

          <p className="max-w-xs font-light text-gray-400 leading-relaxed">
            Psicoterapia Psicanalítica para crianças, adolescentes e adultos.
          </p>

          <p className="max-w-xs font-light text-gray-400 leading-relaxed">
            Atendimento presencial e online, no Brasil e para brasileiros no
            exterior.
          </p>

          <p className="max-w-xs font-light text-gray-400 leading-relaxed">
            Um espaço de escuta e transformação emocional.
          </p>

          <div className="flex gap-4">
            <a
              href={env.PUBLIC_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-brand active:bg-brand"
            >
              <SiInstagram size={20} />
            </a>
            <a
              href={env.PUBLIC_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-brand active:bg-brand"
            >
              <SiFacebook size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-lg">Localização</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-gray-400 transition-colors hover:text-white">
              <MapPin size={20} className="mt-1 shrink-0 text-brand" />
              <p className="font-light">{env.PUBLIC_ADDRESS}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-medium text-lg">Contato</h4>
          <div className="space-y-4">
            <a
              href={`https://wa.me/${env.PUBLIC_WHATSAPP_NUMBER}?text=Olá%2C%20eu%20vim%20pelo%20site`}
              className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} className="text-brand" />
              <p className="font-light">WhatsApp Business</p>
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <Mail size={20} className="text-brand" />
              <a
                href={`mailto:${env.PUBLIC_EMAIL}`}
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {env.PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 flex flex-col items-center justify-between gap-4 border-white/10 border-t pt-8 font-light text-gray-500 text-sm md:flex-row">
        <p>
          © {currentYear} Psicóloga Leticia Brito. Todos os direitos reservados.
        </p>
        <p>CRP 12/30305</p>
      </div>
    </footer>
  );
}
