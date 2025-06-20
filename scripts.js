const pages = document.querySelectorAll('.page');
        const navButtons = document.getElementById('navButtons');
        const topRightButtonsContainer = document.querySelector('.topRightButtonsContainer');
        let currentPage = 0;

        function showPage(index) {
            pages.forEach((page, i) => {
                page.classList.remove('active', 'prev', 'hidden');
                if (i === index) {
                    page.classList.add('active');
                } else if (i === index - 1) {
                    page.classList.add('prev');
                } else {
                    page.classList.add('hidden');
                }
            });
            currentPage = index;
            updateButtons();

            if (index === 0) {
                topRightButtonsContainer.classList.remove('hide-element');
            } else {
                topRightButtonsContainer.classList.add('hide-element');
            }
        }

        function updateButtons() {
            navButtons.innerHTML = '';
            if (currentPage > 0) {
                const prevButton = document.createElement('button');
                prevButton.innerHTML = '<img class="imgNavButtons" src="Assets/img/SetaEsquerda.png" alt="Voltar" />';
                prevButton.onclick = () => showPage(currentPage - 1);
                navButtons.appendChild(prevButton);
            }
            if (currentPage < pages.length - 1) {
                const nextButton = document.createElement('button');
                const descubraButton = document.querySelector('#buttonDescubra');
            
                nextButton.innerHTML = '<img class="imgNavButtons animation" src="Assets/img/SetaDireita.png" alt="Próxima" />';
            
                nextButton.onclick = () => {
                    const img = nextButton.querySelector('img');
                    if (img) {
                        img.classList.remove('animation');
                    }
                    showPage(currentPage + 1);
                };
            
                navButtons.appendChild(nextButton);
            
                if (descubraButton) {
                    descubraButton.onclick = () => showPage(currentPage + 1);
                }
            }
            
            if (currentPage === pages.length - 1) {
                const restartButton = document.createElement('button');
                restartButton.innerHTML = '<img class="imgNavButtons" src="Assets/img/SetaReiniciar.png" alt="Reiniciar" />';
                restartButton.onclick = () => showPage(0);
                navButtons.appendChild(restartButton);
            }
        }
        
        pages.forEach((page, i) => {
            page.classList.remove('active', 'prev', 'hidden');
            if (i === 0) {
                page.classList.add('active');
            } else {
                page.classList.add('hidden');
            }
        });

        showPage(0);

        const languageButton = document.querySelector('#buttonLanguage');

        languageButton.addEventListener('click', enableLanguage);
        
        function enableLanguage() {
            languageButton.classList.toggle('active');
        }
        

        