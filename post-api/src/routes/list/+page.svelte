<script>
    import './../../app.css';
    import { onMount } from 'svelte';

    // typeof Post {
    //     id:Number;
    //     title: String;
    //     content: String;
    // }

    let apiData = {id:0, title:String, content: String};
    let dataList;
    onMount(() => {
        // console.log('onmount was executed :)')

        fetch("http://localhost:3000/post")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            dataList = JSON.stringify(data);
            // console.log(apiData);
        }).catch(error => {
            console.log(error);
            return [];
        });
    })


    // [{"_id":"651ee55359646a73dbb617d1","id":"1","title":"item","content":"description","__v":0},{"_id":"651ee56659646a73dbb617d4","id":"2","title":"object","content":"descriptionnnnnnnnnnnnnnnnnnnnnn","__v":0},{"_id":"651f0fade7c1279254dae071","id":"2","title":"item fetch test","content":"descriptio nof teh fetch ","__v":0},{"_id":"651f1371e7c1279254dae07f","id":"0","title":"test","content":"test","__v":0},{"_id":"651f1386e7c1279254dae082","id":"1","title":"abcd","content":"abcd","__v":0}]

</script>

<div class="bg-indigo-400 flex w-[600px] h-[400px]">
    <div class="">
        {dataList}
    </div>
</div>
