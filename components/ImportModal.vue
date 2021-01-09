<template>
	<Modal title="Import Program" @close="cancel">
		<textarea
			v-model="textProgram"
			class="import__area"
			cols="30"
			rows="10"
			placeholder="Enter program text copied/exported from this app..."
		></textarea>

		<div class="import__buttons">
			<button class="import__button" @click="cancel">Cancel</button>
			<button class="import__button" @click="success">Import</button>
		</div>
	</Modal>
</template>

<script>
import { programFromText } from '../assets/utils';

export default {
	data() {
		return {
			textProgram: '',
		};
	},
	methods: {
		cancel() {
			this.$emit('cancel');
		},

		success() {
			if (!this.textProgram) {
				return;
			}

			this.$emit('success', programFromText(this.textProgram));
		},
	},
};
</script>

<style>
.import__area {
	width: 100%;
	margin-bottom: 16px;
	display: block;
	color: black;
}

.import__buttons {
	display: flex;
	justify-content: flex-end;
}

.import__button {
	padding: 8px 16px;
	margin-left: 16px;
	background: #1b1b1b;
	border: none;
	border-radius: 4px;
}
</style>
