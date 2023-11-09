<script>
    export let data;
    console.log(data);
    $: {data}
</script>
<h1>  {data.name}  </h1>