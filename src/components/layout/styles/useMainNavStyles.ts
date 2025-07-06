import { createStyles } from "antd-style";

export const useMainNavStyles = createStyles(({ css, prefixCls }) => {
	const commonMenu = css`
        &.${prefixCls}-menu {
            border-bottom: none;
            background: transparent;
        }

         &.${prefixCls}-menu > .${prefixCls}-menu-item {
            color: #E3E3E3;
            font-weight: 700;
         }

        .${prefixCls}-menu-submenu-title {
            color: #E3E3E3;
            font-weight: 700;
        }

        
        &.${prefixCls}-menu > .${prefixCls}-menu-item-selected, &.${prefixCls}-menu > .${prefixCls}-menu-item-selected:hover {
         color: #C7DEAF;
         background: rgba(199,234,232,0.2);
         border-radius: 3px;
         font-weight: 700;
        }

        &.${prefixCls}-menu > .${prefixCls}-menu-item-selected:hover {
         background: rgba(199,234,232,0.3);
        }
         
        /* for submenu */

         &.${prefixCls}-menu > .${prefixCls}-menu-submenu::after, 
        &.${prefixCls}-menu > .${prefixCls}-menu-item::after 
         {
            height: 2px; /* Border thickness */
            content: "";
            background-color: white; /* Border color */
            transform: scaleX(0); /* Initially hidden */
            transform-origin: left;
            border-bottom-color: white !important;
            transition: transform 0.2s ease-in-out; /* Smooth animation */
        }

     
        &.${prefixCls}-menu > .${prefixCls}-menu-submenu:hover::after, 
        &.${prefixCls}-menu > .${prefixCls}-menu-submenu-open::after,
        &.${prefixCls}-menu > .${prefixCls}-menu-item:hover:not(.${prefixCls}-menu-item-selected)::after,
        &.${prefixCls}-menu > .${prefixCls}-menu-item.${prefixCls}-menu-item-active:not(.${prefixCls}-menu-item-selected)::after

         {
            border-bottom-color: white;
            transform: scaleX(1); /* Extend line from left to right */
        }

        &.${prefixCls}-menu > .${prefixCls}-menu-submenu,
        &.${prefixCls}-menu > .${prefixCls}-menu-item-active
        {
            position: relative;
            overflow: hidden;
        }

        &.${prefixCls}-menu > .${prefixCls}-menu-item-selected::after, 
        &.${prefixCls}-menu > .${prefixCls}-menu-item-selected:hover::after, 
        &.${prefixCls}-menu-horizontal > .${prefixCls}-menu-item:hover::after, 
        &.${prefixCls}-menu > .${prefixCls}-menu-item-active::after

        {
         border-bottom-color: transparent;
         border-bottom-width: 0;
        }

        &.${prefixCls}-menu-horizontal > .${prefixCls}-menu-item:hover::after {
        }
        `;

	return commonMenu;
});
