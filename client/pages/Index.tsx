import { ArrowRight, MessageCircle, Zap, TrendingUp, Phone } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-lato">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
        {/* Background Blur Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-[-115px] right-[100px] w-[271px] h-[271px] rounded-full bg-indigo-600 blur-[117px] opacity-70"></div>
          <div className="absolute top-[189px] left-[44px] w-[271px] h-[271px] rounded-full bg-takallam-blue blur-[117px] opacity-70"></div>
          <div className="absolute top-[324px] right-[76px] w-[172px] h-[172px] rounded-full bg-teal-600 blur-[107px] opacity-60"></div>
          <div className="absolute top-[646px] left-[-76px] w-[215px] h-[215px] rounded-full bg-blue-800 blur-[117px] opacity-60"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center px-28 py-5 max-lg:px-8 max-lg:py-4">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-[35px] h-[35px] rounded-full bg-takallam-blue flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-[30px] font-bold">Takallam</span>
            </div>
            
            {/* Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#demos" className="text-white text-base font-normal hover:text-takallam-blue transition-colors">Demos</a>
              <a href="#about" className="text-white text-base font-normal hover:text-takallam-blue transition-colors">About</a>
              <a href="#pages" className="text-white text-base font-normal hover:text-takallam-blue transition-colors">Pages</a>
              <a href="#contact" className="text-white text-base font-normal hover:text-takallam-blue transition-colors">Contact</a>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center gap-10">
            <a href="#login" className="hidden lg:block text-white text-base font-normal hover:text-takallam-blue transition-colors">Login</a>
            <button className="flex items-center gap-2 px-[18px] py-[10px] border border-white rounded-lg text-white text-base font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Get Started Free
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-28 pt-24 pb-32 max-lg:px-8 max-lg:pt-12">
          <div className="max-w-[1216px] mx-auto">
            <div className="flex justify-between items-end mb-16 max-lg:flex-col max-lg:gap-8">
              <div className="flex-1 max-w-[617px]">
                <h1 className="text-white text-[60px] font-normal leading-[72px] tracking-[-1.2px] mb-6 max-lg:text-4xl max-lg:leading-tight">
                  Transform your <span className="font-bold">⚡ Business Processes</span> with Voice AI
                </h1>
                <p className="text-gray-200 text-base leading-6 mb-6 max-w-[488px]">
                  AI that listens, understands, and responds like your best team member—across sales, support, and beyond.
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-takallam-blue rounded-lg text-white text-base font-semibold hover:bg-blue-500 transition-colors">
                  Book a Demo
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Voice AI Visual + Reviews */}
              <div className="flex flex-col items-end gap-6 max-lg:items-center">
                {/* Voice AI Circle */}
                <div className="relative">
                  <div className="w-[234px] h-[236px] rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-2 h-8 bg-takallam-blue rounded-full animate-pulse"></div>
                        <div className="w-2 h-6 bg-takallam-blue rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-10 bg-takallam-blue rounded-full animate-pulse delay-200"></div>
                        <div className="w-2 h-4 bg-takallam-blue rounded-full animate-pulse delay-300"></div>
                        <div className="w-2 h-7 bg-takallam-blue rounded-full animate-pulse delay-400"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/60 text-base font-medium text-center mt-4 text-sm">Talk to Takallam</p>
                </div>

                {/* Reviews */}
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-blue-400"></div>
                    <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-purple-400"></div>
                    <div className="w-[54px] h-[54px] rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-4 border-teal-400"></div>
                  </div>
                  <div>
                    <div className="text-white text-2xl font-medium">5,670</div>
                    <div className="text-gray-200 text-sm">Happy customers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-gray-900 rounded-3xl p-2 max-w-[1216px] mx-auto">
              <div className="bg-gray-200 rounded-2xl aspect-[1216/733] flex items-center justify-center overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3a1cc2c154b875c03d00d590b3b4af428abfd75c?width=2432" 
                  alt="Takallam Dashboard" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview Section */}
      <section className="py-36 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-blue-500 text-base font-medium mb-3">What Can Takallam Do?</div>
            <h2 className="text-gray-800 text-4xl font-medium leading-tight tracking-[-0.72px] max-w-[582px] mx-auto">
              Answer Questions, Guide Sales, and Escalate{' '}
              <span className="font-bold bg-gradient-to-r from-gray-800 to-blue-500 bg-clip-text text-transparent">
                All in Real Time.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-takallam-blue rounded-full flex items-center justify-center mx-auto mb-5 border-8 border-blue-100">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-takallam-gray-800 text-xl font-bold mb-2">Sales Support</h3>
              <p className="text-takallam-gray-500 text-base leading-6">
                Answer product, pricing, and availability queries in real time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-takallam-blue rounded-full flex items-center justify-center mx-auto mb-5 border-8 border-blue-100">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-takallam-gray-800 text-xl font-bold mb-2">Customer Service</h3>
              <p className="text-takallam-gray-500 text-base leading-6">
                Resolve routine support requests instantly, escalate complex ones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-takallam-blue rounded-full flex items-center justify-center mx-auto mb-5 border-8 border-blue-100">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-takallam-gray-800 text-xl font-bold mb-2">HR & Onboarding</h3>
              <p className="text-takallam-gray-500 text-base leading-6">
                Guide employees through processes and policy questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {[
        {
          title: "Conversational AI Conversational, Not Scripted",
          description: "With our platform, you can easily track sales and manage inventory, making it easier to keep track of your transactions and products.",
          badge: "Key Features 1st"
        },
        {
          title: "Multilingual & Accent-Friendly",
          description: "With our platform, you can easily track sales and manage inventory, making it easier to keep track of your transactions and products.",
          badge: "Key Features 2nd"
        },
        {
          title: "Conversational AI Conversational, Not Scripted",
          description: "With our platform, you can easily track sales and manage inventory, making it easier to keep track of your transactions and products.",
          badge: "Key Features 3rd"
        },
        {
          title: "Works in Web, Mobile, Kiosk, Phone",
          description: "With our platform, you can easily track sales and manage inventory, making it easier to keep track of your transactions and products.",
          badge: "Key Features 4th"
        }
      ].map((feature, index) => (
        <section key={index} className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex lg:items-center gap-16 max-lg:flex-col">
              <div className="flex-1 pl-5">
                <div className="text-black/40 text-base font-semibold tracking-[-0.32px] mb-10">{feature.badge}</div>
                <h2 className="text-takallam-gray-800 text-4xl font-medium leading-tight tracking-[-0.72px] mb-5">
                  {feature.title}
                </h2>
                <p className="text-takallam-gray-500 text-base leading-6 mb-8 max-w-[445px]">
                  {feature.description}
                </p>
                <button className="flex items-center gap-2 px-6 py-3 bg-takallam-blue rounded-lg text-white text-base font-semibold hover:bg-blue-500 transition-colors">
                  Book a Demo
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dashboard Mockup */}
              <div className="flex-1 max-w-[535px]">
                <div className="bg-gray-100 rounded-l-[20px] p-10 min-h-[444px] relative overflow-hidden">
                  {/* Gradient Blur Effect */}
                  <div className="absolute bottom-0 left-8 w-40 h-20 bg-gradient-to-r from-blue-400 to-teal-400 opacity-40 blur-[40px]"></div>
                  
                  {/* Dashboard Cards */}
                  <div className="relative z-10 space-y-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h3 className="text-black text-[22px] font-semibold leading-tight mb-4">
                        Takallam: The Voice Co‑Pilot for Every Conversation
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex -space-x-1">
                          <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                          <div className="w-6 h-6 rounded-full bg-gray-200 border border-white"></div>
                        </div>
                        <span>3 Collaborators</span>
                        <span>•</span>
                        <span>Created 2 weeks ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="bg-white rounded-xl p-4 flex-1 shadow-lg">
                        <div className="text-xs text-gray-600 mb-2">Calls handled</div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-medium text-gray-900">2</span>
                          <div className="w-7 h-7 rounded-full bg-blue-200 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex-1 shadow-lg">
                        <div className="text-xs text-gray-600 mb-2">Transferred to Human</div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-medium text-gray-900">32</span>
                          <div className="w-7 h-7 rounded-full bg-green-200 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex-1 shadow-lg">
                        <div className="text-xs text-gray-600 mb-2">Breakdown by Agent</div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-medium text-gray-900">0</span>
                          <div className="w-7 h-7 rounded-full bg-red-200 flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="relative bg-slate-800 py-24">
        {/* Curved divider */}
        <svg className="absolute top-0 left-0 w-full h-17" viewBox="0 0 1440 68" fill="none">
          <path d="M1440 51.3595C815.174 92.4472 219.656 47.8691 0 20.4441V0H1440V23.9345V51.3595Z" fill="white"/>
        </svg>

        <div className="max-w-[1151px] mx-auto px-8 pt-16">
          <h2 className="text-white text-[42px] font-bold leading-tight text-center mb-16 max-w-[719px] mx-auto">
            Takallam turns every call into a great customer experience.
          </h2>

          <div className="bg-white rounded-lg p-12 mb-16">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  name: "Jerome Bell",
                  role: "CTO, Waverio",
                  quote: "The easiest and most accurate way to track time across teams and finish the projects. Timely's automatic.",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c740c3e21a12c9f4838d3f6f3d8fd52b223cf3e6?width=120"
                },
                {
                  name: "Leslie Alexander", 
                  role: "President of Marketing, SS",
                  quote: "It is a time tracking solution that helps employees track hours across multiple tasks and projects that software.",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/5fa0d558fbe8a9558777a9e5cde11c94df08a88b?width=120"
                },
                {
                  name: "Wade Warren",
                  role: "Founder, Creaty", 
                  quote: "A simple and affordable solution for capturing employee time to run payroll, invoice clients and manage productivity.",
                  avatar: "https://api.builder.io/api/v1/image/assets/TEMP/c740c3e21a12c9f4838d3f6f3d8fd52b223cf3e6?width=120"
                }
              ].map((testimonial, index) => (
                <div key={index} className="text-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-15 h-15 rounded-full mx-auto mb-6"
                  />
                  <blockquote className="text-takallam-gray-800 text-lg leading-7 mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="text-takallam-gray-800 text-lg font-bold">{testimonial.name}</div>
                    <div className="text-gray-600 text-base">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/20104fc7a9631476afa1f0204e2de8e8d372c79e?width=2084" 
              alt="Partner logos" 
              className="max-w-full h-auto mx-auto opacity-60"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Top Section */}
          <div className="flex justify-between items-center pb-16 border-b border-gray-200 max-lg:flex-col max-lg:gap-8">
            <div className="flex-1">
              <h2 className="text-takallam-gray-800 text-3xl font-bold mb-3">
                Every conversation deserves intelligence.
              </h2>
              <p className="text-takallam-gray-500 text-lg">
                Join over 4,000+ startups already growing with us.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-takallam-blue-light text-takallam-blue rounded-lg text-base font-semibold hover:bg-blue-100 transition-colors">
                Learn more
              </button>
              <button className="px-6 py-3 bg-takallam-blue text-white rounded-lg text-base font-semibold hover:bg-blue-500 transition-colors">
                Start with Takallam
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="py-12 flex justify-between max-lg:flex-col max-lg:gap-8">
            <div className="max-w-[320px]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-[35px] h-[35px] rounded-full bg-takallam-blue flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-black text-[30px] font-bold">Takallam</span>
              </div>
              <p className="text-takallam-gray-600 text-base leading-6">
                AI that listens, understands, and responds like your best team member—across sales, support, and beyond.
              </p>
            </div>

            <div className="flex gap-32 max-lg:gap-8 max-lg:grid max-lg:grid-cols-2">
              {Array.from({length: 4}).map((_, i) => (
                <div key={i}>
                  <h3 className="text-takallam-gray-500 text-sm font-semibold mb-4">Links</h3>
                  <ul className="space-y-3">
                    {['Link 1', 'Link 2', 'Link 3', 'Link 4'].map(link => (
                      <li key={link}>
                        <a href="#" className="text-takallam-gray-600 text-base hover:text-takallam-blue transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-takallam-gray-50 py-12">
          <div className="max-w-[1216px] mx-auto px-8 flex justify-between items-center max-lg:flex-col max-lg:gap-6">
            <p className="text-takallam-gray-400 text-base">
              © 2025 Takallam. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-takallam-gray-400 hover:text-takallam-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-takallam-gray-400 hover:text-takallam-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-takallam-gray-400 hover:text-takallam-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
