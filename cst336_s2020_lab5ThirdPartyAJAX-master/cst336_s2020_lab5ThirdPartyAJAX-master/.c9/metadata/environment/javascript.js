{"filter":false,"title":"javascript.js","tooltip":"/javascript.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":8,"column":54},"end":{"row":8,"column":55},"action":"insert","lines":[" "],"id":879},{"start":{"row":8,"column":55},"end":{"row":8,"column":56},"action":"insert","lines":["<"]},{"start":{"row":8,"column":56},"end":{"row":8,"column":57},"action":"insert","lines":["/"]},{"start":{"row":8,"column":57},"end":{"row":8,"column":58},"action":"insert","lines":["l"]},{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":["a"]},{"start":{"row":8,"column":59},"end":{"row":8,"column":60},"action":"insert","lines":["b"]},{"start":{"row":8,"column":60},"end":{"row":8,"column":61},"action":"insert","lines":["e"]},{"start":{"row":8,"column":61},"end":{"row":8,"column":62},"action":"insert","lines":["l"]}],[{"start":{"row":8,"column":62},"end":{"row":8,"column":63},"action":"insert","lines":[">"],"id":880}],[{"start":{"row":8,"column":57},"end":{"row":8,"column":62},"action":"remove","lines":["label"],"id":881},{"start":{"row":8,"column":57},"end":{"row":8,"column":58},"action":"insert","lines":["p"]},{"start":{"row":8,"column":58},"end":{"row":8,"column":59},"action":"insert","lines":["2"]}],[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"remove","lines":["l"],"id":882},{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"remove","lines":["e"]},{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"remove","lines":["b"]},{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"remove","lines":["a"]},{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"remove","lines":["l"]}],[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["p"],"id":883},{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["2"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":884},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["$(\"#keyword\").on(\"change\", function(){","        $.ajax({","          method: \"GET\",","             url: \"https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=\" + $(\"#keyword\") + \"&orientation=vertical\" + \"&image_type=vector\",","        dataType: \"json\",","            data: { \"tags\": $(\"#tags\").val(), \"previewURL\": $(\"#previewURL\").val(), \"likes\": $(\"#likes\").val() },","         success: function(result,status) {","                for(let i = 0; i < 4; i++){","                    $(\"#likes\").append(\"<p2> Likes: </p2> <p>\" + result.hits[i].likes + \"</p>\" );","                }","                $(\"#break\").html(\"</br>\");    ","                $(\"#break\").html(\"</br>\");  ","                for(let i = 0; i < 4; i++){","                    $(\"#previewURL\").append(`<img src = \"` + result.hits[i].previewURL + `\">` );","                }","              }","        });//ajax","});"],"id":885}],[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"remove","lines":["d"],"id":886},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["r"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"remove","lines":["o"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"remove","lines":["w"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"remove","lines":["y"]},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["e"]},{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"remove","lines":["k"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["o"],"id":887},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["i"]}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"remove","lines":["i"],"id":888}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["r"],"id":889},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["i"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["e"]},{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["n"]},{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["t"]},{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["a"]},{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["t"]},{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["i"]},{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["o"]},{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":8},"end":{"row":16,"column":17},"action":"remove","lines":["$.ajax({","          method: \"GET\",","             url: \"https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=\" + $(\"#keyword\") + \"&orientation=vertical\" + \"&image_type=vector\",","        dataType: \"json\",","            data: { \"tags\": $(\"#tags\").val(), \"previewURL\": $(\"#previewURL\").val(), \"likes\": $(\"#likes\").val() },","         success: function(result,status) {","                for(let i = 0; i < 4; i++){","                    $(\"#likes\").append(\"<p2> Likes: </p2> <p>\" + result.hits[i].likes + \"</p>\" );","                }","                $(\"#break\").html(\"</br>\");    ","                $(\"#break\").html(\"</br>\");  ","                for(let i = 0; i < 4; i++){","                    $(\"#previewURL\").append(`<img src = \"` + result.hits[i].previewURL + `\">` );","                }","              }","        });//ajax"],"id":890}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":891},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":8},"action":"remove","lines":["    "],"id":892},{"start":{"row":1,"column":4},"end":{"row":1,"column":36},"action":"insert","lines":["let q2Response = $(\"#q2\").val();"]}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"remove","lines":["2"],"id":893},{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["q"]}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"insert","lines":["o"],"id":894},{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":["r"]},{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["i"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["t"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["e"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["n"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["t"]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"insert","lines":["a"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"insert","lines":["t"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"insert","lines":["i"]},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"insert","lines":["o"]}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"insert","lines":["n"],"id":895}],[{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"remove","lines":["2"],"id":896},{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"remove","lines":["q"]}],[{"start":{"row":1,"column":35},"end":{"row":1,"column":36},"action":"insert","lines":["o"],"id":897},{"start":{"row":1,"column":36},"end":{"row":1,"column":37},"action":"insert","lines":["r"]},{"start":{"row":1,"column":37},"end":{"row":1,"column":38},"action":"insert","lines":["i"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["e"]},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["t"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"remove","lines":["n"],"id":898},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"remove","lines":["t"]},{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"remove","lines":["e"]}],[{"start":{"row":1,"column":38},"end":{"row":1,"column":39},"action":"insert","lines":["e"],"id":899},{"start":{"row":1,"column":39},"end":{"row":1,"column":40},"action":"insert","lines":["n"]},{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":["t"]},{"start":{"row":1,"column":41},"end":{"row":1,"column":42},"action":"insert","lines":["a"]},{"start":{"row":1,"column":42},"end":{"row":1,"column":43},"action":"insert","lines":["t"]},{"start":{"row":1,"column":43},"end":{"row":1,"column":44},"action":"insert","lines":["i"]},{"start":{"row":1,"column":44},"end":{"row":1,"column":45},"action":"insert","lines":["o"]},{"start":{"row":1,"column":45},"end":{"row":1,"column":46},"action":"insert","lines":["n"]}],[{"start":{"row":1,"column":55},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":900},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["i"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":8},"action":"insert","lines":["()"],"id":901}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["o"],"id":902},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["r"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"remove","lines":["i"],"id":903},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["r"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"remove","lines":["o"]}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":27},"action":"insert","lines":["oritentationResponse"],"id":904}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":[" "],"id":905},{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":["="]},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[" "],"id":906}],[{"start":{"row":2,"column":31},"end":{"row":2,"column":33},"action":"insert","lines":["\"\""],"id":907}],[{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["H"],"id":908},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["o"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["r"]},{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["i"]},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["z"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["o"]},{"start":{"row":2,"column":38},"end":{"row":2,"column":39},"action":"insert","lines":["n"]},{"start":{"row":2,"column":39},"end":{"row":2,"column":40},"action":"insert","lines":["t"]},{"start":{"row":2,"column":40},"end":{"row":2,"column":41},"action":"insert","lines":["a"]},{"start":{"row":2,"column":41},"end":{"row":2,"column":42},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":44},"end":{"row":2,"column":45},"action":"insert","lines":["{"],"id":909}],[{"start":{"row":2,"column":45},"end":{"row":4,"column":5},"action":"insert","lines":["","        ","    }"],"id":910}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":[" "],"id":911},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["e"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["l"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["s"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":[" "],"id":912},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["i"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["f"]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":[" "],"id":913}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":16},"action":"insert","lines":["()"],"id":914}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":35},"action":"insert","lines":["oritentationResponse"],"id":915}],[{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":[" "],"id":916},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":["="]},{"start":{"row":4,"column":37},"end":{"row":4,"column":38},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":[" "],"id":917}],[{"start":{"row":4,"column":39},"end":{"row":4,"column":41},"action":"insert","lines":["\"\""],"id":918}],[{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["v"],"id":919}],[{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"remove","lines":["v"],"id":920}],[{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["V"],"id":921},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["e"]},{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":["r"]},{"start":{"row":4,"column":43},"end":{"row":4,"column":44},"action":"insert","lines":["t"]},{"start":{"row":4,"column":44},"end":{"row":4,"column":45},"action":"insert","lines":["i"]},{"start":{"row":4,"column":45},"end":{"row":4,"column":46},"action":"insert","lines":["c"]},{"start":{"row":4,"column":46},"end":{"row":4,"column":47},"action":"insert","lines":["a"]},{"start":{"row":4,"column":47},"end":{"row":4,"column":48},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":50},"end":{"row":4,"column":51},"action":"insert","lines":["{"],"id":922}],[{"start":{"row":4,"column":51},"end":{"row":6,"column":5},"action":"insert","lines":["","        ","    }"],"id":923}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["    "],"id":924}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"insert","lines":["    "],"id":925}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["v"],"id":926},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["a"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["r"],"id":927},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["a"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["v"]},{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":1,"column":55},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":928},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["v"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["r"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["i"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["a"]},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["b"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"remove","lines":["b"],"id":929},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["a"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"remove","lines":["i"]}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":[" "],"id":930},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":[" "],"id":931}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"remove","lines":[" "],"id":932},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"remove","lines":["="]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["o"],"id":933},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["r"]},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[" "],"id":934},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":[" "],"id":935}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"remove","lines":[" "],"id":936},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"remove","lines":["="]},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"remove","lines":[" "]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[";"],"id":937}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"insert","lines":["    "],"id":938}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["o"],"id":939},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["r"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":[" "],"id":940},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":[" "],"id":941},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["h"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["o"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":["o"],"id":942},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":["h"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":16},"action":"insert","lines":["\"\""],"id":943}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":16},"action":"remove","lines":["\"\""],"id":944}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":16},"action":"insert","lines":["\"\""],"id":945}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["h"],"id":946},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["r"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["i"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["z"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["o"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["n"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["t"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["a"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":[";"],"id":947}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["o"],"id":948},{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["r"]},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":[" "],"id":949},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":[" "],"id":950}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":16},"action":"insert","lines":["\"\""],"id":951}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["V"],"id":952}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"remove","lines":["V"],"id":953}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["v"],"id":954},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["e"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["r"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["t"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["i"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["c"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["a"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["l"]}],[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":[";"],"id":955}],[{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"insert","lines":["\""],"id":956}],[{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"insert","lines":[" "],"id":957}],[{"start":{"row":14,"column":128},"end":{"row":14,"column":129},"action":"remove","lines":["\""],"id":958},{"start":{"row":14,"column":127},"end":{"row":14,"column":128},"action":"remove","lines":["l"]},{"start":{"row":14,"column":126},"end":{"row":14,"column":127},"action":"remove","lines":["a"]},{"start":{"row":14,"column":125},"end":{"row":14,"column":126},"action":"remove","lines":["c"]},{"start":{"row":14,"column":124},"end":{"row":14,"column":125},"action":"remove","lines":["i"]},{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"remove","lines":["t"]},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"remove","lines":["r"]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"remove","lines":["e"]},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"remove","lines":["v"]}],[{"start":{"row":14,"column":120},"end":{"row":14,"column":122},"action":"insert","lines":["\"\""],"id":959}],[{"start":{"row":14,"column":120},"end":{"row":14,"column":122},"action":"remove","lines":["\"\""],"id":960}],[{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"insert","lines":["+"],"id":961}],[{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"insert","lines":[" "],"id":962},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"insert","lines":["o"]},{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"insert","lines":["r"]},{"start":{"row":14,"column":124},"end":{"row":14,"column":125},"action":"insert","lines":["i"]}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"remove","lines":["H"],"id":963}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["h"],"id":964}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"remove","lines":["V"],"id":965}],[{"start":{"row":5,"column":40},"end":{"row":5,"column":41},"action":"insert","lines":["v"],"id":966}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"insert","lines":["// "],"id":967},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"insert","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"insert","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"insert","lines":["// "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":3},"action":"insert","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["// "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":14,"column":124},"end":{"row":14,"column":125},"action":"remove","lines":["i"],"id":968},{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"remove","lines":["r"]},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"remove","lines":["o"]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"remove","lines":[" "]}],[{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"remove","lines":[" "],"id":969},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"remove","lines":["+"]}],[{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"remove","lines":["+"],"id":970},{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"remove","lines":[" "]},{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"remove","lines":["\""]}],[{"start":{"row":14,"column":118},"end":{"row":14,"column":119},"action":"insert","lines":["v"],"id":971},{"start":{"row":14,"column":119},"end":{"row":14,"column":120},"action":"insert","lines":["e"]},{"start":{"row":14,"column":120},"end":{"row":14,"column":121},"action":"insert","lines":["r"]},{"start":{"row":14,"column":121},"end":{"row":14,"column":122},"action":"insert","lines":["t"]},{"start":{"row":14,"column":122},"end":{"row":14,"column":123},"action":"insert","lines":["i"]},{"start":{"row":14,"column":123},"end":{"row":14,"column":124},"action":"insert","lines":["c"]},{"start":{"row":14,"column":124},"end":{"row":14,"column":125},"action":"insert","lines":["a"]},{"start":{"row":14,"column":125},"end":{"row":14,"column":126},"action":"insert","lines":["l"]}],[{"start":{"row":14,"column":127},"end":{"row":14,"column":128},"action":"remove","lines":["\""],"id":972}],[{"start":{"row":14,"column":126},"end":{"row":14,"column":127},"action":"remove","lines":[" "],"id":973}],[{"start":{"row":14,"column":126},"end":{"row":14,"column":127},"action":"insert","lines":["\""],"id":974}],[{"start":{"row":14,"column":127},"end":{"row":14,"column":128},"action":"insert","lines":[" "],"id":975},{"start":{"row":14,"column":128},"end":{"row":14,"column":129},"action":"insert","lines":["+"]}],[{"start":{"row":14,"column":129},"end":{"row":14,"column":130},"action":"insert","lines":[" "],"id":976},{"start":{"row":14,"column":130},"end":{"row":14,"column":131},"action":"insert","lines":["\""]}],[{"start":{"row":14,"column":89},"end":{"row":14,"column":90},"action":"remove","lines":["("],"id":977},{"start":{"row":14,"column":88},"end":{"row":14,"column":89},"action":"remove","lines":["$"]}],[{"start":{"row":14,"column":99},"end":{"row":14,"column":100},"action":"remove","lines":[" "],"id":978},{"start":{"row":14,"column":98},"end":{"row":14,"column":99},"action":"remove","lines":[")"]}],[{"start":{"row":14,"column":98},"end":{"row":14,"column":99},"action":"insert","lines":[" "],"id":979}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":38},"end":{"row":11,"column":38},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1583134553229,"hash":"f23661cd8bf70663aeaf04acafd9af59cf0b9ddd"}