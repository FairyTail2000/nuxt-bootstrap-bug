export function DDNToBinary(ddn: string|string[]): Array<string> {
	const octects: Array<string> = [];
	let inner;
	if (typeof ddn === "string") {
		inner = ddn.split(".")
	} else {
		inner = ddn;
	}
	for (const octet of inner) {
		let num = (parseInt(octet) >>> 0).toString(2);
		num = "0".repeat(8 - num.length) + num;
		octects.push(num);
	}
	return octects;
}

export function binaryToDDN(binary: string | Array<string>): Array<number> {
	let arr: Array<string>;
	const ret: Array<number> = [];
	if (typeof binary === "string") {
		if (binary.includes(" ")) {
			arr = binary.split(" ");
		} else if (binary.includes(".")) {
			arr = binary.split(".");
		} else {
			const temp = binary.match(/.{1,8}/g);
			const temp2: Array<string> = [];
			temp?.forEach((thing) => {
				temp2.push(thing);
			});
			arr = temp2
		}

	} else {
		arr = binary;
	}

	for (const chunk of arr) {
		ret.push(parseInt(chunk, 2));
	}
	return ret;
}

export function getHighestAddress(subnet: number, ip: string): Array<number> {
	const availibleBits = 32 - subnet;
	const bin = DDNToBinary(ip).join("");
	return binaryToDDN(bin.substr(0, subnet) + "1".repeat(availibleBits));
}

export function getLowestAddress(subnet: number, ip: string): Array<number> {
	const availibleBits = 32 - subnet;
	const bin = DDNToBinary(ip).join("");
	return binaryToDDN(bin.substr(0, subnet) + "0".repeat(availibleBits));
}

export function getHighestUsableAddress(subnet: number, ip: string): Array<number> {
	const availibleBits = 32 - subnet;
	const bin = DDNToBinary(ip).join("");
	const res = binaryToDDN(bin.substr(0, subnet) + "1".repeat(availibleBits));
	res[3]--;
	return res;
}

export function getLowestUsableAddress(subnet: number, ip: string): Array<number> {
	const availibleBits = 32 - subnet;
	const bin = DDNToBinary(ip).join("");
	const res = binaryToDDN(bin.substr(0, subnet) + "0".repeat(availibleBits));
	res[3]++;
	return res;
}

export function suffixToBinary(suffix: number): string {
	return "1".repeat(suffix) + "0".repeat(32 - suffix);
}