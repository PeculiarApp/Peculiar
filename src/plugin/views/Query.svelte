<script>
    import Accordion from '../components/general/Accordion/Accordion.svelte'  
    import AccordionItem from '../components/general/Accordion/AccordionItem.svelte'
    import Title from '../components/general/Title.svelte' 
</script>

<style>
    p {
        margin: 0px;
        padding-left: 4px;
    }
</style>

<Title name="Query Manager" />

<Accordion>
    <AccordionItem name="Tables" bold={true}>
        <p>Table Content</p>
        <Accordion>
            <AccordionItem name="Embedded">
                <p>Hello</p>
            </AccordionItem>
        </Accordion>
        <p>Bottom</p>
    </AccordionItem>
    <AccordionItem name="Lists" bold={true}>
        <p>List Content</p>
    </AccordionItem>
    <AccordionItem name="Queries" bold={true}>
        <p>Query Content</p>
    </AccordionItem>
</Accordion>