import React from "react";
import { useParams } from "react-router-dom";
import "./ItineraryPage.css";
import img from '../assets/images/02.jpg';

const sampleData = {
  _id: "6861360b20059584f1903cd0",
  package_name: "5-Day Kerala Nature Explore Tour",
  slug: "kerala-nature-explore",
  duration: {
    days: 5,
    nights: 4
  },
  summary: "Embark on a captivating journey through the natural beauty of Kerala.",
  regions_covered: [
    "Munnar",
    "Vattavada",
    "Thekkady",
    "Alleppey",
    "Fort Kochi",
    "Cochin"
  ],
  start_location: "Cochin",
  end_location: "Cochin",
  itinerary: [
    {
      day: 1,
      title: "Arrival in Cochin and Transfer to Munnar",
      activities: [
        "Pickup from Cochin Airport or Station",
        "Scenic drive to Munnar",
        "Sightseeing en route to Munnar",
        "Dinner and overnight stay in Vattavada"
      ]
    },
    {
      day: 2,
      title: "Local Sightseeing in Vattavada",
      activities: [
        "Breakfast",
        "Jeep Safari",
        "Visit Chilanthiar Cave and Waterfalls",
        "Pazhathottam View Point",
        "Strawberry Farm",
        "Private Waterfalls",
        "Honey Museum",
        "Evening campfire and BBQ",
        "Dinner and cottage stay"
      ]
    },
    {
      day: 3,
      title: "Munnar Sightseeing and Transfer to Thekkady",
      activities: [
        "Breakfast",
        "Sightseeing in Munnar",
        "Transfer to Thekkady",
        "Kalaripayattu Show",
        "Dinner and stay in Thekkady"
      ]
    },
    {
      day: 4,
      title: "Periyar Boating and Backwater Houseboat Experience",
      activities: [
        "Breakfast",
        "Periyar Lake Boating",
        "Transfer to Alleppey",
        "Houseboat welcome drinks",
        "Lunch, snacks, and dinner on board",
        "Overnight houseboat stay"
      ]
    },
    {
      day: 5,
      title: "Checkout and Fort Kochi Sightseeing",
      activities: [
        "Breakfast and houseboat checkout",
        "Ayurvedic massage (optional)",
        "Fort Kochi sightseeing",
        "Shopping at Lulu Mall",
        "Drop-off at airport or station"
      ]
    }
  ],
  inclusions: [
    "Pickup and drop off at Railway station/Airport",
    "2-night stay in Munnar Cottage (Vattavada)",
    "1-night stay in Thekkady",
    "1-night stay in houseboat",
    "Private AC vehicle for transfers and sightseeing",
    "Multilingual driver cum guide",
    "All breakfasts and dinners",
    "1-day Jeep Safari",
    "Campfire, BBQ, and Nature Walk",
    "Houseboat: welcome drink, lunch, snacks, dinner",
    "Driver’s bata, toll, permit, parking, road tax, fuel",
    "All applicable taxes"
  ],
  exclusions: [
    "Air/bus/rail fare",
    "Meals not mentioned",
    "Entry tickets not mentioned"
  ],
  price: {
    currency: "INR",
    amount: 100
  },
  tags: [
    "nature",
    "kerala",
    "houseboat",
    "campfire",
    "jeep safari",
    "thekkady",
    "munnar"
  ],
  created_at: "2025-06-29T12:48:11.757000",
  updated_at: "2025-06-29T12:48:11.757000"
};



export default function ItineraryPage() {
  const { slug } = useParams();
  const data = sampleData; // Later, fetch using slug

  return (
    <>
    <div className="itinerary-container" style={{ paddingTop: '100px' }}>
    <div className="itinerary-hero">
    <img src={img} alt="Tour" className="hero-image" />
    <div className="hero-content">
    <h1>{data.package_name}</h1>
    <p className="summary">{data.summary}</p>
    <div className="details">
      <p><strong>Duration:</strong> {data.duration.days}D / {data.duration.nights}N</p>
      <p><strong>Start:</strong> {data.start_location} → <strong>End:</strong> {data.end_location}</p>
      <p><strong>Regions:</strong> {data.regions_covered.join(", ")}</p>
    </div>
    </div>
    </div>


      <h2>Itinerary</h2>
      <div className="timeline">
        {data.itinerary.map((day, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`} key={day.day}>
            <div className="content">
              <h3>Day {day.day}: {day.title}</h3>
              <ul>
                {day.activities.map((act, i) => <li key={i}>{act}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="inc" style={{ padding: '10px' }}>
      <h2>Inclusions</h2>
      <ul className="list" >
        {data.inclusions.map((item, i) => <li key={i}>✅ {item}</li>)}
      </ul>
      </div>
      <div className="exc" style={{ paddingTop: '10px' }}>
      <h2>Exclusions</h2>
      <ul className="list">
        {data.exclusions.map((item, i) => <li key={i}>❌ {item}</li>)}
      </ul>
      </div>  
      <div className="getquotes"style={{ paddingTop: '10px' }}>
      <button>Get Quotes</button>
      </div>  
    </div>
    </>
  );
}
