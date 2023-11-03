<template>
	<div>
		<h2>InputValue</h2>
		<input
			type="text"
			:value="InputValue"
			@input="event => (InputValue = event.target.value)"
		/>
		<input type="text" v-model.lazy="InputValue" />
		<input type="text" v-model.number="InputValue" />
		<input type="text" v-model.trim="InputValue" />
		<div>{{ InputValue }}</div>
		<div>{{ typeof InputValue }}</div>
		<hr />
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>
		<hr />
		<lable for="checkbox">{{ checkboxValue }}</lable>
		<input type="checkbox" id="checkbox" v-model="checkboxValue" />
		<hr />
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<label>
			<input type="radio" name="type" value="B" v-model="radioValue" />
			B형
		</label>
		<div>
			{{ radioValue }}
		</div>
		<hr />
		<select v-model="selectValue">
			<option value="html">html</option>
			<option value="css">css</option>
			<option value="javascript">javascript</option>
			<option value="vue">vue</option>
		</select>
		<div>
			{{ selectValue }}
		</div>
		<hr />
		<h3>checkbox values</h3>
		<label>
			<input type="checkbox" value="html" v-model="checkboxVlaues" />
			html
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxVlaues" />
			css
		</label>
		<label>
			<input
				type="checkbox"
				value="javascript"
				v-model="checkboxVlaues"
			/>
			javascript
		</label>
		<div>
			{{ checkboxVlaues }}
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const InputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref(true);
		const radioValue = ref('O');
		const selectValue = ref('html');
		const checkboxVlaues = ref([]);
		return {
			InputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxVlaues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
