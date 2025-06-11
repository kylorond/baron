const wordList = [
            { word: "KUCING", clue: "Hewan peliharaan yang suka mengeong." }, { word: "ANJING", clue: "Sahabat manusia yang setia." }, { word: "IKAN", clue: "Hewan yang hidup di air." }, { word: "BURUNG", clue: "Hewan yang bisa terbang." }, { word: "AYAM", clue: "Unggas yang berkokok di pagi hari." }, { word: "SAPI", clue: "Hewan ternak penghasil susu." }, { word: "KAMBING", clue: "Hewan ternak yang memiliki janggut." }, { word: "KUDA", clue: "Hewan yang biasa ditunggangi." }, { word: "GAJAH", clue: "Hewan besar dengan belalai panjang." }, { word: "HARIMAU", clue: "Kucing besar dengan loreng." }, { word: "SINGA", clue: "Dijuluki sebagai 'Raja Hutan'." }, { word: "ULAR", clue: "Reptil yang tidak memiliki kaki." }, { word: "NYAMUK", clue: "Serangga kecil yang suka menggigit." }, { word: "SEMUT", clue: "Serangga kecil yang hidup berkoloni." }, { word: "LABALABA", clue: "Hewan yang membuat jaring." }, { word: "CICAK", clue: "Merayap di dinding." },
            { word: "APEL", clue: "Buah renyah, sering berwarna merah atau hijau." }, { word: "PISANG", clue: "Buah panjang berwarna kuning." }, { word: "JERUK", clue: "Buah bulat kaya vitamin C." }, { word: "MANGGA", clue: "Buah tropis manis berair." }, { word: "ANGGUR", clue: "Buah kecil-kecil dalam satu tangkai." }, { word: "SEMANGKA", clue: "Buah besar, hijau di luar, merah di dalam." }, { word: "NANAS", clue: "Buah dengan mahkota dan kulit bersisik." }, { word: "DURIAN", clue: "Buah dengan kulit berduri dan bau khas." }, { word: "RAMBUTAN", clue: "Buah dengan kulit seperti rambut." }, { word: "SALAK", clue: "Buah dengan kulit seperti sisik ular." }, { word: "ALPUKAT", clue: "Buah hijau untuk jus." }, { word: "STROBERI", clue: "Buah kecil merah berbintik." },
            { word: "MEJA", clue: "Perabotan untuk menaruh barang." }, { word: "KURSI", clue: "Perabotan untuk duduk." }, { word: "LEMARI", clue: "Tempat menyimpan pakaian." }, { word: "TELEVISI", clue: "Alat elektronik untuk menonton siaran." }, { word: "PINTU", clue: "Jalan untuk masuk dan keluar ruangan." }, { word: "JENDELA", clue: "Bukaan di dinding untuk sirkulasi udara." }, { word: "LAMPU", clue: "Sumber cahaya buatan." }, { word: "BANTAL", clue: "Alas kepala saat tidur." }, { word: "SOFA", clue: "Kursi panjang yang empuk." }, { word: "KASUR", clue: "Alas untuk tidur." }, { word: "PIRING", clue: "Alas untuk makan." }, { word: "SENDOK", clue: "Alat untuk makan." },
            { word: "MERAH", clue: "Warna darah atau api." }, { word: "KUNING", clue: "Warna matahari atau pisang." }, { word: "HIJAU", clue: "Warna daun." }, { word: "BIRU", clue: "Warna langit atau laut." }, { word: "HITAM", clue: "Warna malam hari." }, { word: "PUTIH", clue: "Warna awan atau kapas." }, { word: "UNGU", clue: "Warna terong." }, { word: "JINGGA", clue: "Warna senja, oranye." },
            { word: "MATA", clue: "Indra untuk melihat." }, { word: "HIDUNG", clue: "Indra untuk mencium bau." }, { word: "MULUT", clue: "Bagian tubuh untuk berbicara." }, { word: "TELINGA", clue: "Indra untuk mendengar." }, { word: "TANGAN", clue: "Bagian tubuh untuk memegang." }, { word: "KAKI", clue: "Bagian tubuh untuk berjalan." }, { word: "KEPALA", clue: "Bagian tubuh paling atas." }, { word: "RAMBUT", clue: "Tumbuh di atas kepala." },
            { word: "JAKARTA", clue: "Ibu kota Indonesia." }, { word: "KUALALUMPUR", clue: "Ibu kota Malaysia." }, { word: "BANGKOK", clue: "Ibu kota Thailand." }, { word: "SINGAPURA", clue: "Negara kota di Asia Tenggara." }, { word: "MANILA", clue: "Ibu kota Filipina." }, { word: "TOKYO", clue: "Ibu kota Jepang." }, { word: "SEOUL", clue: "Ibu kota Korea Selatan." }, { word: "BEIJING", clue: "Ibu kota Tiongkok." }, { word: "MOSKOW", clue: "Ibu kota Rusia." }, { word: "LONDON", clue: "Ibu kota Inggris." }, { word: "PARIS", clue: "Ibu kota Perancis." }, { word: "ROMA", clue: "Ibu kota Italia." }, { word: "BERLIN", clue: "Ibu kota Jerman." }, { word: "KAIRO", clue: "Ibu kota Mesir." }, { word: "CANBERRA", clue: "Ibu kota Australia." }, { word: "OTTAWA", clue: "Ibu kota Kanada." }, { word: "BRASILIA", clue: "Ibu kota Brazil." },
            { word: "MERAHPUTIH", clue: "Warna bendera kebangsaan Indonesia." }, { word: "BOROBUDUR", clue: "Candi Buddha terbesar di dunia." }, { word: "PANCASILA", clue: "Dasar negara Republik Indonesia." }, { word: "RUPIAH", clue: "Mata uang resmi Indonesia." }, { word: "GARUDA", clue: "Lambang negara Indonesia." }, { word: "SOEKARNO", clue: "Presiden pertama RI." }, { word: "MONAS", clue: "Monumen Nasional di Jakarta." }, { word: "BALI", clue: "Pulau Dewata." }, { word: "KOMODO", clue: "Kadal raksasa endemik NTT." }, { word: "BENUA", clue: "Daratan luas (misal: Asia)." }, { word: "SAMUDRA", clue: "Lautan sangat luas." }, { word: "GUNUNG", clue: "Formasi geologi tinggi." }, { word: "SUNGAI", clue: "Aliran air tawar besar." }, { word: "DANAU", clue: "Genangan air luas dikelilingi daratan." }, { word: "ASIA", clue: "Benua terbesar di dunia." }, { word: "EROPA", clue: "Benua Biru." }, { word: "PLANET", clue: "Benda langit mengorbit bintang." }, { word: "MATAHARI", clue: "Bintang pusat tata surya." }, { word: "BULAN", clue: "Satelit alami Bumi." }, { word: "ATOM", clue: "Partikel terkecil unsur." }, { word: "AIR", clue: "Senyawa H2O." }, { word: "OKSIGEN", clue: "Gas untuk bernapas (O2)." }, { word: "GRAVITASI", clue: "Gaya tarik massa." }, { word: "INTERNET", clue: "Jaringan komputer global." }, { word: "KOMPUTER", clue: "Alat pengolah data elektronik." }, { word: "LISTRIK", clue: "Aliran partikel bermuatan." }, { word: "FOTOSINTESIS", clue: "Proses tumbuhan membuat makanan." }, { word: "VAKSIN", clue: "Bahan untuk kekebalan penyakit." }, { word: "MUSIK", clue: "Seni bunyi dan ritme." }, { word: "FILM", clue: "Gambar bergerak bercerita." }, { word: "OLAHRAGA", clue: "Aktivitas fisik kompetitif." }, { word: "SEJARAH", clue: "Ilmu peristiwa masa lalu." }, { word: "PIRAMIDA", clue: "Bangunan limas di Mesir." }, { word: "JANTUNG", clue: "Organ pemompa darah." }, { word: "OTAK", clue: "Pusat kendali saraf." }, { word: "PETA", clue: "Representasi visual area geografis." }, { word: "KOMPAS", clue: "Alat penunjuk arah." }, { word: "JAM", clue: "Alat pengukur waktu." }, { word: "KALENDER", clue: "Sistem penanggalan." }, { word: "MUSEUM", clue: "Tempat pameran benda bersejarah/seni." }, { word: "SEKOLAH", clue: "Lembaga pendidikan." }, { word: "DEMOKRASI", clue: "Sistem pemerintahan rakyat." }, { word: "PRESIDEN", clue: "Kepala negara republik." }, { word: "ASTRONOT", clue: "Penjelajah luar angkasa." }, { word: "VITAMIN", clue: "Zat organik esensial." }, { word: "IKLIM", clue: "Rata-rata cuaca jangka panjang." }, { word: "GEMPA", clue: "Guncangan permukaan bumi." }, { word: "TSUNAMI", clue: "Gelombang laut besar akibat gempa." }, { word: "BANK", clue: "Lembaga keuangan." }, { word: "PAJAK", clue: "Iuran wajib ke negara." }, { word: "EINSTEIN", clue: "Ilmuwan fisika, teori relativitas." },
            { word: "GOOGLE", clue: "Mesin pencari internet terbesar." }, { word: "WINDOWS", clue: "Sistem operasi dari Microsoft." }, { word: "ANDROID", clue: "Sistem operasi mobile dari Google." }, { word: "INSTAGRAM", clue: "Aplikasi berbagi foto dan video." }, { word: "FACEBOOK", clue: "Jejaring sosial buatan Mark Zuckerberg." }, { word: "TWITTER", clue: "Platform microblogging (sekarang X)." }, { word: "KEYBOARD", clue: "Papan ketik untuk komputer." }, { word: "MOUSE", clue: "Perangkat penunjuk pada komputer." }, { word: "PROSESOR", clue: "Otak dari komputer (CPU)." }, { word: "MEMORI", clue: "Penyimpanan data sementara (RAM)." }, { word: "DATABASE", clue: "Kumpulan data yang terorganisir." }, { word: "ALGORITMA", clue: "Langkah-langkah untuk menyelesaikan masalah." }, { word: "WIFI", clue: "Jaringan nirkabel untuk internet." }, { word: "LAPTOP", clue: "Komputer jinjing." }, { word: "WEBSITE", clue: "Kumpulan halaman web di internet." },
            { word: "TOYOTA", clue: "Merek mobil terkenal dari Jepang." }, { word: "SAMSUNG", clue: "Perusahaan elektronik dari Korea Selatan." }, { word: "APPLE", clue: "Perusahaan pembuat iPhone dan MacBook." }, { word: "NIKE", clue: "Merek sepatu dan pakaian olahraga." }, { word: "ADIDAS", clue: "Pesaing Nike dari Jerman." }, { word: "COCACOLA", clue: "Merek minuman bersoda populer." }, { word: "HONDA", clue: "Merek motor dan mobil Jepang." }, { word: "SONY", clue: "Perusahaan elektronik, pembuat PlayStation." },
            { word: "EMAS", clue: "Logam mulia berwarna kuning (Au)." }, { word: "PERAK", clue: "Logam mulia berwarna putih keperakan (Ag)." }, { word: "BESI", clue: "Logam kuat yang sering digunakan dalam konstruksi (Fe)." }, { word: "KARBON", clue: "Unsur dasar kehidupan (C)." }, { word: "HIDROGEN", clue: "Unsur paling melimpah di alam semesta (H)." }, { word: "NATRIUM", clue: "Komponen utama garam dapur (Na)." }, { word: "KALSIUM", clue: "Penting untuk tulang dan gigi (Ca)." },
            { word: "GITAR", clue: "Alat musik petik dengan senar." }, { word: "PIANO", clue: "Alat musik dengan tuts hitam dan putih." }, { word: "DRUM", clue: "Alat musik pukul untuk menjaga ritme." }, { word: "BIOLA", clue: "Alat musik gesek dengan empat senar." }, { word: "SERULING", clue: "Alat musik tiup dari bambu atau logam." }, { word: "TEROMPET", clue: "Alat musik tiup dari logam." },
        ].map(w => ({ ...w, word: w.word.toUpperCase().replace(/[^A-Z]/g, '') }));
        
        const bonusQuestions = [
            { question: "Gunung tertinggi di dunia adalah Everest.", answer: true }, { question: "Ibu kota Australia adalah Sydney.", answer: false }, { question: "Air mendidih pada suhu 100°C di tekanan atmosfer standar.", answer: true }, { question: "Matahari adalah sebuah planet.", answer: false }, { question: "Jepang terletak di benua Eropa.", answer: false }, { question: "Pencipta lampu bohlam adalah Thomas Edison.", answer: true}, { question: "Manusia memiliki 7 indra.", answer: false}, { question: "Bahasa resmi Brazil adalah Spanyol.", answer: false}, { question: "Tembok Besar China terlihat dari Bulan.", answer: false},
        ];

        const gridContainer = document.getElementById('grid-container');
        const acrossCluesContainer = document.getElementById('across-clues');
        const downCluesContainer = document.getElementById('down-clues');
        const checkButton = document.getElementById('check-button');
        const newPuzzleButton = document.getElementById('new-puzzle-button');
        const revealLetterButton = document.getElementById('reveal-letter-button');
        const revealChancesCount = document.getElementById('reveal-chances-count');
        const messageArea = document.getElementById('message-area');
        const modalContainer = document.getElementById('modal-container');
        const tabButtons = document.querySelectorAll('.tab-button');
        const cluePanels = document.querySelectorAll('.clue-panel');
        const activeClueDisplay = document.getElementById('active-clue-display');

        const GRID_SIZE = 15;
        const MAX_WORDS_TO_ATTEMPT = 50; 
        const MIN_WORDS_IN_PUZZLE = 10; 
        const INITIAL_REVEAL_CHANCES = 5;

        let currentGrid = [];
        let placedWordsData = [];
        let activeCell = null; 
        let activeClue = null;
        let revealChances = INITIAL_REVEAL_CHANCES;

        function updateRevealChancesUI() {
            revealChancesCount.textContent = `Bantuan (${revealChances})`;
            if (revealChances === 0) {
                 revealLetterButton.classList.remove('bg-amber-500', 'hover:bg-amber-600');
                 revealLetterButton.classList.add('bg-red-500', 'hover:bg-red-600');
                 revealChancesCount.textContent = `Bonus?`;
            } else {
                 revealLetterButton.classList.remove('bg-red-500', 'hover:bg-red-600');
                 revealLetterButton.classList.add('bg-amber-500', 'hover:bg-amber-600');
            }
        }
        
        function showBonusQuiz() {
            const randomQuestion = bonusQuestions[Math.floor(Math.random() * bonusQuestions.length)];
            
            modalContainer.innerHTML = ''; 
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const messageP = document.createElement('p');
            messageP.innerHTML = `Jawab pertanyaan ini untuk 1 bantuan tambahan:<br><br><strong class="text-lg">"${randomQuestion.question}"</strong>`;
            
            const trueButton = document.createElement('button');
            trueButton.textContent = 'Benar';
            trueButton.onclick = () => handleBonusAnswer(true, randomQuestion.answer);

            const falseButton = document.createElement('button');
            falseButton.textContent = 'Salah';
            falseButton.onclick = () => handleBonusAnswer(false, randomQuestion.answer);

            modalContent.appendChild(messageP);
            modalContent.appendChild(trueButton);
            modalContent.appendChild(falseButton);
            modalOverlay.appendChild(modalContent);
            modalContainer.appendChild(modalOverlay);
        }

        function handleBonusAnswer(userAnswer, correctAnswer) {
            modalContainer.innerHTML = '';
            if (userAnswer === correctAnswer) {
                revealChances++;
                updateRevealChancesUI();
                showModal("Jawaban Anda benar! Anda mendapatkan 1 bantuan tambahan.");
            } else {
                showModal("Sayang sekali, jawaban Anda salah. Coba lagi lain kali!");
            }
        }

        function showVictoryModal() {
            modalContainer.innerHTML = ''; 
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const messageP = document.createElement('p');
            messageP.innerHTML = `Luar Biasa! Semua jawaban benar!<br><br>Sebagai hadiah, nikmati video ini!`;
            
            const videoLink = document.createElement('a');
            videoLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            videoLink.target = '_blank';
            videoLink.rel = 'noopener noreferrer';
            videoLink.textContent = 'Buka Hadiah!';
            
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Tutup';
            closeButton.onclick = () => { modalContainer.innerHTML = ''; };

            modalContent.appendChild(messageP);
            modalContent.appendChild(videoLink);
            modalContent.appendChild(closeButton);
            modalOverlay.appendChild(modalContent);
            modalContainer.appendChild(modalOverlay);
        }

        function showModal(message) {
            modalContainer.innerHTML = ''; 
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            const messageP = document.createElement('p');
            messageP.textContent = message;
            
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Tutup';
            closeButton.onclick = () => { modalContainer.innerHTML = ''; };
            
            modalContent.appendChild(messageP);
            modalContent.appendChild(closeButton);
            modalOverlay.appendChild(modalContent);
            modalContainer.appendChild(modalOverlay);

            setTimeout(() => closeButton.focus(), 0);
        }

        function createEmptyGrid(size) {
            return Array.from({ length: size }, () => Array(size).fill(null));
        }

        function canPlaceWord(grid, word, r, c, direction) {
            const len = word.length;
            const gridSize = grid.length;

            if (r < 0 || c < 0) return false;

            if (direction === 'across') {
                if (r >= gridSize || c + len > gridSize) return false;
                if (c > 0 && grid[r][c - 1] !== null) return false;
                if (c + len < gridSize && grid[r][c + len] !== null) return false;
            } else {
                if (c >= gridSize || r + len > gridSize) return false;
                if (r > 0 && grid[r - 1][c] !== null) return false;
                if (r + len < gridSize && grid[r + len][c] !== null) return false;
            }

            for (let i = 0; i < len; i++) {
                let R = r, C = c;
                if (direction === 'across') C += i;
                else R += i;
                
                const cell = grid[R][C];
                const charInWord = word[i];

                if (cell !== null && cell.letter !== charInWord) return false;

                if (cell === null) {
                    if (direction === 'across') {
                        if (R > 0 && grid[R - 1][C] !== null) return false;
                        if (R < gridSize - 1 && grid[R + 1][C] !== null) return false;
                    } else { 
                        if (C > 0 && grid[R][C - 1] !== null) return false;
                        if (C < gridSize - 1 && grid[R][C + 1] !== null) return false;
                    }
                }
            }
            return true;
        }
        
        function placeWordOnGrid(grid, wordData, r, c, direction, number) {
            const { word, clue } = wordData;
            for (let i = 0; i < word.length; i++) {
                let R = r, C = c;
                if (direction === 'across') C += i;
                else R += i;
                
                if (grid[R][C] === null) { 
                    grid[R][C] = { letter: word[i], clues: [] };
                }
                
                if (i === 0) {
                    if (!grid[R][C].number) {
                       grid[R][C].number = number;
                    }
                }
                
                const clueExists = grid[R][C].clues.some(cl => cl.id === number && cl.direction === direction);
                if (!clueExists) {
                    grid[R][C].clues.push({ id: number, direction });
                }
            }
            return { word, clue, r, c, direction, number, id: `${number}-${direction}` };
        }

        function generateNewPuzzle() {
            messageArea.textContent = '';
            revealChances = INITIAL_REVEAL_CHANCES;
            updateRevealChancesUI();
            activeClueDisplay.textContent = 'Klik sebuah kotak untuk melihat pertanyaan.';
            
            let attempts = 0;
            const MAX_GENERATION_ATTEMPTS = 10; 

            function attemptGeneration() {
                currentGrid = createEmptyGrid(GRID_SIZE);
                placedWordsData = [];
                let clueNumber = 1;

                const shuffledWords = [...wordList].sort(() => 0.5 - Math.random());
                let wordsToPlace = shuffledWords.filter(w => w.word.length > 2 && w.word.length <= GRID_SIZE);
                wordsToPlace = wordsToPlace.slice(0, MAX_WORDS_TO_ATTEMPT);
                wordsToPlace.sort((a, b) => b.word.length - a.word.length);

                const firstWordData = wordsToPlace.shift();
                if (!firstWordData) return false;
                
                const firstWordDir = Math.random() < 0.5 ? 'across' : 'down';
                let firstWordR, firstWordC;
                if (firstWordDir === 'across') {
                    firstWordR = Math.floor(GRID_SIZE / 2);
                    firstWordC = Math.max(0, Math.floor((GRID_SIZE - firstWordData.word.length) / 2));
                } else {
                    firstWordR = Math.max(0, Math.floor((GRID_SIZE - firstWordData.word.length) / 2));
                    firstWordC = Math.floor(GRID_SIZE / 2);
                }
                
                placedWordsData.push(placeWordOnGrid(currentGrid, firstWordData, firstWordR, firstWordC, firstWordDir, clueNumber++));
                
                for (const wordData of wordsToPlace) {
                    let bestPlacement = null;
                    
                    for (let i = 0; i < wordData.word.length; i++) {
                        const charToMatch = wordData.word[i];
                        for (const pWord of placedWordsData) {
                            for (let j = 0; j < pWord.word.length; j++) {
                                if (pWord.word[j] === charToMatch) {
                                    const newDirection = pWord.direction === 'across' ? 'down' : 'across';
                                    let new_r, new_c;
                                    
                                    if (newDirection === 'down') {
                                        new_r = pWord.r - i;
                                        new_c = pWord.c + j;
                                    } else {
                                        new_r = pWord.r + j;
                                        new_c = pWord.c - i;
                                    }

                                    if (canPlaceWord(currentGrid, wordData.word, new_r, new_c, newDirection)) {
                                        bestPlacement = { wordData, r: new_r, c: new_c, direction: newDirection };
                                        i = wordData.word.length;
                                        break;
                                    }
                                }
                            }
                            if (bestPlacement) break;
                        }
                        if (bestPlacement) break;
                    }

                    if (bestPlacement) {
                        placedWordsData.push(placeWordOnGrid(currentGrid, bestPlacement.wordData, bestPlacement.r, bestPlacement.c, bestPlacement.direction, clueNumber++));
                    }
                }
                return placedWordsData.length >= MIN_WORDS_IN_PUZZLE;
            }

            while(attempts < MAX_GENERATION_ATTEMPTS) {
                if (attemptGeneration()) {
                    renderGrid();
                    renderClues();
                    return; 
                }
                attempts++;
            }
            
            showModal("Gagal membuat puzzle. Coba lagi!");
        }

        function renderGrid() {
            const gridFragment = document.createDocumentFragment();
            gridContainer.innerHTML = '';
            gridContainer.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
            
            for (let r = 0; r < GRID_SIZE; r++) {
                for (let c = 0; c < GRID_SIZE; c++) {
                    const cellDiv = document.createElement('div');
                    cellDiv.classList.add('grid-cell');
                    
                    cellDiv.dataset.r = r;
                    cellDiv.dataset.c = c;

                    const cellData = currentGrid[r][c];
                    if (cellData && cellData.letter) {
                        const input = document.createElement('input');
                        input.type = 'text';
                        input.maxLength = 1;
                        input.dataset.r = r;
                        input.dataset.c = c;
                        input.setAttribute('aria-label', `Sel baris ${r+1} kolom ${c+1}`);
                        input.addEventListener('input', handleInput);
                        input.addEventListener('keydown', handleKeyDown);
                        input.addEventListener('focus', () => handleCellFocus(r,c));
                        input.addEventListener('click', (e) => { e.target.select(); handleCellFocus(r,c); }); 
                        cellDiv.appendChild(input);

                        if (cellData.number) {
                            const numberLabel = document.createElement('span');
                            numberLabel.classList.add('number-label');
                            numberLabel.textContent = cellData.number;
                            cellDiv.appendChild(numberLabel);
                        }
                    } else {
                        cellDiv.classList.add('empty');
                    }
                    gridFragment.appendChild(cellDiv);
                }
            }
            gridContainer.appendChild(gridFragment);
        }

        function renderClues() {
            acrossCluesContainer.innerHTML = '';
            downCluesContainer.innerHTML = '';

            const sortedWords = [...placedWordsData].sort((a,b) => a.number - b.number);

            sortedWords.forEach(word => {
                const clueItem = document.createElement('div');
                clueItem.classList.add('clue');
                clueItem.innerHTML = `<span class="font-bold mr-2">${word.number}.</span> ${word.clue}`;
                clueItem.dataset.id = word.id; 
                clueItem.dataset.number = word.number;
                clueItem.dataset.r = word.r;
                clueItem.dataset.c = word.c;
                clueItem.dataset.direction = word.direction;
                clueItem.setAttribute('role', 'button');
                clueItem.setAttribute('tabindex', '0'); 
                clueItem.addEventListener('click', handleClueClick);
                clueItem.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') handleClueClick(e); });


                if (word.direction === 'across') {
                    acrossCluesContainer.appendChild(clueItem);
                } else {
                    downCluesContainer.appendChild(clueItem);
                }
            });
        }
        
        function handleCellFocus(r, c) {
            activeCell = {r, c};
            let preferredDirection = activeClue ? activeClue.direction : null;
            const cellData = currentGrid[r]?.[c];

            if (cellData && cellData.clues) {
                if (preferredDirection) {
                    const hasPreferredDirectionClue = cellData.clues.some(clue => clue.direction === preferredDirection);
                    if (!hasPreferredDirectionClue) { 
                        preferredDirection = cellData.clues.some(clue => clue.direction === 'across') ? 'across' : (cellData.clues.length > 0 ? cellData.clues[0].direction : null);
                    }
                } else { 
                     preferredDirection = cellData.clues.some(clue => clue.direction === 'across') ? 'across' : (cellData.clues.length > 0 ? cellData.clues[0].direction : null);
                }
            }
            highlightCurrentWord(r, c, preferredDirection);
        }

        function handleClueClick(event) {
            const target = event.currentTarget;
            
            const r = parseInt(target.dataset.r);
            const c = parseInt(target.dataset.c);
            const direction = target.dataset.direction;
            
            switchTab(direction);

            activeCell = {r, c};
            activeClue = {id: target.dataset.id, direction: direction, number: parseInt(target.dataset.number)};

            document.querySelectorAll('.clue.highlighted-clue').forEach(el => el.classList.remove('highlighted-clue'));
            target.classList.add('highlighted-clue');
            
            highlightCurrentWord(r, c, direction);
            
            const firstInputOfClue = gridContainer.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
            if (firstInputOfClue) {
                firstInputOfClue.focus();
            }
        }
        
        function highlightCurrentWord(row, col, directionParam) {
            document.querySelectorAll('.grid-cell.highlighted-cell, .grid-cell.focused-cell').forEach(cell => {
                cell.classList.remove('highlighted-cell', 'focused-cell');
                cell.style.animation = 'none';
            });

            const cellData = currentGrid[row]?.[col];
            if (!cellData?.clues?.length) {
                activeClueDisplay.textContent = 'Klik kotak lain untuk memulai.';
                return;
            }

            let currentDirection = directionParam;
            const hasClueInDirection = cellData.clues.some(cl => cl.direction === currentDirection);

            if (!currentDirection || !hasClueInDirection) {
                const hasAcross = cellData.clues.some(cl => cl.direction === 'across');
                currentDirection = hasAcross ? 'across' : cellData.clues[0].direction;
            }
            
            const relevantClueInfo = cellData.clues.find(cl => cl.direction === currentDirection);
            if (!relevantClueInfo) return;

            const wordInfo = placedWordsData.find(w => w.number === relevantClueInfo.id && w.direction === relevantClueInfo.direction);
            if (!wordInfo) return;

            activeClueDisplay.textContent = `${wordInfo.number} ${wordInfo.direction === 'across' ? 'Mendatar' : 'Menurun'}: ${wordInfo.clue}`;

            for (let i = 0; i < wordInfo.word.length; i++) {
                let r_word = wordInfo.r, c_word = wordInfo.c;
                if (wordInfo.direction === 'across') c_word += i; else r_word += i;

                const cellDiv = gridContainer.querySelector(`.grid-cell[data-r="${r_word}"][data-c="${c_word}"]`);
                if (cellDiv) {
                    cellDiv.classList.add('highlighted-cell');
                    if (r_word === row && c_word === col) {
                        cellDiv.classList.add('focused-cell');
                        cellDiv.style.animation = 'pulse 1.5s infinite';
                    }
                }
            }
            
            document.querySelectorAll('.clue.highlighted-clue').forEach(el => el.classList.remove('highlighted-clue'));
            const clueElement = document.querySelector(`.clue[data-id="${wordInfo.id}"]`);
            if (clueElement) {
                clueElement.classList.add('highlighted-clue');
                activeClue = {id: wordInfo.id, direction: wordInfo.direction, number: wordInfo.number};
            }
        }
        
        function handleInput(event) {
            const input = event.target;
            const r = parseInt(input.dataset.r), c = parseInt(input.dataset.c);
            
            input.value = input.value.toUpperCase().replace(/[^A-Z]/g, '');

            checkWordCompletion(r, c);

            if (input.value.length === 1) {
                let direction = activeClue?.direction;
                let nextR = r, nextC = c;
                if(direction) {
                    if (direction === 'across') nextC++; else nextR++;
                } else {
                    nextC++;
                }
                
                const nextInput = gridContainer.querySelector(`input[data-r="${nextR}"][data-c="${nextC}"]`);
                if (nextInput && !nextInput.disabled) nextInput.focus();
            }
            input.parentElement.classList.remove('correct', 'incorrect');
        }

        function handleKeyDown(event) {
            const input = event.target;
            const r = parseInt(input.dataset.r), c = parseInt(input.dataset.c);
            let nextR = r, nextC = c;
            let moved = false;

            switch(event.key) {
                case 'ArrowUp': nextR--; moved = true; break;
                case 'ArrowDown': nextR++; moved = true; break;
                case 'ArrowLeft': nextC--; moved = true; break;
                case 'ArrowRight': nextC++; moved = true; break;
                case 'Backspace':
                    if (input.value === '') {
                        if (activeClue?.direction === 'across') nextC--; 
                        else if (activeClue?.direction === 'down') nextR--;
                        else nextC--;
                        moved = true;
                    }
                    break;
                case 'Enter':
                case 'Tab':
                    event.preventDefault();
                    const cellData = currentGrid[r]?.[c];
                    if (cellData?.clues.length > 1 && activeClue) {
                        const newDirection = activeClue.direction === 'across' ? 'down' : 'across';
                        highlightCurrentWord(r, c, newDirection);
                    }
                    return;
            }
            if(moved) {
                event.preventDefault();
                const nextInput = gridContainer.querySelector(`input[data-r="${nextR}"][data-c="${nextC}"]`);
                if (nextInput) nextInput.focus();
            }
        }

        function checkWordCompletion(r, c) {
            const cellData = currentGrid[r]?.[c];
            if (!cellData || !cellData.clues) return;

            cellData.clues.forEach(clueInfo => {
                const wordInfo = placedWordsData.find(w => w.number === clueInfo.id && w.direction === clueInfo.direction);
                if (!wordInfo) return;

                let currentAnswer = '';
                let isComplete = true;
                for (let i = 0; i < wordInfo.word.length; i++) {
                    let r_word = wordInfo.r, c_word = wordInfo.c;
                    if (wordInfo.direction === 'across') c_word += i;
                    else r_word += i;

                    const cellInput = gridContainer.querySelector(`input[data-r="${r_word}"][data-c="${c_word}"]`);
                    if (cellInput && cellInput.value) {
                        currentAnswer += cellInput.value;
                    } else {
                        isComplete = false;
                        break;
                    }
                }
                
                const clueElement = document.querySelector(`.clue[data-id="${wordInfo.id}"]`);
                if (clueElement) {
                    if (isComplete && currentAnswer === wordInfo.word) {
                        clueElement.classList.add('clue-completed');
                    } else {
                        clueElement.classList.remove('clue-completed');
                    }
                }
            });
        }


        function checkAnswers() {
            let allCorrectAndFilled = true;
            let filledCount = 0, correctFilledCount = 0;

            gridContainer.querySelectorAll('input').forEach(input => {
                const r = parseInt(input.dataset.r), c = parseInt(input.dataset.c);
                const cellDiv = input.parentElement;
                cellDiv.classList.remove('correct', 'incorrect');
                if (input.value) {
                    filledCount++;
                    if (input.value === currentGrid[r][c].letter) {
                        cellDiv.classList.add('correct');
                        correctFilledCount++;
                    } else {
                        cellDiv.classList.add('incorrect');
                        allCorrectAndFilled = false;
                    }
                } else {
                    allCorrectAndFilled = false;
                }
                checkWordCompletion(r,c);
            });
            
            if (filledCount === 0) {
                messageArea.textContent = "Isi dulu teka-tekinya ya!";
            } else if (allCorrectAndFilled) {
                messageArea.textContent = "Luar Biasa! Semua jawaban benar!";
                showVictoryModal();
            } else if (correctFilledCount === filledCount) {
                 messageArea.textContent = "Yang terisi sudah benar. Ayo lengkapi sisanya!";
            } else {
                messageArea.textContent = "Ada yang masih salah. Periksa kembali!";
            }
        }
        
        function revealLetter() {
            if (revealChances > 0) {
                if (!activeCell) {
                    showModal("Pilih sebuah kotak dulu ya!");
                    return;
                }
                const {r, c} = activeCell;
                const cellData = currentGrid[r]?.[c];
                const inputElement = gridContainer.querySelector(`input[data-r="${r}"][data-c="${c}"]`);

                if (cellData && inputElement && !inputElement.disabled) {
                    inputElement.value = cellData.letter;
                    inputElement.parentElement.classList.add('correct');
                    inputElement.disabled = true; 
                    
                    revealChances--;
                    updateRevealChancesUI();
                    
                    checkWordCompletion(r, c);
                    messageArea.textContent = `Huruf '${cellData.letter}' telah dibuka.`;
                }
            } else {
                showBonusQuiz();
            }
        }

        function switchTab(tabName) {
            cluePanels.forEach(panel => {
                panel.classList.toggle('active', panel.id === `clue-panel-${tabName}`);
            });
            tabButtons.forEach(button => {
                button.classList.toggle('active', button.dataset.tab === tabName);
            });
        }

        tabButtons.forEach(button => {
            button.addEventListener('click', () => switchTab(button.dataset.tab));
        });

        checkButton.addEventListener('click', checkAnswers);
        newPuzzleButton.addEventListener('click', () => {
            messageArea.textContent = "Membuat puzzle baru...";
            switchTab('across');
            setTimeout(generateNewPuzzle, 50);
        });
        revealLetterButton.addEventListener('click', revealLetter);

        messageArea.textContent = "Memuat game...";
        setTimeout(() => {
            generateNewPuzzle();
            switchTab('across');
        }, 50);