// const ButtonBase = {
//   border: {
//     radius: { $value: "{border.radius.md.value}" },
//   },
//   cursor: { $value: "{cursor.action.value}" },
//   height: { $value: "{size.touch-target.value}" },
//   text: {
//     size: { $value: "{typography.lg.body.size.value}" },
//     weight: { $value: "{font.weight.medium.value}" },
//   },
//   padding: {
//     left: { $value: "{spacing.element.md.value}" },
//     right: { $value: "{spacing.element.md.value}" },
//   },
//   icon: {
//     height: { $value: "{size.xl.value}" },
//     width: { $value: "{size.xl.value}" },
//     margin: { $value: "{spacing.element.md.value}" },
//   },
//   "label-max-characters": {
//     $value: 28,
//     attributes: { category: "decision" },
//   },
//   focus: {
//     ring: {
//       color: {
//         $value: "{focus.ring.color.value}",
//         dark: { $value: "{focus.ring.color.dark.value}" },
//       },
//       offset: { $value: "{focus.ring.offset.value}" },
//       radius: { $value: "{border.radius.lg.value}" },
//       style: { $value: "{focus.ring.style.value}" },
//       width: { $value: "{focus.ring.width.value}" },
//     },
//   },
//   "disabled-cursor": { $value: "{cursor.disabled.value}" },
//   group: {
//     margin: {
//       top: { $value: "{spacing.element.xxl.value}" },
//       bottom: { $value: "{spacing.element.xxl.value}" },
//     },
//     button: {
//       margin: {
//         right: { $value: "{spacing.element.xl.value}" },
//         bottom: { $value: "{spacing.element.md.value}" },
//       },
//     },
//   },
// };

// const primaryButton = {
//   primary: {
//     "background-color": {
//       $value: "{color.primary.value}",
//       dark: { $value: "{color.primary.dark.value}" },
//     },
//     border: {
//       color: { $value: "transparent", dark: { $value: "transparent" } },
//       style: { $value: "solid" },
//       width: { $value: "{border.width.thin.value}" },
//     },
//     "icon-fill": {
//       $value: "{color.white.value}",
//       dark: { $value: "{color.white.value}" },
//     },
//     "text-color": {
//       $value: "{color.white.value}",
//       dark: { $value: "{color.white.value}" },
//     },
//     // primary btn states
//     active: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.blue-30.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//     },
//     disabled: {
//       "background-color": {
//         $value: "{color.gray-20.value}",
//         dark: { $value: "{color.dark-blue-10.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//     },
//     focus: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.blue-30.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//     },
//     hover: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.blue-30.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//     },
//   },
// };

// const secondaryButton = {
//   secondary: {
//     "background-color": {
//       $value: "transparent",
//       dark: { $value: "transparent" },
//     },
//     border: {
//       color: {
//         $value: "{color.primary.value}",
//         dark: { $value: "{border.color.dark.value}" },
//       },
//       style: { $value: "solid" },
//       width: { $value: "{border.width.thin.value}" },
//     },
//     "icon-fill": {
//       $value: "{color.primary.value}",
//       dark: { $value: "{color.white.value}" },
//     },
//     "text-color": {
//       $value: "{color.primary.value}",
//       dark: { $value: "{color.text.dark.value}" },
//     },
//     // secondary btn states
//     active: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//     },
//     disabled: {
//       background: {
//         color: {
//           $value: "transparent",
//           dark: { $value: "transparent" },
//         },
//       },
//       border: {
//         color: {
//           $value: "{color.disabled.value}",
//           dark: { $value: "{color.disabled.dark.value}" },
//         },
//       },
//       "icon-fill": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//       "text-color": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//     },
//     focus: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//     },
//     hover: {
//       "background-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "text-color": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//       "icon-fill": {
//         $value: "{color.white.value}",
//         dark: { $value: "{color.dark-blue-20.value}" },
//       },
//     },
//   },
// };

// const borderlessButton = {
//   borderless: {
//     "background-color": {
//       $value: "transparent",
//       dark: { $value: "transparent" },
//     },
//     border: {
//       color: { $value: "transparent", dark: { $value: "transparent" } },
//       style: { $value: "solid" },
//       width: { $value: "{border.width.thin.value}" },
//     },
//     icon: {
//       fill: {
//         $value: "{color.primary.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//     },
//     "text-color": {
//       $value: "{color.primary.value}",
//       dark: { $value: "{color.text.dark.value}" },
//     },
//     // borderless btn states
//     active: {
//       "background-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "icon-fill": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.gray-25.value}" },
//       },
//       "text-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.gray-25.value}" },
//       },
//     },
//     disabled: {
//       "background-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "icon-fill": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//       "text-color": {
//         $value: "{color.disabled.value}",
//         dark: { $value: "{color.disabled.dark.value}" },
//       },
//     },
//     focus: {
//       "background-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "icon-fill": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//       "text-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.white.value}" },
//       },
//     },
//     hover: {
//       "background-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "border-color": {
//         $value: "transparent",
//         dark: { $value: "transparent" },
//       },
//       "icon-fill": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.gray-25.value}" },
//       },
//       "text-color": {
//         $value: "{color.blue-30.value}",
//         dark: { $value: "{color.gray-25.value}" },
//       },
//     },
//   },
// };

// const Button = {
//   button: {
//     ...ButtonBase,
//     ...primaryButton,
//     ...secondaryButton,
//     ...borderlessButton,
//   },
// };

// export default Button;
