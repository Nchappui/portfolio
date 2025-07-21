import React from 'react'
import "./TimeLine.css";

const TimeLine = () => {
  const events = [
    { startYear: "", endYear: "2021", title: "B.Sc. in Computer Science at EPFL", standaloneEvent: true },
    { startYear: "2022", endYear: "2023", title: "Highschool Teaching intern", standaloneEvent: false },
    { startYear: "", endYear: "2024", title: "M.Sc. in Computer Science at EPFL", standaloneEvent: true },
    { startYear: "", endYear: "2024", title: "Teaching diploma at Highschool", standaloneEvent: true },
    { startYear: "2023", endYear: "2024", title: "VR software developer intern at Touring Club Suisse", standaloneEvent: false },
    { startYear: "2024", endYear: "2025", title: "Military Service", standaloneEvent: false },
    { startYear: "2025", endYear: "2025", title: "Developer internship at Lab4Tech", standaloneEvent: false }
  ];

  // Fonction pour calculer la durée en années
  const calculateDuration = (startYear, endYear) => {
    if (!startYear || startYear === "") return 1;
    const start = parseInt(startYear);
    const end = parseInt(endYear);
    return end-start + 1; // +1 pour inclure l'année de début
  };

  return (
    <div className="horizontal-timeline">
      <div className="timeline-track">
        {events.map((event, index) => (
          <div key={index} className={`timeline-step ${event.standaloneEvent ? 'standalone' : 'duration'}`}>
            {event.standaloneEvent ? (
              // Événement standalone : trait vertical + texte au-dessus
              <>
                <div className="timeline-title-above">{event.title}</div>
                <div className="timeline-period-above">
                  {event.endYear}
                </div>
                <div className="timeline-line-vertical" />
              </>
            ) : (
              // Événement avec durée : rond proportionnel + texte en dessous
              <>
                <div 
                  className="timeline-circle-duration" 
                  style={{
                    width: `${calculateDuration(event.startYear, event.endYear) * 200}px`,
                    height: '20px'
                  }}
                />
                <div className="timeline-period-below">
                  {event.startYear} - {event.endYear}
                </div>
                <div className="timeline-title-below">{event.title}</div>
              </>
            )}
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
};

export default TimeLine;
