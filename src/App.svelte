<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import { prediction } from "./assets/prediction";
  import { main, bn632, bn20, wrapper, ballWrapper, predict_txt, intro } from './assets/styles.js'

  let predict = "Ask and shake";
  function pred(e){
    e.preventDefault();
    predict = prediction[Math.floor(Math.random() * prediction.length)];
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
