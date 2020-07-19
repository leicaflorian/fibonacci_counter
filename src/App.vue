<template>
	<main id="app" class="container">
		<h1>Fibonacci calculator</h1>

		<form class="card" @submit.prevent="calculateSeries">

			<div class="card-body">
				<div class="row justify-content-center">
					<div class="col-sm-4 col-md-2">
						<div class="form-group">
							<label>Max Numbers</label>
							<input type="number" class="form-control text-center" v-model="maxNumbers">
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-sm-4 text-left">
						<legend>Recursive method</legend>

						<div class="form-group">
							<label>Time</label>
							<div type="text" class="form-control-plaintext text-left" v-text="results.recursive.time + ' ms'"></div>
						</div>

						<div class="form-group">
							<label>Numbers</label>
							<textarea type="text" class="form-control text-left" readonly rows="5"
												v-text="results.recursive.numbers.join(', ')"></textarea>
						</div>
					</div>
					<div class="col-sm-4 text-left">
						<legend>For i method</legend>

						<div class="form-group">
							<label>Time</label>
							<div type="text" class="form-control-plaintext text-left" v-text="results.for.time + ' ms'"></div>
						</div>

						<div class="form-group">
							<label>Numbers</label>
							<textarea type="text" class="form-control text-left" readonly rows="5"
												v-text="results.for.numbers.join(', ')"></textarea>
						</div>
					</div>

					<div class="col-sm-4 text-left">
						<legend>Map method</legend>

						<div class="form-group">
							<label>Time</label>
							<div type="text" class="form-control-plaintext text-left" v-text="results.map.time + ' ms'"></div>
						</div>

						<div class="form-group">
							<label>Numbers</label>
							<textarea type="text" class="form-control text-left" readonly rows="5"
												v-text="results.map.numbers.join(', ')"></textarea>
						</div>
					</div>
				</div>

				<button class="btn btn-primary" type="submit">Calculate</button>

			</div>

		</form>

	</main>
</template>

<script>
	import {trackPerformance} from "./Performance"
	import {fibonacciSeriesRecursive, fibonacciForILoop, fibonacciMapLoop} from "./Fibonacci"

	export default {
		name: 'App',
		data() {
			return {
				maxNumbers: 1000,
				results: {
					recursive: {
						time: 0,
						numbers: []
					},
					for: {
						time: 0,
						numbers: []
					},
					map: {
						time: 0,
						numbers: []
					}
				}
			}
		},
		methods: {
			calculateSeries() {
				const resRecursive = trackPerformance(fibonacciSeriesRecursive, this.maxNumbers)
				const resFor = trackPerformance(fibonacciForILoop, this.maxNumbers)
				const resMap = trackPerformance(fibonacciMapLoop, this.maxNumbers)


				this.results.recursive = {
					time: resRecursive.time,
					numbers: resRecursive.result
				};

				this.results.for = {
					time: resFor.time,
					numbers: resFor.result
				}

				this.results.map = {
					time: resMap.time,
					numbers: resMap.result
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "~bootstrap/scss/bootstrap";

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
