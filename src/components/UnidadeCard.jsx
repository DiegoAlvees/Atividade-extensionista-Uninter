import { MapPin, Phone, Navigation } from "lucide-react";

export default function UnidadeCard({ unidade }) {
  const enderecoCompleto =
    `${unidade.logradouro}, ${unidade.numero}, ${unidade.bairro}, Artur Nogueira - SP`;

  const mapsUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      enderecoCompleto
    )}`;

  return (
    <div className="card">
      <h3>{unidade.nome}</h3>

      <p>
        <MapPin size={18} />
        {enderecoCompleto}
      </p>

      <p>
        CEP: {unidade.cep}
      </p>

      <p>
        <Phone size={18} />
        {unidade.telefone}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-mapa"
      >
        <Navigation size={18} />
        Ver no Google Maps
      </a>
    </div>
  );
}