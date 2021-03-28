enum CountryType {
	LAND, SEA
}

class Country {
	code: string;
	name: string;
	type: CountryType;
	ground_borders: Array<Country>;
	ocean_borders: Array<Country>;

	constructor(code: string, name: string, type: CountryType) {
		this.code = code;
		this.name = name;
		this.type = type;
		this.ground_borders = new Array<Country>();
		this.ocean_borders = new Array<Country>();
	}

	register_ground_border(...other_country: Country[]): void {
		other_country.forEach((other) => {
			this.ground_borders.push(other);
		});
	}

	register_ocean_border(...ocean: Country[]): void {
		ocean.forEach((other) => {
			this.ocean_borders.push(other);
		});
	}

	is_island(): boolean {
		return this.type == CountryType.LAND && this.ground_borders.length == 0;
	}
}

export {Country, CountryType}