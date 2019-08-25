<template>
  <div id="app">
    <div id="pageslider__nav">
      <header-comp></header-comp>
      <div id='particles-js'></div>
      <services-component></services-component>
      <about-component></about-component>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import ServicesComponent from './components/ServicesComponent.vue'
import AboutComponent from './components/AboutComponent.vue'

export default {
  name: 'app',
  components: {
    'header-comp' : HeaderComponent,
    'services-component' : ServicesComponent,
    'about-component' : AboutComponent,
  },
  data(){
    return {
      scrolled: false,
      lastScrollTop: 0,
      index: 0,
      isAnimated: false,
    }
  },
  mounted: function() {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    });

    var anchors = document.querySelectorAll('#anchor');
    anchors = Array.prototype.slice.call(anchors);
    anchors.forEach(function(anchor) {
      window.addEventListener("scroll", this.handleScroll);
    });
    console.log('scrolling Injected');
  },
  beforeDestroy() {
    var anchors = document.querySelectorAll('#anchor')
    anchors.forEach(function(anchor) {
      window.removeEventListener("scroll", this.handleScroll);
    });
    console.log('scrolling Destroyed');
  },
  methods: {
     initParticlesJS () {
       /* eslint-disable */
       particlesJS('particles-js', {
         'particles': {
           'number': {
             'value': 60,
             'density': {
               'enable': true,
               'value_area': 800
             }
           },
           'color': {
             'value': '#ffffff'
           },
           'shape': {
             'type': 'circle',
             'stroke': {
               'width': 0,
               'color': '#000000'
             },
             'polygon': {
               'nb_sides': 5
             },
             'image': {
               'src': 'img/github.svg',
               'width': 100,
               'height': 100
             }
           },
           'opacity': {
             'value': 0.5,
             'random': false,
             'anim': {
               'enable': false,
               'speed': 1,
               'opacity_min': 0.1,
               'sync': false
             }
           },
           'size': {
             'value': 3,
             'random': true,
             'anim': {
               'enable': false,
               'speed': 20,
               'size_min': 0.1,
               'sync': false
             }
           },
           'line_linked': {
             'enable': false,
             'distance': 300,
             'color': '#ffffff',
             'opacity': 0.4,
             'width': 2
           },
           'move': {
             'enable': true,
             'speed': 1,
             'direction': 'none',
             'random': false,
             'straight': false,
             'out_mode': 'out',
             'bounce': false,
             'attract': {
               'enable': false,
               'rotateX': 600,
               'rotateY': 1200
             }
           }
         },
         'interactivity': {
           'detect_on': 'canvas',
           'events': {
             'onhover': {
               'enable': false,
               'mode': 'repulse'
             },
             'onclick': {
               'enable': false,
               'mode': 'push'
             },
             'resize': true
           },
           'modes': {
             'grab': {
               'distance': 800,
               'line_linked': {
                 'opacity': 1
               }
             },
             'bubble': {
               'distance': 800,
               'size': 80,
               'duration': 2,
               'opacity': 0.8,
               'speed': 3
             },
             'repulse': {
               'distance': 400,
               'duration': 0.4
             },
             'push': {
               'particles_nb': 4
             },
             'remove': {
               'particles_nb': 2
             }
           }
         },
         'retina_detect': true
       })
     },
       handleScroll () {
         this.scrolled = window.scrollY > 0;
         var anchors = document.querySelectorAll('#anchor')
         var top = window.pageYOffset;
         if (this.lastScrollTop < top) {
           console.log('pageYOffset: ' + window.pageYOffset)
           console.log('this.getCoords(anchors[this.index+1]): ' + this.getCoords(anchors[this.index+1]).top)
           if (window.pageYOffset < this.getCoords(anchors[this.index+1]).top){
             this.index++;
             console.log(this.index);
             anchors[this.index].scrollIntoView({block: 'start'});
           }
         } else if (this.lastScrollTop > top) {

           if (window.pageYOffset > this.getCoords(anchors[this.index+1])){
             this.index--;
             console.log(this.index);
             anchors[this.index].scrollIntoView({block: 'start'});
           }
         }
         this.lastScrollTop = top;
      },
      getCoords (elem){
        var box = elem.getBoundingClientRect();
        return{
          top: box.top + pageYOffset
        }
      }
   },
   created () {
   window.addEventListener('scroll', this.handleScroll);
   },
   destroyed () {
     window.removeEventListener('scroll', this.handleScroll);
   },
}
</script>

<style>
@import "main.css";
@import "fonts.css";
</style>
