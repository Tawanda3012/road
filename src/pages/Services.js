  return (
    <div className="min-h-screen pt-0">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Our Services & Capabilities</h1>
            <p className="text-lg md:text-xl text-blue-100">
              Comprehensive forensic consulting services with unparalleled expertise in accident 
              reconstruction, investigation, and analysis across all types of transportation incidents.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg md:text-xl text-gray-600">
              From rapid response to detailed analysis and expert testimony
            </p>
          </div>
          
          {/* Services Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Forensic investigation equipment and tools"
              className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Computer simulation and data analysis"
              className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">{service.description}</pimport React, { useState } from 'react';
import { ChevronRight, Phone, Mail, MapPin, Users, Award, Clock, Shield, Car, Microscope, FileText, Camera, Menu, X } from 'lucide-react';

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">ForensiTech Consulting</h1>
              <p className="text-xs md:text-sm text-gray-600">Accident Reconstruction & Forensic Analysis</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('services')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentPage === 'services' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Services
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left px-3 py-2 text-base font-medium transition-colors ${
                  currentPage === 'home' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`text-left px-3 py-2 text-base font-medium transition-colors ${
                  currentPage === 'services' 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                Services
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Expert Forensic Consulting & 
              <span className="text-blue-400"> Accident Reconstruction</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
              Over 50 years of experience in providing detailed, evidence-based analyses 
              of complex motor vehicle collisions and transportation incidents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg flex items-center justify-center transition-colors">
                Get Expert Analysis <ChevronRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors">
                View Our Capabilities
              </button>
            </div>
          </div>
          <div className="relative">
            {/* Hero Image */}
            <div className="relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Accident reconstruction scene with measuring equipment"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="bg-white text-gray-900 p-4 md:p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4">Quick Response Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mr-3" />
                    <span className="text-sm md:text-base">24/7 Emergency Response</span>
                  </li>
                  <li className="flex items-center">
                    <Camera className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mr-3" />
                    <span className="text-sm md:text-base">3D Laser Scanning & Drones</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mr-3" />
                    <span className="text-sm md:text-base">Detailed Technical Reports</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 md:h-5 w-4 md:w-5 text-blue-600 mr-3" />
                    <span className="text-sm md:text-base">Expert Testimony</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page
const Home = () => {
  const capabilities = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Vehicle Accident Reconstruction",
      description: "Comprehensive analysis of motor vehicle collisions using state-of-the-art technology and methodologies."
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Forensic Investigation",
      description: "Detailed forensic analysis and evidence preservation using latest equipment and scientific methods."
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Expert Reports & Testimony",
      description: "Clear, detailed reports and expert witness testimony for legal proceedings and insurance claims."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "3D Documentation",
      description: "Advanced 3D laser scanning, drone surveys, and computer simulation for accurate reconstruction."
    }
  ];

  const vehicleTypes = [
    "Private vehicles", "Commercial vehicles", "Tractor trailers", "Municipal transit vehicles",
    "Construction equipment", "Mining equipment", "Agricultural equipment", "Motorcycles",
    "All-terrain vehicles (ATVs)", "Bicycles", "E-bikes and e-scooters", "Forklifts"
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Capabilities Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Multidisciplinary expertise combining vehicle, mechanical, electrical engineering 
              with biomechanics, data analysis, and human factors research.
            </p>
          </div>
          
          {/* Featured Image */}
          <div className="mb-12">
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Forensic team analyzing accident scene with advanced equipment"
              className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 text-blue-600 p-2 md:p-3 rounded-lg w-fit mb-3 md:mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{capability.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Analysis of All Types of Vehicles & Transportation Products
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Our experts investigate incidents involving all vehicles, whether on wheels, tracks, 
                or rail, to provide insights into the cause and sequence of events.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                {vehicleTypes.map((vehicle, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm md:text-base text-gray-700">{vehicle}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Vehicle Analysis Image */}
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Various vehicles for accident reconstruction analysis"
                  className="w-full h-48 md:h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:p-8 rounded-2xl">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Why Choose Our Team?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Award className="h-5 md:h-6 w-5 md:w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">50+ Years Experience</h4>
                        <p className="text-xs md:text-sm text-gray-600">Decades of testing and research programs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 md:h-6 w-5 md:w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Multidisciplinary Teams</h4>
                        <p className="text-xs md:text-sm text-gray-600">Engineers and scientists across 90+ disciplines</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="h-5 md:h-6 w-5 md:w-6 text-blue-600 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Unbiased Analysis</h4>
                        <p className="text-xs md:text-sm text-gray-600">Objective, evidence-based conclusions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Need Expert Accident Reconstruction?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Get rapid response services and technically superior analysis from our team of experts.
            We provide clear, powerful demonstratives and well-documented reports.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors">
            Contact Our Experts Today
          </button>
        </div>
      </section>
    </div>
  );
};

// Services Page
const Services = () => {
  const services = [
    {
      title: "Accident Investigation",
      description: "Comprehensive investigation of motor vehicle collisions and transportation incidents using advanced methodologies.",
      features: ["3D laser scanning", "Drone documentation", "Electronic data recovery", "Site measurements", "Evidence preservation"]
    },
    {
      title: "Computer Simulation & Animation",
      description: "State-of-the-art computer simulation and animation services to recreate accident scenarios.",
      features: ["Vehicle dynamics modeling", "Impact analysis", "Occupant kinematics", "Visibility studies", "Scene reconstruction"]
    },
    {
      title: "Expert Witness Services",
      description: "Professional expert testimony and consultation for legal proceedings and insurance claims.",
      features: ["Court testimony", "Deposition services", "Technical consultation", "Report preparation", "Case strategy support"]
    },
    {
      title: "Full-Scale Testing",
      description: "Comprehensive testing programs including crash testing and component analysis.",
      features: ["Crash testing", "Component failure analysis", "Product evaluation", "Safety assessment", "Regulatory compliance"]
    }
  ];

  const experts = [
    { name: "Dr. Michael Johnson", title: "Principal Engineer", specialty: "Vehicle Dynamics" },
    { name: "Sarah Chen, P.E.", title: "Senior Managing Engineer", specialty: "Biomechanics" },
    { name: "James Rodriguez", title: "Principal Engineer", specialty: "Electronic Systems" },
    { name: "Dr. Emily Watson", title: "Senior Associate", specialty: "Human Factors" },
    { name: "David Kim, P.E.", title: "Principal Engineer", specialty: "Structural Analysis" },
    { name: "Lisa Thompson", title: "Senior Engineer", specialty: "Materials Science" }
  ];

  return (
    <div className="min-h-screen pt-8">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services & Capabilities</h1>
            <p className="text-xl text-blue-100">
              Comprehensive forensic consulting services with unparalleled expertise in accident 
              reconstruction, investigation, and analysis across all types of transportation incidents.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">
              From rapid response to detailed analysis and expert testimony
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Methodology</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our multidisciplinary approach combines cutting-edge technology with decades 
                of experience to provide accurate, reliable accident reconstruction and analysis.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-lg">Rapid Response & Documentation</h3>
                    <p className="text-gray-600">Immediate site response with advanced documentation tools</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-lg">Data Collection & Analysis</h3>
                    <p className="text-gray-600">Comprehensive evidence gathering and scientific analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-lg">Reconstruction & Simulation</h3>
                    <p className="text-gray-600">Advanced modeling and simulation techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-lg">Reporting & Testimony</h3>
                    <p className="text-gray-600">Clear documentation and expert witness services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Advanced Tools & Technology</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">3D Laser Scanning</h4>
                  <p className="text-sm text-gray-600">Precise measurements and digital documentation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Drone Technology</h4>
                  <p className="text-sm text-gray-600">Aerial photography and site mapping</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Computer Simulation</h4>
                  <p className="text-sm text-gray-600">Physics-based accident reconstruction</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Electronic Data Recovery</h4>
                  <p className="text-sm text-gray-600">Vehicle system data extraction and analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Registered Professional Engineers with advanced degrees and decades of experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{expert.name}</h3>
                <p className="text-blue-600 font-medium mb-1">{expert.title}</p>
                <p className="text-gray-600">{expert.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">ForensiTech Consulting</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Leading forensic consulting firm specializing in accident reconstruction 
              and transportation incident analysis.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span>info@forensitech.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span>123 Expert Lane, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Accident Reconstruction</li>
              <li>Forensic Investigation</li>
              <li>Expert Testimony</li>
              <li>Computer Simulation</li>
              <li>3D Documentation</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2025 ForensiTech Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'services' && <Services />}
      </main>
      <Footer />
    </div>
  );
};

export default App;