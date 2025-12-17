import { FiBook, FiGlobe, FiAward, FiMonitor } from 'react-icons/fi'
import './Services.css'

const Services = ({ t }) => {
  const services = [
    {
      icon: <FiBook />,
      title: t.services.school.title,
      description: t.services.school.description,
      items: t.services.school.levels
    },
    {
      icon: <FiGlobe />,
      title: t.services.international.title,
      description: t.services.international.description,
      items: t.services.international.locations
    },
    {
      icon: <FiAward />,
      title: t.services.university.title,
      description: t.services.university.description,
      items: t.services.university.subjects
    },
    {
      icon: <FiMonitor />,
      title: t.services.online.title,
      description: t.services.online.description,
      items: t.services.online.features
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">{t.services.title}</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

