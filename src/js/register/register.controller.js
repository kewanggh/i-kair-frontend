(function() {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function RegisterController(authService, $state, toastr) {
        var vm = this;

        vm.register = function() {
            authService.register(vm.registration)
                .then(
                    function(response) {
                        toastr.success('Registration succeeded!');

                        $state.go('login');
                    },
                    function(error) {
                        toastr.error(error);
                    }
                );
        };

        vm.confirmPass = function() {
            var pass = document.getElementById("topPass").value;
            var confPass = document.getElementById("btmPass").value;
            if (pass != confPass) {
                alert('Wrong confirm password !');
            } else {
                alert('passwords match');
            }
        };

        ////////////////D3 Word cloud/////////////////////////
        var tags = [{ "key": "Lisa", "value": 26 }, { "key": "David", "value": 19 }, { "key": "Tod", "value": 18 }, { "key": "Jen", "value": 16 }, { "key": "Benji", "value": 15 }, { "key": "Mike", "value": 14 }, { "key": "Rain", "value": 14 }, { "key": "Kelly", "value": 13 }, { "key": "Sarah", "value": 12 }, { "key": "Fiona", "value": 12 }, { "key": "Dick", "value": 12 }, { "key": "Wion", "value": 12 }, { "key": "Kay", "value": 10 }, { "key": "Fei", "value": 9 }, { "key": "kobi", "value": 9 }, { "key": "Gary", "value": 9 }, { "key": "Sam", "value": 9 }, { "key": "Ben", "value": 8 }, { "key": "Howard", "value": 7 }, { "key": "Feng", "value": 6 }, { "key": "Gong", "value": 6 }, { "key": "Phillip", "value": 6 }, { "key": "Sally", "value": 6 }, { "key": "Wilson", "value": 6 }, { "key": "Larry", "value": 6 }, { "key": "Berry", "value": 6 }, { "key": "Carina", "value": 6 }, { "key": "Andrew", "value": 6 }, { "key": "Sonia", "value": 5 }, { "key": "Radena", "value": 5 }, { "key": "Bob", "value": 5 }, { "key": "Samantha", "value": 5 }, { "key": "Pony", "value": 5 }, { "key": "Fong", "value": 5 }, { "key": "God", "value": 5 }, { "key": "benjiman", "value": 5 }, { "key": "Peter", "value": 5 }, { "key": "Shane", "value": 4 }, { "key": "China", "value": 4 }, { "key": "Getta", "value": 4 }, { "key": "Conan", "value": 4 }, { "key": "Pen", "value": 4 }, { "key": "Wendy", "value": 4 }, { "key": "Toy", "value": 4 }, { "key": "shilla", "value": 4 }, { "key": "Ninja", "value": 4 }, { "key": "Tom", "value": 4 }, { "key": "Fan", "value": 4 }, { "key": "Wong", "value": 4 }, { "key": "Dickson", "value": 4 }, { "key": "Nelly", "value": 4 }, { "key": "Tricia", "value": 4 }, { "key": "Wayne", "value": 4 }, { "key": "Sato", "value": 4 }, { "key": "Boon", "value": 3 }, { "key": "Hine", "value": 3 }, { "key": "Melissa", "value": 3 }, { "key": "Katrina", "value": 3 }, { "key": "Ron", "value": 3 }, { "key": "Revone", "value": 3 }, { "key": "Shu", "value": 3 }, { "key": "Beatrice", "value": 3 }, { "key": "Hellen", "value": 3 }, { "key": "Gina", "value": 3 }, { "key": "Cassy", "value": 3 }, { "key": "Christina", "value": 3 }, { "key": "Fendy", "value": 3 }, { "key": "Mia", "value": 3 }, { "key": "Shee", "value": 3 }, { "key": "Tristan", "value": 2 }, { "key": "Deep", "value": 2 }, { "key": "Samuel", "value": 2 }, { "key": "Heal", "value": 2 }, { "key": "Benny", "value": 2 }, { "key": "Felipe", "value": 2 }, { "key": "Hop", "value": 2 }, { "key": "Shinee", "value": 2 }, { "key": "Dean", "value": 2 }, { "key": "Terain", "value": 2 }, { "key": "Taki", "value": 2 }, { "key": "Tim", "value": 2 }, { "key": "Toby", "value": 2 }, { "key": "See", "value": 2 }, { "key": "Len", "value": 2 }, { "key": "Shake", "value": 2 }, { "key": "Bee", "value": 2 }, { "key": "Anna", "value": 2 }, { "key": "Cheetah", "value": 2 }, { "key": "Ferry", "value": 2 }, { "key": "Wanna", "value": 2 }, { "key": "Hillary", "value": 2 }, { "key": "Wallace", "value": 2 }, { "key": "Thump", "value": 2 }, { "key": "Maki", "value": 2 }, { "key": "Lollita", "value": 2 }, { "key": "Hear", "value": 2 }, { "key": "Fang", "value": 2 }, { "key": "Long", "value": 2 }, { "key": "Benon", "value": 2 }, { "key": "Dan", "value": 2 }, { "key": "Lovette", "value": 2 }, { "key": "Gmail", "value": 2 }, { "key": "Sun", "value": 2 }, { "key": "Andy", "value": 1 }, { "key": "shine", "value": 1 }, { "key": "Melllani", "value": 1 }, { "key": "Brown", "value": 1 }, { "key": "Steal", "value": 1 }, { "key": "Matt", "value": 1 }, { "key": "Game", "value": 1 }, { "key": "Pat", "value": 1 }, { "key": "Bowie", "value": 1 }, { "key": "Fin", "value": 1 }, { "key": "Guess", "value": 1 }, { "key": "Games", "value": 1 }, { "key": "Howdy", "value": 1 }, { "key": "hit", "value": 1 }, { "key": "run", "value": 1 }, { "key": "stand", "value": 1 }, { "key": "fox", "value": 1 }, { "key": "man", "value": 1 }, { "key": "string", "value": 1 }, { "key": "kit", "value": 1 }, { "key": "Mothers", "value": 1 }, { "key": "tail", "value": 1 }, { "key": "dots", "value": 1 }, { "key": "pink", "value": 1 }, { "key": "white", "value": 1 }, { "key": "kite", "value": 1 }, { "key": "bed", "value": 1 }, { "key": "bumps", "value": 1 }, { "key": "jumps", "value": 1 }, { "key": "kicks", "value": 1 }, { "key": "hops", "value": 1 }, { "key": "thumps", "value": 1 }, { "key": "kinds", "value": 1 }, { "key": "book", "value": 1 }, { "key": "home", "value": 1 }, { "key": "wood", "value": 1 }, { "key": "hand", "value": 1 }, { "key": "near", "value": 1 }, { "key": "Think", "value": 1 }, { "key": "rid", "value": 1 }, { "key": "made", "value": 1 }, { "key": "jump", "value": 1 }, { "key": "yet", "value": 1 }, { "key": "PLOP", "value": 1 }, { "key": "last", "value": 1 }, { "key": "stop", "value": 1 }, { "key": "pack", "value": 1 }, { "key": "nothing", "value": 1 }, { "key": "got", "value": 1 }, { "key": "sad", "value": 1 }, { "key": "kind", "value": 1 }, { "key": "fishHe", "value": 1 }, { "key": "sunny", "value": 1 }, { "key": "Yes", "value": 1 }, { "key": "bow", "value": 1 }, { "key": "tall", "value": 1 }, { "key": "always", "value": 1 }, { "key": "playthings", "value": 1 }, { "key": "picked", "value": 1 }, { "key": "strings", "value": 1 }, { "key": "Well", "value": 1 }, { "key": "lit", "value": 1 }];
        var fill = d3.scale.category20b();

        var w = window.innerWidth,
            h = window.innerHeight;

        var max,
            fontSize;

        var layout = d3.layout.cloud()
            .timeInterval(Infinity)
            .size([w, h])
            .fontSize(function(d) {
                return fontSize(+d.value);
                /*return fontSize(Math.random()*30);*/
            })
            .text(function(d) {
                return d.key;
            })
            .on("end", draw);

        var svg = d3.select("#vis").append("svg")
            .attr("width", w)
            .attr("height", h);

        var vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");

        update();

        window.onresize = function(event) {
            update();
        };

        function draw(data, bounds) {
            var w = window.innerWidth,
                h = window.innerHeight;

            svg.attr("width", w).attr("height", h);

            scale = bounds ? Math.min(
                w / Math.abs(bounds[1].x - w / 2),
                w / Math.abs(bounds[0].x - w / 2),
                h / Math.abs(bounds[1].y - h / 2),
                h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

            var text = vis.selectAll("text")
                .data(data, function(d) {
                    return d.text.toLowerCase();
                });
            text.transition()
                .duration(1000)
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("font-size", function(d) {
                    return d.size + "px";
                });
            text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("font-size", function(d) {
                    return d.size + "px";
                })
                .style("opacity", 1e-6)
                .transition()
                .duration(1000)
                .style("opacity", 1);
            text.style("font-family", function(d) {
                    return d.font;
                })
                .style("fill", function(d) {
                    return fill(d.text.toLowerCase());
                })
                .text(function(d) {
                    return d.text;
                })
                /*         .on("click", function (d, i){
                       window.open(d.url, "_blank");
                   });*/
                /*    .on("click", function(d) {
                     alert(d.text);      
                })*/
                /////
                .on("mouseover", function(d) {
                    d3.select(this).style("text-shadow", "0px 0px 0 rgb(137,156,213),1px 1px 0 rgb(129,148,205),2px 2px 0 rgb(120,139,196),3px 3px 0 rgb(111,130,187),4px 4px 0 rgb(103,122,179),5px 5px 0 rgb(94,113,170),6px 6px 0 rgb(85,104,161),7px 7px 0 rgb(76,95,152),8px 8px 0 rgb(68,87,144),9px 9px 0 rgb(59,78,135),10px 10px 0 rgb(50,69,126),11px 11px 0 rgb(42,61,118),12px 12px 0 rgb(33,52,109),13px 13px 0 rgb(24,43,100),14px 14px 0 rgb(15,34,91),15px 15px 0 rgb(7,26,83),16px 16px 0 rgb(-2,17,74),17px 17px 0 rgb(-11,8,65),18px 18px 0 rgb(-19,0,57),19px 19px 0 rgb(-28,-9,48), 20px 20px 0 rgb(-37,-18,39),21px 21px 20px rgba(0,0,0,1),21px 21px 1px rgba(0,0,0,0.5),0px 0px 20px rgba(0,0,0,.2)");
                })
                .on("mouseout", function(d) {

                    d3.select(this).style("text-shadow", "none");
                    /*d3.select(this).style("font-weight", "normal");*/
                });

            vis.transition().attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
        }

        function update() {
            layout.font('impact').spiral('archimedean');
            fontSize = d3.scale['sqrt']().range([10, 100]);
            if (tags.length) {
                fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
            }
            layout.stop().words(tags).start();
        }








    }
})();
