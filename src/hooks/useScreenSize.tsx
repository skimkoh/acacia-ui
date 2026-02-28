import { useState, useEffect } from "react";

export const useScreenSize = (debounceTime = 200) => {
	let timeout: ReturnType<typeof setTimeout> | null;

	const [screenSize, setScreenSize] = useState({});

	useEffect(() => {
		const handleResize = () => {
			if (timeout) {
				clearTimeout(timeout);
			}

			timeout = setTimeout(() => {
				if (globalThis.window !== undefined) {
					setScreenSize({
						width: globalThis.innerWidth,
						height: globalThis.innerHeight,
					});
				}
			}, debounceTime);
		};

		if (globalThis.window !== undefined) {
			globalThis.addEventListener("resize", handleResize);
		}

		// Clean up the event listener when the component unmounts
		return () => {
			if (globalThis.window !== undefined) {
				globalThis.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	return screenSize;
};

export default useScreenSize;
