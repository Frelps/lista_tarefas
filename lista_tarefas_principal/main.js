$('form').on('submit', function(e) {
    e.preventDefault();

    const enderecoNovaTarefa = $('#nova-tarefa').val();
    let tarefaExistente = false;

    $('ul li').each(function() {
        if ($(this).text() === enderecoNovaTarefa) {
            tarefaExistente = true;
        }
    });

    if (tarefaExistente) {
        alert('A tarefa já está na lista!');
    } else {
    const novoItem = $('<li></li>');
    novoItem.text(enderecoNovaTarefa);
        $(novoItem).appendTo('ul').hide().fadeIn(1000);
        $('#nova-tarefa').val('');

        novoItem.on('click', function() {
            $(this).toggleClass('riscado');
        });
    }
});