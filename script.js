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

