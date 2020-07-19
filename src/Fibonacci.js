function fibonacciSeriesRecursive(n) {
	if (n === 1) {
		return [0, 1];
	} else {
		const series = fibonacciSeriesRecursive(n - 1);

		series.push(series[series.length - 1] + series[series.length - 2]);

		return series;
	}
}

function fibonacciForILoop(maxNum) {
	const series = [];

	for (let i = 0; i <= +maxNum; i++) {
		if (i < 2) {
			series[i] = i
		} else {
			series[i] = series[i - 2] + series[i - 1]
		}
	}

	return series
}

function fibonacciMapLoop(maxNum) {
	let series = [...Array(+maxNum + 1)];


	series.map(function (entry, i, arr) {
		if (i < 2) {
			entry = i
		} else {
			entry = arr[i - 2] + arr[i - 1]
		}

		arr[i] = entry
	})

	return series
}

export {fibonacciSeriesRecursive, fibonacciForILoop, fibonacciMapLoop}