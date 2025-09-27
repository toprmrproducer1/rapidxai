import React from 'react';

interface Client {
  name: string;
  title: string;
  company: string;
  logo: string;
}

const ClientsSection: React.FC<{ primaryCTA: () => void }> = ({ primaryCTA }) => {
  const clients: Client[] = [
    { 
      name: "Algo Vision", 
      title: "AI & Analytics Solutions", 
      company: "Algo Vision",
      logo: "https://i.ibb.co/bRHZwpHK/Algo-Vision-Logo-1.png"
    },
    { 
      name: "Twilio", 
      title: "Communications Platform", 
      company: "Twilio",
      logo: "https://i.ibb.co/fcn4nJv/download-7.png"
    },
    { 
      name: "Client Solutions", 
      title: "Business Consulting", 
      company: "Client Solutions",
      logo: "https://i.ibb.co/QjQ056fy/logo-ce6bde16-0254-4627-980d-0d0cea0103d9.jpg"
    },
    { 
      name: "Innovation Labs", 
      title: "Technology Innovation", 
      company: "Innovation Labs",
      logo: "https://i.ibb.co/Q31BnmrH/Logo-2.png"
    },
    { 
      name: "Enterprise Solutions", 
      title: "Enterprise Software", 
      company: "Enterprise Solutions",
      logo: "https://i.ibb.co/1f2FffmT/logo-black.png"
    },
    { 
      name: "Moko", 
      title: "Digital Solutions", 
      company: "Moko",
      logo: "https://i.ibb.co/35dGsGmq/Moko-White-transparent-background.webp"
    },
    { 
      name: "Varhity Ventures", 
      title: "Venture Capital", 
      company: "Varhity Ventures",
      logo: "https://i.ibb.co/93CGT5Jc/Varhity-Ventures-100-copy-Transparent-1.png"
    },
    { 
      name: "Strategic Partners", 
      title: "Business Development", 
      company: "Strategic Partners",
      logo: "https://i.ibb.co/XrkYKyj8/Whats-App-Image-2025-08-26-at-06-36-04.jpg"
    }
  ];

  // Triple the array for seamless infinite scroll
  const tripleClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-20 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-600/10 border border-gray-500/20 mb-6">
            <span className="text-gray-300 text-sm font-medium">TRUSTED BY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-white">Worked With</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founders and teams who chose automation over hiring
          </p>
        </div>

        {/* Rotating Carousel */}
        <div className="relative">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />
          
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div className="flex animate-infinite-scroll hover:pause-animation">
              {tripleClients.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 mx-4 group"
                >
                  <div className="w-48 h-32 bg-white/5 border border-white/10 rounded-xl p-4 transition-all duration-300 hover:scale-110 hover:border-gray-400/50 hover:shadow-lg hover:shadow-gray-500/25 relative overflow-hidden backdrop-blur-sm">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    
                    {/* Client Info */}
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex-1 flex items-center justify-center mb-2">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="max-w-full max-h-16 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                          onLoad={() => console.log(`✅ Loaded: ${client.name}`)}
                          onError={(e) => {
                            console.log(`❌ Failed to load: ${client.name}`);
                            // Hide the image and show fallback text
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'block';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="text-center text-white font-bold text-lg hidden">
                          {client.name}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-gray-300 font-medium">{client.name}</div>
                        <div className="text-xs text-gray-400">{client.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-8">
            Trusted by innovative companies across industries.
          </p>
          <button
            onClick={primaryCTA}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Join Our Growing Client Base
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

export { ClientsSection }