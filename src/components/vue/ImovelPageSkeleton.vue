<template>
	<div class="px-container py-8">
		<div class="imovel-page-skeleton flex flex-col gap-8">
			<!-- Galeria / Imagem principal -->
			<div class="skeleton-image rounded-xl w-full h-[400px] md:h-[500px]" />

			<!-- Conteúdo + Sidebar -->
			<div class="flex flex-col lg:flex-row gap-8">
				<!-- Coluna principal -->
				<div class="flex-1 flex flex-col gap-4">
					<!-- Título -->
					<div class="skeleton-text h-8 w-2/3 rounded" />
					<!-- Descrição -->
					<div class="skeleton-text h-48 w-full rounded" />
					<!-- Comodos (4 blocos) -->
					<div class="flex gap-6 mt-4">
						<div
							v-for="n in 4"
							:key="n"
							class="skeleton-image w-20 h-14 rounded-lg"
						/>
					</div>
				</div>

				<!-- Sidebar -->
				<div class="w-full lg:w-1/3 flex flex-col gap-4">
					<div class="skeleton-text h-7 w-2/3 rounded" />
					<div class="skeleton-image h-40 w-full rounded-xl" />
					<div class="skeleton-image h-10 w-full rounded-full" />
					<div class="skeleton-image h-10 w-full rounded-full" />
				</div>
			</div>

			<!-- Mapa -->
			<div class="skeleton-image rounded-xl w-full h-96" />
		</div>
	</div>
</template>

<style scoped>
	.skeleton-image,
	.skeleton-text {
		background: linear-gradient(90deg, #f2f2f2 25%, #e0e0e0 50%, #f2f2f2 75%);
		background-size: 200% 100%;
		animation: shimmer 1.2s infinite;
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
