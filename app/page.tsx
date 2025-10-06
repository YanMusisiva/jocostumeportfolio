"use client";

import React, { useState } from "react";
import {
  Scissors,
  Award,
  Users,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Instagram,
  Facebook,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  height: "small" | "medium" | "large" | "short" | "tall";
};

const PortfolioPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [currentPage, setCurrentPage] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleSubmit = (): void => {
    alert("Message envoyé! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  const openModal = (project: Project) => {
    setSelectedImage(project);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 1));
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Collection Mariage Royale",
      category: "Mariée",
      image: "/1.jpg",
      height: "tall",
    },
    {
      id: 2,
      title: "Costumes Sur Mesure Executive",
      category: "Costume Homme",
      image: "/2.jpg",
      height: "medium",
    },
    {
      id: 3,
      title: "Robes de Soirée Élégantes",
      category: "Soirée",
      image: "/3.jpg",
      height: "short",
    },
    {
      id: 4,
      title: "Tenues Traditionnelles Modernes",
      category: "Traditionnel",
      image: "/4.jpg",
      height: "tall",
    },
    {
      id: 5,
      title: "Collection Business Femme",
      category: "Professionnel",
      image: "/5.jpg",
      height: "medium",
    },
    {
      id: 6,
      title: "Costumes Cérémonie Enfants",
      category: "Enfants",
      image: "/6.jpg",
      height: "short",
    },
  ];

  const allProjects: Project[] = [
    ...projects,
    {
      id: 7,
      title: "Robes Cocktail Premium",
      category: "Soirée",
      image: "/7.jpg",
      height: "tall",
    },
    {
      id: 8,
      title: "Tuxedos Personnalisés",
      category: "Costume Homme",
      image: "/8.jpg",
      height: "medium",
    },
    {
      id: 9,
      title: "Collection Été Chic",
      category: "Casual Luxe",
      image: "/9.jpg",
      height: "short",
    },
    {
      id: 10,
      title: "Robes de Bal Exclusive",
      category: "Soirée",
      image: "/10.jpg",
      height: "tall",
    },
    {
      id: 11,
      title: "Costumes Trois Pièces",
      category: "Costume Homme",
      image: "/11.jpg",
      height: "medium",
    },
    {
      id: 12,
      title: "Collection Afro-Fusion",
      category: "Traditionnel",
      image: "/12.jpg",
      height: "short",
    },
    {
      id: 13,
      title: "Élégance Parisienne",
      category: "Soirée",
      image: "/13.jpg",
      height: "tall",
    },
    {
      id: 14,
      title: "Style Corporate",
      category: "Professionnel",
      image: "/14.jpg",
      height: "medium",
    },
    {
      id: 15,
      title: "Mariage Romantique",
      category: "Mariée",
      image: "/15.jpg",
      height: "tall",
    },
  ];

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Couture Sur Mesure",
      desc: "Création personnalisée selon vos mesures et vos goûts",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Retouches Premium",
      desc: "Ajustements parfaits pour vos vêtements de luxe",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultation Privée",
      desc: "Rendez-vous personnel pour discuter de votre projet",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Collections Exclusives",
      desc: "Pièces uniques créées par nos maîtres artisans",
    },
  ];

  type ImageModalProps = {
    image: Project | null;
    zoomLevel: number;
    onClose: () => void;
    onZoomIn: () => void;
    onZoomOut: () => void;
  };

  const ImageModal = ({
    image,
    zoomLevel,
    onClose,
    onZoomIn,
    onZoomOut,
  }: ImageModalProps) => {
    if (!image) return null;

    return (
      <div
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all z-10"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="absolute top-6 left-6 flex gap-3 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              zoomIn();
            }}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <ZoomIn className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              zoomOut();
            }}
            className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all"
          >
            <ZoomOut className="w-6 h-6 text-white" />
          </button>
        </div>

        <div
          className="max-w-6xl max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.image}
            alt={image.title}
            style={{
              transform: `scale(${zoomLevel})`,
              transition: "transform 0.3s ease",
            }}
            className="w-full h-auto rounded-lg"
          />
          <div className="bg-[#1a3a52] p-6 mt-4 rounded-lg">
            <span className="inline-block px-3 py-1 bg-[#f0a500] text-[#1a3a52] text-xs font-semibold mb-3">
              {image.category}
            </span>
            <h3 className="text-2xl font-bold text-white">{image.title}</h3>
          </div>
        </div>
      </div>
    );
  };

  if (currentPage === "gallery") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1a3a52] to-slate-900 text-white">
        <ImageModal
          image={selectedImage}
          zoomLevel={zoomLevel}
          onClose={closeModal}
          onZoomIn={zoomIn}
          onZoomOut={zoomOut}
        />

        <nav className="fixed top-0 w-full bg-[#1a3a52]/90 backdrop-blur-md z-50 border-b border-[#f0a500]/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1a3a52] font-bold text-xl">JO</span>
              </div>
              <span className="text-2xl font-bold text-white">Costume</span>
            </button>
            <button
              onClick={() => setCurrentPage("home")}
              className="px-6 py-2 border-2 border-[#f0a500] text-[#f0a500] hover:bg-[#f0a500] hover:text-[#1a3a52] transition-all font-semibold"
            >
              Retour
            </button>
          </div>
        </nav>

        <div className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Nos <span className="text-[#f0a500]">Œuvres</span> Complètes
              </h1>
              <p className="text-xl text-slate-300">
                L'excellence dans chaque création
              </p>
            </div>

            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => openModal(project)}
                  className="group relative overflow-hidden bg-slate-800 rounded-lg hover:opacity-90 transition-all duration-300 break-inside-avoid cursor-pointer mb-4"
                >
                  <div
                    className={`overflow-hidden ${
                      project.height === "tall"
                        ? "h-80"
                        : project.height === "medium"
                        ? "h-60"
                        : "h-48"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="inline-block px-2 py-1 bg-[#f0a500] text-[#1a3a52] text-[10px] font-semibold mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-sm font-bold text-white line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1a3a52] to-slate-900 text-white">
      <ImageModal
        image={selectedImage}
        zoomLevel={zoomLevel}
        onClose={closeModal}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
      />

      <nav className="fixed top-0 w-full bg-[#1a3a52]/90 backdrop-blur-md z-50 border-b border-[#f0a500]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#1a3a52] font-bold text-xl">JO</span>
            </div>
            <span className="text-2xl font-bold text-white">Costume</span>
          </div>

          {/* Liens desktop */}
          <div className="hidden md:flex gap-8">
            <a
              href="#services"
              className="text-slate-200 hover:text-[#f0a500] transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#projets"
              className="text-slate-200 hover:text-[#f0a500] transition-colors font-medium"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-slate-200 hover:text-[#f0a500] transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden bg-[#1a3a52] overflow-hidden transition-max-h duration-300 ${
            mobileMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="flex flex-col p-4 gap-4">
            <a
              href="#services"
              className="text-white hover:text-[#f0a500] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projets"
              className="text-white hover:text-[#f0a500] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#f0a500] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                L'Art de la Couture{" "}
                <span className="text-[#f0a500]">d'Exception</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Découvrez l'excellence artisanale où chaque fil raconte une
                histoire de raffinement et d'élégance intemporelle.
              </p>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#f0a500] text-[#1a3a52] font-bold hover:bg-[#d89400] transition-all shadow-lg shadow-[#f0a500]/20"
                >
                  Prendre Rendez-vous
                </a>
                <a
                  href="#projets"
                  className="px-8 py-4 border-2 border-[#f0a500] text-[#f0a500] font-bold hover:bg-[#f0a500] hover:text-[#1a3a52] transition-all"
                >
                  Voir Nos Créations
                </a>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-[#f0a500] blur-3xl opacity-10"></div>
              <div className="relative w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#1a3a52]">
                <div className="text-center">
                  <div className="text-8xl font-bold text-[#1a3a52] mb-2">
                    JO
                  </div>
                  <div className="text-3xl font-light text-[#1a3a52] italic">
                    Costume
                  </div>
                  <div className="mt-4 text-sm text-[#f0a500] font-semibold">
                    ATELIER DE COUTURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Nos Services <span className="text-[#f0a500]">d'Excellence</span>
            </h2>
            <p className="text-xl text-slate-300">
              Un savoir-faire unique au service de votre élégance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 bg-gradient-to-br from-[#1a3a52] to-slate-800 border-2 border-slate-700 hover:border-[#f0a500]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#f0a500]/10"
              >
                <div className="text-[#f0a500] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Nos Créations <span className="text-[#f0a500]">Signature</span>
            </h2>
            <p className="text-xl text-slate-300">
              Chaque pièce est une œuvre d'art
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className="group relative overflow-hidden bg-slate-800 rounded-lg hover:opacity-90 transition-all duration-300 break-inside-avoid cursor-pointer mb-4"
              >
                <div
                  className={`overflow-hidden ${
                    project.height === "tall"
                      ? "h-80"
                      : project.height === "medium"
                      ? "h-60"
                      : "h-48"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="inline-block px-2 py-1 bg-[#f0a500] text-[#1a3a52] text-[10px] font-semibold mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-bold text-white line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage("gallery")}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#f0a500] text-[#1a3a52] text-lg font-bold hover:bg-[#d89400] transition-all shadow-lg shadow-[#f0a500]/30"
            >
              Voir Toutes Nos Œuvres
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-white">
                Contactez<span className="text-[#f0a500]">-Nous</span>
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Prenez rendez-vous pour découvrir l'excellence de notre atelier
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#f0a500] mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                    <p className="text-slate-300">+256 XXX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#f0a500] mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-slate-300">contact@jocostume.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#f0a500] mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Adresse</h3>
                    <p className="text-slate-300">Kampala, Uganda</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="font-semibold text-white mb-4">Suivez-nous</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a3a52] border-2 border-slate-700 hover:border-[#f0a500] flex items-center justify-center transition-all hover:bg-[#f0a500] hover:text-[#1a3a52]"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a3a52] border-2 border-slate-700 hover:border-[#f0a500] flex items-center justify-center transition-all hover:bg-[#f0a500] hover:text-[#1a3a52]"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1a3a52] to-slate-800 p-8 border-2 border-[#f0a500]/20">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#f0a500]">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 focus:border-[#f0a500] outline-none transition-colors text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#f0a500]">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 focus:border-[#f0a500] outline-none transition-colors text-white"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#f0a500]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 focus:border-[#f0a500] outline-none transition-colors text-white resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-[#f0a500] text-[#1a3a52] font-bold hover:bg-[#d89400] transition-all shadow-lg shadow-[#f0a500]/30"
                >
                  Envoyer le Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800 bg-[#1a3a52]">
        <div className="max-w-7xl mx-auto text-center text-slate-300">
          <p className="mb-2">
            © 2025{" "}
            <span className="text-[#f0a500] font-semibold">JO Costume</span>.
            Tous droits réservés.
          </p>
          <p className="text-sm">
            Atelier de Couture d'Excellence - Kampala, Uganda
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;
