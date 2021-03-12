<script>
    export let shownLoadingSpinner = false;
</script>

<svelte:options accessors={true}/>

{#if showLoadingSpinner}
    <slot/>
{/if}