const pages = document.querySelectorAll('.page');
        const navButtons = document.getElementById('navButtons');
        let currentPage = 0;

        function showPage(index) {
            pages.forEach((page, i) => {
                page.classList.toggle('hidden', i !== index);
            });
            currentPage = index;
            updateButtons();
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
            
                descubraButton.onclick = () => showPage(currentPage + 1);
            }
            
            if (currentPage === pages.length - 1) {
                const restartButton = document.createElement('button');
                restartButton.innerHTML = '<img class="imgNavButtons" src="Assets/img/SetaReiniciar.png" alt="Reiniciar" />';
                restartButton.onclick = () => showPage(0);
                navButtons.appendChild(restartButton);
            }
        }
        

        showPage(0);



        const languageButton = document.querySelector('#buttonLanguage');

        languageButton.addEventListener('click', enableLanguage);
        
        function enableLanguage() {
            languageButton.classList.toggle('active');
        }
        