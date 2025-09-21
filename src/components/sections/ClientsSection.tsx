import React from 'react';

interface Client {
  name: string;
  logo: string;
}

const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    { name: "Algo Vision", logo: "https://i.ibb.co/zTnczmSR/Algo-Vision-Logo-1.png" },
    { name: "Client 2", logo: "https://i.ibb.co/3yyM8Qz5/download-7.png" },
    { name: "Client 3", logo: "https://i.ibb.co/cXNDzHWm/logo-ce6bde16-0254-4627-980d-0d0cea0103d9.jpg" },
    { name: "Client 4", logo: "https://i.ibb.co/wZDMbRv0/Logo-2.png" },
    { name: "Client 5", logo: "https://i.ibb.co/KzmZc21k/logo-black.png" },
    { name: "Moko", logo: "https://i.ibb.co/q3gvWRmh/Moko-White-transparent-background.webp" },
    { name: "Varhity Ventures", logo: "https://i.ibb.co/rGSwFjRY/Varhity-Ventures-100-copy-Transparent-2.png" },
    { name: "Client 8", logo: "https://i.ibb.co/ch1YwkR6/Whats-App-Image-2025-08-26-at-06-36-04.jpg" }
  ];

  // Triple the array for seamless infinite scroll
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-400 text-sm font-medium">TRUSTED BY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Worked With</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founders and teams who chose automation over hiring
          </p>
        </div>

        {/* Rotating Carousel */}
        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-900/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-900/50 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {tripleClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="w-24 h-24 bg-transparent border border-white/10 rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      onLoad={() => console.log(`✅ Loaded: ${client.name}`)}
                      onError={() => console.log(`❌ Failed to load: ${client.name}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400">
            From startups to enterprises, we've helped teams automate their way to growth
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;