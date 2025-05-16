// src/components/WorkshopInfo/WorkshopInfo.tsx
import React from 'react';
import './WorkshopInfo.css';

const WorkshopInfo: React.FC = () => {
  return (
    <div className="workshop-info">
      {/* Información general del Workshop */}
      <section className="introduction">
        <h2>WorkShop de Perfiles DiSC</h2>
        <h3>Mtro. Jesús Antonio Gaxiola</h3>
        <p>Al finalizar la sesión, los participantes serán capaces de:</p>
        <ul>
          <li>Aprender un lenguaje (DiSC) que asistirá en el intercambio de información de conducta laboral.</li>
          <li>Encontrar un mejor entendimiento y apreciación de las preferencias de comunicación personales.</li>
          <li>Comprender y apreciar las diferencias de estilo de comportamiento entre los miembros de un equipo.</li>
          <li>Desarrollar estrategias personales y profesionales para interacciones efectivas.</li>
        </ul>
        <p>
          Podrás descargar el manual del curso en el siguiente enlace:{" "}
          <a 
            href="https://jesusgaxiola.com/workshop-de-perfiles-disc/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Descargar Manual
          </a>
        </p>
      </section>

      {/* Información del Test */}
      <section className="test">
        <h3>El Test</h3>
        <p>
          Aclaración: No es un examen. Realiza el test en:{" "}
          <a 
            href="https://tests.yaquivalley.mx" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://tests.yaquivalley.mx
          </a>
        </p>
      </section>

      {/* La descripción de los perfiles con botones */}
      <section className="profiles-description">
        <h3>La descripción de los perfiles</h3>
        <div className="profile-types">
          <button onClick={() => window.location.href = "https://jesusgaxiola.com/perfil-dominante/"}>
            Dominante
          </button>
          <button onClick={() => window.location.href = "https://jesusgaxiola.com/perfil-concienzudo/"}>
            Concienzudo o analítico
          </button>
          <button onClick={() => window.location.href = "https://jesusgaxiola.com/perfil-influyente/"}>
            Influyente
          </button>
          <button onClick={() => window.location.href = "https://jesusgaxiola.com/perfil-estable/"}>
            Estable
          </button>
        </div>
      </section>

      {/* Patrones clásicos con botones para cada perfil */}
      <section className="profiles-patterns">
        <div className="pattern-group">
          <h4>Patrones clásicos perfil Dominante:</h4>
          <div className="pattern-buttons">
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/resolutivo-2"}>
              Resolutivo
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/orientado-a-resultados-2"}>
              Orientado a resultados
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/alentador-2"}>
              Alentador
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/creativo-2"}>
              Creativo
            </button>
          </div>
        </div>

        <div className="pattern-group">
          <h4>Patrones clásicos perfil Concienzudo o Analítico:</h4>
          <div className="pattern-buttons">
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/objetivo-2"}>
              Objetivo
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/perfeccionista-2"}>
              Perfeccionista
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/profesional-2"}>
              Profesional
            </button>
          </div>
        </div>

        <div className="pattern-group">
          <h4>Patrones clásicos para el perfil Influyente:</h4>
          <div className="pattern-buttons">
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/promotor-2"}>
              Promotor
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/persuasivo-2"}>
              Persuasivo
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/consejero-2"}>
              Consejero
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/evaluador-2"}>
              Evaluador
            </button>
          </div>
        </div>

        <div className="pattern-group">
          <h4>Patrones clásicos para el perfil Estable:</h4>
          <div className="pattern-buttons">
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/especialista-2"}>
              Especialista
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/realizador-2"}>
              Realizador
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/agente-2"}>
              Agente
            </button>
            <button onClick={() => window.location.href = "https://jesusgaxiola.com/investigador-2"}>
              Investigador
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopInfo;
