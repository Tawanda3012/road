// import { useState } from 'react';

import { Phone, Mail, MapPin, Shield, Search, FileText, Users, Award, Car, Truck, Wrench, Scale, Eye, Camera, Clock, CheckCircle, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Accident Investigation",
      description: "Comprehensive examination of crash scenes, vehicle damage, and physical evidence to determine causation factors.",
      bgColor: "from-blue-500 to-cyan-400"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Evidence Analysis",
      description: "Detailed analysis of crash data, electronic vehicle records, and physical evidence using advanced methodologies.",
      bgColor: "from-purple-500 to-pink-400"
    },
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: "Scene Documentation",
      description: "3D laser scanning, drone photography, and comprehensive scene mapping for accurate reconstruction.",
      bgColor: "from-green-500 to-emerald-400"
    },
    {
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: "Expert Testimony",
      description: "Professional courtroom testimony and consultation for legal proceedings and insurance claims.",
      bgColor: "from-orange-500 to-yellow-400"
    }
  ];

  const vehicleTypes = [
    "Private Vehicles", "Commercial Trucks", "Tractor Trailers", "Municipal Transit",
    "Construction Equipment", "Mining Equipment", "Agricultural Equipment", "Motorcycles",
    "Recreational Vehicles", "ATVs & UTVs", "Bicycles & E-bikes", "Heavy Machinery"
  ];

  const capabilities = [
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Rapid Response",
      description: "24/7 emergency response team for immediate scene documentation and evidence preservation."
    },
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: "Advanced Technology",
      description: "State-of-the-art 3D scanning, computer simulation, and electronic data retrieval systems."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Expert Team",
      description: "ACTAR certified reconstructionists with decades of combined experience in accident analysis."
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
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
      {/* Hero Section with Dynamic Background */}
      <section className="relative flex items-center min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute rounded-full top-20 left-20 w-72 h-72 bg-blue-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute delay-1000 rounded-full bottom-20 right-20 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse"></div>
          <div className="absolute delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 blur-3xl animate-pulse"></div>
        </div>
        
        {/* CSS Car Illustration */}
        <div className="absolute top-10 right-10 opacity-10">
          <div className="relative w-64 h-32">
            <div className="absolute bottom-0 w-48 h-20 rounded-lg bg-gradient-to-r from-gray-400 to-gray-600"></div>
            <div className="absolute w-32 h-16 rounded-t-lg bottom-16 left-8 bg-gradient-to-r from-gray-300 to-gray-500"></div>
            <div className="absolute w-8 h-8 bg-black rounded-full bottom-2 left-4"></div>
            <div className="absolute w-8 h-8 bg-black rounded-full bottom-2 right-12"></div>
          </div>
        </div>

        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Expert Accident <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Reconstruction</span> & Analysis
              </h1>
              <p className="mb-8 text-xl text-gray-300">
                ACTAR certified reconstructionists providing comprehensive crash analysis, expert testimony, and evidence-based solutions for legal professionals and insurance companies.
              </p>
              <div className="flex flex-col gap-4 mb-8 sm:flex-row">
                <button className="px-8 py-3 font-medium text-center text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105">
                  Get Expert Analysis
                </button>
                <button className="px-8 py-3 font-medium text-center text-white transition-all duration-300 transform border-2 border-white rounded-lg hover:bg-white hover:text-gray-900 hover:scale-105">
                  View Our Services
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>24/7 Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span>ACTAR Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span>40+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* 3D Stats Card */}
              <div className="relative p-8 transition-transform duration-500 transform shadow-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl rotate-3 hover:rotate-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                <div className="relative grid grid-cols-2 gap-6 text-white">
                  <div className="text-center transition-transform transform hover:scale-110">
                    <div className="text-3xl font-bold">40+</div>
                    <div className="text-sm opacity-90">Years Experience</div>
                  </div>
                  <div className="text-center transition-transform transform hover:scale-110">
                    <div className="text-3xl font-bold">5000+</div>
                    <div className="text-sm opacity-90">Cases Analyzed</div>
                  </div>
                  <div className="text-center transition-transform transform hover:scale-110">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Emergency Response</div>
                  </div>
                  <div className="text-center transition-transform transform hover:scale-110">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-90">ACTAR Certified</div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute flex items-center justify-center w-16 h-16 font-bold text-white rounded-full -top-4 -left-4 bg-gradient-to-br from-yellow-400 to-orange-500 animate-bounce">
                <Award className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Visuals */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid h-full grid-cols-12 gap-4">
            {Array.from({length: 144}).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Comprehensive Accident Reconstruction Services
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From initial crash scene response to expert courtroom testimony, we provide end-to-end accident reconstruction solutions.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div key={index} className="relative overflow-hidden group">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                
                <div className="relative flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2">
                  {/* Service icon with animated background */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className="relative p-4 transition-transform duration-200 bg-white rounded-full shadow-lg group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mb-4 text-center text-gray-600">{service.description}</p>
                  <button className="flex items-center space-x-1 font-medium text-blue-600 transition-colors hover:text-blue-800 group-hover:scale-105">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section with Tech Visualization */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute w-32 h-32 rotate-45 border rounded-lg top-10 left-10 border-blue-400/30"></div>
          <div className="absolute w-48 h-48 border rounded-full bottom-10 right-10 border-purple-400/30"></div>
          <div className="absolute w-24 h-24 rounded-full top-1/2 left-1/4 bg-cyan-400/20 blur-xl"></div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Advanced Capabilities & Technology
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-200">
              Utilizing cutting-edge technology and proven methodologies for accurate accident reconstruction.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="relative text-center group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 transition-all opacity-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-lg group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full shadow-lg bg-gradient-to-br from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 group-hover:scale-110">
                    {capability.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">{capability.title}</h3>
                  <p className="text-blue-200">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Types Section with Vehicle Illustrations */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                All Vehicle Types & Transportation Products
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Our experienced team analyzes accidents involving every type of vehicle, from passenger cars to heavy industrial equipment. We provide comprehensive reconstruction services regardless of vehicle complexity.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {vehicleTypes.map((vehicle, index) => (
                  <div key={index} className="flex items-center p-2 space-x-2 transition-colors rounded-lg hover:bg-blue-50">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{vehicle}</span>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105">
                View All Capabilities
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative overflow-hidden group">
                  {/* CSS Car illustration */}
                  <div className="absolute transition-opacity top-4 right-4 opacity-20 group-hover:opacity-40">
                    <div className="relative w-16 h-8 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600">
                      <div className="absolute w-8 h-4 rounded-t -top-2 left-2 bg-gradient-to-r from-blue-300 to-blue-500"></div>
                      <div className="absolute w-2 h-2 bg-black rounded-full -bottom-1 left-1"></div>
                      <div className="absolute w-2 h-2 bg-black rounded-full -bottom-1 right-1"></div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 hover:-translate-y-1">
                    <Car className="w-10 h-10 mb-3 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Passenger Vehicles</h4>
                    <p className="mt-2 text-sm text-center text-gray-600">Cars, SUVs, and light trucks</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden group">
                  {/* CSS Equipment illustration */}
                  <div className="absolute transition-opacity top-4 right-4 opacity-20 group-hover:opacity-40">
                    <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600">
                      <div className="absolute w-3 h-3 bg-green-300 rounded top-1 left-1"></div>
                      <div className="absolute w-3 h-3 bg-green-300 rounded bottom-1 right-1"></div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 hover:-translate-y-1">
                    <Wrench className="w-10 h-10 mb-3 text-green-600" />
                    <h4 className="font-semibold text-gray-900">Heavy Equipment</h4>
                    <p className="mt-2 text-sm text-center text-gray-600">Construction and mining vehicles</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative overflow-hidden group">
                  {/* CSS Truck illustration */}
                  <div className="absolute transition-opacity top-4 right-4 opacity-20 group-hover:opacity-40">
                    <div className="relative w-20 h-10 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600">
                      <div className="absolute w-10 h-6 rounded-t -top-2 left-8 bg-gradient-to-r from-purple-300 to-purple-500"></div>
                      <div className="absolute w-3 h-3 bg-black rounded-full -bottom-1 left-2"></div>
                      <div className="absolute w-3 h-3 bg-black rounded-full -bottom-1 right-2"></div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 hover:-translate-y-1">
                    <Truck className="w-10 h-10 mb-3 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Commercial Fleet</h4>
                    <p className="mt-2 text-sm text-center text-gray-600">Trucks, trailers, and delivery vehicles</p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden group">
                  <div className="absolute transition-opacity top-4 right-4 opacity-20 group-hover:opacity-40">
                    <div className="relative h-8 rounded-full w-14 bg-gradient-to-br from-orange-400 to-orange-600">
                      <div className="absolute w-2 h-2 bg-orange-300 rounded-full top-1 left-1"></div>
                      <div className="absolute w-2 h-2 bg-orange-300 rounded-full top-1 right-1"></div>
                    </div>
                  </div>
                  <div className="relative flex flex-col items-center justify-center p-6 transition-all duration-300 transform bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 hover:-translate-y-1">
                    <Award className="w-10 h-10 mb-3 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Specialized Vehicles</h4>
                    <p className="mt-2 text-sm text-center text-gray-600">Emergency, agricultural, and recreational</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Process Section with Enhanced Process Visualization */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Four Decades of Accident Reconstruction Excellence
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Since 1982, our team has been at the forefront of accident reconstruction technology and methodology. We combine extensive field experience with advanced engineering principles to provide accurate, defensible analysis.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                Our multidisciplinary approach includes mechanical engineers, data analysts, and certified reconstructionists who work together to uncover the truth behind complex vehicle accidents.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">ACTAR</div>
                  <div className="text-sm text-gray-600">Certified Team</div>
                </div>
                <div className="p-4 text-center transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105">
                  <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">24/7</div>
                  <div className="text-sm text-gray-600">Response Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative p-8 bg-white shadow-2xl rounded-2xl">
              {/* Process flow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              
              <div className="relative">
                <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">Our Process</h3>
                <div className="space-y-6">
                  {[
                    { num: 1, title: "Rapid Response", desc: "Immediate scene documentation and evidence preservation", color: "bg-red-500" },
                    { num: 2, title: "Data Collection", desc: "3D scanning, photography, and electronic data retrieval", color: "bg-blue-500" },
                    { num: 3, title: "Analysis & Reconstruction", desc: "Computer simulation and scientific analysis", color: "bg-green-500" },
                    { num: 4, title: "Expert Reporting", desc: "Detailed reports and courtroom testimony", color: "bg-purple-500" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start group">
                      <div className={`flex items-center justify-center flex-shrink-0 w-10 h-10 text-white font-bold rounded-full ${step.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        {step.num}
                      </div>
                      <div className="flex-1 ml-4">
                        <h4 className="mb-1 font-semibold text-gray-900">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                      {index < 3 && (
                        <div className="absolute left-5 mt-10 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Enhanced Icons */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 rounded-full w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 rounded-full w-96 h-96 bg-gradient-to-tr from-purple-100/50 to-transparent"></div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Multidisciplinary Expertise
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our team combines engineering expertise with advanced technology to provide scientifically accurate accident reconstruction.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: FileText, title: "Technical Analysis", desc: "Computer simulation, vehicle dynamics analysis, and impact reconstruction using advanced engineering principles.", color: "blue" },
              { icon: Camera, title: "Scene Documentation", desc: "3D laser scanning, drone photography, and comprehensive evidence collection and preservation.", color: "green" },
              { icon: Users, title: "Expert Testimony", desc: "Clear, compelling courtroom presentations and expert witness services for legal proceedings.", color: "purple" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="relative group">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/10 to-${item.color}-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-6 text-center transition-all duration-300 border border-gray-200 rounded-xl hover:shadow-2xl hover:-translate-y-2">
                    <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 bg-${item.color}-100 rounded-full group-hover:bg-${item.color}-200 group-hover:scale-110`}>
                      <IconComponent className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Design */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-blue-200/30 blur-xl"></div>
          <div className="absolute w-48 h-48 rounded-full bottom-20 right-20 bg-purple-200/30 blur-xl"></div>
          <div className="absolute w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-indigo-200/20 blur-2xl"></div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Trusted by Legal Professionals Nationwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our clients say about our expert accident reconstruction services.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                {/* Quote mark decoration */}
                <div className="absolute font-serif text-6xl text-blue-200 transition-opacity opacity-50 -top-4 -left-4 group-hover:opacity-70">"</div>
                
                <div className="relative p-6 transition-all duration-300 transform bg-white border-t-4 border-blue-500 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 transition-transform transform fill-current hover:scale-110" />
                    ))}
                  </div>
                  <p className="relative z-10 mb-4 italic text-gray-600">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-blue-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Visual Appeal */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 rotate-45 border rounded-lg top-10 left-10 border-white/20 animate-spin-slow"></div>
          <div className="absolute w-48 h-48 border rounded-full bottom-10 right-10 border-white/10"></div>
          <div className="absolute w-24 h-24 rounded-full top-1/2 left-1/4 bg-white/10 blur-xl animate-pulse"></div>
          <div className="absolute w-16 h-16 rounded-lg top-1/3 right-1/3 bg-cyan-400/20 rotate-12"></div>
        </div>
        
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Need Expert Accident Reconstruction?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
            Get immediate consultation from our ACTAR certified team. We provide rapid response and comprehensive analysis for your case.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 font-medium text-blue-600 transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105">
              <Phone className="inline w-5 h-5 mr-2" />
              Call (555) 123-CRASH
            </button>
            <button className="px-8 py-3 font-medium text-white transition-all duration-300 transform border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 hover:scale-105">
              <Mail className="inline w-5 h-5 mr-2" />
              Request Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section with Form Enhancement */}
      <section className="relative py-20 overflow-hidden text-white bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900">
        {/* Background tech pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid h-full grid-cols-8 gap-8">
              {Array.from({length: 64}).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Get Expert Analysis Today
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                Contact our ACTAR certified team for immediate consultation and rapid response services.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "24/7 Emergency Response", detail: "(555) 123-CRASH", color: "from-green-400 to-blue-500" },
                  { icon: Mail, title: "Email Consultation", detail: "experts@expertrecon.com", color: "from-blue-400 to-purple-500" },
                  { icon: MapPin, title: "Nationwide Coverage", detail: "Rapid deployment across all states", color: "from-purple-400 to-pink-500" }
                ].map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-full shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">{contact.title}</div>
                        <div className="text-gray-300">{contact.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative p-8 text-gray-900 bg-white shadow-2xl rounded-2xl">
              {/* Form background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl"></div>
              
              <div className="relative">
                <h3 className="mb-6 text-2xl font-bold text-center">Request Consultation</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300"
                  />
                  <select className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300">
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
                    className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-blue-300"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105"
                  >
                    Submit Consultation Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-12 overflow-hidden text-white bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        {/* Footer background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 border border-gray-500 rounded-full"></div>
          <div className="absolute bottom-0 right-0 rotate-45 border border-gray-600 rounded-lg w-96 h-96"></div>
        </div>
        
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center mb-4 space-x-2 md:justify-start">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold">ExpertRecon</div>
              </div>
              <p className="mb-4 text-gray-400">
                Professional accident reconstruction and analysis services since 1982.
              </p>
              <div className="flex items-center justify-center space-x-4 md:justify-start">
                <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">ACTAR Certified</div>
                  <div className="text-xs text-gray-400">Accreditation Commission for Traffic Accident Reconstruction</div>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="mb-4 text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {["Accident Reconstruction", "Scene Documentation", "Data Analysis", "Expert Testimony", "Emergency Response"].map((service, i) => (
                  <li key={i} className="transition-colors cursor-pointer hover:text-blue-400">{service}</li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="mb-4 text-lg font-semibold">Industries</h4>
              <ul className="space-y-2 text-gray-400">
                {["Legal Firms", "Insurance Companies", "Fleet Operators", "Government Agencies", "Private Clients"].map((industry, i) => (
                  <li key={i} className="transition-colors cursor-pointer hover:text-blue-400">{industry}</li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="mb-4 text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-gray-400">
                {[
                  { icon: Phone, text: "(555) 123-CRASH" },
                  { icon: Mail, text: "experts@expertrecon.com" },
                  { icon: MapPin, text: "Nationwide Coverage" }
                ].map((contact, i) => {
                  const IconComponent = contact.icon;
                  return (
                    <div key={i} className="flex items-center justify-center space-x-2 transition-colors cursor-pointer md:justify-start hover:text-blue-400">
                      <IconComponent className="w-4 h-4" />
                      <span>{contact.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-12 text-center text-gray-400 border-t border-gray-700">
            <p>&copy; 2025 ExpertRecon. All rights reserved. | Professional Accident Reconstruction Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;