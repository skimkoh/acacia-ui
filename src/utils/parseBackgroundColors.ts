export type ParsedColor =
	| { format: "hex"; value: string }
	| { format: "rgb"; value: string }
	| { format: "named"; value: string };

export interface ParsedBackgroundColors {
	colors: ParsedColor[];
}

function classifyColor(value: string): ParsedColor["format"] {
	if (value.startsWith("#")) return "hex";
	if (value.startsWith("rgb")) return "rgb";
	return "named";
}

const HEX_REGEX = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;

const RGB_REGEX = /rgba?\(\s*[\d\s.,%]+\)/gi;

// You should limit named colors to real CSS names
const NAMED_COLOR_REGEX =
	/\b(aliceblue|antiquewhite|aqua|black|blue|gray|grey|green|orange|red|white|yellow)\b/gi;

export function parseBackgroundColors(css: string): ParsedBackgroundColors {
	const results: ParsedColor[] = [];

	const push = (matches: RegExpMatchArray | null) => {
		matches?.forEach((value) => {
			results.push({
				format: classifyColor(value),
				value,
			});
		});
	};

	push(css.match(HEX_REGEX));
	push(css.match(RGB_REGEX));
	push(css.match(NAMED_COLOR_REGEX));

	return {
		colors: results,
	};
}
