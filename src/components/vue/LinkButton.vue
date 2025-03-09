<template>
  <a
    :href="href"
    :title="label"
    :target="target"
    rel="noopener noreferrer"
    class="p-button p-button-component w-fit no-underline justify-center gap-2 px-4"
    :class="[
			{ 'p-button-rounded': rounded },
      { 'p-button-outlined hover:surface-hover': outlined },
      { 'p-button-text hover:surface-hover': text },
      { 'p-button-secondary': severity === 'secondary' },
      { 'p-button-info': severity === 'info' },
      { 'p-button-sm': size === 'small' },
      { 'flex flex-row-reverse': iconPos === 'left' },
      { 'p-button-icon-only': iconPos === 'center' },
      { 'md:justify-start': iconPos !== 'center' },
      { 'p-button-link': textLink }
    ]"
  >
    <template v-if="label">
      {{ capitalizeLetter(String(label).trim()) }}
    </template>

    <span
      v-if="iconPos"
      :style="customIconStyle"
      :class="`pi p-button-icon ${icon}`"
      data-pc-section="icon"
    >
		</span>
  </a>
</template>

<script setup>
  defineProps({
    icon: {
      type: String
    },
    customIconStyle: {
      type: String
    },
    iconPos: {
      type: String,
      options: ['left', 'right', 'center']
    },
    label: {
      type: String
    },
    href: {
      type: String,
      required: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    severity: {
      type: String,
      options: ['secondary', 'info']
    },
    target: {
      type: String,
      options: ['_blank', '_self'],
      default: '_self',
    },
    size: {
      type: String,
      default: 'medium',
      options: ['small', 'medium']
    },
    textLink: {
      type: Boolean
    },
		rounded: {
			type: Boolean
		}
  })

  function capitalizeLetter(word) {
    return word.replace(word[0], word.charAt(0).toUpperCase())
  }
</script>
