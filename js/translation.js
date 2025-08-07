document.addEventListener('DOMContentLoaded', function() {
            const translations = {
                en: {
                    // Navigation
                    'navbar-brand': 'Axel Ulate',
                    'nav-home': 'Home',
                    'nav-about': 'About',
                    'nav-projects': 'Projects',
                    'nav-contact': 'Contact',
                    
                    // Hero
                    'hero-title': 'Hi, I\'m Axel Ulate',
                    'hero-subtitle': 'Full stack developer',
                    'hero-text': 'I create beautiful, responsive web applications with modern technologies and a focus on user experience.',
                    'hero-btn-work': 'View My Work',
                    'hero-btn-contact': 'Contact Me',
                    
                    // About
                    'about-title': 'About Me',
                    'about-heading': 'I design and develop experiences that make people\'s lives simpler.',
                    'about-text': 'Software developer with 13 years of experience in designing, developing, and adapting technological solutions for advertising and commercial projects. Specialized in creating websites, applications, and comprehensive systems that optimize processes and enhance user experience. Known for expertise in modern technologies and commitment to delivering high-quality results in every project.',
                    
                    // Projects
                    'projects-title': 'My Projects',
                    'filter-all': 'All',
                    'filter-web': 'Web Design',
                    'filter-app': 'Web App',
                    'filter-mobile': 'Mobile',
                    'project1-title': 'Usados CrediQ',
                    'project1-desc': 'A fully responsive buy and sell website with extra features like a 360 display and a comparizon widget.',
                    'project2-title': 'CiudadClick.cr',
                    'project2-desc': 'Modern stylish website for a publicity agency',
                    'project3-title': 'RentHeaven',
                    'project3-desc': 'Web app for renting houses in Costa Rica made with Java-spring and Angular',
                    'project-btn': 'View Project',
                    
                    // Contact
                    'contact-title': 'Contact Me',
                    'contact-subtitle': 'Get in Touch',
                    'contact-location': 'Location',
                    'contact-email': 'Email',
                    'contact-phone': 'Phone',
                    'form-name': 'Your Name',
                    'form-email': 'Your Email',
                    'form-subject': 'Subject',
                    'form-message': 'Your Message',
                    'form-submit': 'Send Message',
                    
                    // Footer
                    'footer-home': 'Home',
                    'footer-about': 'About',
                    'footer-projects': 'Projects',
                    'footer-contact': 'Contact',
                    'footer-copyright': '© 2023 Alex Morgan. All Rights Reserved.',
                    
                    // Language button
                    'lang-text': 'Español'
                },
                es: {
                    // Navigation
                    'navbar-brand': 'Axel Ulate',
                    'nav-home': 'Inicio',
                    'nav-about': 'Sobre Mí',
                    'nav-projects': 'Proyectos',
                    'nav-contact': 'Contacto',
                    
                    // Hero
                    'hero-title': 'Hola, soy Axel Ulate',
                    'hero-subtitle': 'Desarrollador full stack',
                    'hero-text': 'Creo aplicaciones web hermosas y responsivas con tecnologías modernas y un enfoque en la experiencia de usuario.',
                    'hero-btn-work': 'Ver Mi Trabajo',
                    'hero-btn-contact': 'Contáctame',
                    
                    // About
                    'about-title': 'Sobre Mí',
                    'about-heading': 'Diseño y desarrollo experiencias que simplifican la vida de las personas.',
                    'about-text': 'Desarrollador de software con 13 años de experiencia en el diseño, desarrollo y adaptación de soluciones tecnológicas para proyectos publicitarios y comerciales. Especializado en la creación de sitios web, aplicaciones y sistemas integrales que optimizan procesos y mejoran la experiencia del usuario. Reconocido por su experiencia en tecnologías modernas y compromiso con la entrega de resultados de alta calidad en cada proyecto.',
                    
                    // Projects
                    'projects-title': 'Mis Proyectos',
                    'filter-all': 'Todos',
                    'filter-web': 'Diseño Web',
                    'filter-app': 'Aplicación Web',
                    'filter-mobile': 'Móvil',
                    'project1-title': 'Usados CrediQ',
                    'project1-desc': 'Sitio web de compra y venta completamente responsive con caracteristicas extra como fotos de 360 grados y pagina de comparaciones.',
                    'project2-title': 'CiudadClick.cr',
                    'project2-desc': 'Sitio web de diseño moderno para una agencia de publicidad',
                    'project3-title': 'RentHeaven',
                    'project3-desc': 'Aplicación Web para renta de casas en Costa Rica echa con Java-spring y Angular',
                    'project-btn': 'Ver Proyecto',
                    
                    // Contact
                    'contact-title': 'Contáctame',
                    'contact-subtitle': 'Ponte en Contacto',
                    'contact-location': 'Ubicación',
                    'contact-email': 'Correo',
                    'contact-phone': 'Teléfono',
                    'form-name': 'Tu Nombre',
                    'form-email': 'Tu Correo',
                    'form-subject': 'Asunto',
                    'form-message': 'Tu Mensaje',
                    'form-submit': 'Enviar Mensaje',
                    
                    // Footer
                    'footer-home': 'Inicio',
                    'footer-about': 'Sobre Mí',
                    'footer-projects': 'Proyectos',
                    'footer-contact': 'Contacto',
                    'footer-copyright': '© 2023 Alex Morgan. Todos los derechos reservados.',
                    
                    // Language button
                    'lang-text': 'English'
                }
            };
            
            let currentLang = 'en';
            const langToggle = document.getElementById('language-toggle');
            const langText = document.getElementById('lang-text');
            
            // Apply translations
            function applyTranslations(lang) {
                // Update all elements with data-translate attribute
                document.querySelectorAll('[data-translate]').forEach(el => {
                    const key = el.getAttribute('data-translate');
                    if (translations[lang][key]) {
                        if (el.placeholder) {
                            el.placeholder = translations[lang][key];
                        } else {
                            el.textContent = translations[lang][key];
                        }
                    }
                });
                
                // Update button text
                langText.textContent = translations[lang]['lang-text'];
            }
            
            // Toggle language
            langToggle.addEventListener('click', () => {
                currentLang = currentLang === 'en' ? 'es' : 'en';
                applyTranslations(currentLang);
            });
            
            // Initialize translations
            applyTranslations(currentLang);
        });