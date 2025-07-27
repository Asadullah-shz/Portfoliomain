//if any page not working correctly, you can use this js code sample to fix it. it will add smooth scrolling, responsive menu toggle, and scroll to top button functionality.
// This code is designed to be included in a script.js file linked to your HTML pages.

//this part of the code handles the responsive menu toggle functionality in the navigation bar.

document.addEventListener('DOMContentLoaded', function () {
            const menuButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
            const menu = document.getElementById('navbar-default');

            if (menuButton && menu) {
                menuButton.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }


            const navLinks = document.querySelectorAll('#navbar-default a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
        });


        document.addEventListener('DOMContentLoaded', function () {

            const animatedElements = [
                document.querySelector('main'),
                document.querySelector('whatido'),
                document.querySelector('cloud'),
                document.querySelector('ui')
            ];


            const style = document.createElement('style');
            style.textContent = `
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
      }
      
      .animate-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
            document.head.appendChild(style);


            animatedElements.forEach(el => {
                if (el) el.classList.add('animate-on-scroll');
            });


            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible');

                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });


            animatedElements.forEach(el => {
                if (el) observer.observe(el);
            });
        });
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.style = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  color: white;
  border: 4px solid:orange;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, transform 0.2s;
  font-size: 24px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
`;
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '0.8';
                scrollBtn.style.transform = 'scale(1)';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.transform = 'scale(0.8)';
            }
        });


        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.transform = 'scale(1.1)';
        });
        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.opacity = window.scrollY > 300 ? '0.8' : '0';
            scrollBtn.style.transform = window.scrollY > 300 ? 'scale(1)' : 'scale(0.8)';
        });


//this part of the code handles experience page work section functionality, allowing users to view more details about each work experience when clicked , also added a smooth animation effect to work section appearing on the page.

// It also includes a toggle button to show or hide descriptions of each work experience.

// It allows the menu to be toggled on  screens and hides it when a work button is clicked.

//{


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.style = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #333;
  color: white;
  border: 4px solid:orange;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, transform 0.2s;
  font-size: 24px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
`;
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollBtn.style.opacity = '0.8';
            scrollBtn.style.transform = 'scale(1)';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.transform = 'scale(0.8)';
        }
    });


    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.transform = 'scale(1.1)';
    });
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.opacity = window.scrollY > 100 ? '0.8' : '0';
        scrollBtn.style.transform = window.scrollY > 100 ? 'scale(1)' : 'scale(0.8)';
    });

    const toggleButton = document.getElementById('togglesButton');
    const description = document.getElementById('description');
    const descriptions = document.getElementById('descriptions');
    const descriptionz = document.getElementById('descriptionz');


    toggleButton.addEventListener('click', () => {
        if (description.style.display === 'none' || description.style.display === '') {
            description.style.display = 'block';
            toggleButton.textContent = '-';
        } else {
            description.style.display = 'none';
            toggleButton.textContent = '+';


        }
    });
    toggleButton.addEventListener('click', () => {
        if (descriptions.style.display === 'none' || descriptions.style.display === '') {
            descriptions.style.display = 'block';
            toggleButton.textContent = '-';
        } else {
            descriptions.style.display = 'none';
            toggleButton.textContent = '+';


        }
    });
    toggleButton.addEventListener('click', () => {
        if (descriptionz.style.display === 'none' || descriptionz.style.display === '') {
            descriptionz.style.display = 'block';
            toggleButton.textContent = '-';
        } else {
            descriptionz.style.display = 'none';
            toggleButton.textContent = '+';


        }
    });
    
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1, 
    rootMargin: '0px 0px -100px 0px' 
});


document.querySelectorAll('.exo, .work').forEach((section) => {
    section.classList.add('fade-in-up');
    observer.observe(section);
});

document.querySelectorAll('#description, #descriptions, #descriptionz').forEach((item) => {
    item.classList.add('fade-in-up');
    observer.observe(item);
});

const collapseButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menu = document.getElementById('navbar-default');

if (collapseButton && menu) {
    collapseButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
}

document.addEventListener('click', function(event) {
    const isMenuClicked = menu.contains(event.target);
    const isButtonClicked = collapseButton.contains(event.target);
    const isMenuVisible = !menu.classList.contains('hidden');
    
    if (isMenuVisible && !isMenuClicked && !isButtonClicked) {
        menu.classList.add('hidden');
    }
});


const menuItems = document.querySelectorAll('#navbar-default a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});


//}

/* Add smooth scrolling for anchor links */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* Dark mode toggle */
const darkModeBtn = document.createElement('button');
darkModeBtn.innerHTML = '🌙';
darkModeBtn.title = 'Toggle dark mode';
darkModeBtn.style = `
  position: fixed;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #222;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
  z-index: 1001;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

/* Add dark mode styles */
const darkStyle = document.createElement('style');
darkStyle.textContent = `
  body.dark-mode {
    background: #181818 !important;
    color: #e0e0e0 !important;
  }
  body.dark-mode nav, body.dark-mode header, body.dark-mode footer {
    background: #222 !important;
  }
  body.dark-mode .card, body.dark-mode .work, body.dark-mode .exo {
    background: #232323 !important;
    color: #e0e0e0 !important;
    border-color: #333 !important;
  }
  body.dark-mode a {
    color: #ffa500 !important;
  }
`;
document.head.appendChild(darkStyle);

/* Animate skill bars if present */
document.querySelectorAll('.skill-bar').forEach(bar => {
    const value = bar.getAttribute('data-value');
    bar.style.width = '0%';
    setTimeout(() => {
        bar.style.transition = 'width 1.2s cubic-bezier(.4,0,.2,1)';
        bar.style.width = value;
    }, 400);
});

/* Lazy load images */
if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    lazyImages.forEach(img => imgObserver.observe(img));
}