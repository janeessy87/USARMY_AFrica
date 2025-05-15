import { useState } from "react";

import USLOGO from '../../uploads/USLog.png'

import "./index.css";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

function ProductCard({ image, title, description, price, link }: ProductCardProps) {
  // fallback placeholder for when image is broken
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div className="bg-[#353913]/80 border border-[#bda56a] rounded-lg shadow-md p-4 flex flex-col items-center font-mono transition group hover:shadow-xl hover:border-[#ffe96a]">
      <img
        src={imgSrc}
        alt={imgSrc === image ? title : `Placeholder for ${title}`}
        onError={() => setImgSrc("https://www.same-assets.com/static/army-placeholder.png")}
        className="h-40 w-40 object-cover rounded mb-3 border border-[#ffe96a]/50 group-hover:border-[#ffe96a] bg-[#23291a]"
      />
      <h3 className="text-lg text-[#ffe96a] tracking-wide font-bold mb-1 text-center">{title}</h3>
      <p className="text-xs text-[#ece7d1]/70 mb-2 text-center">{description}</p>
      <div className="flex items-center w-full justify-between mt-auto">
        <span className="text-sm text-[#ece7d1] font-bold">{price}</span>
        <a target="_blank" rel="noopener noreferrer" href={link} className="ml-2 px-3 py-1 bg-[#bda56a] text-[#23291a] rounded font-bold shadow hover:bg-[#ffe96a] transition text-xs">Buy on Amazon</a>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-[#353913]/80 border border-[#bda56a] text-[#ece7d1]">
      <h2 className="text-3xl font-bold mb-4 text-[#ffe96a] tracking-wider">About Our Mission</h2>
      <p className="mb-4">US Army Shop is a proud affiliate site, connecting enthusiasts, collectors, and families to the best Army-themed gear, memorabilia, and collectibles from top-rated retailers. We aim to honor Army history and provide amazing, authentic finds across eras.</p>
      <p className="mb-2"><strong>Affiliate Disclosure:</strong> Some links on our site are affiliate links. We may earn a commission if you make a purchase through these links, at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases.</p>
      <div className="text-sm text-[#ffe96a] mt-2">This website is not affiliated with, endorsed by, or an official site of the U.S. Army or Government.</div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-lg mx-auto my-10 p-8 rounded-lg bg-[#353913]/80 border border-[#bda56a] text-[#ece7d1]">
      <h2 className="text-3xl font-bold mb-6 text-[#ffe96a] tracking-wider">Contact Us</h2>
      <form className="flex flex-col gap-4" onSubmit={e => { e.preventDefault(); alert('Thank you for contacting us!'); }}>
        <input placeholder="Your Name" required className="rounded p-2 bg-[#23291a]/70 border border-[#bda56a] focus:ring focus:ring-[#ffe96a]" />
        <input placeholder="Your Email" type="email" required className="rounded p-2 bg-[#23291a]/70 border border-[#bda56a] focus:ring focus:ring-[#ffe96a]" />
        <textarea placeholder="Your Message" rows={4} required className="rounded p-2 bg-[#23291a]/70 border border-[#bda56a] focus:ring focus:ring-[#ffe96a]" />
        <button type="submit" className="bg-[#bda56a] hover:bg-[#ffe96a] text-[#23291a] font-bold px-6 py-2 rounded shadow transition">Send Message</button>
      </form>
      <div className="mt-6 text-sm text-[#ece7d1]/80">Or email us directly at: <a href="mailto:info@usarmyshop.com" className="underline text-[#ffe96a]">info@usarmyshop.com</a></div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  // fallback for logo
  const [logoError, setLogoError] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-[#23291a] text-[#ece7d1] font-sans bg-[url('https://www.transparenttextures.com/patterns/camo.png')] bg-repeat">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 border-b border-[#bda56a] bg-[#11140a]/90 backdrop-blur gap-2">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 flex items-center justify-center bg-[#23291a] border border-[#bda56a] rounded">
            {logoError ? (
              <span className="text-xs text-[#ffe96a]">Logo unavailable</span>
            ) : (
              <img
                src={USLOGO}
                alt="US Army star logo"
                className="h-11 w-11 object-contain border border-[#ffe96a]/70 rounded"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          <span className="text-2xl font-extrabold tracking-widest font-mono text-[#ffe96a]">US Army Shop</span>
        </div>
        <nav className="flex gap-6 font-bold text-lg items-center">
          <button onClick={() => setPage("home")} className={`hover:text-[#ffe96a] ${page === "home" ? "text-[#ffe96a] underline" : ""}`}>Home</button>
          <button onClick={() => setPage("about")} className={`hover:text-[#ffe96a] ${page === "about" ? "text-[#ffe96a] underline" : ""}`}>About</button>
          <button onClick={() => setPage("contact")} className={`hover:text-[#ffe96a] ${page === "contact" ? "text-[#ffe96a] underline" : ""}`}>Contact</button>
        </nav>
      </header>

      {page === "home" && (
        <>
        {/* Support Banner */}
        <div className="w-full bg-[#40874b] text-white text-center py-2 font-bold tracking-wide shadow-inner border-b-2 border-[#ffe96a]">
            Supporting Our Deployed US Army Personnel in Africa
          </div>
          {/* Africa Mission Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start gap-6 px-4 py-10 md:py-16 max-w-5xl mx-auto">
            <img src="https://api.army.mil/e2/c/images/2025/05/14/1bd049b5/size2.jpg" alt="US Army in Africa" className="w-full max-w-xs rounded shadow border-4 border-[#bda56a]" />
            <div className="flex-1 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-[#ffe96a] mb-2 tracking-wide">Standing With Those Who Serve in Africa</h3>
              <p className="mb-2 text-[#ece7d1]">We proudly support the brave men and women of the U.S. Army serving on missions across Africa, providing security, humanitarian aid, and partnership. Your service is recognized and appreciated.</p>
              <ul className="list-disc ml-6 text-[#ece7d1]/90 text-sm space-y-1">
                <li>Honoring all Army branches deployed to Africa</li>
                <li>Featuring field-ready gear: desert &amp; tropic camo, hydration packs, mission tech</li>
                <li>Connecting families and supporters with care ideas</li>
                <li className="text-[#ffe96a] font-bold">Thank you for your commitment and sacrifice!</li>
              </ul>
            </div>
          </section>
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-5xl font-extrabold mb-4 tracking-tighter">
              <span className="text-[#ffe96a]">Army Strong</span>: Vintage & Modern Gear, Collectibles & Rides
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Explore authentic and inspired US Army apparel, memorabilia, and vehicles. Whether you're a history buff, an enthusiast, or looking for the perfect gift—our affiliate shop offers both classic and modern items for all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 my-4 justify-center">
              <a href="#vintage" className="bg-[#bda56a] hover:bg-[#ffe96a] text-[#23291a] font-bold px-6 py-3 rounded shadow-lg transition">Shop Vintage</a>
              <a href="#modern" className="bg-[#ffe96a] hover:bg-[#bda56a] text-[#23291a] font-bold px-6 py-3 rounded shadow-lg transition">Modern Picks</a>
              <a href="#transport" className="bg-[#23291a] border border-[#ffe96a] text-[#ffe96a] hover:bg-[#bda56a] hover:text-[#23291a] font-bold px-6 py-3 rounded shadow-lg transition">See Transportation</a>
            </div>
          </section>
          {/* Products */}
          <main className="flex-1 px-2 md:px-10 max-w-screen-xl mx-auto pb-10 space-y-20">
            {/* Vintage Section */}
            <section id="vintage">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wider text-[#ffe96a]">Vintage Gear</h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <ProductCard
                  image="https://m.media-amazon.com/images/I/71LufOxt7EL._AC_UL320_.jpg"
                  title="US Army WWII Vintage Jacket"
                  description="Inspired by World War II issue gear, this rugged jacket is perfect for collectors or trendsetters."
                  price="$59.99"
                  link="https://www.amazon.com/dp/B007NZS3LO?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/81KgAI8A0QL._AC_UL320_.jpg"
                  title="Authentic Army Canvas Duffle"
                  description="Classic olive drab canvas bag, hefty, ideal for travel or décor."
                  price="$38.99"
                  link="https://www.amazon.com/dp/B0037ZB1E4?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/91j24f7Y8BL._AC_UL320_.jpg"
                  title="WWII Jeep Tin Model"
                  description="Handcrafted vintage military Jeep tin model. Nostalgic and collectible."
                  price="$26.95"
                  link="https://www.amazon.com/dp/B074WGHWGV?tag=sampleaffid"
                />
              </div>
            </section>

            {/* Modern Section */}
            <section id="modern">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wider text-[#ffe96a]">Modern Gear</h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <ProductCard
                  image="https://m.media-amazon.com/images/I/817P18b3kNL._AC_UL320_.jpg"
                  title="US Army Men's Digital Camo Cap"
                  description="Show Army pride: wear this adjustable modern camo cap—current issue pattern."
                  price="$15.50"
                  link="https://www.amazon.com/dp/B01LXUSNME?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/71WZz6794NL._AC_UL320_.jpg"
                  title="Hydration Tactical Backpack"
                  description="Rugged 3L backpack: hiking, camping, or authentic field style. Army logo patch included!"
                  price="$45.99"
                  link="https://www.amazon.com/dp/B09J2R1L93?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/81TOAbMOCRL._AC_UL320_.jpg"
                  title="Army Tech Watch Rugged 2.0"
                  description="Modern tactical smartwatch—fitness, GPS, and durability for the field."
                  price="$74.85"
                  link="https://www.amazon.com/dp/B08VW2FF1N?tag=sampleaffid"
                />
              </div>
            </section>

            {/* Transportation Section */}
            <section id="transport">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wider text-[#ffe96a]">Army Transportation</h2>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                <ProductCard
                  image="https://m.media-amazon.com/images/I/61g7d4zIFvL._AC_UL320_.jpg"
                  title="1:18 M38A1 Army Jeep Model"
                  description="Highly detailed diecast Jeep for collections or display."
                  price="$39.99"
                  link="https://www.amazon.com/dp/B000GHLD92?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/81A3eh3AEfL._AC_UL320_.jpg"
                  title="M1 Abrams Tank RC Model"
                  description="Remote control tank: realistic sound and firing, the ultimate collectible toy."
                  price="$69.88"
                  link="https://www.amazon.com/dp/B099QG2CWX?tag=sampleaffid"
                />
                <ProductCard
                  image="https://m.media-amazon.com/images/I/718xPpKv8lL._AC_UL320_.jpg"
                  title="Army Black Hawk Helicopter Toy"
                  description="Play or display: rugged die-cast Army helicopter for all ages."
                  price="$29.50"
                  link="https://www.amazon.com/dp/B07XGFG6C9?tag=sampleaffid"
                />
              </div>
            </section>
          </main>
        </>
      )}
      {page === "about" && <AboutPage />}
      {page === "contact" && <ContactPage />}
      {/* Footer */}
      <footer className="px-4 py-8 border-t border-[#bda56a] bg-[#11140a]/75 text-xs text-[#ece7d1]/80 text-center">
        <div className="mb-2">
          <strong>Disclaimer:</strong> This website is an independent affiliate and is not an official U.S. Government or Military site. All purchases are made through third-party partners.
        </div>
        <div className="mb-2">As an Amazon Associate, we earn from qualifying purchases. | © {new Date().getFullYear()} US Army Shop</div>
      </footer>
    </div>
  );
}

export default App;