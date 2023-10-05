<script>
    import { onMount } from "svelte";
    import Create from '../lib/+create.svelte';
    import Sidebar from '../lib/+sidebar.svelte';
</script>


<div class="w-screen h-screen flex bg-gradient-to-tr from-green-300 via-sky-300 to-green-200 justify-center items-center">
    <Sidebar/>
    <Create/>
</div>