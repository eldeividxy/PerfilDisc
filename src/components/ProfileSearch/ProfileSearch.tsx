// src/components/ProfileSearch/ProfileSearch.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileLinks from '../../data/profileLinks.json';
import profilesData from '../../data/profiles.json';
import './ProfileSearch.css';

interface Profile {
  code: string;
  name: string;
}

const ProfileSearch: React.FC = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [searchCode, setSearchCode] = useState('');
  const [foundProfile, setFoundProfile] = useState<{ name: string; link: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mappedProfiles = profilesData.map(item => ({
      code: item.Segmento.toString().trim(),
      name: item["Patron de perfil"].trim()
    }));
    setProfiles(mappedProfiles);
  }, []);

  const handleSearch = () => {
    const normalizedCode = searchCode.padStart(4, '0');
    const profile = profiles.find(p => 
      p.code === normalizedCode || 
      p.code === searchCode
    );
    if (profile) {
      setFoundProfile({
        name: profile.name,
        link: profileLinks[profile.name as keyof typeof profileLinks] || '#'
      });
    } else {
      setFoundProfile(null);
    }
  };

  return (
    <div className="profile-search-container">
      <div className="search-box">
        <input
          type="number"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value.slice(0, 4))}
          placeholder="Ingresa tu código de 4 dígitos"
        />
        <button onClick={handleSearch}>Buscar Perfil</button>
      </div>
      {foundProfile ? (
        <div className="profile-result">
          <h3>Perfil: {foundProfile.name}</h3>
          <a href={foundProfile.link} target="_blank" rel="noopener noreferrer">
            Ver análisis completo
          </a>
        </div>
      ) : (
        searchCode.length === 4 && <p className="error"></p>
      )}
      <div className="profile-footer">
        <button onClick={() => navigate('/')}>Volver a la Página de Inicio</button>
      </div>
    </div>
  );
};

export default ProfileSearch;
