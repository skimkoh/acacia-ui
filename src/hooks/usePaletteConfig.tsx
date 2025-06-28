export const usePaletteConfig = () => {
	const borderRadius = {
		primary: 3,
		tag: 20,
		avatar: 20,
		panel: 5,
		card: 5,
	};

	const transition = {
		antdItem:
			"border-color 0.3s, background 0.3s, padding 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)",
	};

	const shadow = {
		card: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, 
            rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;`,
	};

	const layout = {
		xxlUtil: {
			paddingInline: 60,
			paddingBlock: 20,
			logoMaxWidth: 120,
		},
		xlUtil: {
			paddingInline: 20,
			paddingBlock: 20,
			logoMaxWidth: 100,
		},
	};

	const padding = {
		tabs: "10px 20px",
	};

	return { borderRadius, layout, transition, shadow, padding };
};
