const arrayMadness = (a, b) => a.reduce((sum, item) => sum + Math.pow(item, 2), 0) > b.reduce((sum, item) => sum + Math.pow(item, 3), 0)
