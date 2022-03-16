<script>
  import TailwindCss from "./TailwindCSS.svelte";
  import Magic8 from "./lib/Magic8.svelte";
</script>

<main>
  <TailwindCss />
  <Magic8 />
</main>

<style>
  :root {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      "Liberation Mono", "Courier New", monospace;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
