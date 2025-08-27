import React from 'react'

function Home() {
  return (
    <div>
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
    </div>
  )
}

export default Home
