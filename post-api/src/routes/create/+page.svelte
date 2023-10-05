<script>
    import './../../app.css';
    import { onMount } from 'svelte';

    //
    let data = '';
    let inputTitle= ''; let inputContent = '';
    let n = -1;

    // 
    let foo = 'baz'
	let bar = 'qux'
	let result = null

    onMount(() => {
        console.log('onmount was executed :)')
    })

    async function storeData(){
        if( inputTitle !== '' && inputContent!== ''){
            n+=1;

            const newpost = {
                id: n,
                title: inputTitle,
                content: inputContent
            }

            try {
                const data = (await fetch('http://localhost:3000/post', {
                method: "POST",
                body: JSON.stringify(newpost),
                headers: {
                    "content-type": "application/json"
                }
                })).json();

                inputTitle=''; inputContent='';
            } catch (error) {
                console.log(error);
            }
        }
    }
</script>


<div class="bg-indigo-400 flex flex-col w-[600px] h-[400px] justify-center items-center">
    <div class="flex w-[200px] h-[200px]">
        <form on:submit="{storeData}">
            <div class="flex">
                <input type="text" class="rounded-md" bind:value={inputTitle}>
            </div>
            <div class="mt-4 flex">
                <input type="text" class="rounded-md" bind:value={inputContent}>
            </div>
            <div class="flex justify-center">
                <button class="bg-indigo-500 rounded-full px-3 mt-4" type="submit">save</button>
            </div>
        </form>
    </div>
</div>
