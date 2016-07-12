(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function LoginController(authService, $state, toastr) {
        var vm = this;

        vm.login = function() {
            authService.login(vm.username, vm.password)
                .then(
                    function(response) {
                        $state.go('main.appointments.grid');
                    },
                    function(message) {
                        toastr.warning(message);
                    }
                );
        };
        ///////
        $('.navbar-toggle').click(function() {
            $('.navbar-nav').toggleClass('slide-in');
            $('.side-body').toggleClass('body-slide-in');
            $('#search').removeClass('in').addClass('collapse').slideUp(200);

            /// uncomment code for absolute positioning tweek see top comment in css
            //$('.absolute-wrapper').toggleClass('slide-in');

        });

        // Remove menu for searching
        $('#search-trigger').click(function() {
            $('.navbar-nav').removeClass('slide-in');
            $('.side-body').removeClass('body-slide-in');

            /// uncomment code for absolute positioning tweek see top comment in css
            //$('.absolute-wrapper').removeClass('slide-in');

        });

        ///////////////
        var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

        // Main
        initHeader();
        addListeners();

        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = { x: 0, y: height };

            largeHeader = document.getElementById('large-header');
            largeHeader.style.height = height + 'px';

            canvas = document.getElementById('demo-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');

            // create particles
            circles = [];
            for (var x = 0; x < width * 0.5; x++) {
                var c = new Circle();
                circles.push(c);
            }
            animate();
        }

        // Event handling
        function addListeners() {
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }

        function scrollCheck() {
            if (document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
        }

        function resize() {
            width = window.innerWidth;
           /* height = window.innerHeight;*/
           height = 300;
            largeHeader.style.height = height + 'px';
            canvas.width = width;
            canvas.height = height;
        }

        function animate() {
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (var i in circles) {
                    circles[i].draw();
                }
            }
            requestAnimationFrame(animate);
        }

        // Canvas manipulation
        function Circle() {
            var _this = this;

            // constructor
            (function() {
                _this.pos = {};
                init();
                //console.log(_this);
            })();

            function init() {
                _this.pos.x = Math.random() * width;
                _this.pos.y = height + Math.random() * 100;
                _this.alpha = 0.1 + Math.random() * 0.3;
                _this.scale = 0.1 + Math.random() * 0.3;
                _this.velocity = Math.random();
            }

            this.draw = function() {
                if (_this.alpha <= 0) {
                    init();
                }
                _this.pos.y -= _this.velocity;
                _this.alpha -= 0.0005;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.scale * 10, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(255,255,255,' + _this.alpha + ')';
                ctx.fill();
            };
        }

        /////////////////////////////
        /*function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }

        var isSafari = /constructor/i.test(window.HTMLElement);
        var isFF = !!navigator.userAgent.match(/firefox/i);

        if (isSafari) {
            document.getElementsByTagName('html')[0].classList.add('safari');
        }

        // Remove click on button for demo purpose
        Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
            bt.addEventListener('click', function(e) {
                e.preventDefault();
            });
        });

        initBt9();
        // Button 9
        function initBt9() {
            var bt = document.querySelectorAll('#component-9')[0];
            var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
            var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];

            bt.addEventListener('click', function(e) {
                TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 20, y: isFF ? e.offsetY : e.offsetY + 20, width: 0, height: 0 } });
                TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
                TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
            });
        }*/

        


        //////////////////////////
        




//////////////////////
    }
})();
