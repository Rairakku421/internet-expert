const animateVideo = () => {
    document.querySelectorAll('.skill').forEach(skill => {
        // Находим видео внутри .skill
        const video = skill.querySelector('.hover__video');
        if (!video) return;

        // Состояние для каждого видео
        let isPlaying = false;
        let fadeTimeout = null;
        let endedHandler = null;

        // Очистка всех событий и таймеров
        const cleanup = () => {
            clearTimeout(fadeTimeout);
            if (endedHandler) {
                video.removeEventListener('ended', endedHandler);
                endedHandler = null;
            }
        };

        // Обработчик наведения
        const handleMouseEnter = () => {
            cleanup();
            if (isPlaying) return;

            video.play()
                .then(() => {
                    isPlaying = true;
                    video.style.opacity = '1';
                    video.loop = true;
                })
                .catch(e => console.error("Video play error:", e));
        };

        // Обработчик ухода курсора
        const handleMouseLeave = () => {
            if (!isPlaying) return;

            video.loop = false;

            endedHandler = () => {
                cleanup();
                video.loop = true;
                video.pause();
                isPlaying = false;
            };

            video.addEventListener('ended', endedHandler);

            fadeTimeout = setTimeout(() => {
                cleanup();
                video.loop = true;
                video.pause();
                video.currentTime = 0;
                isPlaying = false;
            }, 3000);
        };

        // Вешаем обработчики на .skill
        skill.addEventListener('mouseenter', handleMouseEnter);
        skill.addEventListener('mouseleave', handleMouseLeave);

        // Убираем обработчики при уничтожении элемента
        const observer = new MutationObserver(() => {
            if (!document.body.contains(skill)) {
                cleanup();
                skill.removeEventListener('mouseenter', handleMouseEnter);
                skill.removeEventListener('mouseleave', handleMouseLeave);
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    });
};

// Инициализация
animateVideo();