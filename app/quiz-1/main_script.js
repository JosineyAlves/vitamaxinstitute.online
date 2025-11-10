$(document).ready(function () {
    $("#step1 input").click(function () {
        setTimeout(function () {
            $('#surveyContainer').removeClass('surveyContainerOne');
            $('#surveyContainer').addClass('surveyContainerTwo');
            $("#step1").hide();
            $("#step2").fadeIn();
        }, 500);
    });

    $("#step2 input").click(function () {
        setTimeout(function () {
            $('#surveyContainer').removeClass('surveyContainerTwo');
            $('#surveyContainer').addClass('surveyContainerThree');
            $("#step2").hide();
            $("#step3").fadeIn();
        }, 500);
    });

    // Redireciona para URL quando qualquer opção da etapa 3 for clicada (No ou Yes)
    $("#step3 input[type='radio']").click(function () {
        setTimeout(function () {
            // Captura os parâmetros UTM da URL atual
            var currentParams = window.location.search;
            var targetUrl = "http://vitamaxinstitute.online/app/vsl";
            
            // Adiciona os parâmetros UTM à URL de destino se existirem
            if (currentParams) {
                // Remove o '?' do início dos parâmetros e adiciona corretamente
                var params = currentParams.replace('?', '');
                targetUrl += (targetUrl.indexOf('?') > -1 ? '&' : '?') + params;
            }
            
            window.location.href = targetUrl;
        }, 500);
    });
});