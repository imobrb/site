<template>
	<div class="flex flex-col gap-4">
		<h3 class="text-heading-2 text-left">{{ title }}</h3>
		<div class="flex flex-col gap-1 items-start">
			<Button
				v-for="link in links"
				:key="link.href"
				as="a"
				:href="link.href"
				:text="true"
				:label="link.label"
				:icon="link.icon"
				:target="link.target"
				class="text-white"
				size="small"
				:aria-label="link.label"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'

interface NavigationLink {
	href: string
	label: string
	icon: string
	target?: string
}

interface Props {
	title: string
	links: NavigationLink[]
}

defineProps<Props>()
</script> 