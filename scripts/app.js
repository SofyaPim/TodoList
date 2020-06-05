
let main = function () {
    "use strict";
    let toDos = [
        "Закончить писать эту книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты",
        "купить собаку"
    ];
    let NewToDos = [
        "Подготовиться к лекции на среду",
        "Обновить гардероб",
        "Купить фильм"
    ];
    let AddToDos = [

    ];
    $(".tabs a span").toArray().forEach(function (element) {

        $(element).on("click", function () {
            let $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                NewToDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content)

            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);

            } else if ($element.parent().is(":nth-child(3)")) {

                let but = $('<button class="addTodoButton">add todo</button>');
                let inp = $("<input>").addClass('addToDoInput');
                //inp.after(but);
                $("main .content").append(inp);
                $("main .content").append(but);
                
                $(but).on('click', function (params) {
                    let newToDo = inp.val();
                    //console.log(newToDo);
                    let $content = $('<ul>');
                    if (newToDo != '') {
                        AddToDos.push($content.append($("<li>").text(newToDo)));
                    }
                    
                    $("main .content").prepend($content);
                    newToDo = inp.val('');
                })



            };
            return false;
        })
    });
    $(".tabs a:first-child span").trigger("click");
};
$(document).ready(main);
