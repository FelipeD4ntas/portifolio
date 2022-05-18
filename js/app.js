const animacaoTitulo = document.querySelector('.titulo-perfil > h1');
const linkSobreMim = document.querySelector('.link-sobre-mim');
const linkContatos = document.querySelector('.link-contatos');
const linkProjetos = document.querySelector('.link-projetos');
const menuMobile = document.querySelector('.box-menu');
const boxPerfil = document.querySelector('.box-perfil');
const linkTopo = document.querySelector('.link-topo');
const boxVideos = document.querySelectorAll('figure');
const fotoPerfil = document.querySelector('.img-pc');
const icones = document.querySelectorAll('.icone');
const videos = document.querySelectorAll('video');
const tamanhoDaTela800px = window.matchMedia('(max-width: 800px)').matches;
const tamanhoDaTela500px = window.matchMedia('(max-width: 500px)').matches;
const tamanhoDaTela400px = window.matchMedia('(max-width: 400px)').matches;

let scale = 1;
let index = 1;

function rolarPagina(elemento) {
    elemento.scrollIntoView({
        behavior: 'smooth'
    });
}

function eventoScroll(event) {
    const clicouNoProjetos = event.target === linkProjetos;
    const clicouNoSobre = event.target === linkSobreMim;
    const clicouNoContatos = event.target === linkContatos;
    const clicouNoMarcos = event.target === linkTopo;

    if (clicouNoProjetos) {
        rolarPagina(projetos);
    };

    if (clicouNoSobre) {
        rolarPagina(sobre);
    };

    if (clicouNoContatos) {
        rolarPagina(contatos);
    };

    if (clicouNoMarcos) {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };
};

function aplicarEstilo() {
    boxPerfil.style.transform = `scale(${scale})`;
    fotoPerfil.style.opacity = '1';
};

function aplicarAnimacao() {
    animacaoTitulo.classList.add('segundaAnimacao');
}

function removerEvento(scale) {
    if (scale === .5 || tamanhoDaTela500px) {
        boxPerfil.removeEventListener('wheel', zoom);
    };
};

function zoom(event) {
    event.preventDefault();
    const mouseEstáRolandoParaBaixo = event.deltaY > 0;

    if (mouseEstáRolandoParaBaixo) {
        scale += event.deltaY * -0.0005;
        scale = Math.min(Math.max(.5, scale), 4);
        
        aplicarEstilo();
        removerEvento(scale);
    };
};

function adicionarEvento(elementos, evento, funcao) {
    elementos.forEach(elemento => {
        elemento.addEventListener(evento, funcao);
    });
};

function reproduzirVideoNoMobile() {
    if (tamanhoDaTela400px) {
        videos.forEach(video => {
            video.setAttribute('autoplay', '');
            console.log(video);
        })
    }
}

function reproduzirVideo(event) {
    event.target.play()
};

function pausarVideo() {
    videos.forEach(video => {
        video.pause()
    })
};

function aplicarEfeitoSlide() {
    boxVideos.forEach(boxVideo => {
        if (tamanhoDaTela800px) {
            switch (index) {
                case 1:
                    boxVideo.style.right = '0%';
                    break;
                case 2:
                    boxVideo.style.right = '100%';
                    break;
                case 3:
                    boxVideo.style.right = '200%';
                    break;
                case 4:
                    boxVideo.style.right = '300%';
                    break;
                case 5:
                    boxVideo.style.right = '400%';
                    break;
                case 6:
                    boxVideo.style.right = '500%';
                    break;
                case 7:
                    boxVideo.style.right = '600%';
                    break;
                case 8:
                    boxVideo.style.right = '700%';
                    break;
                case 9:
                    boxVideo.style.right = '800%';
                    break;
                case 10:
                    boxVideo.style.right = '900%';
                    break;
                case 11:
                    boxVideo.style.right = '1000%';
                    break;
                case 12:
                    boxVideo.style.right = '1100%';
                    break;
                case 13:
                    boxVideo.style.right = '1200%';
                    break;
                case 14:
                    boxVideo.style.right = '1300%';
                    break;
            };
         } else {
            switch (index) {
                case 1:
                    boxVideo.style.right = '0%';
                    break;
                case 2:
                    boxVideo.style.right = '100%';
                    break;
                case 3:
                    boxVideo.style.right = '200%';
                    break;
                case 4:
                    boxVideo.style.right = '300%';
                    break;
                case 5:
                    boxVideo.style.right = '400%';
                    break;
                case 6:
                    boxVideo.style.right = '500%';
                    break;
                case 7:
                    boxVideo.style.right = '600%';
                    break;
            };
         }
    });
};

function manipularSlide(event) {
    const btnProximo = event.target.classList.contains('proximo');
    const btnAnterior = event.target.classList.contains('anterior');
    if (btnProximo) {
        ++index
        if (tamanhoDaTela800px) {
            if (index > 14) {
                index = 1
            };
        } else {
            if (index > 7) {
                index = 1
            };
        }
        aplicarEfeitoSlide();
    }

    if (btnAnterior) {
        --index
        if (tamanhoDaTela800px) {
            if (index < 1) {
                index = 14
            };
        } else {
            if (index < 1) {
                index = 7
            };
        }
        aplicarEfeitoSlide();
    };
};

function abrirMenuMobile() {
    menuMobile.classList.toggle('menu-aberto');
}

adicionarEvento(videos, 'mouseenter', reproduzirVideo);
adicionarEvento(videos, 'mouseout', pausarVideo);
adicionarEvento(icones, 'click', manipularSlide);
reproduzirVideoNoMobile()

animacaoTitulo.addEventListener('animationend', aplicarAnimacao);
menuMobile.addEventListener('click', abrirMenuMobile);
linkProjetos.addEventListener('click', eventoScroll);
linkSobreMim.addEventListener('click', eventoScroll);
linkContatos.addEventListener('click', eventoScroll);
linkTopo.addEventListener('click', eventoScroll);
boxPerfil.addEventListener('wheel', zoom);