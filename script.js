// Useful Daily Apps — interactions

(function () {
    'use strict';

    // Dynamic year in footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // Nav background on scroll
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    let rafId = null;

    function onScroll() {
        const y = window.scrollY;
        if (y > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        lastScroll = y;
        rafId = null;
    }

    window.addEventListener('scroll', () => {
        if (rafId === null) {
            rafId = requestAnimationFrame(onScroll);
        }
    }, { passive: true });

    // Scroll reveal — sections and app cards fade in as they enter viewport
    const revealTargets = document.querySelectorAll('.about-card, .app-card, .why-item, .cta-card, .section-header');
    revealTargets.forEach(el => el.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // stagger app cards a bit
                    const target = entry.target;
                    const siblings = target.parentElement ? Array.from(target.parentElement.children).filter(n => n.classList.contains('reveal')) : [];
                    const index = siblings.indexOf(target);
                    const delay = Math.min(index, 4) * 80;
                    setTimeout(() => target.classList.add('visible'), delay);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealTargets.forEach(el => observer.observe(el));
    } else {
        // Fallback — show everything
        revealTargets.forEach(el => el.classList.add('visible'));
    }

    // Subtle parallax on hero orbs based on mouse
    const orbs = document.querySelectorAll('.bg-orb');
    let mouseRaf = null;
    let mx = 0, my = 0;

    function applyParallax() {
        orbs.forEach((orb, i) => {
            const depth = (i + 1) * 8;
            orb.style.translate = `${mx * depth}px ${my * depth}px`;
        });
        mouseRaf = null;
    }

    window.addEventListener('mousemove', (e) => {
        mx = (e.clientX / window.innerWidth - 0.5);
        my = (e.clientY / window.innerHeight - 0.5);
        if (mouseRaf === null) mouseRaf = requestAnimationFrame(applyParallax);
    }, { passive: true });

    // App-card tilt — gentle 3D tilt on hover for the showpiece grid
    const cards = document.querySelectorAll('.app-card');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        cards.forEach(card => {
            let cardRaf = null;
            let targetX = 0, targetY = 0;

            function applyTilt() {
                card.style.transform = `translateY(-6px) perspective(1000px) rotateX(${targetY}deg) rotateY(${targetX}deg)`;
                cardRaf = null;
            }

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                targetX = (x - 0.5) * 6;
                targetY = -(y - 0.5) * 6;
                if (cardRaf === null) cardRaf = requestAnimationFrame(applyTilt);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
})();
