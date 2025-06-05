document.addEventListener('DOMContentLoaded', () => {

    function updateLocalClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = String(hours).padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);

        const clockElement = document.getElementById('clock');
        const dateElement = document.getElementById('date');

        if (clockElement) {
            clockElement.textContent = timeString;
        }
        if (dateElement) {
            dateElement.textContent = dateString;
        }
    }

    function updateWorldClocks() {
        document.querySelectorAll('.country-clock-card').forEach(card => {
            const timezoneElement = card.querySelector('.world-clock-time');
            const timezone = timezoneElement ? timezoneElement.dataset.timezone : null;

            if (timezone) {
                const now = new Date();

                const timeOptions = {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true,
                    timeZone: timezone
                };
                const dateOptions = {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: timezone
                };

                try {
                    const timeString = now.toLocaleTimeString('en-US', timeOptions);
                    const dateString = now.toLocaleDateString('en-US', dateOptions);

                    if (timezoneElement) {
                        timezoneElement.textContent = timeString;
                    }
                    const dateDisplayElement = card.querySelector('.world-clock-date');
                    if (dateDisplayElement) {
                        dateDisplayElement.textContent = dateString;
                    }
                } catch (e) {
                    console.error(`Error updating clock for timezone ${timezone}:`, e);
                    if (timezoneElement) {
                        timezoneElement.textContent = "Error";
                    }
                    const dateDisplayElement = card.querySelector('.world-clock-date');
                    if (dateDisplayElement) {
                        dateDisplayElement.textContent = "Invalid Zone";
                    }
                }
            }
        });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('mainNav');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            });
        });

        document.addEventListener('click', (event) => {
            if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target) && navLinks.classList.contains('active')) {
                mobileMenu.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                if (navLinks.classList.contains('active') || mobileMenu.classList.contains('is-active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('is-active');
                }
            }
        });
    }
    const backToTopBtn = document.getElementById("backToTopBtn");

    if (backToTopBtn) {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        };

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const phoneNumber = '+923048898000';
            window.open(`https://wa.me/${phoneNumber}`, '_blank');
        });
    }

    updateLocalClock();
    updateWorldClocks();

    setInterval(updateLocalClock, 1000);
    setInterval(updateWorldClocks, 1000);
});
