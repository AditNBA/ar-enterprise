import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "https://images.meesho.com/images/products/439693850/nwx4x_512.avif?width=512",
    link: "https://www.meesho.com/classic-elegant-women-jeans/p/79s5y2",
  },
  {
    id: 2,
    src: "https://images.meesho.com/images/products/307163145/gplhx_512.avif?width=512",
    link: "https://www.meesho.com/classy-designer-women-jeans/p/52vkll",
  },
  {
    id: 3,
    src: "https://images.meesho.com/images/products/624153222/qgfdz_512.avif?width=512",
    link: "https://www.meesho.com/fancy-glamorous-women-shirts/p/ablrp",
  },
  {
    id: 4,
    src: "https://images.meesho.com/images/products/686684525/1tgrg_512.avif?width=512",
    link: "https://www.meesho.com/fancy-glamorous-women-shirts/p/bcu165",
  },
  {
    id: 5,
    src: "https://images.meesho.com/images/products/733131940/ds5nt_512.avif?width=512",
    link: "https://www.meesho.com/shirts-strips-shirts-new-formal-shirts-women-shirts-ladies-shirts/p/c4hk84",
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100">
      <div className="flex items-center justify-between px-4 py-4 md:justify-center">
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-xs tracking-widest">
            HOME
          </Link>
          <Link to="/about" className="text-xs tracking-widest">
            ABOUT
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT
          </Link>
        </div>
      )}
    </nav>
  );
}

function Home() {
  return (
    <>
      <header className="text-center py-12 md:py-24 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl italic font-light mb-4">
          AR Enterprises
        </h1>
        <p className="text-lg italic text-gray-700">
          Crafted for Comfort, Designed for You.
        </p>
      </header>

      <main className="px-3 md:px-6 pb-20 max-w-6xl mx-auto">
        <AutoScrollGallery />
      </main>
    </>
  );
}
// aqddd
function About() {
  return (
    <section className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md border">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl italic font-light mb-4">
            About Us
          </h2>
          <p className="text-gray-600">
            AR Enterprises is a creative fashion and styling brand focused on
            modern aesthetics and timeless elegance.
          </p>
        </div>
      </div>
    </section>
  );
}

function AutoScrollGallery() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (!container) return;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: window.innerWidth > 768 ? 400 : 260,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-5 overflow-x-auto pb-4 no-scrollbar"
    >
      {images.map((img) => (
        <div
          key={img.id}
          className="min-w-[75%] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[420px]"
        >
          <a href={img.link} target="_blank" rel="noopener noreferrer">
            <img
              src={img.src}
              alt=""
              className="w-full min-h-[420px] object-cover rounded-xl shadow-md transition-transform duration-500 hover:scale-105"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-serif">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer className="text-center py-8 border-t text-gray-500">
          28arenterprises@gmail.com
        </footer>
      </div>
    </Router>
  );
}

export default App;
