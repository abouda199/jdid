import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./TripDetails.css";
import e from '../assets/e.png';
const TripDetails = () => {
  const { id } = useParams();

  // Exemple de données des trajets
  const trips = [
    {
      id: 1,
      date: "Mercredi 25 décembre",
      time: "13:30",
      duration: "2h00",
      arrival: "15:30",
      departure: "Sallaumines",
      departureAddress: "17 Rue Arthur Lamendin",
      destination: "Paris",
      destinationAddress: "145 Blvd Périphérique",
      driver: {
        name: "Zakaria",
        rating: 5.0, // Note du conducteur
        reviews: 12,
        verified: true,
        preferences: [
          "Votre réservation sera confirmée instantanément",
          "Je préfère ne pas voyager en compagnie d'animaux",
          "Max. 2 à l'arrière",
        ],
        car: "PEUGEOT 308 - Blanc",
        avatar: e, // Remplacez par le chemin de l'image
      },
      price: 18.19,
    },
    {
      id: 2,
      date: "Mercredi 25 décembre",
      time: "13:30",
      duration: "2h00",
      arrival: "15:30",
      departure: "Sallaumines",
      departureAddress: "17 Rue Arthur Lamendin",
      destination: "Paris",
      destinationAddress: "145 Blvd Périphérique",
      driver: {
        name: "Zakaria",
        rating: 5.0, // Note du conducteur
        reviews: 12,
        verified: true,
        preferences: [
          "Votre réservation sera confirmée instantanément",
          "Je préfère ne pas voyager en compagnie d'animaux",
          "Max. 2 à l'arrière",
        ],
        car: "PEUGEOT 308 - Blanc",
        avatar: e, // Remplacez par le chemin de l'image
      },
      price: 18.19,
    },
    {
      id: 3,
      date: "Mercredi 25 décembre",
      time: "13:30",
      duration: "2h00",
      arrival: "15:30",
      departure: "Sallaumines",
      departureAddress: "17 Rue Arthur Lamendin",
      destination: "Paris",
      destinationAddress: "145 Blvd Périphérique",
      driver: {
        name: "Zakaria",
        rating: 5.0, // Note du conducteur
        reviews: 12,
        verified: true,
        preferences: [
          "Votre réservation sera confirmée instantanément",
          "Je préfère ne pas voyager en compagnie d'animaux",
          "Max. 2 à l'arrière",
        ],
        car: "PEUGEOT 308 - Blanc",
        avatar: e, // Remplacez par le chemin de l'image
      },
      price: 18.19,
    },
    {
      id: 4,
      date: "Mercredi 25 décembre",
      time: "13:30",
      duration: "2h00",
      arrival: "15:30",
      departure: "Sallaumines",
      departureAddress: "17 Rue Arthur Lamendin",
      destination: "Paris",
      destinationAddress: "145 Blvd Périphérique",
      driver: {
        name: "Zakaria",
        rating: 5.0, // Note du conducteur
        reviews: 12,
        verified: true,
        preferences: [
          "Votre réservation sera confirmée instantanément",
          "Je préfère ne pas voyager en compagnie d'animaux",
          "Max. 2 à l'arrière",
        ],
        car: "PEUGEOT 308 - Blanc",
        avatar: e, // Remplacez par le chemin de l'image
      },
      price: 18.19,
    },
    {
      id: 5,
      date: "Mercredi 25 décembre",
      time: "13:30",
      duration: "2h00",
      arrival: "15:30",
      departure: "Sallaumines",
      departureAddress: "17 Rue Arthur Lamendin",
      destination: "Paris",
      destinationAddress: "145 Blvd Périphérique",
      driver: {
        name: "Zakaria",
        rating: 5.0, // Note du conducteur
        reviews: 12,
        verified: true,
        preferences: [
          "Votre réservation sera confirmée instantanément",
          "Je préfère ne pas voyager en compagnie d'animaux",
          "Max. 2 à l'arrière",
        ],
        car: "PEUGEOT 308 - Blanc",
        avatar: e, // Remplacez par le chemin de l'image
      },
      price: 18.19,
    },
    // Ajoutez d'autres trajets ici si nécessaire
  ];

  // Trouver le trajet correspondant à l'ID
  const trip = trips.find((trip) => trip.id === parseInt(id));

  if (!trip) {
    return <p style={{ padding: "20px" }}>Trajet non trouvé.</p>;
  }

  // État pour gérer la note donnée par l'utilisateur
  const [userRating, setUserRating] = useState(0);

  // Fonction pour gérer le clic sur une étoile
  const handleStarClick = (rating) => {
    setUserRating(rating); // Mettre à jour la note sélectionnée
  };

  return (
    <div className="trip-details-container">
      <h2>{trip.date}</h2>

      <div className="trip-details-layout">
        {/* Section de gauche */}
        <div className="trip-details-left">
          <div className="trip-info">
            <strong>{trip.time}</strong> - {trip.arrival}
            <p>{trip.departure}</p>
            <small>{trip.departureAddress}</small>
            <hr />
            <p>{trip.destination}</p>
            <small>{trip.destinationAddress}</small>
          </div>

          <div className="driver-info">
            <img src={trip.driver.avatar} alt={trip.driver.name} className="driver-avatar" />
            <h3>{trip.driver.name}</h3>
            <p>★ {trip.driver.rating} - {trip.driver.reviews} avis</p>
            {trip.driver.verified && <p className="verified">Profil Vérifié</p>}
          </div>

          <div className="driver-preferences">
            {trip.driver.preferences.map((pref, index) => (
              <p key={index}>{pref}</p>
            ))}
            <p>{trip.driver.car}</p>
          </div>

          <button className="contact-driver">Contacter {trip.driver.name}</button>
        </div>

        {/* Section de droite */}
        <div className="trip-details-right">
          <h3>{trip.date}</h3>
          <p>
            <strong>{trip.time}</strong> - {trip.arrival}
          </p>
          <p>
            <small>{trip.departure}</small> → <small>{trip.destination}</small>
          </p>
          <p className="trip-price">{trip.price} €</p>
          <button className="reserve-button">Réserver</button>

          {/* Section des étoiles cliquables */}
          <div className="rating-container">
            <h4>Notez ce trajet</h4>
            <div className="rating-stars">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`star ${index < userRating ? "filled" : ""}`}
                  onClick={() => handleStarClick(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
            {userRating > 0 && <p>Merci pour votre note : {userRating} étoile(s)</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
