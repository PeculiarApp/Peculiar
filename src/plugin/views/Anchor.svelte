<script>    
    import Title from '../components/general/Title.svelte'
    import ActionList from '../components/general/ActionList/ActionList.svelte'
    import Icon from '../components/general/Icon.svelte'


    import { addAnchor, anchorData, changeToAddState } from '../services/anchor';

    addAnchor({
        name: "Anchor"
    })

    addAnchor({
        name: "Anchor2"
    })

</script>

<Title name="Anchor Manager" />

<ActionList 
    items={ anchorData() }
    addItem={ changeToAddState }
/>

<Icon />