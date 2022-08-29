<script src="./A1HelloWorld.ts" lang="ts"></script>

<template>
	<div class="a1-hello-world">
		<h1>{{ titleFromStore }}</h1>
		<p>{{ i18nMessage }}</p>
		<component :is="icon"/>
	</div>
</template>
