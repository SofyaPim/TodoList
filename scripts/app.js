
var main = function () {
        "use strict";
        var toDos = [
            "Закончить писать эту книгу",
            "Вывести Грейси на прогулку в парк",
            "Ответить на электронные письма",
            "Подготовиться к лекции в понедельник",
            "Обновить несколько новых задач",
            "Купить продукты"
        ];
        var NewToDos = [
            "Подготовиться к лекции на среду",
            "Обновить гардероб",
            "Купить фильм"
        ];
        var AddToDos = [
            "learn jQuery",
            "learn JS"
    ];
        $(".tabs a span").toArray().forEach(function (element) {
                
                $(element).on("click", function () {
                        var $element = $(element),
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
                             $content = $("<ul>");
                             AddToDos.forEach(function (todo) {
                                $content.append($("<li>").text(todo));
                            });
                            $("main .content").append($content);

                            // $contentInput = $('<input type="text" class="inputVal">');
                            // $contentButton = $('<button> + </button>')

                            // $("main .content").append($contentInput);
                            // $("main .content").append($contentButton);
                            // if ($contentInput.val() !== "") {
                            //     $content = $("<p>").text($("input").val());
                            //     $("main .content").append($content);
                            //     $contentInput.val("");

                            //     $contentButton.on("click", function (event) {
                            //         addCommentFromInputBox();
                            //     });
                            //     $contentInput.on("keypress", function (event) {
                            //         if (event.keyCode === 13) {
                            //             addCommentFromInputBox();
                            //         }
                              //  });
                           // }
                        
                        };

return false;

            
                    }


                )  
                });
 $(".tabs a:first-child span").trigger("click");
        };
        $(document).ready(main);