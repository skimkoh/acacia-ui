import interStyles from "@fontsource-variable/inter/index.css?inline";
import robotoFlexStyles from "@fontsource-variable/roboto-flex/index.css?inline";

if (typeof document !== "undefined" && !document.getElementById("acacia-ui-fonts")) {
	const fontStyles = document.createElement("style");
	fontStyles.id = "acacia-ui-fonts";
	fontStyles.textContent = `${interStyles}\n${robotoFlexStyles}`;
	document.head.append(fontStyles);
}
