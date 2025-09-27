import React from 'react';

interface Client {
  name: string;
  logo: string;
}

const ClientsSection: React.FC = () => {
  const clients: Client[] = [
    { name: "Algo Vision", logo: "https://i.ibb.co/1JZZ0fXb/Screenshot-2025-09-27-at-7-07-45-PM.png" },
    { name: "VEDA", logo: "https://i.ibb.co/TxwfJw7y/Screenshot-2025-09-27-at-7-07-57-PM.png" },
    { name: "EduForge AI", logo: "https://i.ibb.co/6ckrxFFs/Screenshot-2025-09-27-at-7-08-06-PM.png" },
    { name: "MMG Digital", logo: "https://i.ibb.co/1tF0kXnQ/Screenshot-2025-09-27-at-7-08-29-PM.png" },
    { name: "ContentForge", logo: "https://i.ibb.co/nqhTgK1w/Screenshot-2025-09-27-at-7-09-39-PM.png" },
    { name: "AdScripts", logo: "https://i.ibb.co/nMVVmtgf/Screenshot-2025-09-27-at-7-10-49-PM.png" }
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
                  <div className="w-32 h-24 bg-white/5 border border-white/10 rounded-xl p-3 transition-all duration-300 hover:scale-110 hover:border-gray-400/50 hover:shadow-lg hover:shadow-gray-500/25 relative overflow-hidden backdrop-blur-sm">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 rounded-lg"
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
            Real clients. Real results. From AI voice automation to production MVPs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

export { ClientsSection }