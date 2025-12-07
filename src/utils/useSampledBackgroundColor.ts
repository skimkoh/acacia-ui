import { useEffect, useState } from "react";

export function useSampledBackgroundColor(
	targetRef: React.RefObject<HTMLElement>,
) {
	const [color, setColor] = useState<string>("rgb(255,255,255)");

	useEffect(() => {
		if (!targetRef.current) return;

		const update = () => {
			const target = targetRef.current;
			const parent = target.parentElement;

			// Create a tiny probe element
			const probe = document.createElement("div");
			probe.style.position = "absolute";
			probe.style.pointerEvents = "none";
			probe.style.width = "1px";
			probe.style.height = "1px";
			probe.style.opacity = "0";

			// Aim the probe at the *vertical center* of the target
			const box = target.getBoundingClientRect();
			const parentBox = parent.getBoundingClientRect();

			probe.style.left = `${box.left - parentBox.left}px`;
			probe.style.top = `${box.top - parentBox.top + box.height / 2}px`;

			parent.appendChild(probe);

			const computed = getComputedStyle(probe).backgroundColor;
			setColor(computed);

			probe.remove();
		};

		update();

		window.addEventListener("scroll", update);
		window.addEventListener("resize", update);

		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, []);

	return color;
}
