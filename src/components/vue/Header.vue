<template>
	<header
		class="top-0 z-10 flex w-full justify-center overflow-hidden"
		:class="[isHome ? 'absolute bg-transparent' : 'relative bg-primary-500']"
	>
		<div class="flex flex-col w-full h-full items-center z-20 justify-between px-container py-6">
			<slot name="menuright" />
		</div>
	</header>
</template>

<script setup>
	const props = defineProps({
		isHome: {
			type: Boolean,
			default: false
		}
	})
</script>
