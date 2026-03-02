/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves, 
  Ship, 
  Utensils, 
  Instagram, 
  Facebook, 
  Twitter, 
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

// Componente principale della Landing Page
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 
        NAVBAR: Semplice ed elegante 
      */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-turquoise/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-turquoise tracking-tighter">
            SECRET<span className="text-sand">THAI</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
            <a href="#destinations" className="hover:text-turquoise transition-colors">จุดหมายปลายทาง</a>
            <a href="#services" className="hover:text-turquoise transition-colors">บริการของเรา</a>
            <a href="#contact" className="hover:text-turquoise transition-colors">ติดต่อเรา</a>
          </div>
          <button className="bg-turquoise text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-turquoise/90 transition-all shadow-lg shadow-turquoise/20">
            จองเลย
          </button>
        </div>
      </nav>

      {/* 
        HERO SECTION: Titolo d'impatto e atmosfera tropicale
      */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073" 
            alt="Tropical Beach"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl"
          >
            หาดลับที่รอคุณค้นพบ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 font-light italic"
          >
            สัมผัสประสบการณ์ความหรูหราท่ามกลางธรรมชาติที่บริสุทธิ์ที่สุดของเมืองไทย
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-sand text-slate-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-all shadow-xl flex items-center mx-auto group">
              จองตอนนี้
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 
        DESTINATIONS: Griglia di card con i luoghi suggeriti
      */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">จุดหมายปลายทางยอดนิยม</h2>
            <div className="w-20 h-1 bg-sand mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Maya Bay */}
            <DestinationCard 
              image="https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&q=80&w=800"
              title="อ่าวมาหยา"
              description="สวรรค์บนดินที่มีน้ำใสราวกับคริสตัลและภูเขาหินปูนที่โอบล้อม"
            />
            {/* Koh Lipe */}
            <DestinationCard 
              image="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=800"
              title="เกาะหลีเป๊ะ"
              description="มัลดีฟส์เมืองไทยที่มีหาดทรายขาวละเอียดและปะการังที่สมบูรณ์"
            />
            {/* Railay Beach */}
            <DestinationCard 
              image="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800"
              title="หาดไร่เลย์"
              description="จุดหมายปลายทางระดับโลกสำหรับผู้รักการปีนผาและพระอาทิตย์ตกที่สวยงาม"
            />
          </div>
        </div>
      </section>

      {/* 
        SERVICES: Icone e servizi esclusivi
      */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ServiceItem 
              icon={<Waves className="w-12 h-12 text-turquoise" />}
              title="ดำน้ำตื้นระดับพรีเมียม"
              description="สำรวจโลกใต้ทะเลที่สวยงามพร้อมอุปกรณ์คุณภาพสูงและไกด์ผู้เชี่ยวชาญ"
            />
            <ServiceItem 
              icon={<Ship className="w-12 h-12 text-turquoise" />}
              title="ล่องเรือส่วนตัว"
              description="เดินทางอย่างหรูหราด้วยเรือยอทช์ส่วนตัวไปยังเกาะที่ไม่มีใครรู้จัก"
            />
            <ServiceItem 
              icon={<Utensils className="w-12 h-12 text-turquoise" />}
              title="ดินเนอร์ยามพระอาทิตย์ตก"
              description="ลิ้มรสอาหารไทยฟิวชั่นริมชายหาดท่ามกลางบรรยากาศสุดโรแมนติก"
            />
          </div>
        </div>
      </section>

      {/* 
        FOOTER & CONTACT: Chiusura elegante con form e social
      */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold text-turquoise mb-6">
              SECRET<span className="text-sand">THAI</span>
            </div>
            <p className="text-slate-400 max-w-md mb-8">
              เรามุ่งมั่นที่จะมอบประสบการณ์การเดินทางที่หรูหราและยั่งยืน เพื่อให้คุณได้สัมผัสความงามที่แท้จริงของท้องทะเลไทย
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram />} />
              <SocialIcon icon={<Facebook />} />
              <SocialIcon icon={<Twitter />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-sand">ลิงก์ด่วน</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="#" className="hover:text-white transition-colors">แพ็คเกจทัวร์</a></li>
              <li><a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-sand">รับข่าวสารพิเศษ</h4>
            <p className="text-sm text-slate-400 mb-4">สมัครสมาชิกเพื่อรับข้อเสนอและโปรโมชั่นลับ</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="อีเมลของคุณ" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-turquoise transition-colors"
              />
              <button className="bg-turquoise text-white font-bold py-2 rounded-lg hover:bg-turquoise/80 transition-all">
                ติดตาม
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Secret Thai Luxury Travel. สงวนลิขสิทธิ์.
        </div>
      </footer>
    </div>
  );
}

// Sottocomponente per le card delle destinazioni
function DestinationCard({ image, title, description }: { image: string, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative h-96 overflow-hidden rounded-2xl mb-6 shadow-xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          <MapPin className="w-5 h-5 text-turquoise" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-turquoise transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// Sottocomponente per gli item dei servizi
function ServiceItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center p-8 rounded-3xl bg-white shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

// Sottocomponente per le icone social
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-turquoise hover:border-turquoise transition-all">
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </a>
  );
}
