<script>
    export let id;
    export let imgPath;
    export let name;
</script>
<div>
    <td>  <a href={`/about/${id}`}><img src={imgPath} alt="no png"></a> <p>{name}</p> <p>{id}</p></td>
</div>