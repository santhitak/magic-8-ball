<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import { prediction } from "./assets/prediction";
  import {
    main,
    bn632,
    bn20,
    wrapper,
    ballWrapper,
    predict_txt,
    intro } from './assets/styles.js'

  let predict = "Ask and shake";
  function pred(e){
    e.preventDefault();
    predict = prediction[Math.floor(Math.random() * prediction.length) + 1];
    document.getElementById('magicBall').className = 'magic'
    setTimeout(()=>{
      document.getElementById('magicBall').classList.remove('magic');
    }, 350)
  }
</script>

<main>
  <div class="{main}">
    <TailwindCss />
    <div class="{wrapper}">
      <div class="{intro}">
        <div style="margin-bottom: 2.5rem; display: flex; user-select: none;">
          <a href="https://github.com/santhitak/magic-8-ball" target="_blank">
            <img alt="" src="https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png"
                 style="width: 30px; height: auto; margin-right: 1rem">
          </a>
          <a href="https://www.linkedin.com/in/santhita-krajangwongpaisan-7372121b0/" target="_blank">
            <img alt="" src="https://pnggrid.com/wp-content/uploads/2021/05/Linkedin-Logo-White-Circle-1024x1024.png"
                 style="width: 30px; height: auto;">
          </a>
        </div>
        <h2>MAGIC <br /> 8 BALL</h2>
        <p>Do you ever feel hesitated?</p>
        <p>Let's the magic 8 ball tell you what to do!</p>
        <button class="{bn632}  {bn20}" on:click={pred} type="button"> SHAKE </button>
      </div>
      <div class="{ballWrapper} flex justify-center align-center">
        <img
                src="https://i.imgur.com/oO3tsTC.png"
                alt="Magic ball"
                id="magicBall"
                style="height: 75vh; width: auto; padding-right: 10rem"
        />
        <div class="absolute">
          <h5 class="{predict_txt} font-mono" id="pred">{predict}</h5>
        </div>
      </div>
    </div>
  </div>
</main>
