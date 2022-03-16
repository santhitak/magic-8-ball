<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import { prediction } from "./assets/prediction";

  let predict = "Ask and shake";

  const choose = (e) => {
    e.preventDefault();
    predict = prediction[Math.floor(Math.random() * prediction.length)];
  };
</script>

<main>
  <TailwindCss />
  <div class="wrapper">
    <div class="intro">
      <h2>MAGIC <br /> 8 BALL</h2>
      <p>Do you ever feel hesitated?</p>
      <p>Let's the magic 8 ball tell you what to do!</p>
      <button class="bn632-hover bn20" on:click={choose}> SHAKE </button>
    </div>
    <div class="ball-wrapper flex justify-center align-center">
      <img
        src="https://i.imgur.com/oO3tsTC.png"
        alt="Magic ball"
        style="height: 75vh; width: auto; padding-right: 10rem"
      />
      <div class="absolute">
        <h5 class="prediction font-mono">{predict}</h5>
      </div>
    </div>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700;800;900&display=swap");
  :root {
    font-family: "lato", sans-serif;
  }

  main {
    height: 100vh;
    width: 100vw;
    background: rgb(185, 250, 255);
    background: radial-gradient(
      circle,
      rgba(185, 250, 255, 1) 0%,
      rgba(35, 62, 236, 1) 40%,
      rgba(0, 0, 0, 1) 80%
    );
    overflow: hidden;
    padding: 0 4rem;
  }

  .wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .intro {
    width: 40vw;
    height: 100vh;
    padding: 10rem;
  }

  .intro h2 {
    font-size: 4.6rem;
    color: aliceblue;
    font-weight: 600;
    line-height: 78%;
    margin-bottom: 2rem;
  }

  .intro p {
    color: aliceblue;
  }

  .bn632-hover {
    width: 160px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .bn632-hover:focus {
    outline: none;
  }

  .bn632-hover.bn20 {
    background-image: linear-gradient(
      to right,
      #66c5ea,
      #2041d3,
      #66c5ea,
      #2041d3
    );
    margin-left: 0;
    margin-top: 3rem;
    box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
  }

  .ball-wrapper {
    height: 100%;
    width: 100%;
    align-items: center;
    user-select: none;
  }
  .prediction {
    color: #7ee1ff;
    max-width: 7vw;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: medium;
    margin-right: 9.55rem;
    margin-bottom: 3rem;
  }
</style>
