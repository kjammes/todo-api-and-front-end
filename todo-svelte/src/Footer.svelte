<script lang="ts">
    const currentYear = new Date().getFullYear()
</script>

<style>
    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: #333;
        color: white;
        text-align: center;
        padding: 3rem 2rem;
    }
</style>

<footer>
  <div class="container">
    <p>Copyright © {currentYear} Task Tracker</p>
  </div>
</footer>
    