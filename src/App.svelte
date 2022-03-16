<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import Magic8 from "./lib/Magic8.svelte";
</script>

<main>
  <TailwindCss />
  <div class="wrapper">
    <div class="intro">
      <h2>MAGIC 8 BALL</h2>
      <p>Do you ever feel hesitated, lost or can't decide?</p>
      <p>Let's the magic 8 ball tell you what to do!</p>
      <button class="bn632-hover bn20"> SHAKE </button>
    </div>
    <Magic8 />
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
  }

  .wrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .intro {
    width: 50vw;
    height: 100vh;
    padding: 10rem;
  }

  .intro h2 {
    font-size: 3.8rem;
    color: aliceblue;
    font-weight: 600;
  }

  .intro p {
    color: aliceblue;
    line-height: 200%;
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
</style>
