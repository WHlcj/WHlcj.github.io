"use strict"; $(document).ready(function () { var o = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown"]; $(".dream-tags > .ui.label").each(function () { $(this).addClass(o[function (o, t) { return o = Math.ceil(o), t = Math.floor(t), Math.floor(Math.random() * (t - o) + o) }(0, o.length)]) }), window.maxTags && ($(".ui.accordion").accordion({ selector: { trigger: ".title .dropdown" } }), $(".tags-with-dropdown .dropdown").click(function () { $(this).children(":first").toggleClass("rotated") })) });




