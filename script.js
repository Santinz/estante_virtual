function abrirQuadrinho(quadrinho) {
    const modal = document.getElementById('quadrinho-modal');
    const frame = document.getElementById('quadrinho-frame');
    const closeBtn = document.querySelector('.close');
    
    // Mapeamento dos quadrinhos para arquivos locais
    const quadrinhosMap = {
        'feiticeira_escarlate': 'quadrinhos/feiticeira.pdf',
        'pantera_negra': 'quadrinhos/pantera.pdf',
        'viuva_negra': 'quadrinhos/viuva.pdf',
        'thor': 'quadrinhos/thor.pdf',
        'homem_aranha': 'quadrinhos/aranha.pdf',
        'hulk': 'quadrinhos/hulk.pdf',
        'capitao_america': 'quadrinhos/capitao.pdf'
    };
    
    frame.src = quadrinhosMap[quadrinho];
    modal.style.display = "block";
    
    // Fechar modal ao clicar no X
    closeBtn.onclick = function() {
        modal.style.display = "none";
        frame.src = "";
    }
    
    // Fechar modal ao clicar fora
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            frame.src = "";
        }
    }
}

// Efeito de hover do background
document.addEventListener('DOMContentLoaded', function() {
    const quadrinhos = document.querySelectorAll('.quadrinho');
    const bgOverlay = document.querySelector('.bg-overlay');
    
    quadrinhos.forEach(quadrinho => {
        quadrinho.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                document.body.style.backgroundImage = `url(${img.src})`;
                bgOverlay.style.opacity = '0.5';
            }
        });
        
        quadrinho.addEventListener('mouseleave', function() {
            document.body.style.backgroundImage = '';
            bgOverlay.style.opacity = '0';
        });
    });
});