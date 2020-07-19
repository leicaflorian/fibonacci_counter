function trackPerformance(method, ...params) {
	const start = performance.now()
	const methodResult = method(...params)
	const end = performance.now()

	return {
		time: end - start,
		result: methodResult
	}
}

export {trackPerformance}