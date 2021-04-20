import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);




$(document).on('turbolinks:load', function() {
  
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.from('.TopContents__container', { // .box => アニメーションさせる要素
    opacity:0,
    delay: 1.5,
    duration: 1.5, 
    // アニメーションの内容
    // scrollTrigger: {
    //   trigger: '.TopContents__container', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
    //   start: 'center center', // アニメーションの開始位置の指定
    // }
  });

  gsap.from('#bhomes_area--box2b', { // .box => アニメーションさせる要素
    opacity:0,
    delay: 3.5,
    duration: 1.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#bhomes_area--box2b', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('#bhomes_area--box2bb', { // .box => アニメーションさせる要素
    opacity:0,
    delay: 4.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#bhomes_area--box2bb', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('.About__left', { // .box => アニメーションさせる要素
    opacity:0,
    y:400,
    delay: 1.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.About__left', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('.About__right', { // .box => アニメーションさせる要素
    opacity:0,
    x:400,
    delay: 1.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.About__right', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('#elicse1', { // .box => アニメーションさせる要素
    opacity:0,
    // y:400,
    delay: 1.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#elicse1', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('#elicse2', { // .box => アニメーションさせる要素
    opacity:0,
    x:400,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#elicse5', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('#elicse3', { // .box => アニメーションさせる要素
    opacity:0,
    y:400,
    delay: 1.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#elicse6', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('#elicse4', { // .box => アニメーションさせる要素
    opacity:0,
    x:400,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '#elicse4', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  //fhomes
  gsap.from('.SectionBoxB', { // .box => アニメーションさせる要素
    opacity:0,
    // x:400,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.SectionBoxB', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('.swiper-container2', { // .box => アニメーションさせる要素
    opacity:0,
    // x:400,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.swiper-container2', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });


  gsap.from('.ihomes_t', { // .box => アニメーションさせる要素
    opacity:0,
    y:10,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.ihomes_t', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    },
    stagger: {
      from: "start", //左側から
      amount: 1.8 // 0.8秒おきに
    }
    
  });

  gsap.from('.price__discribe', { // .box => アニメーションさせる要素
    opacity:0,
    // x:400,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.price__discribe', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  

  gsap.from('.News__grid', { // .box => アニメーションさせる要素
    opacity:0,
    y:10,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.News__grid', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    }
    
  });

  gsap.from('.News__contents__lists__1', { // .box => アニメーションさせる要素
    // opacity:0,
    y:200,
    delay: 3.0,
    duration: 2.5, // アニメーションの内容
    scrollTrigger: {
      trigger: '.News__contents__lists__1', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
      // start: 'center center', // アニメーションの開始位置の指定
    },
    stagger: {
      from: "start", //左側から
      amount: 1.8 // 0.8秒おきに
    }
    
  });

  

});

