import { useState } from 'react';
import { Phone, Mail, MapPin, Shield, Search, FileText, Users, Award, Car, Truck, Wrench, Scale, Eye, Camera, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Accident Investigation",
      description: "Comprehensive examination of crash scenes, vehicle damage, and physical evidence to determine causation factors."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Evidence Analysis",
      description: "Detailed analysis of crash data, electronic vehicle records, and physical evidence using advanced methodologies."
    },
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Scene Documentation",
      description: "3D laser scanning, drone photography, and comprehensive scene mapping for accurate reconstruction."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Expert Testimony",
      description: "Professional courtroom testimony and consultation for legal proceedings and insurance claims."
    }
  ];

  const vehicleTypes = [
    "Private Vehicles", "Commercial Trucks", "Tractor Trailers", "Municipal Transit",
    "Construction Equipment", "Mining Equipment", "Agricultural Equipment", "Motorcycles",
    "Recreational Vehicles", "ATVs & UTVs", "Bicycles & E-bikes", "Heavy Machinery"
  ];

  const capabilities = [
    {
      icon: <Eye className="h-6 w-6 text-white" />,
      title: "Rapid Response",
      description: "24/7 emergency response team for immediate scene documentation and evidence preservation."
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: "Advanced Technology",
      description: "State-of-the-art 3D scanning, computer simulation, and electronic data retrieval systems."
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Expert Team",
      description: "ACTAR certified reconstructionists with decades of combined experience in accident analysis."
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Proven Results",
      description: "Over 40 years of successful case resolution with clear, defensible expert opinions."
    }
  ];

  const testimonials = [
    {
      quote: "Their detailed analysis and expert testimony were instrumental in resolving our complex case.",
      author: "Sarah Johnson",
      role: "Attorney, Johnson & Associates",
      rating: 5
    },
    {
      quote: "Professional, thorough, and responsive. Exactly what we needed for our insurance investigation.",
      author: "Michael Chen",
      role: "Claims Manager, Premier Insurance",
      rating: 5
    },
    {
      quote: "The 3D reconstruction and visual evidence they provided made all the difference in court.",
      author: "David Martinez",
      role: "Legal Counsel, Martinez Law Firm",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Expert Accident <span className="text-blue-400">Reconstruction</span> & Analysis
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                ACTAR certified reconstructionists providing comprehensive crash analysis, expert testimony, and evidence-based solutions for legal professionals and insurance companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                  Get Expert Analysis
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-200 text-center">
                  View Our Services
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>24/7 Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span>ACTAR Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>40+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6 text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold">40+</div>
                      <div className="text-sm opacity-90">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">5000+</div>
                      <div className="text-sm opacity-90">Cases Analyzed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Emergency Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm opacity-90">ACTAR Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Accident Reconstruction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial crash scene response to expert courtroom testimony, we provide end-to-end accident reconstruction solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Capabilities & Technology
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Utilizing cutting-edge technology and proven methodologies for accurate accident reconstruction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-200">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-blue-200">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                All Vehicle Types & Transportation Products
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our experienced team analyzes accidents involving every type of vehicle, from passenger cars to heavy industrial equipment. We provide comprehensive reconstruction services regardless of vehicle complexity.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {vehicleTypes.map((vehicle, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{vehicle}</span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                View All Capabilities
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors duration-200">
                  <Car className="h-10 w-10 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Passenger Vehicles</h4>
                  <p className="text-sm text-gray-600 mt-2">Cars, SUVs, and light trucks</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl hover:bg-green-100 transition-colors duration-200">
                  <Wrench className="h-10 w-10 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Heavy Equipment</h4>
                  <p className="text-sm text-gray-600 mt-2">Construction and mining vehicles</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-purple-50 p-6 rounded-xl hover:bg-purple-100 transition-colors duration-200">
                  <Truck className="h-10 w-10 text-purple-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Commercial Fleet</h4>
                  <p className="text-sm text-gray-600 mt-2">Trucks, trailers, and delivery vehicles</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl hover:bg-orange-100 transition-colors duration-200">
                  <Award className="h-10 w-10 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900">Specialized Vehicles</h4>
                  <p className="text-sm text-gray-600 mt-2">Emergency, agricultural, and recreational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Four Decades of Accident Reconstruction Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 1982, our team has been at the forefront of accident reconstruction technology and methodology. We combine extensive field experience with advanced engineering principles to provide accurate, defensible analysis.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our multidisciplinary approach includes mechanical engineers, data analysts, and certified reconstructionists who work together to uncover the truth behind complex vehicle accidents.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">ACTAR</div>
                  <div className="text-sm text-gray-600">Certified Team</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Response Available</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rapid Response</h4>
                    <p className="text-gray-600 text-sm">Immediate scene documentation and evidence preservation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Collection</h4>
                    <p className="text-gray-600 text-sm">3D scanning, photography, and electronic data retrieval</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analysis & Reconstruction</h4>
                    <p className="text-gray-600 text-sm">Computer simulation and scientific analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Reporting</h4>
                    <p className="text-gray-600 text-sm">Detailed reports and courtroom testimony</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multidisciplinary Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines engineering expertise with advanced technology to provide scientifically accurate accident reconstruction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Analysis</h3>
              <p className="text-gray-600">Computer simulation, vehicle dynamics analysis, and impact reconstruction using advanced engineering principles.</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Camera className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scene Documentation</h3>
              <p className="text-gray-600">3D laser scanning, drone photography, and comprehensive evidence collection and preservation.</p>
            </div>
            
            <div className="text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Testimony</h3>
              <p className="text-gray-600">Clear, compelling courtroom presentations and expert witness services for legal proceedings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Legal Professionals Nationwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about our expert accident reconstruction services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Expert Accident Reconstruction?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get immediate consultation from our ACTAR certified team. We provide rapid response and comprehensive analysis for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Call (555) 123-CRASH
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Expert Analysis Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our ACTAR certified team for immediate consultation and rapid response services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Emergency Response</div>
                    <div className="text-gray-300">(555) 123-CRASH</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Consultation</div>
                    <div className="text-gray-300">experts@expertrecon.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Nationwide Coverage</div>
                    <div className="text-gray-300">Rapid deployment across all states</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Request Consultation</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Case Type</option>
                  <option>Motor Vehicle Accident</option>
                  <option>Commercial Vehicle</option>
                  <option>Heavy Equipment</option>
                  <option>Motorcycle Accident</option>
                  <option>Other</option>
                </select>
                <textarea
                  rows="4"
                  placeholder="Brief description of your case..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Submit Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-blue-400" />
                <div className="text-xl font-bold">ExpertRecon</div>
              </div>
              <p className="text-gray-400 mb-4">
                Professional accident reconstruction and analysis services since 1982.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">ACTAR Certified</div>
                  <div className="text-gray-400 text-xs">Accreditation Commission for Traffic Accident Reconstruction</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Accident Reconstruction</li>
                <li>Scene Documentation</li>
                <li>Data Analysis</li>
                <li>Expert Testimony</li>
                <li>Emergency Response</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Legal Firms</li>
                <li>Insurance Companies</li>
                <li>Fleet Operators</li>
                <li>Government Agencies</li>
                <li>Private Clients</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-CRASH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>experts@expertrecon.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nationwide Coverage</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ExpertRecon. All rights reserved. | Professional Accident Reconstruction Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;