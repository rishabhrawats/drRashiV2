import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { discoverTopics, techniques, expertiseAreas } from '../data/mock';
import { BookOpen, ArrowRight, CheckCircle, Zap, Radio, Heart, AlertCircle, FileText } from 'lucide-react';

const DiscoverPage = () => {
  const { topic } = useParams();

  // If no specific topic, show the main discover page
  if (!topic) {
    return (
      <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
        {/* Header */}
        <section className="py-12 lg:py-16 bg-[#f8f7f2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="text-sm text-[#c4a35a] tracking-wider uppercase mb-4">Education Hub</p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6">
              Discover: Oncology & Radiation
            </h1>
            <p className="text-lg text-[#4a4a4a] max-w-3xl">
              A patient learning portal to understand radiation oncology, treatment techniques, and cancer awareness.
            </p>
          </div>
        </section>

        {/* Topics Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 gap-6">
              {discoverTopics.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`group p-8 border transition-all hover:border-[#0d5c63]/40 ${
                    index === 0
                      ? 'md:col-span-2 bg-[#0d5c63] text-white border-[#0d5c63]'
                      : 'bg-[#f8f7f2] border-[#e5e4df]'
                  }`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center mb-4 ${
                    index === 0 ? 'bg-white/10' : 'bg-[#0d5c63]/10'
                  }`}>
                    <BookOpen size={20} className={index === 0 ? 'text-white' : 'text-[#0d5c63]'} />
                  </div>
                  <h3 className={`font-serif text-xl mb-2 ${
                    index === 0 ? 'text-white' : 'text-[#1a1a1a]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    index === 0 ? 'text-white/80' : 'text-[#4a4a4a]'
                  }`}>
                    {item.description}
                  </p>
                  <div className={`flex items-center gap-2 text-sm ${
                    index === 0 ? 'text-white' : 'text-[#0d5c63]'
                  }`}>
                    <span>Learn more</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Render specific topic pages
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-[#fffef8]">
      {topic === 'radiation-oncology' && (
        <>
          <section className="py-12 lg:py-16 bg-[#f8f7f2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <Link to="/discover" className="text-sm text-[#0d5c63] hover:underline mb-4 inline-block">
                ← Back to Discover
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Understanding Radiation Oncology
              </h1>
            </div>
          </section>
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-8">
              <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">What is Radiation Oncology?</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Radiation oncology is a medical specialty that uses high-energy radiation to treat cancer. 
                  It works by damaging the DNA of cancer cells, preventing them from growing and dividing.
                </p>
              </div>
              <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">How Does Radiation Therapy Work?</h3>
                <p className="text-[#4a4a4a] leading-relaxed">
                  Radiation therapy uses carefully targeted beams of energy to destroy cancer cells while minimizing 
                  damage to surrounding healthy tissue. Modern techniques allow for precise delivery of radiation.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {topic === 'ebrt-vs-brachytherapy' && (
        <>
          <section className="py-12 lg:py-16 bg-[#f8f7f2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <Link to="/discover" className="text-sm text-[#0d5c63] hover:underline mb-4 inline-block">
                ← Back to Discover
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                External Beam vs Brachytherapy
              </h1>
            </div>
          </section>
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                    <Zap size={20} className="text-[#0d5c63]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">External Beam Radiotherapy</h3>
                  <ul className="space-y-2 text-sm text-[#4a4a4a]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Radiation delivered from outside the body</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Multiple sessions over several weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Non-invasive treatment</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#0d5c63]/10 mb-4">
                    <Radio size={20} className="text-[#0d5c63]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Brachytherapy</h3>
                  <ul className="space-y-2 text-sm text-[#4a4a4a]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Radiation source placed inside/near tumor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Higher dose directly to tumor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-[#0d5c63] mt-0.5 flex-shrink-0" />
                      <span>Fewer treatment sessions needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {topic === 'precision-techniques' && (
        <>
          <section className="py-12 lg:py-16 bg-[#f8f7f2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <Link to="/discover" className="text-sm text-[#0d5c63] hover:underline mb-4 inline-block">
                ← Back to Discover
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Precision Radiation Techniques
              </h1>
            </div>
          </section>
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="grid md:grid-cols-2 gap-4">
                {techniques.slice(0, 6).map((tech) => (
                  <div key={tech.id} className="p-4 bg-[#f8f7f2] border border-[#e5e4df]">
                    <h4 className="font-serif text-lg text-[#1a1a1a]">{tech.name}</h4>
                    <p className="text-xs text-[#7a7a7a] mb-2">{tech.fullName}</p>
                    <p className="text-sm text-[#4a4a4a]">{tech.what}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {topic === 'women-cancer-awareness' && (
        <>
          <section className="py-12 lg:py-16 bg-[#f8f7f2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <Link to="/discover" className="text-sm text-[#0d5c63] hover:underline mb-4 inline-block">
                ← Back to Discover
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Cancer Awareness for Women
              </h1>
            </div>
          </section>
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6">
              <div className="p-6 bg-[#0d5c63] text-white">
                <Heart size={24} className="mb-4" />
                <h3 className="font-serif text-xl text-white mb-2">Early Detection Saves Lives</h3>
                <p className="text-white/80">Regular screening and awareness are key to early detection of breast and gynecological cancers.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                  <h4 className="font-serif text-lg text-[#1a1a1a] mb-2">Breast Cancer</h4>
                  <p className="text-sm text-[#4a4a4a]">Regular self-examination and mammography screening are important for early detection.</p>
                </div>
                <div className="p-6 bg-[#f8f7f2] border border-[#e5e4df]">
                  <h4 className="font-serif text-lg text-[#1a1a1a] mb-2">Cervical Cancer</h4>
                  <p className="text-sm text-[#4a4a4a]">Pap smear and HPV testing can detect precancerous changes early.</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {topic === 'appointment-guide' && (
        <>
          <section className="py-12 lg:py-16 bg-[#f8f7f2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <Link to="/discover" className="text-sm text-[#0d5c63] hover:underline mb-4 inline-block">
                ← Back to Discover
              </Link>
              <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
                Appointment Preparation Guide
              </h1>
            </div>
          </section>
          <section className="py-12 lg:py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
              <div className="space-y-4">
                {[
                  { title: 'Bring your medical records', desc: 'Previous test results, imaging reports, and treatment history' },
                  { title: 'List your medications', desc: 'All current medications including supplements' },
                  { title: 'Prepare your questions', desc: 'Write down any concerns or questions you have' },
                  { title: 'Bring a support person', desc: 'Having someone with you can help remember information' },
                  { title: 'Arrive early', desc: 'Allow time for registration and paperwork' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#f8f7f2] border border-[#e5e4df]">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#0d5c63] text-white text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1a1a1a]">{item.title}</h4>
                      <p className="text-sm text-[#4a4a4a]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d5c63] text-white text-sm font-medium hover:bg-[#094449] transition-colors"
                >
                  Book Your Appointment
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default DiscoverPage;
