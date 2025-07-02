import React from 'react';
import { FaLightbulb, FaPaintBrush, FaRunning, FaUsersCog, FaClipboardList, FaTools, FaBolt, FaHome } from 'react-icons/fa';
import '../App.css';

const habilidades = [
  { id: 1, icon: <FaLightbulb />, titulo: 'Diagnóstico e solução de problemas' },
  { id: 2, icon: <FaPaintBrush />, titulo: 'Conhecimento técnico multidisciplinar' },
  { id: 3, icon: <FaRunning />, titulo: 'Organização e responsabilidade' },
  { id: 4, icon: <FaUsersCog />, titulo: 'Capacidade de trabalho em equipe e comunicação' },
  { id: 5, icon: <FaClipboardList />, titulo: 'Conhecimento em normas e boas práticas de manutenção' },
  { id: 6, icon: <FaTools />, titulo: 'Experiência com ferramentas e equipamentos específicos' },
  { id: 7, icon: <FaBolt />, titulo: 'Resistência física e boa condição de saúde' },
  { id: 8, icon: <FaHome />, titulo: 'Leitura e interpretação de plantas e esquemas' },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="habilidades">
      <div className="habilidades-container">
        <h2>Habilidades</h2>
        <p>Algumas das minhas habilidades são:</p>
      </div>
      <div className="habilidades-background">
        <div className="habilidades-grid">
          {habilidades.map((hab) => (
            <div key={hab.id} className="habilidade-card">
              <span className="habilidade-icon">{hab.icon}</span>
              <p>{hab.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
