import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";

// Main logo (splash + navbar)
// change extension if needed
import logo from "./assets/vasantham-logo.jfif";

// Brand logos
import imgMeyabo from "./assets/brands/meyabo.png";
import imgMeyyar from "./assets/brands/meyyar.png";
import imgVincenzo from "./assets/brands/vincenzo.png";
import imgVitali from "./assets/brands/vitali.png";
import imgEthan from "./assets/brands/ethan.png";

/* --- CSS STYLES (Injected directly for single-file portability) --- */
const styles = `
  /* 0. SPLASH SCREEN */
  .splash-overlay {
    position: fixed;
    inset: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
    animation: splashFade 0.8s ease-out forwards;
    animation-delay: 1.8s;
  }

  .splash-logo {
    max-width: 260px;
    width: 70%;
    height: auto;
    animation: logoFloat 1.8s ease-in-out;
  }

  @keyframes logoFloat {
    0%   { transform: translateY(15px); opacity: 0; }
    40%  { transform: translateY(0);    opacity: 1; }
    100% { transform: translateY(0);    opacity: 1; }
  }

  @keyframes splashFade {
    to { opacity: 0; visibility: hidden; }
  }

  /* 1. FONTS & RESETS */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

  :root {
    --color-primary: #0f172a;   /* Deep Navy */
    --color-gold: #c5a059;      /* Muted Gold/Bronze */
    --color-gold-light: #e6c888;
    --color-bg-light: #f8f9fa;  /* Off White */
    --color-white: #ffffff;
    --color-text-dark: #334155;
    --color-text-light: #64748b;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    
    --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background-color: var(--color-bg-light);
    color: var(--color-text-dark);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .wrapper { width: 100%; overflow-x: hidden; position: relative; }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* 2. NAVIGATION */
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: var(--transition);
    background: transparent;
    padding: 20px 0;
  }

  .navbar-scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 12px 0;
    box-shadow: var(--shadow-sm);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .nav-logo-img {
    height: 64px;
    width: auto;
    display: block;
    transition: var(--transition);
  }

  .navbar-scrolled .nav-logo-img {
    height: 52px;
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-white);
  }
  .navbar-scrolled .mobile-menu-btn { color: var(--color-primary); }

  .nav-links a {
    text-decoration: none;
    color: rgba(255,255,255,0.9);
    font-size: 0.95rem;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-gold);
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after { width: 100%; }

  .navbar-scrolled .nav-links a { color: var(--color-text-dark); }
  
  .btn-primary-small {
    padding: 8px 24px;
    border: 1px solid var(--color-gold);
    border-radius: 2px;
    color: var(--color-gold) !important;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
  }
  
  .btn-primary-small:hover {
    background: var(--color-gold);
    color: var(--color-primary) !important;
  }

  /* 3. HERO SECTION */
  .hero-section {
    position: relative;
    height: 95vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--color-primary);
    color: var(--color-white);
    overflow: hidden;
  }

  .hero-bg-image {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=2000&auto=format&fit=crop'); 
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: 0;
    animation: zoomEffect 20s infinite alternate;
  }

  @keyframes zoomEffect {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 900px;
    padding: 0 20px;
    opacity: 0;
    animation: fadeUp 1s ease-out forwards;
    animation-delay: 0.2s;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .hero-subtitle {
    display: inline-block;
    color: var(--color-gold);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 0.9rem;
    margin-bottom: 20px;
    font-weight: 600;
    border-bottom: 1px solid var(--color-gold);
    padding-bottom: 5px;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: 25px;
    font-weight: 700;
  }

  .hero-description {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 45px;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 300;
  }

  .hero-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }

  .btn {
    padding: 16px 36px;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    border-radius: 2px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.9rem;
    cursor: pointer;
    display: inline-block;
  }

  .btn-primary {
    background: var(--color-gold);
    color: var(--color-primary);
    border: 1px solid var(--color-gold);
  }
  .btn-primary:hover { 
    background: var(--color-gold-light); 
    border-color: var(--color-gold-light);
    transform: translateY(-2px); 
  }

  .btn-secondary {
    border: 1px solid rgba(255,255,255,0.4);
    color: var(--color-white);
    background: transparent;
  }
  .btn-secondary:hover { 
    border-color: var(--color-white); 
    background: rgba(255,255,255,0.1); 
  }

  /* 4. SECTIONS GENERAL */
  .section { padding: 100px 0; }
  .bg-light { background: #f0f2f5; }
  .bg-white { background: #ffffff; }

  .section-label {
    color: var(--color-gold);
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 3px;
    margin-bottom: 15px;
    font-weight: 600;
    display: block;
  }

  .section-heading {
    font-family: var(--font-heading);
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
  }

  .center-text { text-align: center; max-width: 800px; margin: 0 auto 70px; }
  .section-subheading {
    font-size: 1.1rem;
    color: var(--color-text-light);
  }

  /* 5. ABOUT SECTION */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .about-text p { margin-bottom: 25px; color: var(--color-text-dark); font-size: 1.05rem; }
  
  .about-highlight {
    border-left: 4px solid var(--color-gold);
    padding-left: 20px;
    font-style: italic;
    color: var(--color-primary);
    font-weight: 500;
    margin: 30px 0;
  }

  .stats-row {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    color: var(--color-gold);
    font-weight: 700;
    line-height: 1;
  }

  .stat-label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 5px;
    color: var(--color-text-light);
  }

  .about-image {
    position: relative;
  }
  
  .about-img-main {
    width: 100%;
    border-radius: 4px;
    box-shadow: var(--shadow-lg);
  }

  .about-img-decoration {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--color-gold);
    z-index: -1;
    border-radius: 4px;
  }

  /* 6. PRODUCT GRID */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 40px;
  }

  .product-card {
    background: var(--color-white);
    padding: 40px;
    border-top: 4px solid transparent;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: var(--shadow-sm);
    border-radius: 4px;
    height: 100%;
  }

  .product-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-top-color: var(--color-gold);
  }

  .card-category {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--color-gold);
    letter-spacing: 2px;
    font-weight: 600;
  }

  .card-title {
    font-family: var(--font-heading);
    font-size: 1.75rem;
    color: var(--color-primary);
    margin: 12px 0;
  }

  .card-divider { width: 50px; height: 2px; background: #e2e8f0; margin: 15px 0; transition: width 0.3s; }
  .product-card:hover .card-divider { width: 80px; background: var(--color-gold); }

  .card-text { font-size: 1rem; color: var(--color-text-light); margin-bottom: 25px; flex-grow: 1; }

  .card-features { list-style: none; margin-bottom: 25px; }
  .card-features li {
    display: flex; align-items: flex-start; gap: 12px;
    font-size: 0.9rem; color: var(--color-text-dark); margin-bottom: 10px;
  }
  .icon-check { width: 18px; height: 18px; color: var(--color-gold); flex-shrink: 0; margin-top: 2px; }

  .btn-text {
    background: none; border: none;
    color: var(--color-primary);
    font-weight: 600; cursor: pointer;
    display: flex; align-items: center; gap: 8px;
    padding: 0;
    transition: all 0.2s;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: auto;
  }
  .btn-text:hover { gap: 12px; color: var(--color-gold); }
  .icon-arrow { width: 16px; height: 16px; }

  /* Featured Card Highlight */
  .featured-card {
    background: linear-gradient(145deg, #ffffff 0%, #fffbf2 100%);
    border: 1px solid rgba(197, 160, 89, 0.2);
  }

  /* 7. CONTACT SECTION (info only, no form) */
  .contact-section { 
    padding: 100px 0; 
    background: var(--color-white);
    position: relative;
  }
  
  .contact-grid-layout {
    display: block;
  }

  .contact-detail-row {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .contact-icon-box {
    width: 50px; height: 50px;
    background: var(--color-bg-light);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--color-gold);
    flex-shrink: 0;
  }

  /* 8. BRANDS */
  .brands-section {
    background: var(--color-bg-light);
    text-align: center;
    border-top: 1px solid #e2e8f0;
    padding: 80px 0;
  }
  .brands-heading {
    font-family: var(--font-heading);
    margin-bottom: 30px;
    font-size: 2.2rem;
    color: var(--color-primary);
  }

  .brands-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .brand-logo {
    width: 220px;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
    filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.15));
  }

  .brand-logo:hover {
    transform: scale(1.05);
  }

  /* FOOTER */
  .footer-dark {
    background: #020617;
    color: #cbd5e1;
    padding: 60px 0 20px;
  }

  .footer-flex {
    display: grid;
    grid-template-columns: 2fr 1fr 1.4fr;
    gap: 60px;
    border-bottom: 1px solid rgba(148, 163, 184, 0.25);
    padding-bottom: 40px;
    margin-bottom: 20px;
  }

  .footer-brand-title {
    font-family: var(--font-heading);
    font-size: 1.9rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
  }

  .footer-brand-text {
    font-size: 0.95rem;
    color: #e2e8f0;
    line-height: 1.7;
    margin-bottom: 25px;
  }

  .footer-social {
    display: flex;
    gap: 16px;
  }

  .footer-social a {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid rgba(199, 210, 254, 0.5);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #e2e8f0;
    text-decoration: none;
    transition: var(--transition);
  }
  .footer-social a:hover {
    border-color: var(--color-gold);
    color: var(--color-gold);
    transform: translateY(-2px);
  }

  .footer-column-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 18px;
    color: #e5e7eb;
  }

  .footer-links-list,
  .footer-contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links-list li:not(:last-child),
  .footer-contact-list li:not(:last-child) {
    margin-bottom: 10px;
  }

  .footer-links-list a {
    color: #9ca3af;
    text-decoration: none;
    font-size: 0.95rem;
    transition: var(--transition);
  }
  .footer-links-list a:hover {
    color: var(--color-gold);
  }

  .footer-contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.95rem;
    color: #e5e7eb;
  }

  .footer-contact-icon {
    margin-top: 3px;
    flex-shrink: 0;
  }

  .footer-bottom {
    text-align: center;
    font-size: 0.85rem;
    color: #6b7280;
  }

  /* MODAL */
  .modal-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(15, 23, 42, 0.85); 
    z-index: 2000;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
    backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease-out;
  }
  
  .modal-content {
    background: white; 
    width: 100%; 
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 4px;
    position: relative;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    display: grid;
    grid-template-columns: 1fr;
  }

  .modal-header {
    padding: 30px;
    border-bottom: 1px solid #eee;
    position: sticky; top: 0; background: white; z-index: 10;
    display: flex; justify-content: space-between; align-items: flex-start;
  }

  .modal-body { padding: 30px; }
  
  .modal-image-placeholder {
    width: 100%; height: 250px;
    background: #f1f5f9;
    margin-bottom: 20px;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    color: #94a3b8; font-style: italic;
  }

  .modal-close-btn {
    background: #f1f5f9; border: none; 
    width: 36px; height: 36px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: var(--color-text-dark);
    transition: 0.2s;
  }
  .modal-close-btn:hover { background: #e2e8f0; color: #ef4444; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .hero-title { font-size: 3.5rem; }
    .product-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 768px) {
    .nav-links { 
      display: none; 
      position: absolute;
      top: 100%; left: 0; width: 100%;
      background: var(--color-white);
      flex-direction: column;
      padding: 20px;
      box-shadow: var(--shadow-lg);
      gap: 0;
    }
    .nav-links.active { display: flex; }
    .nav-links li { width: 100%; border-bottom: 1px solid #f1f5f9; }
    .nav-links a { 
      display: block; padding: 15px; 
      color: var(--color-primary); 
    }
    .nav-links a:hover { padding-left: 20px; background: #f8fafc; }
    .mobile-menu-btn { display: block; color: var(--color-primary); }
    .navbar { background: white; padding: 15px 0; box-shadow: var(--shadow-sm); }
    
    .hero-title { font-size: 2.5rem; }
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .product-grid { grid-template-columns: 1fr; }
    .stats-row { justify-content: flex-start; flex-wrap: wrap; }
    .modal-content { margin: 20px; max-height: 80vh; }

    .footer-flex {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;

/* --- SMALL COMPONENTS --- */

const SplashScreen = () => (
  <div className="splash-overlay">
    <img
      src={logo}
      alt="Vasantham Premium Fabrics"
      className="splash-logo"
    />
  </div>
);

const ProductCard = ({ title, category, content, features, onOpen }) => (
  <div className="product-card">

    <div className="card-content">
      <span className="card-category">{category}</span>
      <h3 className="card-title">{title}</h3>
      <div className="card-divider"></div>
      <p className="card-text">{content}</p>

      {features && (
        <ul className="card-features">
          {features.map((item, i) => (
            <li key={i}>
              <Check className="icon-check" /> {item}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="card-action">
      <button className="btn-text" onClick={onOpen}>
        View Details <ArrowRight className="icon-arrow" />
      </button>
    </div>
  </div>
);


const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span
              style={{
                color: "var(--color-gold)",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              {product.category}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "2rem",
                color: "var(--color-primary)",
                margin: "5px 0",
              }}
            >
              {product.title}
            </h2>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image-placeholder">High Resolution Fabric Preview</div>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#334155",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            {product.content} This premium collection represents our commitment to quality.
            Engineered with precision weaving technology, it offers superior durability while
            maintaining a soft, luxurious hand-feel. Perfect for clients who demand excellence in
            every stitch.
          </p>
          <h4 style={{ marginBottom: "15px", color: "var(--color-primary)" }}>
            Key Specifications:
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "15px",
            }}
          >
            {product.features?.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  background: "#f8fafc",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                <Check size={16} style={{ color: "var(--color-gold)" }} /> {f}
              </li>
            )) || <li>Standard Premium Grade</li>}
          </ul>
          <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
            <button
              className="btn btn-primary"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                onClose();
              }}
            >
              Enquire About This Fabric
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* --- MAIN APP COMPONENT --- */

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // scroll styles for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2300);
    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const products = [
    {
      category: "Corporate & Formal",
      title: "Suiting Collections",
      content:
        "From durable polyester-viscose blends to luxurious woolen blends. Sourced from reputed mills in India, ensuring exceptional sophistication for corporate events.",
      features: ["Polyester-Viscose Blends", "Luxurious Wool", "Wrinkle Resistant"],
    },
    {
      category: "Traditional Wear",
      title: "Thoube (Kandora)",
      content:
        "Explore the rich heritage with our 'MEYABO' brand. Japanese, South Korean, and Indonesian fabrics designed to keep you cool and dignified.",
      features: ["Brand: MEYABO", "Japanese Technology", "Cool & Breathable"],
    },
    {
      category: "Healthcare",
      title: "Medical Sector",
      content:
        "Medical-grade fabrics with antimicrobial coating. Designed to reduce cross-contamination while ensuring breathability for long shifts.",
      features: ["Antimicrobial Coating", "Industrial Wash Durable", "Soft Touch"],
    },
    {
      category: "Apparel",
      title: "Shirting Collection",
      content:
        "Premium cotton and linen blends tailored for versatility. Ideal for mass production of corporate uniforms that require a polished look.",
      features: ["Cotton & Linen Blends", "Breathable Weave", "Easy Iron"],
    },
    {
      category: "Performance",
      title: "Stretchable Fabric",
      content:
        "High-quality Lycra blends offering enhanced mobility. The perfect choice for active workwear and uniforms that move with you.",
      features: ["Lycra Infused", "Enhanced Mobility", "Shape Retention"],
    },
    {
      category: "Hospitality",
      title: "Chef & Kitchen",
      content:
        "Expertly crafted poly-cotton blends available in multiple GSM options. Includes eco-friendly recycled polyester choices for sustainable kitchens.",
      features: ["Heavy Duty GSM", "Stain Release", "Recycled Options"],
    },
    {
      category: "Education",
      title: "School Uniforms",
      content:
        "The leading supplier for UAE schools. We provide durable, stain-resistant, and comfortable combinations for students of all ages.",
      features: ["High Durability", "Fade Resistant", "Comfort Fit"],
    },
    {
      category: "Sustainability",
      title: "Eco-Friendly",
      content:
        "Recycled polyester, viscose, and wool blends. We convert standard blends into eco-friendly alternatives without sacrificing quality.",
      features: ["Recycled Materials", "Sustainable Production", "Customizable"],
    },
  ];

  return (
    <div className="wrapper">
      <style>{styles}</style>

      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          {/* --- Navigation --- */}
          <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="container nav-container">
              <a href="#home" className="nav-logo">
                <img
                  src={logo}
                  alt="Vasantham Premium Fabrics"
                  className="nav-logo-img"
                />
              </a>

              <button
                className="mobile-menu-btn"
                onClick={toggleMobileMenu}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
                <li>
                  <a href="#home" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#collections" onClick={() => setMobileMenuOpen(false)}>
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#brands" onClick={() => setMobileMenuOpen(false)}>
                    Brands
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="btn-primary-small"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Enquire
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* --- Hero Section --- */}
          <header id="home" className="hero-section">
            <div className="hero-bg-image"></div>
            <div className="hero-content">
              <span className="hero-subtitle">Premium Fabrics Since 2016</span>
              <h1 className="hero-title">
                The Art of
                <br />
                Textile Excellence
              </h1>
              <p className="hero-description">
                Sourcing the finest suiting, shirting, and medical-grade fabrics from India’s most
                reputed mills. Elevating corporate and traditional wear across the UAE.
              </p>
              <div className="hero-buttons">
                <a href="#collections" className="btn btn-primary">
                  View Collections
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </header>

          {/* --- About Section --- */}
          <section id="about" className="section about-section bg-white">
            <div className="container about-grid">
              <div className="about-text">
                <span className="section-label">Our Story</span>
                <h2 className="section-heading">Heritage & Quality</h2>
                <p>
                  <strong>Vasantham Premium Fabrics Trading Co. LLC</strong> was established in 2016
                  as a sister company to Arif Saeed Trading LLC (est. 2006). With deep roots in the
                  textile industry, we bridge the gap between traditional craftsmanship and modern
                  fabric technology.
                </p>
                <div className="about-highlight">
                  "Whether it is the crisp professional look of a corporate uniform or the flowing
                  elegance of a Kandora, we ensure every thread speaks of quality."
                </div>

                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">18+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Client Satisfaction</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Global Partners</span>
                  </div>
                </div>
              </div>

              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop"
                  alt="Premium Fabric Rolls"
                  className="about-img-main"
                />
                <div className="about-img-decoration"></div>
              </div>
            </div>
          </section>

          {/* --- Collections Grid --- */}
          <section id="collections" className="section bg-light">
            <div className="container">
              <div className="center-text">
                <span className="section-label">Our Products</span>
                <h2 className="section-heading">Curated Collections</h2>
                <p className="section-subheading">
                  Discover fabrics engineered for style, durability, and comfort across every
                  industry.
                </p>
              </div>

              <div className="product-grid">
                {products.map((item, index) => (
                  <ProductCard
                    key={index}
                    {...item}
                    onOpen={() => setSelectedProduct(item)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* --- Brands Banner --- */}
          <section id="brands" className="brands-section">
            <div className="container">
              <h2 className="brands-heading">Our Registered Brands</h2>
              <div className="brands-wrapper">
                <img src={imgMeyabo} alt="Meyabo" className="brand-logo" />
                <img src={imgVincenzo} alt="Vincenzo Morratti" className="brand-logo" />
                <img src={imgMeyyar} alt="Meyyar" className="brand-logo" />
                <img src={imgVitali} alt="Vitali Ambrosini" className="brand-logo" />
                <img src={imgEthan} alt="Ethan Smith" className="brand-logo" />
              </div>
            </div>
          </section>

          {/* --- Contact Section (Info only) --- */}
          <section id="contact" className="contact-section">
            <div className="container contact-grid-layout">
              <div className="contact-info">
                <span className="section-label">Get In Touch</span>
                <h2 className="section-heading">Let's Discuss Your Needs</h2>
                <p className="section-subheading" style={{ marginBottom: "40px" }}>
                  Visit us at our Dubai showroom or send us a message to request fabric swatches and
                  quotes.
                </p>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px", color: "var(--color-primary)" }}>
                      Showroom Address
                    </h4>
                    <p style={{ color: "var(--color-text-light)" }}>
                      Shop No. 4, Al Qattan Building
                      <br />
                      Bur Dubai Textile Market, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px", color: "var(--color-primary)" }}>Call Us</h4>
                    <p style={{ color: "var(--color-text-light)" }}>
                      +971 50 959 8705
                      <br />
                      +971 435 39584
                    </p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-icon-box">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: "5px", color: "var(--color-primary)" }}>Email Us</h4>
                    <p style={{ color: "var(--color-text-light)" }}>sales1@vpf.ae</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- Footer --- */}
          <footer className="footer-dark">
            <div className="container">
              <div className="footer-flex">
                {/* Left: Brand & description */}
                <div>
                  <h2 className="footer-brand-title">VASANTHAM</h2>
                  <p className="footer-brand-text">
                    Premium Fabrics Trading Co. LLC
                    <br />
                    Your trusted partner for quality textiles
                    <br />
                    in the UAE since 2016.
                  </p>
                  <div className="footer-social">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                      <Instagram size={16} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                      <Facebook size={16} />
                    </a>
                  </div>
                </div>

                {/* Middle: Quick Links */}
                <div>
                  <h3 className="footer-column-title">Quick Links</h3>
                  <ul className="footer-links-list">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About Us</a>
                    </li>
                    <li>
                      <a href="#collections">Collections</a>
                    </li>
                    <li>
                      <a href="#brands">Our Brands</a>
                    </li>
                  </ul>
                </div>

                {/* Right: Contact Us */}
                <div>
                  <h3 className="footer-column-title">Contact Us</h3>
                  <ul className="footer-contact-list">
                    <li>
                      <span className="footer-contact-icon">
                        <MapPin size={16} />
                      </span>
                      <span>
                        Shop No. 4, Al Qattan Building
                        <br />
                        Bur Dubai Textile Market, Dubai, UAE
                      </span>
                    </li>
                    <li>
                      <span className="footer-contact-icon">
                        <Mail size={16} />
                      </span>
                      <span>sales1@vpf.ae</span>
                    </li>
                    <li>
                      <span className="footer-contact-icon">
                        <Phone size={16} />
                      </span>
                      <span>
                        +971 50 959 8705
                        <br />
                        +971 435 39584
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <p>
                  © {new Date().getFullYear()} Vasantham Premium Fabrics Trading Co. LLC. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>

          {/* Modal */}
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </>
      )}
    </div>
  );
};

export default App;
