import interStyles from "@fontsource-variable/inter/index.css?inline";
import robotoFlexStyles from "@fontsource-variable/roboto-flex/index.css?inline";

export function injectFontStyles(nonce?: string) {
	if (typeof document === "undefined") {
		return;
	}

	let fontStyles = document.getElementById(
		"acacia-ui-fonts",
	) as HTMLStyleElement | null;
	if (!fontStyles) {
		fontStyles = document.createElement("style");
		fontStyles.id = "acacia-ui-fonts";
		if (nonce) {
			fontStyles.nonce = nonce;
		}
		fontStyles.textContent = `${interStyles}\n${robotoFlexStyles}`;
		document.head.append(fontStyles);
	} else if (nonce) {
		fontStyles.nonce = nonce;
	}
}
