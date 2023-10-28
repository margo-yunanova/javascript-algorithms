function find(object, path) {
	const keys = path.split(".");
	let data = object;
	for (const key of keys) {
		if (data === undefined) break;
    data = Object.hasOwn(data, key) ? data[key] : undefined;
	}
	return data;
}
