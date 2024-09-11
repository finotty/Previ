document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    
    dropdown.addEventListener('click', function(event) {
        // Previne que o clique no link recarregue a página
        event.preventDefault();
        
        // Alterna a classe "open" no dropdown para mostrar/esconder a gaveta
        this.classList.toggle('open');
    });
    
    // Fecha o dropdown se clicar fora dele
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
