let amigos = [];
    function adicionarAmigo() {
        const campoEntrada = document.getElementById('amigo');
        const amigo = campoEntrada.value.trim();

            if (amigo === '') {
                alert('Por favor, insira um nome.');
                return;
            }

            amigos.push(amigo);

            atualizarListaAmigos();

            campoEntrada.value = '';
        }

        function atualizarListaAmigos() {
            const listaAmigos = document.getElementById('listaAmigos');

            listaAmigos.innerHTML = '';

            amigos.forEach(amigo => {
                const itemLista = document.createElement('li');
                itemLista.textContent = amigo;
                listaAmigos.appendChild(itemLista);
            });
        }
        function sortearAmigo() {
            const resultadoSorteio = document.getElementById('listaAmigos');

            if (amigos.length === 0) {
                resultadoSorteio.innerHTML = 'Nenhum amigo disponível para sortear.';
                return;
            }

            const indiceAleatorio = Math.floor(Math.random() * amigos.length);

            const amigoSorteado = amigos[indiceAleatorio];

            resultadoSorteio.innerHTML = `Amigo sorteado:${amigoSorteado}`;
            
        }
    