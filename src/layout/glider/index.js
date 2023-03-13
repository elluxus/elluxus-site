import "@glidejs/glide/src/assets/sass/glide.core";

import Glide,{Controls,Breakpoints} from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide',{
  peek: 50,
  perView: 2,
  type: "carousel"
}).mount({Controls,Breakpoints})

const GlideSlider = ()=>{
  
}