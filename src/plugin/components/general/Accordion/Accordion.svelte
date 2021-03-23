<script>
	import AccordionItem from './AccordionItem.svelte'
</script>

<style>
	.tabs {
		border-radius: 8px;
		overflow: hidden;
	}
</style>


<div class="tabs" >
	<slot>
		<AccordionItem></AccordionItem>
	</slot>
</div>