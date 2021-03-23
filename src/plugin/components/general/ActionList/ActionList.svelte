<script>
    export let items = []
    export let addAction = () => {}
</script>

<style>
button.add-button {
    margin: 0 auto;
    display: block;
}

div.list-buttons {
    margin-left: auto;
}

button.list-button {
    margin: 0px;
    padding: 4px 2px;
}


li.action-list-item {
    display: flex;
    padding: 0px;
    justify-content: start;
}

ul.action-list {
    padding: 0px;
    margin: 0px;
    margin-left: 5px;
}
</style>

<ul class="action-list">
    {#each items as item}
        <li class="action-list-item">
            { item.name }
            <div class="list-buttons">
                <button class="list-button" on:click={ item.modify }>
                    modify
                </button>
                <button class="list-button" on:click={ item.remove }>
                    Remove
                </button>
            </div>
        </li>
    {/each}
</ul>

<button class="add-button" on:click={ addAction }>+</button>