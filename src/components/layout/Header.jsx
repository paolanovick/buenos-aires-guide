import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["bienvenida", "barrios", "lugares", "tango"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { name: t("header.home"), id: "hero", href: "/#hero" },
    { name: t("header.welcome"), id: "bienvenida", href: "/#bienvenida" },
    { name: t("header.neighborhoods"), id: "barrios", href: "/#barrios" },
    { name: t("header.places"), id: "lugares", href: "/#lugares" },
    { name: t("header.tango"), id: "tango", href: "/#tango" },
  ];

  const isActiveLink = (linkId) => {
    return (
      activeSection === linkId || (linkId === "hero" && activeSection === "")
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-white/95 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-serif font-bold text-primary hover:text-secondary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Buenos Aires Guide
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors relative ${
                  isActiveLink(link.id)
                    ? "text-secondary"
                    : "text-primary hover:text-secondary"
                }`}
              >
                {link.name}
                {isActiveLink(link.id) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"></span>
                )}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => changeLanguage("es")}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                i18n.language === "es"
                  ? "text-secondary"
                  : "text-gray-400 hover:text-secondary"
              }`}
            >
              ES
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                i18n.language === "en"
                  ? "text-secondary"
                  : "text-gray-400 hover:text-secondary"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                    isActiveLink(link.id)
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                    i18n.language === "es"
                      ? "text-secondary"
                      : "text-gray-400 hover:text-secondary"
                  }`}
                >
                  ES
                </button>
                <span className="text-gray-300">|</span>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                    i18n.language === "en"
                      ? "text-secondary"
                      : "text-gray-400 hover:text-secondary"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

