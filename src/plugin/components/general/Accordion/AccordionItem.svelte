<script>
    export let name = "Undefined"
	export let bold = false

	let tabID = "accordion-" + name
	let tabFont = "font-weight: normal;"
	if (bold) 
		tabFont = "font-weight: bold;";
</script>

<style>
	input.tab-input {
		position: absolute;
		opacity: 0;
		z-index: -1;
	}
	.tab {
		width: 100%;
		overflow: hidden;
	}
	.tab-label {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		padding-left: 4px;
	}
	.tab-label:hover {
		background: var(--background-modifier-form-field-highlighted);
	}
	.tab-label::after {
		content: "\276F";
		width: 1em;
		height: 1em;
		text-align: center;
		transition: all 0.35s;
		padding-left: 16px; 
		padding-right: 8px; 
	}
	.tab-content {
		max-height: 0;
		transition: all 0.35s;
		border-left: 2px solid var(--text-faint);
		margin-left: 5px;
		margin-right: 10px;
		margin-top: 2px;
		padding-left: 7px;
	}
	input:checked + .tab-label::after {
		transform: translateX(8px) rotate(90deg);
	}
	input:checked ~ .tab-content {
		max-height: 100vh;
	}
</style>

<div class="tab">
    <input type="checkbox" id={ tabID } class="tab-input">
    <label class="tab-label" for={ tabID } style="{ tabFont }">{ name }</label>
    <div class="tab-content">
        <slot>
			<p>Tab Content</p>
		</slot>
    </div>
</div>