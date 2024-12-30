import React, { useState } from 'react';
import './Accueill.css';
import a from '../assets/a.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.png';
import f from '../assets/f.png';
import j from '../assets/j.png';
import HelpBubble from './others/HelpBubble';
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="search-bar search-bar-full">
      <input type="text" placeholder="Paris" className="search-input" />
      <span className="icon">↔</span>
      <input type="text" placeholder="Lyon" className="search-input" />
      <input type="date" className="search-input date-picker" />
      <select className="search-input passenger-selector">
        <option>1 passager</option>
        <option>2 passagers</option>
        <option>3 passagers</option>
      </select>
      <button className="search-button">Rechercher</button>
    </div>
  );
};
const TripList = () => {
  const trips = [
    { id: 1, time: "00:20", duration: "4h40", arrival: "05:00", departure: "sousse", destination: "gafsa", driver: "Anouar", rating: 5.0, price: 60.89, image: a },
    { id: 2, time: "02:40", duration: "5h00", arrival: "07:40", departure: "mahdia", destination: "gabes", driver: "Madisson", rating: 5.0, price: 38.99, image: d },
    { id: 3, time: "03:10", duration: "5h10", arrival: "08:20", departure: "jandouba", destination: "tunis", driver: "Jack", rating: 5.0, price: null, status: "Complet", image: e },
    { id: 4, time: "05:00", duration: "4h50", arrival: "09:50", departure: "sidi bouzid", destination: "ain drahem", driver: "Augustin", rating: 4.8, price: 45.29, image: f },
    { id: 5, time: "05:30", duration: "4h40", arrival: "10:10", departure: "nabel", destination: "Mahdia", driver: "Maxime", rating: 4.7, price: 46.49, image: j },
  ];

  return (
    <div className="trip-list centered">
      {trips.map((trip) => (
        <Link to={`/trip/${trip.id}`} key={trip.id} className="trip-card-link">
          <div className="trip-card styled-trip-card">
            <div className="trip-card-header">
              <div className="trip-time">
                <span>{trip.time}</span>
                <span className="trip-duration"> - {trip.duration} - </span>
                <span>{trip.arrival}</span>
              </div>
              <div className="trip-route">
                <span>{trip.departure}</span>
                <span className="trip-arrow">→</span>
                <span>{trip.destination}</span>
              </div>
            </div>
            <div className="trip-card-body">
              <div className="trip-driver">
                <img src={trip.image} alt={`Driver ${trip.driver}`} className="driver-avatar" />
                <div className="driver-info">
                  <span className="driver-name">{trip.driver}</span>
                  <span className="driver-rating">★ {trip.rating}</span>
                </div>
              </div>
              <div className="trip-price">
                {trip.price ? (
                  <span className="price">{trip.price} €</span>
                ) : (
                  <span className="status">{trip.status}</span>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};


const Sidebar = () => {
  return (
    <aside className="beautiful-sidebar">
      <div className="sidebar-header">
        <h2>Planifiez votre trajet</h2>
        <p>Remplissez les informations ci-dessous pour réserver votre voyage.</p>
      </div>
      <form className="sidebar-form">
        <div className="form-group">
          <label htmlFor="from">Départ :</label>
          <select id="from" className="form-input">
            <option value="">Sélectionnez une ville</option>
            <option>Sousse</option>
            <option>Mahdia</option>
            <option>Tunis</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="to">Destination :</label>
          <select id="to" className="form-input">
            <option value="">Sélectionnez une destination</option>
            <option>Gafsa</option>
            <option>Gabes</option>
            <option>Ain Draham</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input type="date" id="date" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="places">Nombre de places :</label>
          <input type="number" id="places" className="form-input" placeholder="1 à 8" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description :</label>
          <textarea id="description" className="form-input" placeholder="Ajoutez une description..."></textarea>
        </div>
        <button type="submit" className="form-button">Réserver</button>
      </form>
    </aside>
  );
};




/*
const FilterSidebar = () => {
  const resetFilters = () => {
    const inputs = document.querySelectorAll('.filter-sidebar input');
    inputs.forEach(input => {
      if (input.type === 'checkbox' || input.type === 'radio') {
        input.checked = false;
      }
    });
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-header">
        <h3 className="filter-title">Trier par</h3>
        <button className="reset-button" onClick={resetFilters}>Supprimer</button>
      </div>
      <div className="filter-section">
        <div className="filter-option">
          <label>
            <input type="radio" name="sort" value="earliest" /> Départ le plus tôt
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="radio" name="sort" value="cheapest" /> Prix le plus bas
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="radio" name="sort" value="nearestStart" /> Proche du point de départ
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="radio" name="sort" value="nearestEnd" /> Proche du point d’arrivée
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="radio" name="sort" value="shortest" /> Trajet le plus court
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Heure de départ</h3>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="before6" /> Avant 06:00
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="6to12" /> 06:00 - 12:00
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="12to18" /> 12:01 - 18:00
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="after18" /> Après 18:00
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Confiance et sécurité</h3>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="superDriver" /> Super Driver
          </label>
        </div>
        <div className="filter-option">
          <label>
            <input type="checkbox" value="verifiedProfile" /> Profil Vérifié
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-title">Services et équipements</h3>
        <div className="filter-option service-block">
          <input type="checkbox" value="twoRear" id="twoRear" />
          <label htmlFor="twoRear">
            Max. 2 à l’arrière
            
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="instantBooking" id="instantBooking" />
          <label htmlFor="instantBooking">
            Réservation instantanée
            
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="smokingAllowed" id="smokingAllowed" />
          <label htmlFor="smokingAllowed">
            Cigarette autorisée
            
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="petsAllowed" id="petsAllowed" />
          <label htmlFor="petsAllowed">
            Animaux de compagnie autorisés
            <img src="/path/to/petsIcon.png" alt="Animaux de compagnie autorisés" className="filter-icon" />
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="recliningSeats" id="recliningSeats" />
          <label htmlFor="recliningSeats">
            Sièges inclinables
            
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="electricOutlets" id="electricOutlets" />
          <label htmlFor="electricOutlets">
            Prises électriques
          
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="wifi" id="wifi" />
          <label htmlFor="wifi">
            Wi-Fi
        
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="toilets" id="toilets" />
          <label htmlFor="toilets">
            Toilettes
          
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="airConditioning" id="airConditioning" />
          <label htmlFor="airConditioning">
            Climatisation
          
          </label>
        </div>
        <div className="filter-option service-block">
          <input type="checkbox" value="eTickets" id="eTickets" />
          <label htmlFor="eTickets">
            E-billets
          
          </label>
        </div>
      </div>
    </div>
  );
};
/*
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Comment voyager avec BlaBlaCar</h4>
        <ul>
          <li>Trajets populaires en covoiturage</li>
          <li>Destinations populaires en covoiturage</li>
          <li>Comment ça marche</li>
          <li>Qui sommes-nous ?</li>
          <li>Voyagez avec nous</li>
          <li>Centre d’aide</li>
        </ul>
      </div>
      <div className="footer-section">
        <h1>Nos trajet le plus populaires</h1>
        <ul>
          <li>sousse → tunis</li>
          <li>mahdia→ sousse</li>
          <li>mahdia → gafsa</li>
          <li>sidi bouzid→ sfax</li>
          <li>Nabel → Hamammet</li>
          <li>Djerba→ Mednine</li>
          <li>Gafsa→ Gabes</li>
          <li>Ain drahem → Tabarka</li>
          <li>Ariana→ Mahdia</li>
          <li>Nabel → Baja</li>
          <li>Zagouin→ sousse</li>
        </ul>
      </div>
     
     
    </footer>
  );
};
*/
const App = () => {
  return (
    <div className="app-container">
      <SearchBar />
      <div className="main-content">
      <Sidebar />
        <TripList />
      </div>
      
      <HelpBubble />
    </div>
  );
};

export default App;
