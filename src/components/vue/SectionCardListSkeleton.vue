<template>
	<div
		class="card-skeleton rounded-xl p-4 flex flex-col gap-4"
		v-for="index in limit"
		:key="index"
	>
		<div class="skeleton-image rounded-2xl"></div>
		<div>
			<div class="skeleton-text rounded"></div>
			<div class="skeleton-text small rounded"></div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		limit: {
			type: Number,
			default: () => 6
		}
	})
</script>

<style scoped>
	.card-skeleton {
		border: 1px solid #eee;
	}

	.skeleton-image,
	.skeleton-text {
		background: linear-gradient(
			90deg,
			#f2f2f2 25%,
			#e0e0e0 50%,
			#f2f2f2 75%
		);
		background-size: 200% 100%;
		animation: shimmer 1.2s infinite;
	}

	.skeleton-image {
		width: 100%;
		height: 205px;
	}

	.skeleton-text {
		width: 80%;
		height: 16px;
		margin-bottom: 5px;
	}

	.skeleton-text.small {
		width: 60%;
	}

	@keyframes shimmer {
		0% {
			background-position: -200% 0;
		}
		100% {
			background-position: 200% 0;
		}	
	}
</style>
