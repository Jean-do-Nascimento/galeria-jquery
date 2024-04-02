$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function () {
        $('form').slideUp();
    })

    $("form").on('submit', function (e) {
        (e).preventDefault();
        const enderecoNovaImg = $('#endereco-img').val();
        const novoItem = $('<li style= "display: none"  ></li>');
        $(`<img src= "${enderecoNovaImg}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
            <a href="${enderecoNovaImg}" title="visualizar" target="_blank">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-img').val('');
    })
})
