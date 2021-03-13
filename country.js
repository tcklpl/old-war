class Country {
	constructor(code, name, type) {
		this.code = code;
		this.name = name;
		this.type = type;
		this.ground_borders = [];
		this.ocean_borders = [];
	}

	register_ground_border(...other_country) {
		for (var i in other_country) {
			this.ground_borders.push(other_country[i]);
		}
	}

	register_ocean_border(...ocean) {
		for (var i in ocean) {
			this.ocean_borders.push(ocean[i]);
		}
	}

	is_island() {
		return this.type == 'ground' && this.ground_borders.length == 0;
	}
}

module.exports = Country;