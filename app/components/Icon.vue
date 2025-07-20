<script setup>
const { src, class: extraClass } = defineProps(["src", "class"]),
  svgAttributes = ref({}),
  svgContent = ref("")

onMounted(async () => {
  const responseText = await fetch(src)
    .then((res) => res.text())
    .catch(() => null);
  if (!responseText) return;

  const doc = new DOMParser().parseFromString(responseText, "image/svg+xml");
  const svgElement = doc.querySelector("svg");
  if (!svgElement) return;

  svgAttributes.value = Object.fromEntries(
    [...svgElement.attributes].map((attr) => [attr.name, attr.value]),
  );
  svgAttributes.value.class = [svgAttributes.value.class, extraClass]
    .filter(Boolean)
    .join(" ");
  svgContent.value = svgElement.innerHTML;
});
</script>

<template>
  <svg v-bind="svgAttributes" v-html="svgContent" />
</template>
